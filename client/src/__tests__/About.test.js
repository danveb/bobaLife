import { render } from "@testing-library/react"; 
import About from "../components/About/About"; 

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
    const { getByText } = render(<About />); 
    getByText("Book a private boba class", { exact: false }); 
}); 

// getByAltText
test("img tag should have alt attribute", () => {
    const { getByAltText } = render(<About />); 
    getByAltText("banner"); 
})