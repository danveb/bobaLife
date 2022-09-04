import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { getProducts } from "../../redux/products/productsSlice";
import { Jumbotron, Spinner, Footer, Item } from "../index"; 
import { shopJumbotron } from "../../constants/jumbotron";
import { Badge } from "@mui/material"; 
import { ShoppingBasket } from "@mui/icons-material"
import { toast } from "react-toastify";
import { ShopContainer, Wrapper, Row, Icon, EmptyDiv } from "../../styles/Shop.style";

const Shop = ({ setMenuOpen }) => {
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
        <ShopContainer>
            <Jumbotron id={id} head={head} text={text} />
            <Wrapper>
                <Row>
                    {products.map((product) => (
                        <EmptyDiv key={product._id}>
                        <Item 
                            id={product._id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                        />   
                        </EmptyDiv> 
                    ))}
                </Row>
                <Icon>
                    <Badge 
                        color="primary" 
                        badgeContent={cartQty()}
                    >
                        <ShoppingBasket 
                            style={{ color: "var(--white)"}}
                            onClick={handleShoppingBasket}
                        />
                    </Badge>
                </Icon>
            </Wrapper>
        </ShopContainer>
        <Footer />
        </>
    )
}

export default Shop