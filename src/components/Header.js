import React, { useContext } from 'react'
import { StyledHeader, Container, Nav, Logo, Button, Flex, Image, Select } from './styled';
import { AppContext } from "../context/AppContext";

export default function Header() {
    const { colorTheme, setColorTheme } = useContext(AppContext);
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src={colorTheme === "light" ? "./images/logo.svg" : "./images/logo_white.svg"} alt="Huddle" />
                    <Select value={colorTheme} onChange={(e) => setColorTheme(e.target.value)} colorTheme={colorTheme}>
                        <option value="light">light</option>
                        <option value="dark">dark</option>
                    </Select>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>
                            Huddle re-imagines the way we build communities. You have a voice,
                            but so does your audience. Create connections with your users as
                            you engage in genuine discussion.
                        </p>
                        <Button colorTheme={colorTheme}>
                            Get Started For Free
                        </Button>
                    </div>
                    <Image src="./images/illustration-mockups.svg" alt="Illustration mockups"/>
                </Flex>
            </Container>
        </StyledHeader>
    )
}
