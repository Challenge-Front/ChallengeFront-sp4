import Card from "../components/CardUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../pages/aboutUs/aboutUs.modules.css';
import Image from "next/image";

import github_branco from '../../public/Img/github_branco.svg';

export default function AboutUs(){
    return (
        <>
        <Header/>
        <main id="mainAbt">
            <h1>Sobre nós</h1>
            <div id="rep">
                <a href="https://github.com/Challenge-Front/Challenge-Front-Semestre2" target="blank">
                    Acesse nosso repositório
                    <Image src={github_branco} alt=""/>
                </a>
            </div>
            <div id="cards">
                <Card
                linkImagem="/Img/ft_gf.jpeg" 
                nome="Guilherme Felipe Souza"
                linkGithub="https://github.com/GuiFelSS" 
                linkLinkedin="https://www.linkedin.com/in/guilherme-felipe-da-silva-souza/"
                linkInsta="https://www.instagram.com/guilherme_flp/"
                rm="558282"
                />
                <Card
                linkImagem="/Img/ft_jv.jpeg"
                nome="João Vitor Nascimento"
                linkGithub="https://github.com/joaosilvaz"
                linkLinkedin="https://www.linkedin.com/in/jo%C3%A3o-vitor-da-silva-5677202b1/"
                linkInsta="https://www.instagram.com/joaovitoor._/"
                rm="555694"
                />
                <Card
                linkImagem="/Img/ft_ga.png"
                nome="Guilherme Alves Pedroso"
                linkGithub="https://github.com/guialvesped/guialvesped"
                linkLinkedin="https://www.linkedin.com/in/guilherme-alves-pedroso-8474aa276/"
                linkInsta="https://www.instagram.com/g__alves_/"
                rm="555357"
                />
            </div>
        </main>
        <Footer/>
        </>
    )
}