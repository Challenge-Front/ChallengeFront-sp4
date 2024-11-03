import React from "react";
import style from './infoProb.module.css'

import car_side from '../../../public/Img/car-side.svg' 
import Image from "next/image";


const InfoProblem : React.FC = () => {
    return (
        <>
        <div className={style.ip} >
            <div className={style.text}>
                    <p>
                        <a>Como funciona:<Image src={car_side} alt="Icon"/></a>
                        Nos informe a marca, ano e versão do veículo, aponte a camera de seu celular para o painel
                        de seu veículo, fotografe e nos envie. Após isso realize a descrição dos sintomas que forem
                        notáveis do seu veículo como barulhos, não estar ligando, luzes apagadas, fumaça ou qualquer
                        outro sintoma descritível. Nós analisaremos o que foi enviado e lhe encaminharemos para as 
                        conclusões da nossa análise:
                    </p>
                    <a href="#infoProblem">
                        <button>
                            Informar problema
                        </button>
                    </a>
            </div>
            <div className={style.ft_carro}>
            </div>
        </div>
        </>
    )
}

export default InfoProblem