import React from 'react'

const lists = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

const products = [
    {id: 1, name: 'Cáp chuyển đổi', price: 1290000, salePrice: 790000, thumbnail: ''},
    {id: 2, name: 'Cáp sạc', price: 840000, salePrice: 0, thumbnail: ''},
    {id: 3, name: 'Airport 3', price: 1450000, salePrice: 840000, thumbnail: ''},
    {id: 4, name: 'Adapter', price: 52000, salePrice: 0, thumbnail: ''}
];



interface ItemProp {
    item: {
        name: string;
        price: number;
        salePrice: number;
        thumbnail?: string;
    }
}

function ProductItem({item}: ItemProp){
    return (
        <li>
                        <img src={item.thumbnail} />
                        <h3>{item.name}</h3>
                        
                            {item.salePrice > 0 ? (
                                <div className="price">
                                    <strong>{item.salePrice}</strong>
                                    <del>{item.price}</del>
                                 </div>
                            )

                            : (
                                <div className="price">
                                    <strong>{item.price}</strong>
                                </div>
                            )


                            }
                            
                       
                    </li>
    )
}

function ListKeys() {

    const afterFilterProducts = products.filter((item)=> item.salePrice > 0);

    console.log(afterFilterProducts);

  return (
    <div>
        <ul>
            {lists.map((item, index)=>{
                return (
                    <li key={`listkey_${index}`}>{item}</li>
                )
            })}
        </ul>
        <ul>
            {afterFilterProducts.map((item, index)=>{
                return (
                    <ProductItem key={`ProductItem_${item.id}`} item={item}  />
                )
            })}
        </ul>
    </div>
  )
}

export default ListKeys