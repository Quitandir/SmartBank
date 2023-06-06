import React from "react";
import styled from "styled-components";

const ListaStyled = styled.select`
    margin: 0.5rem;
    background-color: white;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 50%;
    border: none;
    focus: none;
    text-align: center;
    outline:none;
    border-radius: 10px;
    
    
`

const ContainerInput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ListaSuspensa = (props) => {
    return (
        <ContainerInput>
            <label>{props.label}</label>
            <ListaStyled onChange={evento => props.onChange(evento.target.value)} required={props.required} value={props.value}>
                    <option value="Restaurante">Restaurante</option>
                    <option value="Utilidades">Utilidades</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Outros">Outros</option>                
            </ListaStyled>
        </ContainerInput>
    )
}

export default ListaSuspensa