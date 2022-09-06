import { render, screen } from "@testing-library/react"; 
import { store } from "../app/store"; 
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Register from "../components/Register/Register"; 

// smoke test
test("renders without crashing", () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        </Provider>
    ); 
}); 

// snapshot test
test("matches snapshot", () => {
    const { asFragment } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        </Provider>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
});

// getByText
test("should display header display", () => {
    const { getByText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        </Provider>
    ); 
    expect(getByText("Create your free account", { exact: true })).toBeInTheDocument(); 
});

// getByLabelText
test("should find username label", () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        </Provider>
    );
    screen.getByLabelText("Username"); 
}); 