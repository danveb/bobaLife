import { render, screen } from "@testing-library/react"; 
import { store } from "../app/store"; 
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "../components/Login/Login"; 

// smoke test
test("renders without crashing", () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </Provider>
    ); 
}); 

// snapshot test
test("matches snapshot", () => {
    const { asFragment } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Login />
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
                <Login />
            </BrowserRouter>
        </Provider>
    ); 
    expect(getByText("Enter your account", { exact: true })).toBeInTheDocument(); 
});

// getByLabelText
test("should find email label", () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </Provider>
    );
    screen.getByLabelText("Email"); 
}); 