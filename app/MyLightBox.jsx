"use client";
import { useEffect } from "react";

const MyLightBox = ({ photos, nombre }) => {
  useEffect(() => {
    const init = async () => {
      const { Lightbox, initTE } = await import("tw-elements");
      initTE({ Lightbox });
    };
    init();
  }, []);

  console.log({ nombre });

  let photosToDisplay = nombre ? photos.slice(0, nombre) : photos; // Sélectionne les `nombre` premiers éléments si `nombre` est défini

  return (
    <div className="flex items-center justify-center mx-auto">
      <div
        data-te-lightbox-init
        className="flex flex-col lg:flex-row flex-wrap lg:space-x-2 lg:space-y-2 justify-center"
      >
        {photosToDisplay.map((photo, index) => (
          <div key={index} className="flex mx-auto w-full h-auto lg:w-1/5">
            <img
              src={`images/${photo.url}`}
              data-te-img={`images/${photo.url}`}
              alt={photo.alt}
              className={`mb-5 w-72 h-72 object-cover object-center cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLightBox;
