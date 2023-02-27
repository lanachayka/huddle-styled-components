import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.light.footerBg};
    color: #fff;
    padding: 100px 0 60px;

    ul {
      list-style-type: none;
    }

    ul li {
      margin-bottom: 20px;
    }

    p {
      text-align: right;
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.mobile}) {
        text-align: center;
        ul {
        padding: 0;
        }
        p {
        text-align: center;
        }
    }
`