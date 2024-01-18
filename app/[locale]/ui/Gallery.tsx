"use client";
import { useEffect } from "react";
import "photoswipe/style.css";
import Button from "@/ui/Button";
import editionsInfo from "@/data/meta-gallery.json";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import Masonry from "react-masonry-css";
import Image from "next/image";

type Props = {
  edition: string;
  title: string;
  subTitle: string;
  buttonText: string;
};

export default function Gallery({
  edition,
  title,
  subTitle,
  buttonText,
}: Props) {
  const offset = 10;
  const edictionIndex = Number(edition) - 1;
  const photos = editionsInfo[edictionIndex].slice(0, offset);

  useEffect(() => {
    let lightbox: any = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <>
      <section className="max-w-8xl mx-auto py-20 px-20">
        <h2 className="mx-auto mb-8 text-center text-3xl lg:text-6xl font-semibold tracking-wide">
          {title}
        </h2>
        <p className="text-center text-2xl">{subTitle}</p>
        <Masonry
          breakpointCols={{ default: 4, 800: 2 }}
          className="my-masonry-grid mb-6"
          columnClassName="my-masonry-grid_column"
          id="gallery"
        >
          {photos.map(({ height, width }, i) => (
            <a
              key={i}
              className="group rounded-xl transition-all relative"
              href={`/archivo-page/${edition}/gallery/img-${i + 1}.webp`}
              target="_blank"
              data-cropped="true"
              data-pswp-width={width}
              data-pswp-height={height}
            >
              <Image
                className="rounded-xl object-cover w-full h-auto hover:scale-105 hover:contrast-[110%] transition-all relative"
                loading="lazy"
                src={`/archivo-page/${edition}/gallery/thumbnails/img-${
                  i + 1
                }.webp`}
                width={width}
                height={height}
                alt="Fotografía de los premios ESLAND"
              />
              <Image
                className="blur-md opacity-0 group-hover:opacity-100 absolute inset-0 transition contrast-150 -z-10 object-cover hover:contrast-[110%] scale-[105%]"
                loading="lazy"
                src={`/archivo-page/${edition}/gallery/thumbnails/img-${
                  i + 1
                }.webp`}
                width={width}
                height={height}
                alt="Imagen con efecto blur para hacer de sombra de una fotografía de los premios ESLAND"
              />
            </a>
          ))}
        </Masonry>

        <div className="text-center mx-auto">
          <Button url="#">{buttonText}</Button>
        </div>
      </section>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .my-masonry-grid {
            display: flex;
          }

          .my-masonry-grid_column {
            padding-left: 24px;
            background-clip: padding-box;
          }

          .my-masonry-grid_column img {
            width: 100% !important;
            margin-bottom: 24px;
          }

          .next-image {
            object-fit: cover;
          }
        `}
      </style>
    </>
  );
}
