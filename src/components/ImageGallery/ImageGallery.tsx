import Image from "next/image";
import React, { useState } from "react";

const ImageGallery = ({ images }: { images: string[] }) => {
  const [mainImage, setMainImage] = useState<string>(images[0]);

  const handleChange = (imgPath: string) => {
    setMainImage(imgPath);
  };

  return (
    <div className="w-full p-4 flex flex-col gap-8 rounded-lg overflow-hidden">
      <div className="flex max-h-[500px] items-center justify-center">
        <Image
          src={mainImage}
          className="w-auto h-auto"
          alt="img"
          height={800}
          width={800}
        />
      </div>

      <div className="flex gap-4 flex-wrap">
        {images.map((image) => (
          <div
            key={image}
            onClick={() => handleChange(image)}
            className={`rounded-lg h-20 w-20 cursor-pointer border-2 border-gray-400 overflow-hidden shadow-lg ${
              mainImage === image ? "outline-gray-400 outline-2 shadow" : ""
            }`}
          >
            <Image src={image} alt="img" height={80} width={80} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
