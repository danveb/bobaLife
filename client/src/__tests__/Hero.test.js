import { render, screen } from "@testing-library/react"; 
import Hero from "../components/Hero/Hero"; 

describe("Hero component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<Hero />); 
    }); 

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<Hero />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByAltText
    test("img tag should have alt attribute", () => {
        render(<Hero />); 
        const alt = screen.getByAltText("boba");
        expect(alt).toBeVisible(); 
    }); 

    // getByText
    test("selected text should be in the document", () => {
        render(<Hero />); 
        const text = screen.getByText("Welcome to bobaLife")
        expect(text).toBeInTheDocument(); 
    });
});