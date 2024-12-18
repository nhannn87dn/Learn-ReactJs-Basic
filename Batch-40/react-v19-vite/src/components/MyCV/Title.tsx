export default function Title({
  content,
  className,
}: {
  content: string;
  className: string;
}) {
  return <div className={`uppercase my-2 ${className}`}>{content}</div>;
}
