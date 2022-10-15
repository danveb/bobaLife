import { render, screen } from "@testing-library/react"; 
import Drinks from "../components/Drinks/Drinks"; 

describe("Drinks component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<Drinks />); 
    }); 

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<Drinks />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText 
    test("component should have selected text", () => {
        render(<Drinks />); 
        const text = screen.getByText("All of our drink are served with tapioca", { exact: true }); 
        expect(text).not.toBe("All of our cocktails are served with olives"); 
    }); 
}); 