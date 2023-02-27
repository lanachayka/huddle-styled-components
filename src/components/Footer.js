import React from 'react';
import { Container, Flex, StyledFooter } from './styled';
import SocialIcons from "./SocialIcons";

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="footer logo" />
                <Flex>
                    <ul>
                        <li>Contact Us</li>
                        <li>+1-543-123-4567</li>
                        <li>example@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    <SocialIcons />
                </Flex>
                <p>&copy; 2023 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}
