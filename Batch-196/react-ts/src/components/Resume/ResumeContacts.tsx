import { dataCV } from "./data";
import ResumeTitle from "./ResumeTitle";
type Contact = {
  type: string;
  value: string;
};

const ContactItem = ({ type, value }: Contact) => {
  return (
    <li>
      <strong>{type}:</strong> {value}
    </li>
  );
};

const ResumeContacts = () => {
  return (
    <div>
      <ResumeTitle title="Contacts" className="text-white" />
      <ul className="list-disc list-inside">
        {dataCV.contacts &&
          dataCV.contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              type={contact.type}
              value={contact.value}
            />
          ))}
      </ul>
    </div>
  );
};

export default ResumeContacts;
