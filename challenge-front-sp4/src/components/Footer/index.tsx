import React from "react";
import styles from "./footer.module.css"
import Link from 'next/link';
import Image from 'next/image';

import lg_letras_azuis from "../../../public/Img/logo_letra_azul.png"
import favicon_chip from "../../../public/Img/favicon_chip.svg"
import linkedin from "../../../public/Img/linkedin.svg"
import instagram from "../../../public/Img/instagram.svg"
import gmail from "../../../public/Img/gmail.svg"
import facebook from "../../../public/Img/facebook.svg"

const Footer : React.FC = () => {
    return (
        <>
        <footer className={styles.footer}>
            <Link href="/home">
                <Image src={lg_letras_azuis} alt="Logo das letras azuis"/>
            </Link>
            <div className={styles.contatos}>
                <ul className={styles.pages}>
                    <li>
                        <Image src={favicon_chip} alt="" id={styles.icon}/>
                        <Link href="/aboutUs">Sobre Nós</Link>
                    </li>
                    <li>
                        <Image src={favicon_chip} alt="" id={styles.icon}/>
                        Oficinas da Região
                    </li>
                    <li>
                        <Image src={favicon_chip} alt="" id={styles.icon}/>
                        Informar Problema
                    </li>
                </ul>
                <ul className={styles.contact}>
                    <li>
                        <Image src={linkedin} alt="Linkedin"/>
                    </li>
                    <li>
                        <Image src={gmail} alt="Gmail"/>
                    </li>
                    <li>
                        <Image src={facebook} alt="Facebook"/>
                    </li>
                    <li>
                        <Image src={instagram} alt="Instagram"/>
                    </li>
                </ul>
            </div>
            
        </footer>
        </>
    )
}

export default Footer