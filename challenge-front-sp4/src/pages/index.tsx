import Link from 'next/link';
import style from "./login/login.module.css";
import { useState } from "react";
import { login, signUp } from './login/action';
import Image from 'next/image';

import lg_letra_branca from '../../public/Img/logo_letra_branca.png'

export default function Login(){
    const [signedUp, setSignedUp] = useState<boolean>(false)
    const cadastrar = () => {
        setSignedUp(true)
    }
    const logar = () => {
        setSignedUp((prevSignedUp) => !prevSignedUp)
    }
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
                        <form className={style.form }>
                            <label className={style.label_input}>
                                <input name='cpf' className={style.input} type="text" placeholder="CPF/CNPJ"/>
                            </label>

                            <label className={style.label_input}>
                                <input name='nome' className={style.input} type="text" placeholder="Nome Completo"/>
                            </label>

                            <label className={style.label_input}>
                                <input type="number" name="idade" min="18" max="120" placeholder="Digite sua idade" />
                            </label>
                            
                            <label className={style.label_input} >
                                <input name='email' className={style.input} type="email" placeholder="Email"/>
                            </label>
                            
                            <label className={style.label_input}>
                                <input name='password' className={style.input} type="password" placeholder="Senha"/>
                            </label>
                            
                            
                                
                        </form>
                        <Link href="/home"><button formAction={signUp} className={`${style.btn} ${style.btn_second}`}>Cadastrar</button> </Link>
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
                        <form className={style.form }>
                        
                            <label className= {style.label_input} >
                                <input className={style.input} type="email" placeholder="Email"/>
                            </label>
                        
                            <label className={style.label_input} >
                                <input className={style.input} type="password" placeholder="Senha"/>
                            </label>
                        </form>
                        <Link href="/home"><button formAction={login} className= {`${style.btn} ${style.btn_second}`}>Entrar</button></Link>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}