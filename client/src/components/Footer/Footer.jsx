import { footerContact, footerHours } from "../../constants/footer"; 
import { GitHub } from "@mui/icons-material"; 
import { FooterContainer, Wrapper, Left, H3, Contact, Center, Right, P, H5, Social, SocialA } from "../../styles/Footer.style";

const Footer = () => {
    return (
        <FooterContainer>
            <Wrapper>
                <Left>
                    <H3>Contact Us</H3>
                    {footerContact.map((item) => (
                        <Contact 
                            key={item.id}
                        >
                            {item.logo}
                            {item.text}
                        </Contact>
                    ))}
                </Left>
                <Center>
                    <H3>Our Hours</H3>
                    {footerHours.map((item) => (
                        <Contact
                            key={item.id}
                        >
                            {item.logo} 
                            {item.text}
                        </Contact>
                    ))}
                </Center>
                <Right>
                    <H3>bobaLife</H3>
                    <P>Proud to serve a world-class boba carefully crafted by our baristas.</P>
                    <H5>© All rights reserved – Danny Bae</H5>
                    <Social>
                        <SocialA href="https://www.github.com/danveb" target="_blank" rel="noreferrer"><GitHub /></SocialA>
                    </Social>
                </Right>
            </Wrapper>
        </FooterContainer>
    )
}

export default Footer 