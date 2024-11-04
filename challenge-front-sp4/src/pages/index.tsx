import Link from 'next/link';
import style from "./login/login.module.css";
import { useState } from "react";
import axios from "axios";
import { NextRouter } from "next/router";
import Image from 'next/image';

import lg_letra_branca from '../../public/Img/logo_letra_branca.png';
import { useRouter } from 'next/router';

export default function Login(){
    

const baseUrl = 'http://localhost:8080/ChallengeJava_war/api/rest/';

const requestBase = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'privatekey',
  },
});

async function login(formData: FormData, router: NextRouter) {
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

async function signUp(formData: FormData, router: NextRouter) {
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

    const [signedUp, setSignedUp] = useState<boolean>(false);
    const router = useRouter();

    const cadastrar = () => {
        setSignedUp(true);
    };

    const logar = () => {
        setSignedUp((prevSignedUp) => !prevSignedUp);
    };

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        await login(formData, router);
    };

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        await signUp(formData, router);
    };

    return(
        <>
        <main className={`${style.main} ${signedUp ? style.sign_up_js : style.sign_in_js}`}>
            <div className={style.container}>
                <div className={`${style.content} ${style.first_content}`}>
                    <div className={style.first_column}>
                        <Image src={lg_letra_branca} alt="" />
                        <h2 className={`${style.title} ${style.title_primary}`}>Bem-vindo de volta!</h2>
                        <p className={`${style.description} ${style.description_primary}`}>Se você já possui uma conta</p>
                        <p className={`${style.description} ${style.description_primary}`}>clique no botão abaixo</p>
                        <button id="signIn" className={`${style.btn} ${style.btn_primary}`} onClick={logar}>Login</button>
                    </div>    
                    <div className={style.second_column}>
                        <h2 className={`${style.title} ${style.title_second}`}>Criar uma conta</h2>
                        <p className={`${style.description} ${style.description_second}`}>ou use seu email para se cadastrar:</p>
                        <form className={style.form} onSubmit={handleSignUp}>
                            <label className={style.label_input}>
                                <input required name='cpf' className={style.input} type="text" placeholder="CPF/CNPJ"/>
                            </label>

                            <label className={style.label_input}>
                                <input required name='nome' className={style.input} type="text" placeholder="Nome Completo"/>
                            </label>

                            <label className={style.label_input}>
                                <input required type="number" name="idade" min="18" max="120" placeholder="Digite sua idade" />
                            </label>
                            
                            <label className={style.label_input}>
                                <input required name='email' className={style.input} type="email" placeholder="Email"/>
                            </label>
                            
                            <label className={style.label_input}>
                                <input required name='password' className={style.input} type="password" placeholder="Senha"/>
                            </label>
                            <Link href="/home"><button type="submit" className={`${style.btn} ${style.btn_second}`}>Cadastrar</button></Link> 
                        </form>
                    </div>
                </div>
                <div className={`${style.content} ${style.second_content}`}>
                    <div className={style.first_column}>
                        <Image src={lg_letra_branca} alt="" />
                        <h2 className={`${style.title} ${style.title_primary}`}>Olá!</h2>
                        <p className={`${style.description} ${style.description_primary}`}>Crie uma conta agora</p>
                        <p className={`${style.description} ${style.description_primary}`}>e entre nessa jornada conosco</p>
                        <button id="signUp" className={`${style.btn} ${style.btn_primary}`} onClick={cadastrar}>cadastrar</button>
                    </div>
                    <div className={style.second_column}>
                        <h2 className={`${style.title} ${style.title_second}`}>Entre para saber mais:</h2>
                        <p className={`${style.description} ${style.description_second}`}>use sua conta de email: </p>
                        <form className={style.form} onSubmit={handleLogin}>
                            <label className={style.label_input}>
                                <input className={style.input} required name="email" type="email" placeholder="Email"/>
                            </label>
                        
                            <label className={style.label_input}>
                                <input className={style.input} required name="password" type="password" placeholder="Senha"/>
                            </label>
                            
                            <button type="submit" className={`${style.btn} ${style.btn_second}`}>Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}
