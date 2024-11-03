import React from "react";
import style from './form.module.css'


let data = new Date
let anoAtual = data.getFullYear
let numberAnoAtual = Number(anoAtual)
const Formulario:React.FC = () => {
    return(
        <>
        <div id={style.divF}>
            <h1  id="infoProblem">Formulário</h1>
            <form method="submit" className={style.form} >
                <div className={style.form1}>
                    <label htmlFor="carName">Marca do veículo: </label>
                    <input type="text" id="carName" />
                    <label htmlFor="data">Ano de fabricação: </label>
                    <input type="number" max={numberAnoAtual} min="1910" />
                    <label htmlFor="carModel">Modelo do veículo: </label>
                    <input type="text" id="carModel"/>
                    <label htmlFor="carModel">Placa do Veiculo: </label>
                    <input type="text" id="carModel"/>
                </div>
                <div className={style.form2}>
                    <label htmlFor="foto_painel">Anexe a foto do painel de seu carro</label>
                    <input type="file" id={style.foto_painel}/>
                    <label htmlFor="sintoma">Descreva os sintomas do seu veículo: </label>
                    <input type="text" name="sintoma" />
                    <button className={style.btn} type="submit">Enviar</button>
                    <button className={style.btn} type="reset">Limpar</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Formulario