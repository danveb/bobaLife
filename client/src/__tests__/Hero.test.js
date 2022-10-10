import { render, screen } from "@testing-library/react"; 
import "@testing-library/jest-dom"; 
import Hero from "../components/Hero/Hero"; 

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
    expect(screen.getByAltText("boba")).toBeVisible(); 
}); 

// getByText
test("selected text should be in the document", () => {
    render(<Hero />); 
    expect(screen.getByText("Welcome to bobaLife")).toBeInTheDocument(); 
});