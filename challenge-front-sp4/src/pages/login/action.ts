import axios from "axios";
import { NextRouter } from "next/router";

const baseUrl = 'http://localhost:8080/ChallengeJava_war/api/rest/';

const requestBase = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'privatekey',
  },
});

export async function login(formData: FormData, router: NextRouter) {
  const data = {
    senha: formData.get('password') as string,
    cpf: formData.get('cpf') as string,
  };
  try {
    const response = await requestBase.get(`cliente/${data.cpf}`);
    if (response.data.cpf === null) {
      alert("Usuário não encontrado");
      return;
    }
    if (data.senha === response.data.senha) {
      router.push('/home');
    } else {
      alert("Senha incorreta, tente novamente.");
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert("Erro na requisição");
  }
}

export async function signUp(formData: FormData, router: NextRouter) {
  const data = {
    email: formData.get('email') as string,
    senha: formData.get('password') as string,
    cpf: formData.get('cpf') as string,
    idade: formData.get('idade') as unknown as number,
    nome: formData.get('nome') as string,
  };

  try {
    const response = await requestBase.get(`cliente/${data.cpf}`);
    if (response.data.cpf == null) {
      await requestBase.post(`cliente/create`, {
        nome: data.nome,
        cpf: data.cpf,
        senha: data.senha,
        telefone: null,
        email: data.email,
        idade: data.idade,
      });
      alert("Dados inseridos com sucesso");
      router.push("/home");
    } else {
      alert("CPF já cadastrado");
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert("Erro na requisição");
  }
}
