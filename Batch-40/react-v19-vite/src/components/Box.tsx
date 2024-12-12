export default function Box({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="box_wrapper">
      <div className="box-title text-center">{title}</div>
      {children}
    </div>
  );
}
