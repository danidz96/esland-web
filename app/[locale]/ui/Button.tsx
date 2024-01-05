interface Props {
  className?: string;
  target?: string;
  url: string;
  children?: React.ReactNode;
}

export default function Button({ url, target, className, children }: Props) {
  return (
    <a
      href={url}
      target={`${target ?? "_blank"}`}
      rel="noopener noreferrer"
      className={`${className} w-fit lg:text-2xl font-medium text-white no-underline px-5 py-3 border border-solid border-white rounded-full uppercase`}
    >
      {children}
    </a>
  );
}
