//props = {name: 'Nhan'}
//{name} = props;
const SayHello = ({ name }: { name: string }) => {
  return <div>Say Hello, {name}</div>;
};

export default SayHello;
