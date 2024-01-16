type Props = { title: string; children: React.ReactNode };

export default function NumberItem({ title, children }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="number text-7xl font-bold tabular-nums tracking-tighter">
        {children}
      </span>
      <span className="uppercase opacity-70">{title}</span>
    </div>
  );
}
