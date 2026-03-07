import {Link} from  'react-router'

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      {/* <a href="/blog">Go to Blog</a> */}
      <Link to="/blog">Go to Blog</Link>
      <p>Để chuyển hướng đến 1 trang ngoài</p>
      <a target="_blank" href="https://tinhte.vn">Tinhte.vn</a>
    </div>
  );
};

export default HomePage;
