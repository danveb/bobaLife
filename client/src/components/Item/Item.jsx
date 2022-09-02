import { useDispatch } from "react-redux"; 
import { addToCart } from "../../redux/cart/cartSlice";
import styled from "styled-components";
import { toast } from "react-toastify";

const ItemContainer = styled.div`
    max-width: 420px; 
    margin: 0 auto; 
    padding: 10px; 
`
const Card = styled.div`
    margin-bottom: 20px; 
`
const CardImg = styled.img`
    min-height: 300px; 
    width: 100%; 
    object-fit: cover; 
`
const CardBody = styled.div`
    font-family: "Poppins", sans-serif; 
`
const CardTitle = styled.h3`
    font-size: 16px; 
    margin: 10px 0; 
`
const CardDescription = styled.p`
    font-size: 14px; 
    font-style: italic; 
    margin: 10px 0;
`
const CardPrice = styled.p`
    font-size: 15px; 
    margin: 10px 0;
`
const CardBtn = styled.button`
    font-family: "Quicksand", sans-serif; 
    height: 50px; 
    width: 100%; 
    background-color: #000; 
    border: 2px solid #000; 
    line-height: 1em; 
    letter-spacing: .13em; 
    font-size: 11px; 
    text-transform: uppercase; 
    color: #fff; 
    cursor: pointer; 
`

const Item = ({ id, title, description, image, price }) => {
    // useDispatch
    const dispatch = useDispatch(); 
    
    // handleClick
    const handleClick = () => {
        dispatch(addToCart({
            id, title, description, image, price
        })); 
        toast(`${title} added to Cart`, {
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
                <CardBtn onClick={handleClick}>Add To Cart</CardBtn>
            </Card>
        </ItemContainer>
    )
}

export default Item