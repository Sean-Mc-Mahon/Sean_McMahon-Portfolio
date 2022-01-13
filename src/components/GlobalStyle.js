import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
}
body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #ffc107;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #ffc107;
        color: #1b1b1b;
        -webkit-filter: drop-shadow(0px 0px 5px #ffc107);
    filter: drop-shadow(0px 0px 5px #ffc107);
    }
}
h2{
    font-weight: lighter;
    font-size: calc(1.5rem + 2vw)
    }
h3{
    color: white;
    }
h4{
    font-weight: bold;
    font-size: 2rem;
    }
a{
    font-size: 1.1rem;
    }
span{
    font-weight: bold;
    color:#ffc107;
    :hover{
        -webkit-filter: drop-shadow(0px 0px 5px #ffc107);
        filter: drop-shadow(0px 0px 5px #ffc107)}
    }
p{
    padding: 2rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
    }
`;
export default GlobalStyle;
