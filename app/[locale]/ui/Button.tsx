import Link from "next/link";
import styles from "./Button.module.css";

interface Props {
  className?: string;
  target?: string;
  url?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  url,
  target,
  className,
  children,
  onClick,
}: Props) {
  return url ? (
    <Link
      href={url}
      target={`${target ?? "_blank"}`}
      rel="noopener noreferrer"
      className={`${className} ${styles.button} w-fit lg:text-2xl font-medium no-underline px-5 py-3 border border-solid border-white rounded-full uppercase`}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${className} ${styles.button} w-fit lg:text-2xl font-medium no-underline px-5 py-3 border border-solid border-white rounded-full uppercase`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
