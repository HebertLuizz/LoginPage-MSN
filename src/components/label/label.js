import styled from "styled-components";

export const Label = styled.label`
    width: 100%;
    background-color: ${props => props.background || ''};
    color: ${props => props.color || '#000000'};
    font-size: 11px;
    text-align: ${props => props.textAlig || 'center'};
    font-family: "Courier New", monospace;
    margin-left: 6px;
    margin-top: ${props => props.marginTopo || ''};
`

export default Label