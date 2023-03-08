import styled from "styled-components";
import Input from "../input/input";
import Label from "../label/label";
import { CheckCircleOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import MyCheckbox from "../checkbox/checkbox"
import React from "react";

const FormContainer  = styled.form`
  background-color: ghostwhite;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 310px;
  height: 260px;
  max-width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 10px;
    top: 60%;
    width: 300px;
    height: 210px;
  }
`

export const linkStyle = {
    textDecoration: "none",
};

const { Option } = Select;

function LoginForm({value, onChange}) {
    const handleSelectChange = (value) => {
        onChange(value);
    };

    return (
        <FormContainer>
            <Input placeholder="Exemple555@hotmail.com"/>
            <Input placeholder="Insira sua senha"/>
            <Label>Entrar como: </Label>
            <Select style={{maxWidth: '100%', margin: '0',  width: '130px', fontSize: '20px', marginTop: '12px' }} defaultValue="available" value={value} onChange={handleSelectChange}>
                <Option value="available">
                    <CheckCircleOutlined style={{ color: '#36B37E', verticalAlign: 'middle' }} />
                    <span style={{ marginLeft: 5 }}>Disponível</span>
                </Option>
                <Option value="absent">
                    <CheckCircleOutlined style={{ color: '#ef0707', verticalAlign: 'middle' }} />
                    <span style={{ marginLeft: 5 }}>Ausente</span>
                </Option>
                <Option value="busy">
                    <CheckCircleOutlined style={{ color: '#FF8B00', verticalAlign: 'middle' }} />
                    <span style={{ marginLeft: 5 }}>Ocupado</span>
                </Option>
                <Option value="invisible">
                    <CheckCircleOutlined style={{ color: '#666666', verticalAlign: 'middle'}} />
                    <span style={{ marginLeft: 5 }}>Invisível</span>
                </Option>
            </Select>
            <MyCheckbox></MyCheckbox>
            <Label marginTopo='20px'>
                <a href="https://www.exemplo.com.br" style={linkStyle}>Esqueceu sua senha?</a>
            </Label>
        </FormContainer>

    )}

export default LoginForm