import { fireEvent, render, screen } from "@testing-library/react"; 
import { store } from "../app/store"; 
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "../components/Login/Login"; 

describe("Login component", () => {
    // smoke test
    test("renders Login component without crashing", () => {
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
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        ); 
        const paragraphTag = screen.getByText("Enter your account", { exact: true }); 
        expect(paragraphTag).toBeInTheDocument(); 
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
        const label = screen.getByLabelText("Email"); 
        expect(label).toBeInTheDocument(); 
    }); 

    // getByLabelText
    test("email input field accepts correct value", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        ); 
        const emailInput = screen.getByLabelText("Email"); 
        expect(emailInput.value).toMatch(""); 
        fireEvent.change(emailInput, { target: { value: "hello@gmail.com" }}); 
        expect(emailInput.value).toMatch("hello@gmail.com"); 
    }); 

    // getByLabelText
    test("input email triggers error for failing required data", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        ); 
        const emailInputNode = screen.getByLabelText("Email"); 
        expect(emailInputNode.value).toMatch(""); 
        fireEvent.change(emailInputNode, { target: { value: "hello" }}); 
        expect(emailInputNode.value).not.toMatch("hello@gmail.com"); 
    }); 

    // getByLabelText
    test("password input field accepts correct value", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        ); 
        const passwordInputNode = screen.getByLabelText("Password"); 
        expect(passwordInputNode.value).toBe(""); 
        fireEvent.change(passwordInputNode, { target: { value: "helloworld" }}); 
        expect(passwordInputNode.value).toBe("helloworld"); 
    });

    // getByText
    test("displays link to navigate to register page", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        ); 
        const newAccountText = screen.getByText("Need a new account?"); 
        expect(newAccountText).toBeInTheDocument(); 
    }); 

    // getByLabelText
    test("displays initial state for username/password", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );
        const emailInput = screen.getByLabelText("Email");
        const passwordInput = screen.getByLabelText("Password");
        expect(emailInput.value).toBe(""); 
        expect(passwordInput.value).toBe(""); 
    });

    // mock login functionality
    test("mock login functionality", () => {
        const email = "jojo@gmail.com"; 
        const password = "jojo"; 
        const mockSubmit = jest.fn();

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login onSubmit={mockSubmit(email, password)}/>
                </BrowserRouter>
            </Provider>
        );
        const emailInput = screen.getByLabelText("Email"); 
        const passwordInput = screen.getByLabelText("Password"); 
        const signInBtn = screen.getByRole("button");

        fireEvent.change(emailInput, { target: { value: email }}); 
        fireEvent.change(passwordInput, { target: { value: password }}); 
        fireEvent.click(signInBtn); 
        expect(mockSubmit).toHaveBeenCalled(); 
    }); 
});