import React, { useState } from 'react';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import { Botao } from '../UI';
import {v4 as uuidv4 } from 'uuid';
import CurrencyInput from 'react-currency-input-field';
import styles from './Formulario.module.css'
import styled from 'styled-components';

const ContainerValor = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TituloFormulario = styled.h3`
    text-align: center;
    margin-bottom: 1rem;

`


export default (props) => {
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');
    const [origem, setOrigem] = useState('');
    const [categoria, setCategoria] = useState('Restaurante');
    const id = uuidv4();

    const handleSubmit = (e) => {
        e.preventDefault();
                
        props.aoCadastrar({
            valor, data, origem, categoria, id
        })

        setValor('')
        setData('')
        setOrigem('')
        setCategoria('')


    };

    return (
        <form onSubmit={handleSubmit}>
            <TituloFormulario>Como você torrou seu dinheiro agora?</TituloFormulario>
            <ContainerValor>
                <label>Valor</label>
                <CurrencyInput
                    className={styles.campoValor}
                    intlConfig={{ locale: 'br-BR', currency: 'BRL' }}
                    label='Valor'
                    decimalScale={2}
                    allowNegativeValue={false}
                    placeholder='R$'
                    value={valor}
                    groupSeparator='.'
                    decimalSeparator=','
                    prefix='R$'
                    onValueChange={value => setValor(value)}
                />

            </ContainerValor>

            <Campo
                
                obrigatorio={true}
                type="date"
                value={data}
                label='Data'
                placeholder='01/01/2000'
                onChange={value => setData(value)}
            />  

            <Campo
                obrigatorio={true}
                type="text"
                value={origem}
                label='Origem'
                placeholder='Uber, Shopee, Ifood'
                onChange={value => setOrigem(value)}
            /> 

            <ListaSuspensa
                    obrigatorio={true} 
                    label = 'Categoria' 
                    valor = {categoria}
                    onChange = {value => setCategoria(value)} 
                />

            <Botao type="submit">Adicionar</Botao>
        </form>
    );
};


