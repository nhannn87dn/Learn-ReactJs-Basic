const ChinhSachItem = ({
  icon,
  content,
}: {
  icon: string;
  content: string;
}) => {
  return (
    <li>
      {icon} {content}
    </li>
  );
};

const chinhsachs = [
  { id: 1, icon: "1", content: "Chính sách đổi trả" },
  { id: 2, icon: "2", content: "Chính sách bảo hành" },
  { id: 3, icon: "3", content: "Giao hàng & thanh toán" },
];

const ChinhSach = () => {
  return (
    <ul>
      {chinhsachs.map((cs) => {
        return <ChinhSachItem icon={cs.icon} content={cs.content} />;
      })}
      {/* <ChinhSachItem icon="1" content={"Chính sách đổi trả"} />
      <ChinhSachItem icon="2" content={"Chính sách bảo hành"} />
      <ChinhSachItem icon="3" content={"Giao hàng & thanh toán"} /> */}
    </ul>
  );
};

export default ChinhSach;
