import NavItem from "./NavItem";
//hàm bình thường của js
function sumTotal(a: number, b: number) {
  return a + b;
}
console.log(sumTotal(1,2));
// ==> Đươc gọi là component vì Kí tự đầu tiên của tên function là viết HOA
function Header() {
  return (
    <header className="header">
      <div>LOGO</div>
      <nav className="nav">
        <ul>
          <NavItem />
          <NavItem />
          <NavItem />
        </ul>
      </nav>
    </header>
  );
}
export default Header;
