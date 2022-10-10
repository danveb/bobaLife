import { render } from "@testing-library/react"; 
import Footer from "../components/Footer/Footer"; 

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
    const { getByText } = render(<Footer />); 
    getByText("All rights reserved", { exact: false });
}); 