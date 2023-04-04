# ⭐ Session 3 - Lists and Keys

>**Bạn sẽ nắm được**
>- Làm thế nào để render component từ một mảng sử dụng `map()`
>- Làm thế nào để Render một component đặc biệt sử dụng `filter()`
>- Khi nào và tại sao lại cần đến key

## 🔥List là gì ?

List trong React là một dạng danh sách thông tin được hiển thị với một giao diện UI giống nhau

```html
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>
```
Cho ra được UI

![list simple](img/list-simple.png)

## 🔥 Rendering data từ một array

Thông thường trong React thông tin này được chuyển thành một mảng.

```js
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
```
Rồi sử dụng `map()` để duyệt qua mảng

```js
  export default function List(){
    const listItems = people.map(person => <li>{person}</li>);

    return <ul>{listItems}</ul>;
  }
```


## 🔥 Tại sao lại cần đến Key khi sử dụng `map()` ?

Key giúp React xác định mục nào đã thay đổi, được thêm vào hoặc bị xóa để update đúng DOM tree.

Cho ví dụ cần Render một UI phức tạp hơn một chút như sau:

![list](img/ex-1.png)

Chúng ta nhận định một thành phần UI có xu hướng lặp lại về mặt hiển thị. Chúng ta chuyển nó thành mảng.

Tạo ra một file product.js

```j
export const products = [
  {id: 1, name: 'Cáp chuyển đổi USB-C sang SD', price: 1290000, salePrice: 790000, discount: 25, thumbUrl: 'http://'},
  ...
]
```

Chúng ta tạo ra một mảng có 4 phần tử

Tương tự như ví dụ trên chúng ta tạo ra một component để hiển thị 1 sản phẩm.

```js
function SingleProduct(product){
  return (
    <div className="item">
       <span class="discount">{product.discount}</span>
       <div class="thumb">
       <img src={product.thumbUrl} alt="" />
       </div>
       <h3 className="name">{product.name}</h3>
       <div className="prices">
          <strong>{product.price}</strong>
       </div>
    </div>
  )
}
```

Hiển thị ra một danh sách sản phẩm thì chúng ta dùng `map` để render ra.

```js
const products require "./products.js";

function ProductList(){
  return (
    <div className="product_wrapper">
      {products.map(product => <SingleProduct product={product} />)}
    </div>
  )
}
```

Danh sách hiển thị ra ok, nhưng cũng xem trong tab Console.


## 🔥 Lọc các phần tử của Mảng với `filter()`

Ví dụ chỉ cần hiển thị ra những sản phẩm có giá khuyến mãi, hoặc có discount.

```js
const products = products.filter(product =>
  product.discount > 0
);
```

Tùy vào mỗi trường hợp, điều kiện lọc khác nhau có thể dùng `includes()`, `find()`
để có được kết quả phù hợp.