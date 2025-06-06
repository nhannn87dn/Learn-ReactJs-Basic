const Button = ({ label = "Button Default" }: { label?: string }) => {
  return (
    <button className="bg-sky-500 text-white px-3 py-2 rounded">{label}</button>
  );
};

const Kid = ({ text }: { text: string }) => {
  return <li>{text}</li>;
};

const Parent = ({ children }: { children: React.ReactNode }) => {
  return <ul>{children}</ul>;
};

const Children = () => {
  return (
    <div>
      <Parent>
        <Kid text="Kid 1" />
        <Kid text="Kid 2" />
      </Parent>

      <Button label="Login" />
      <Button />
    </div>
  );
};

export default Children;
