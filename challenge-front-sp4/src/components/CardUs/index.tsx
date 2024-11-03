import React from "react";
import style from './cardUs.module.css'
import Image from "next/image";

import github from "../../../public/Img/github.svg"
import linkedin from "../../../public/Img/linkedin.svg"
import instagram from "../../../public/Img/instagram.svg"

interface CardProps {
    linkImagem : string,
    linkGithub: string,
    linkLinkedin : string,
    linkInsta: string,
    nome: string,
    rm: string
}


const Card : React.FC<CardProps> = (props : CardProps) => {
    return (
        <>
        <div className={style.card}>
            <Image src={props.linkImagem} alt="Imagem do integrante" width={200} height={200} />
            <div className={style.social}>
                <a href={props.linkGithub} target="blank">
                    <Image src={github} alt=""/>
                </a>
                <a href={props.linkLinkedin} target="blank">
                    <Image src={linkedin} alt=""/>
                </a>
                <a href={props.linkInsta} target="blank">
                    <Image src={instagram} alt=""/>
                </a>
            </div>
            <div className={style.info}>
                <h4>{props.nome}</h4>
                <p>
                    RM: {props.rm}
                </p>
                <p>
                    1TDSPZ
                </p>
            </div>

        </div>
        </>
    )
}

export default Card