/*
rfc --> function component
rfce  --> function component export
rafc --> arrow function component
rafce --> arrow function component
*/
import { SquareCheck, ShieldCheck, Undo2 } from "lucide-react";
const PolicyItem = ({
  icon,
  name,
  content,
}: {
  icon: React.ReactNode;
  name: string;
  content: string;
}) => {
  return (
    <div className="flex">
      <span className="text-sky-500">{icon}</span>
      <strong>{name}:</strong>
      <span>{content}</span>
    </div>
  );
};

export default function Policy() {
  return (
    <div>
      <PolicyItem icon={<SquareCheck />} name="name 1" content="content 1" />
      <PolicyItem icon={<ShieldCheck />} name="name 2" content="content 2" />
      <PolicyItem icon={<Undo2 />} name="name 3" content="content 3" />
    </div>
  );
}
