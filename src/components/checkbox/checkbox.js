import { useState } from 'react';
import styled from "styled-components";
import Label from "../label/label";

const OptionValue = styled.div`
  font-size: 11px;
`

function MyCheckbox() {

    const [options, setOptions] = useState({
        option1: false,
        option2: false,
        option3: false
    });

    const handleOptionChange = (option) => {
        setOptions(() => ({
            option1: option === "option1",
            option2: option === "option2",
            option3: option === "option3"
        }));
    }

    const optionList = Object.keys(options).map((option) => (
        <OptionValue key={option}>
            <Label>
                <input type="radio" checked={options[option]} onChange={() => handleOptionChange(option)} />
                {option === "option1" && "Lembrar-me"}
                {option === "option2" && "Lembrar minha senha"}
                {option === "option3" && "Entrar automaticamente"}
            </Label>
        </OptionValue>
    ));

    return (
        <OptionValue>
            {optionList}
        </OptionValue>
    );
}

export default MyCheckbox