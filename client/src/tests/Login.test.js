import { fireEvent, render, screen } from "@testing-library/react"; 
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

// getByLabelText
test("email input field accepts correct value", () => {
    const { getByLabelText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </Provider>
    ); 
    const emailInputNode = getByLabelText("Email"); 
    expect(emailInputNode.value).toMatch(""); 
    fireEvent.change(emailInputNode, { target: { value: "hello@gmail.com" }}); 
    expect(emailInputNode.value).toMatch("hello@gmail.com"); 
}); 

// getByLabelText
test("input email triggers error for failing required data", () => {
    const { getByLabelText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </Provider>
    ); 
    const emailInputNode = getByLabelText("Email"); 
    expect(emailInputNode.value).toMatch(""); 
    fireEvent.change(emailInputNode, { target: { value: "hello" }}); 
    expect(emailInputNode.value).not.toMatch("hello@gmail.com"); 
}); 

// getByLabelText
test("password input field accepts correct value", () => {
    const { getByLabelText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </Provider>
    ); 
    const passwordInputNode = getByLabelText("Password"); 
    expect(passwordInputNode.value).toBe(""); 
    fireEvent.change(passwordInputNode, { target: { value: "helloworld" }}); 
    expect(passwordInputNode.value).toBe("helloworld"); 
});

// getByText
test("displays link to navigate to register page", () => {
    const { getByText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </Provider>
    ); 
    const newAccountText = getByText("Need a new account?"); 
    expect(newAccountText).toBeInTheDocument(); 
}); 

// mock login functionality
test("mock login functionality", () => {
    const email = "jojo@gmail.com"; 
    const password = "jojo"; 
    const mockSubmit = jest.fn();

    const { getByLabelText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Login onSubmit={mockSubmit(email, password)}/>
            </BrowserRouter>
        </Provider>
    );
    const emailInput = getByLabelText("Email"); 
    const passwordInput = getByLabelText("Password"); 
    const signInBtn = screen.getByRole("button");

    fireEvent.change(emailInput, { target: { value: email }}); 
    fireEvent.change(passwordInput, { target: { value: password }}); 
    fireEvent.click(signInBtn); 
    expect(mockSubmit).toHaveBeenCalled(); 
}); 