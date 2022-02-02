import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    --yellow: #ffc107;
    --grey: #282828
    --black: #1b1b1b

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
    border: 3px solid var(--yellow);
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: var(--yellow);
        color: #1b1b1b;
        -webkit-filter: drop-shadow(0px 0px 5px var(--yellow));
    filter: drop-shadow(0px 0px 5px var(--yellow));
    }
}
h1,h2,h3,h4,h5,h6{
    font-family: 'Comfortaa', cursive;
}
h2{
    font-weight: lighter;
    font-size: calc(1.5rem + 2vw)
    }
h3{
    font-size: calc(1.1rem + 2vw)
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
    color:var(--yellow);
    :hover{
        -webkit-filter: drop-shadow(0px 0px 5px var(--yellow));
        filter: drop-shadow(0px 0px 5px var(--yellow))}
    }
p{
    padding: 0.5rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 125%;
    }
.p-0{
    padding: 0;
}
`;
export default GlobalStyle;
