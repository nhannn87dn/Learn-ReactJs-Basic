import { useState } from "react";
const params = [
  { id: 1, key: "Hệ điều hành", val: "Android 11" },
  { id: 2, key: "Camera sau", val: "Chính 12 MP & Phụ 64 MP, 12 MP" },
  { id: 3, key: "Camera trước", val: "10 MP" },
  { id: 4, key: "CPU", val: "Exynos 2100 8 nhân" },
];
const pparams = params.slice(0, 3);
const totalRecords = params.length;

const TableParams = () => {
  const [tparams, setTparams] = useState(pparams);

  const handleViewMore = () => {
    console.log(totalRecords);
    setTparams(params);
  };

  return (
    <div>
      <table>
        <tbody>
          {tparams.map((param) => {
            return (
              <tr key={param.id}>
                <td>{param.key}</td>
                <td>{param.val}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleViewMore} className="btn">
        Xem thêm
      </button>
    </div>
  );
};

export default TableParams;
