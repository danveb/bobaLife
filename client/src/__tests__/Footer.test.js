import { render, screen } from "@testing-library/react"; 
import Footer from "../components/Footer/Footer"; 

describe("Footer component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<Footer />); 
    }); 

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<Footer />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText 
    test("should display the P tag", () => {
        render(<Footer />); 
        const paragraph = screen.getByText("All rights reserved", { exact: false });
        expect(paragraph).toBeInTheDocument(); 
    }); 

    // getByRole 
    test("should display anchor tag for GitHub logo", () => {
        render(<Footer />); 
        const anchor = screen.getByRole("link"); 
        expect(anchor).toHaveAttribute("href"); 
    });
});