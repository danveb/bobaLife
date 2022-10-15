import { render, screen } from "@testing-library/react"; 
import { store } from "../app/store"; 
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart/Cart"; 

describe("Cart component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Cart />
                </BrowserRouter>
            </Provider>
        ); 
    }); 

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Cart />
                </BrowserRouter>
            </Provider>
        ); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText
    test("should display message when cart is empty", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Cart />
                </BrowserRouter>
            </Provider>
        ); 
        const message = screen.getByText('Your Basket Is Empty', { exact: false })
        expect(message).toBeInTheDocument(); 
    });
});