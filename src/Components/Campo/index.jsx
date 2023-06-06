import React from 'react';
import styled from 'styled-components';

const CampoStyled = styled.input`
    margin: 0.5rem;
    background-color: white;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 50%;
    border: none;
    text-align: center;
    border-radius: 5px;
    outline:none;
    border-radius: 10px;
    box-sizing: border-box;
    
`

const ContainerInput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Campo = (props) => {
    
    const aoDigitado = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <ContainerInput> 
            <label>
                {props.label}
            </label>
            <CampoStyled 
                type={props.type}
                value={props.value} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={props.placeholder} 
            />
        </ContainerInput>
    ) 
}

export default Campo