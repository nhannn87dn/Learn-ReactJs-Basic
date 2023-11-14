
/**
 * rafce
 */
type IProduct = {
    name: string;
    thumb: string;
    price: number;
    promoPrice?: number
}

const SingleProduct = ({name, thumb, price, promoPrice=0}: IProduct) => {
  return (
    <div className="item">
        <div className="thumb">
            <img width={120} height={120} src={thumb} alt={name} />
        </div>
        <h3>{name}</h3>
        <div>
            {
                promoPrice > 0 ? (
                    <>
                        <strong>{promoPrice}</strong>
                        <del>{price}</del>
                    </>
                   
                )
                : (
                    <strong>{price}</strong>
                )
            }
            
        </div>
    </div>
  )
}

export default SingleProduct