import Image from "next/image";

type Props = { link: string; title: string; image: string; download: string };

export default function InfoKitPrensaItem({
  link,
  title,
  image,
  download,
}: Props) {
  return (
    <article className="flex flex-col justify-center items-center">
      <h3 className="text-2xl mb-2">{title}</h3>
      <a
        className="relative group flex flex-col gap-y-4 text-center justify-center items-center mt-2 uppercase m-auto transition-all text__glowing"
        href={link}
      >
        <Image
          src={image}
          alt=""
          className="aspect-video rounded-lg w-full h-auto transition group-hover:scale-105"
          loading="lazy"
          height={500}
          width={300}
        />
        <Image
          alt=""
          src={image}
          className="absolute inset-0 opacity-0 brightness-200 blur-xl group-hover:opacity-40 scale-125 aspect-video rounded w-full h-auto -z-10 transition"
          loading="lazy"
          height={500}
          width={300}
        />
        <span className="border-white inline-flex w-fit border-2 border-solid rounded-full py-2 px-12">
          {download}
        </span>
      </a>
    </article>
  );
}
