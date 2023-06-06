import React from "react"
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import { IconeTema } from '../Components/UI/index.js'


export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt='Icone restaurante' />,
        Utilidades: <IconeTema src={utilidades} alt='Icone utilidades' />,
        Saúde: <IconeTema src={saude} alt='Icone saude' />,
        Transporte: <IconeTema src={transporte} alt='Icone transporte' />,
        default: <IconeTema src={outros} alt='Icone outros' />,

    }

    return Images[type] || Images.default
}