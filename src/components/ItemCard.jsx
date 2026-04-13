import { useNavigate } from "react-router-dom"

const ItemCard = ({item}) => {
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }
  return (
    <>
        <div className="item" onClick={ () => showDetail()}>
            <span>{item?.category}</span>
            <img src={item?.img} alt={item?.title} />
            <strong>{item?.title}</strong>
            <p>{item?.price}</p>
            <span>{item?.new === true ? '신제품' :''}</span>
        </div>
    </>
  )
}

export default ItemCard