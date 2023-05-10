import styled from "styled-components"
import css from "styled-jsx/css";

const StyledButton = styled.button`
border: none;
padding: 8px 10px;
border-radius: 4px;
cursor: pointer;
display: inline-flex;
    align-items: center;
    justify-content: center;
  svg{
    margin-right: 10px;
  }
${props => props.white && props.outlined && css`
    color: #fff;
   
    border:2px solid white;

    `}
    
    
    ${props => props.primary && css`
    background-color: skyblue;
     color: #000;
    
`}

`;

export default function Button({ children, ...rest }) {
    return (
        <>
            <StyledButton {...rest}>{children}</StyledButton>
        </>
    )
}
