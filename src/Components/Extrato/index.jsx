import React, { useState } from 'react';
import { Box, Botao, Detalhe } from '../UI';
//import extratoLista from '../../info.js'
import Itens from '../Itens';
import Formulario from '../Formulario';
import styled from 'styled-components';

const ExtratoContainer = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const BoxExtrato = styled(Box)`
    display: flex;
    justify-content: flex-end;

`

export default function Extrato({ saldo, aoMudarSaldo }) {

    const [itensExtrato, setItensExtrato] = useState([])

    // Tentar criar uma função externa aos componentes que é chamada quando add novo item ou quando extrato é criado com setSaldo

    let totalExtrato = 0;

    itensExtrato.forEach(element => {
        totalExtrato += parseFloat(element.valor)
    })


    const debitarExtratoDoSaldo = () => {
        aoMudarSaldo(saldo - totalExtrato)
        setItensExtrato([])
    }

    return (
        <ExtratoContainer>
            <BoxExtrato>
                {itensExtrato.map(({ id, categoria, origem, valor, data }) => {
                    return (
                        <Itens key={id} categoria={categoria} origem={origem} valor={valor} data={data}></Itens>
                    );
                })}
                <div>
                    <Detalhe>Total: R${totalExtrato}</Detalhe>
                    <span></span>
                    <Botao onClick={debitarExtratoDoSaldo}>Debitar do saldo</Botao>
                </div>
            </BoxExtrato>
            <Box>
                <Formulario
                    aoCadastrar={itemExtrato => setItensExtrato([...itensExtrato, itemExtrato])}
                />
            </Box>
        </ExtratoContainer>
    )
}

