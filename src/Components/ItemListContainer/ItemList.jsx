import Item from "./Item";
import "./itemList.scss";
const ItemList = ({products}) => {
  return (
    <div className="itemList">
        {
            products.map((product) => {
                return <Item product={product} key={product.id}></Item>
            })
        }
    </div>
  )
}

export default ItemList