import styled from "styled-components";
import React from "react";
import {linkStyle} from "../form/form"

export const Tittle = styled.h2`
    width: 100%;
    padding: 20px 0;
    background-color: ${props => props.background || ''};
    color: ${props => props.color || '#000000'};
    font-size: 20px;
    text-align: ${props => props.textAlig || 'center'};
    font-family: "Monaco", monospace;
    margin: 0;
    position: absolute;
    top: 36%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 768px) {   
      font-size: 16px;
      margin-top: 10px;
      top:  32%;
    }
`

export const SubTittle = styled.h3`
    margin-top: 10px;
    width: 100%;
    padding: 30px 0;
    background-color: ${props => props.background || ''};
    color: ${props => props.color || '#000000'};
    font-size: 11px;
    text-align: ${props => props.textAlig || 'center'};
    font-family: "Courier New", monospace;
    position: absolute;
    top: 70%;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, -50%);

    @media (max-width: 768px) {
      margin-top: 16px;
    }
`

function TittlePage() {
    return (
        <Tittle color="RoyalBlue">Entrar
            <SubTittle color="black">
                Entre com seu Windows Live ID, não possui?
                <span style={{ color: 'blue' }}><a href="https://www.exemplo.com.br" style={linkStyle}> Inscreva-se</a></span>
            </SubTittle>
        </Tittle>

    )
}

export default TittlePage