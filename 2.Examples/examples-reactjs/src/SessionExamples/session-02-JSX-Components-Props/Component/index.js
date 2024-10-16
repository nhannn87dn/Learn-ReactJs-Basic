import React from 'react'

// Component function
function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
}

// Component với Props, sử dụng destructuring  ES6
function ProfileProps({link, name}) {
    return (
      <img
        src={link}
        alt={name}
      />
    );
}

  // Sử dụng component Profile
export default function Gallery() {
    const link = 'https://i.imgur.com/MK3eW3As.jpg';
    const name = 'Katherine Johnson';
    return (
      <section>
        <h1>Amazing scientists</h1>
        <p>Sử dụng component Profile trong component Gallery</p>
        <Profile />
        <p>Truyền các giá trị prop đến component ProfileProps</p>
        <ProfileProps link={link} name={name} />
      </section>
    );
  }