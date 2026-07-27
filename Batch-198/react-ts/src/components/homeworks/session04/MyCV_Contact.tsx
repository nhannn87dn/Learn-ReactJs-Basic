import styles from "./MyCV.module.css";

const contacts = [
  {
    id: 1,
    name: "Phone",
    value: "0988777666",
  },
  {
    id: 2,
    name: "Email",
    value: "example@gmail.com",
  },
  {
    id: 3,
    name: "Address",
    value: "123 City",
  },
];

const MyCV_Contact = () => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <li>
              <div>{contact.name}</div>
              <p>{contact.value}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyCV_Contact;
