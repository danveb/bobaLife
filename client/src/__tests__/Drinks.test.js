import { render } from "@testing-library/react"; 
import Drinks from "../components/Drinks/Drinks"; 

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
    const { getByText } = render(<Drinks />); 
    getByText("All of our drink are served with tapioca", { exact: true }); 
}); 