import { fireEvent, render, screen } from "@testing-library/react"; 
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
    const { getByLabelText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        </Provider>
    );
    const usernameLabel = getByLabelText("Username"); 
    expect(usernameLabel).toBeInTheDocument(); 
}); 

// getByText
test("displays link to navigate to login page", () => {
    const { getByText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        </Provider>
    ); 
    const newAccountText = getByText("Already have an account?"); 
    expect(newAccountText).toBeInTheDocument(); 
}); 

// getByLabelText
test("username/email/password input field accepts correct values", () => {
    const { getByLabelText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        </Provider>
    ); 
    const usernameInput = getByLabelText("Username"); 
    const emailInput = getByLabelText("Email"); 
    const passwordInput = getByLabelText("Password"); 
    fireEvent.change(usernameInput, { target: { value: "jojo" }}); 
    fireEvent.change(emailInput, { target: { value: "jojo@gmail.com" }}); 
    fireEvent.change(passwordInput, { target: { value: "jojo" }}); 
    expect(usernameInput).not.toBe(""); 
    expect(emailInput.value).toBe("jojo@gmail.com"); 
    expect(passwordInput.value).toBe("jojo"); 
});

// mock register functionality
test("mock register functionality", () => {
    const username = "jojo"
    const email = "jojo@gmail.com"; 
    const password = "jojo"; 
    const mockSubmit = jest.fn();

    const { getByLabelText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Register onSubmit={mockSubmit(username, email, password)}/>
            </BrowserRouter>
        </Provider>
    );
    const usernameInput = getByLabelText("Username"); 
    const emailInput = getByLabelText("Email"); 
    const passwordInput = getByLabelText("Password"); 
    const registerBtn = screen.getByRole("button");

    fireEvent.change(usernameInput, { target: { value: username }}); 
    fireEvent.change(emailInput, { target: { value: email }}); 
    fireEvent.change(passwordInput, { target: { value: password }}); 
    fireEvent.click(registerBtn); 
    expect(mockSubmit).toHaveBeenCalled(); 
}); 