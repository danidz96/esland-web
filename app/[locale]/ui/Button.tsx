import Link from "next/link";
import styles from "./Button.module.css";

interface Props {
  className?: string;
  target?: string;
  url: string;
  children?: React.ReactNode;
}

export default function Button({ url, target, className, children }: Props) {
  return (
    <Link
      href={url}
      target={`${target ?? "_blank"}`}
      rel="noopener noreferrer"
      className={`${className} ${styles.button} w-fit lg:text-2xl font-medium no-underline px-5 py-3 border border-solid border-white rounded-full uppercase`}
    >
      {children}
    </Link>
  );
}
