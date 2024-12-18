import Title from "./Title";
import { contacts } from "./data";
export default function Contact() {
  return (
    <div className="contact-list">
      <Title className="text-white" content="Contact" />
      <ul className="list-disc">
        {contacts.map((c) => {
          return (
            <li className="text-white my-3">
              <strong>{c.label}</strong>
              <p>{c.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
