import React, { useState } from "react";
import styled from "styled-components";
import styles from '../Formulario/Formulario.module.css'
import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import { Icone, Box, Botao, Saldo, Detalhe, IconeTema } from '../UI'
import CurrencyInput from "react-currency-input-field";


const ContaStyled = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const ContainerAddSaldo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`

const IconeMargem = styled(Icone)`
  margin-top:2px;
`

const ContainerBtnPriv = styled.div`
  width: 100%;
`

const FormularioAddSaldo = styled.form`
  text-align: center;
`

const Conta = ({ saldo, aoMudarSaldo }) => {

  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  const [valorAAdicionar, setValorAAdiconar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let saldoComoNumero = parseFloat(saldo)

    aoMudarSaldo(saldoComoNumero += parseFloat(valorAAdicionar))
    setValorAAdiconar('')
  };


  return (

    
      <ContaStyled>

        <div style={{ fontSize: "26px", padding: "20px 0" }}>
          <h2>Conta</h2>
          Saldo disponível{" "}
          <span>
            <IconeTema src={dinheiro} alt="Ícone Saldo" />
          </span>
          {toggleState ? (
            <Saldo>
              <Detalhe>R$</Detalhe>{parseFloat(saldo)}
            </Saldo>
          ) : null}

          <ContainerBtnPriv>
            <Botao onClick={toggleHandler}>
              <IconeMargem
                src={toggleState ? privado : olho_icone}
                alt="Privacidade do Saldo"
              />
            </Botao>

          </ContainerBtnPriv>
        </div>

        <ContainerAddSaldo>
          <h3>Mais dinheirinhos?</h3>
          <FormularioAddSaldo onSubmit={handleSubmit}>
            <CurrencyInput
              className={styles.campoValor}
              intlConfig={{ locale: 'br-BR', currency: 'BRL' }}
              label='Adicionar saldo'
              allowNegativeValue={false}
              decimalScale={2}
              groupSeparator='.'
              decimalSeparator=','
              value={valorAAdicionar}
              prefix='R$'
              placeholder='R$'
              onValueChange={value => setValorAAdiconar(value)}
            />
            <Botao type="submit">Adicionar Saldo</Botao>

          </FormularioAddSaldo>
        </ContainerAddSaldo>
      </ContaStyled>

    
  )
};

export default Conta;
