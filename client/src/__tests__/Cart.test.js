import { render } from "@testing-library/react"; 
import { store } from "../app/store"; 
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart/Cart"; 

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
    const { getByText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Cart />
            </BrowserRouter>
        </Provider>
    ); 
    expect(getByText('Your Basket Is Empty', { exact: false })).toBeInTheDocument(); 
});