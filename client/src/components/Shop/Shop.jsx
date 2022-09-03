import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { getProducts } from "../../redux/products/productsSlice";
import { Navbar, Menu, Jumbotron, Spinner, Footer, Item } from "../index"; 
import { shopJumbotron } from "../../constants/jumbotron";
import { Badge } from "@mui/material"; 
import { ShoppingBasket } from "@mui/icons-material"
import styled from "styled-components";
import { device } from "../../styled";
import { toast } from "react-toastify";

const ShopContainer = styled.div`
    padding: 0 24px 0 24px; 
`
const Wrapper = styled.div`
    max-width: 1400px; 
    display: flex; 
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto; 
    padding: 20px; 

    @media ${device.mobile} {
        padding: 10px;    
    }
`
const ShopRow = styled.div`
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 10px; 
    width: 100%; 
    margin: 0 auto;

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media ${device.mobile} {
        grid-template-columns: repeat(1, 1fr); 
    }
`
const ShopIcon = styled.div`
    background-color: #000; 
    position: fixed; 
    bottom: 35px; 
    right: 5%; 
    padding: 15px; 
    border-radius: 50%; 
    box-shadow: 0 2px 3px darkgray;
`

const Shop = ({ menuOpen, setMenuOpen }) => {
    // destructure id, head, text from shopJumbotron
    const { id, head, text } = shopJumbotron[0]; 
    
    // useNavigate
    const navigate = useNavigate(); 

    // useSelector
    const { products, isLoading, isError, message } = useSelector((state) => state.products); 
    const { cartItems } = useSelector((state) => state.cart); 

    const cartQty = () => {
        return cartItems.reduce((acc, item) => acc + item.qty, 0); 
    }; 

    // useDispatch
    const dispatch = useDispatch(); 
    
    // useEffect 
    useEffect(() => {
        dispatch(getProducts()); 
        if(isError) {
            toast.error(message); 
        }
    }, [dispatch, isError, message, navigate]);

    if(isLoading) {
        return <Spinner />
    };

    // handleShoppingBasket
    const handleShoppingBasket = () => {
        setMenuOpen(false); 
        navigate("/cart"); 
    };

    return (
        <>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ShopContainer>
            <Jumbotron id={id} head={head} text={text} />
            <Wrapper>
                <ShopRow>
                    {products.map((product) => (
                        <div key={product._id}>
                        <Item 
                            id={product._id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                        />   
                        </div> 
                    ))}
                </ShopRow>
                <ShopIcon>
                    <Badge 
                        color="primary" 
                        badgeContent={cartQty()}
                    >
                        <ShoppingBasket 
                            style={{ color: "#fff"}}
                            onClick={handleShoppingBasket}
                        />
                    </Badge>
                </ShopIcon>
            </Wrapper>
        </ShopContainer>
        <Footer />
        </>
    )
}

export default Shop