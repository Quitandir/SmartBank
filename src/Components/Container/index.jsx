import React, { useState } from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";


const Container = styled.div`
  background-color: ${({theme}) => theme.body};
  padding: 0px 15vw; 
  min-height: 90vh;
  `
  
const Conteudo = styled.section`
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap;
  justify-content: space-between;
  color: ${({theme}) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column; 
    }
`

export default () => {

  const [saldo, setSaldo] = useState(0)

  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta saldo={saldo} aoMudarSaldo={setSaldo}/>
        <Extrato saldo={saldo} aoMudarSaldo={setSaldo}/>
        
      </Conteudo>
    </Container>
  );
};


