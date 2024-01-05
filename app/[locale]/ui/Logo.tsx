interface Props {
  [x: string]: any;
}

export default function Logo(props: Props) {
  return (
    <svg
      {...props}
      width="56"
      height="70"
      viewBox="0 0 56 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 70L26.25 56.7L11.2 58.8L26.25 0L0 70Z"
        fill="currentColor"
      ></path>
      <path
        d="M56 70L29.75 56.7L44.8 58.8L29.75 0L56 70Z"
        fill="currentColor"
      ></path>
      <path
        d="M24.8501 41.65L28.0001 22.4L31.5001 41.65L28.0001 48.65L24.8501 41.65Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
