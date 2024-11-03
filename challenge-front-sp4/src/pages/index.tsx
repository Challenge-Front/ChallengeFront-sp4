import Footer from "../components/Footer";
import Formulario from "../components/Form";
import Header from "../components/Header";
import InfoProblem from "../components/InfoProblem";
import Mapa from "../components/Mapa";
import style from '../pages/home/home.module.css'; 

export default function Home(){
    return (
        <>
        <Header/>
        <main id={style.mainHome}>
            <h1 id={style.h1Home}>Home </h1>
            <InfoProblem/>
            <Formulario/>
            <Mapa/>
        </main>
        <Footer/>
        </>
    )
}