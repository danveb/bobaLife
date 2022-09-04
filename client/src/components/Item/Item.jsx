import { useDispatch } from "react-redux"; 
import { addToCart } from "../../redux/cart/cartSlice";
import { toast } from "react-toastify";
import { ItemContainer, Card, CardImg, CardBody, CardTitle, CardDescription, CardPrice, CardBtn } from "../../styles/Item.style";

const Item = ({ id, title, description, image, price }) => {
    // useDispatch
    const dispatch = useDispatch(); 
    
    // handleClick
    const handleClick = () => {
        dispatch(addToCart({
            id, title, description, image, price
        })); 
        toast(`${title} added to Basket`, {
            position: "top-center", 
            autoClose: 2500, 
            pauseOnHover: false, 
        })
    }

    return (
        <ItemContainer>
            <Card>
                <CardImg src={image} alt="product" />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <CardPrice>$ {price}</CardPrice>
                </CardBody>
                <CardBtn onClick={handleClick}>Add To Basket</CardBtn>
            </Card>
        </ItemContainer>
    )
}

export default Item