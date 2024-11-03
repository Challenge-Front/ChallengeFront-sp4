import React from "react";
import styles from "./footer.module.css"
import Link from 'next/link';
import Image from 'next/image';

import lg_letras_azuis from "../../../public/Img/logo_letra_azul.png"
import favicon_chip from "../../../public/Img/favicon_chip.svg"

const Footer : React.FC = () => {
    return (
        <>
        <footer className={styles.footer}>
            <Link href="/">
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
                    <li><img src="../../../public/Img/linkedin.svg" alt="" /></li>
                    <li>
                        <img src="../../../public/Img/gmail.svg" alt="" />
                    </li>
                    <li>
                        <img src="../../../public/Img/facebook.svg" alt="" />
                    </li>
                    <li>
                        <img src="../../../public/Img/instagram.svg" alt="" />
                    </li>
                </ul>
            </div>
            
        </footer>
        </>
    )
}

export default Footer