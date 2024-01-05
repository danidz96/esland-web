import Image, { StaticImageData } from "next/image";

interface Props {
  className?: string;
  title: string;
  subtitle?: string;
  image?: React.ReactNode;
  children?: React.ReactNode;
}

export default function BentoItem({
  className,
  title,
  subtitle,
  image,
  children,
}: Props) {
  return (
    <article
      className={`
  ${className}
  col-span-5
  relative rounded-xl
  backdrop-blur-md
  border border-black/10
  shadow-inner shadow-white/10
  overflow-hidden
  group
`}
    >
      <div
        className="absolute bottom-0 top-0 z-10 h-full w-full
    bg-gradient-to-b from-transparent from-40% via-[#151836]/50 to-[#151836]/80"
      ></div>
      {image}
      <div className="relative z-20 flex h-full select-none flex-col justify-end gap-1 p-2 text-lg md:p-6">
        <h2 className="mb-4 text-balance text-3xl font-semibold uppercase text-white">
          {title}
        </h2>
        {subtitle && (
          <h3 className="-mt-4 mb-4 text-3xl font-semibold text-sky-200/80">
            {subtitle}
          </h3>
        )}
        {children}
      </div>
    </article>
  );
}
