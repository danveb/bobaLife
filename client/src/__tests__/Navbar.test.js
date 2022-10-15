import { render, screen } from "@testing-library/react"; 
import { store } from "../app/store"; 
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"; 

describe("Navbar component", () => {
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
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        ); 
        const logo = screen.getByText("bobaLife", { exact: true })
        expect(logo).toBeInTheDocument(); 
    });
});