import Footer from "@/components/Footer";
import Header from "@/components/Header";
import style from "./user/user.module.css";
import { useState, FormEvent } from "react";
import axios from "axios";

export default function User() {

const baseUrl = 'http://localhost:8080/ChallengeJava_war/api/rest/';

const requestBase = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'privatekey',
  },
});


async function postCarro(formData: FormData) {
  const data = {
    placa: formData.get('email') as string,
    marca: formData.get('password') as string,
    modelo: formData.get('cpf') as string,
    ano: formData.get('idade') as unknown as number,
  };

  try {
    const response = await requestBase.get(`carro/${data.placa}`);
    if (response.data.cpf == null) {
      await requestBase.post(`carro/create`, {
        placa: data.placa,
        marca: data.marca,
        modelo: data.modelo,
        ano: data.ano,
      });
      alert("Dados inseridos com sucesso");
    } else {
      alert("Placa já cadastrada");
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert("Erro na requisição");
  }
}

async function putCarro(formData: FormData) {
  const data = {
    placa: formData.get('placaCarro') as string,
    marca: formData.get('marcaCarro') as string,
    modelo: formData.get('modeloCarro') as string,
    ano: formData.get('idade') as unknown as number,
  };

  try {
    const response = await requestBase.get(`carro/${data.placa}`);
    if (response.data.cpf != null) {
      await requestBase.put(`carro/alter/${data.placa}`, {
        placa: data.placa,
        marca: data.marca,
        modelo: data.modelo,
        ano: data.ano,
      });
      alert("Dados alterados com sucesso");
    } else {
      alert("Placa não encontrada");
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert("Erro na requisição");
  }
}
    const [isNewCar, setIsNewCar] = useState(false);
    const [formData, setFormData] = useState({
        marcaCarro: "",
        modeloCarro: "",
        placaCarro: "",
        anoCarro: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleCarSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        formDataToSend.append("marcaCarro", formData.marcaCarro);
        formDataToSend.append("modeloCarro", formData.modeloCarro);
        formDataToSend.append("placaCarro", formData.placaCarro);
        formDataToSend.append("anoCarro", formData.anoCarro);

        try {
            if (isNewCar) {
                await postCarro(formDataToSend);
            } else {
                await putCarro(formDataToSend);
            }
            alert("Dados enviados com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            alert("Ocorreu um erro ao enviar os dados. Tente novamente.");
        }
    };

    return (
        <>
            <Header />
            <main className={style.main}>
                <div>
                    <h1>Configure seu Perfil</h1>
                </div>
                <div className={style.section}>
                    <h2 className={style.titulo}>Adicione seu veículo</h2>
                    <label>
                        <input
                            type="checkbox"
                            checked={isNewCar}
                            onChange={() => setIsNewCar(!isNewCar)}
                        />
                        Alterar veículo?
                    </label>
                    <form onSubmit={handleCarSubmit}>
                        <label htmlFor="marcaCarro">Marca do Veículo:</label>
                        <input
                            type="text"
                            name="marcaCarro"
                            value={formData.marcaCarro}
                            onChange={handleInputChange}
                        />
                        
                        <label htmlFor="modeloCarro">Modelo do Veículo:</label>
                        <input
                            type="text"
                            name="modeloCarro"
                            value={formData.modeloCarro}
                            onChange={handleInputChange}
                        />
                        
                        <label htmlFor="placaCarro">Placa do Veículo:</label>
                        <input
                            type="text"
                            name="placaCarro"
                            value={formData.placaCarro}
                            onChange={handleInputChange}
                        />
                        
                        <label htmlFor="anoCarro">Ano do Veículo:</label>
                        <input
                            type="number"
                            name="anoCarro"
                            value={formData.anoCarro}
                            onChange={handleInputChange}
                        />
                        
                        <button type="submit" className={style.btn}>
                            Enviar
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}