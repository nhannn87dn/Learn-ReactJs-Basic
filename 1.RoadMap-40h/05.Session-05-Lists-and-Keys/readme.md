# ⭐ Session 6 - Lists and Keys

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

![list simple](list-simple.png)

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

![list](list.png)

Có mảng data như sau;
```js
//data.js
export const people = [{
  id: 0, // Used in JSX as a key
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1, // Used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3, // Used in JSX as a key
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4, // Used in JSX as a key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

```
App.js

```js
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
    //use map()
    // lặp qua mảng và lấy giá trị tham chiếu
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

```

**Extracting Components with Keys**

Khi bạn lặp qua một component, bạn cũng phải truyền cho component đó một thuộc tính key như ví dụ dưới.

```js
import { people } from './data.js';
import { getImageUrl } from './utils.js';

type PersonType = {
  name: string;
  professional: string;
  accomplishment: string;
}

function Item({person} : PersonType){
  return (
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  )
}

export default function List() {
    //use map()
    // lặp qua mảng và lấy giá trị tham chiếu
  const listItems = people.map(person => <Item key={person.id} person={person} />);
  return <ul>{listItems}</ul>;
}
```

**Embedding map() in JSX**

Nhúng `map()` vào JSX

```js
export default function List() {
  return (
    <ul>
      {
        people.map(person => <Item key={person.id} person={person} />)
      }
  </ul>
  )
}
```


## 🔥 Lọc các phần tử của Mảng với `filter()`

Ví dụ chỉ cần hiển thị ra những người có nghề ngiệp là **chemist**

```js
const chemists = people.filter(person =>
  person.profession === 'chemist'
);
```

Tùy vào mỗi trường hợp, điều kiện lọc khác nhau có thể dùng `includes()`, `find()`
để có được kết quả phù hợp.