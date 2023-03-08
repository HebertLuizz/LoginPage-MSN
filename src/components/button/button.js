import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.background || ''};
  color: ${props => props.color || '#000000'};
  font-size: 10px;
  text-align: ${props => props.textAlig || 'center'};
  font-family: "Monaco", monospace;
  position: relative;
  margin-top: 120px;
  left: 50%;
  top: 18%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  border-color: steelblue;
  font-weight: 900;
  display: block;
  width: 80px;
  height: 20px;
  max-width: 100%;
  
  &:hover {
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    top: 24%;
  }
`

function ButtomSubmit() {
    return(
        <Button>Entrar</Button>
    )
}

export default Button