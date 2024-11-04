import Footer from "@/components/Footer";
import Header from "@/components/Header";
import style from "./user/user.module.css";
import { useState, FormEvent } from "react";
import { postCarro, putCarro } from "./user/action";

export default function User() {
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
}