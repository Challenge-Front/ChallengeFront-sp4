import React, { useState } from "react";
import style from './form.module.css';
import axios from 'axios';

interface Carro {
    marca: string;
    ano: number;
    modelo: string;
    placa: string;
    sintoma: string;
}

const Formulario: React.FC = () => {
    const [carData, setCarData] = useState<Carro | null>(null); 
    const [message, setMessage] = useState("");
    
    const data = new Date();
    const anoAtual = data.getFullYear();
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const dadosCarro = {
            marca: formData.get("carName"),
            ano: Number(formData.get("anoFabricacao")),
            modelo: formData.get("carModel"),
            placa: formData.get("placaCarro"),
            sintoma: formData.get("sintoma"),
            foto: formData.get("foto_painel"),
        };

        try {
            
            const response = await axios.post('https://7899aedb-4b1b-498b-9bf4-165c80d4eb06-00-2za5rbz6t0j10.spock.replit.dev/diagnostico', dadosCarro);
            
            if (response.data) {
                setCarData(response.data); 
                setMessage(""); 
            } else {
                setMessage("Nenhum dado encontrado. Por favor, faça um diagnóstico.");
                setCarData(null); 
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            setMessage("Erro ao buscar dados. Tente novamente mais tarde.");
        }
    };

    return (
        <>
            <div id={style.divF}>
                <h1 id="infoProblem">Formulário</h1>
                <form method="submit" className={style.form} onSubmit={handleSubmit}>
                    <div className={style.form1}>
                        <label htmlFor="carName">Marca do veículo: </label>
                        <input type="text" id="carName" name="carName" />
                        <label htmlFor="anoFabricacao">Ano de fabricação: </label>
                        <input type="number" id="anoFabricacao" name="anoFabricacao" max={anoAtual} min="1910" />
                        <label htmlFor="carModel">Modelo do veículo: </label>
                        <input type="text" id="carModel" name="carModel" />
                        <label htmlFor="placaCarro">Placa do Veiculo: </label>
                        <input type="text" id="placaCarro" name="placaCarro" />
                    </div>
                    <div className={style.form2}>
                        <label htmlFor="foto_painel">Anexe a foto do painel de seu carro</label>
                        <input type="file" id="foto_painel" name="foto_painel" />
                        <label htmlFor="sintoma">Descreva os sintomas do seu veículo: </label>
                        <input type="text" name="sintoma" />
                        <button className={style.btn} type="submit">Enviar</button>
                        <button className={style.btn} type="reset">Limpar</button>
                    </div>
                </form>
                {carData && (
                    <div>
                        <h2>Dados do Veículo:</h2>
                        <p>Marca: {carData.marca}</p>
                        <p>Ano: {carData.ano}</p>
                        <p>Modelo: {carData.modelo}</p>
                        <p>Placa: {carData.placa}</p>
                        <p>Sintomas: {carData.sintoma}</p>
                    </div>
                )}
                {message && <p>{message}</p>}
            </div>
        </>
    );
}

export default Formulario;
