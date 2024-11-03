import axios from "axios";
import { useRouter } from "next/router";

const baseUrl = 'http://localhost:8080/ChallengeJava_war/api/rest/'

const requestBase = axios.create({
    
    baseURL: baseUrl,
    
    headers: {
    
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers' : 'privatekey'
    
    },
    
});

export async function getCarro(formData : FormData) {
    const router = useRouter();
    const data = {
        senha: formData.get('password') as string,
        cpf: formData.get('cpf') as string,
    }
    try {
      const response = await requestBase.get(`cliente/${data.cpf}`);
      if(response.data.cpf === null){
        alert("Usuário não encontrado")
        return
      }
      if(data.senha == response.data.senha){
        router.push('/home');
      }else{
        alert("Senha incorreta, tente novamente.")
      }
      return response
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert("Erro na requisição")
    }
    
};
export async function postCarro(formData : FormData) {
    const router = useRouter();
    const data = {
        placa : formData.get('email') as string,
        marca: formData.get('password') as string,
        modelo: formData.get('cpf') as string,
        ano : formData.get('idade') as unknown as number,


    }
    try {
        const response = await requestBase.get(`carro/${data.placa}`);
        if(response.data.cpf == null){
            const post = await requestBase.post(`carro/create`,{
            placa : data.placa,
            marca: data.marca,
            modelo: data.modelo,
            ano : data.ano
            })
            alert("Dados inseridos com sucesso")
        }else{
            alert("Placa já cadastrada")
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert("Erro na requisição")
    }
}
export async function putCarro(formData : FormData) {
    const router = useRouter();
    const data = {
        placa : formData.get('placaCarro') as string,
        marca: formData.get('marcaCarro') as string,
        modelo: formData.get('modeloCarro') as string,
        ano : formData.get('idade') as unknown as number,

    }
    try {
        const response = await requestBase.get(`carro/${data.placa}`);
        if(response.data.cpf != null){
            const put = await requestBase.put(`carro/alter/${data.placa}`,{
            placa : data.placa,
            marca: data.marca,
            modelo: data.modelo,
            ano : data.ano
            })
            alert("Dados alterados com sucesso")
        }else{
            alert("Placa não encontrada")
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert("Erro na requisição")
    }
}