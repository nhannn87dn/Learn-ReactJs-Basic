type personType = {    
  imageId: string;
}

export function getImageUrl(person : personType) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }