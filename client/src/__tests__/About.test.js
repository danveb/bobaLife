import { render, screen } from "@testing-library/react"; 
import About from "../components/About/About"; 

describe("About component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<About />); 
    }); 

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<About />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText 
    test("component should have selected text", () => {
        render(<About />); 
        const text = screen.getByText("Book a private boba class", { exact: false }); 
        expect(text).toBeInTheDocument(); 
    }); 

    // getByAltText
    test("img tag should have alt attribute", () => {
        render(<About />); 
        const alt = screen.getByAltText("banner"); 
        expect(alt).not.toBe("banners"); 
    });
});