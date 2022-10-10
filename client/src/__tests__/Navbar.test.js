import { render } from "@testing-library/react"; 
import { store } from "../app/store"; 
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"; 

// smoke test
test("renders without crashing", () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </Provider>
    ); 
}); 

// snapshot test
test("matches snapshot", () => {
    const { asFragment } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </Provider>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
});

// getByText
test("should display app logo", () => {
    const { getByText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </Provider>
    ); 
    expect(getByText("bobaLife", { exact: true })).toBeInTheDocument(); 
});