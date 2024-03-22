import styled from "styled-components";

const HeaderContainer = styled.div`
    background-color: #070F2B;
    height: 85px;
    width: 100%;
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    .logo{
        width: 50px;
        height: 50px;
    }

    span{
        font-size: 30px;
        font-weight: 700;
        color: #fff;

        @media screen and (max-width: 600px) {
            font-size: 18px;
        }
    }

`;


export default HeaderContainer;