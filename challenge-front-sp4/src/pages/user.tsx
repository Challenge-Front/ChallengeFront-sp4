import Footer from "@/components/Footer"
import Header from "@/components/Header"
import style from "./user/user.module.css"
import { useState } from "react";
import { postCarro, putCarro } from "./user/action";

export default function User(){
    const [isNewCar, setIsNewCar] = useState(false);

    const toggleNewCar = () => {
        setIsNewCar(!isNewCar);
    };

    const [isNewAdress, setIsAdress] = useState(false);

    const toggleAdress = () => {
        setIsAdress(!isNewAdress);
    };
    return(
        <>
        <Header/>
        <main className={style.main}>
            <div>
                <h1>Configure seu Perfil</h1>
            </div>
            <div className={style.section}>
                <a className={style.titulo}>Adicione seu veículo</a>
                <label>
                    <input 
                    type="checkbox" 
                    checked={isNewCar} 
                    onChange={toggleNewCar} 
                    />
                    Alterar veículo ?
                </label> 
                <form> 
                    <label htmlFor="carModel">Marca do Veiculo: </label>
                    <input type="text" name="marcaCarro"/>
                    <label htmlFor="carModel">Modelo do veículo: </label>
                    <input type="text" name="modeloCarro"/>
                    <label htmlFor="carModel">Placa do Veiculo: </label>
                    <input type="text" name="placaCarro"/>
                    <label htmlFor="carModel">Ano do Veiculo: </label>
                    <input type="number" name="anoCarro"/>
                    <button formAction={isNewCar ? postCarro : putCarro} className= {style.btn}>Enviar</button>
                </form>
            </div>
            <div></div>
        </main>
        <Footer/>
        </>
    )
}