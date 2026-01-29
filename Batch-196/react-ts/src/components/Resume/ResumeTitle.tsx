const ResumeTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2 className={`text-xl font-bold mb-4 uppercase ${className}`}>{title}</h2>
  );
};

export default ResumeTitle;
