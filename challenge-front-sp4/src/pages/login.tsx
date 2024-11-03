import Link from 'next/link';
import style from "./login/login.module.css";
import { useState } from "react";


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
                        <img src="../../../public/Img/logo_letra_branca.png" alt=""/>
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
                                <input className={style.input} type="text" placeholder="CPF/CNPJ"/>
                            </label>
                            
                            <label className={style.label_input} >
                                <input className={style.input} type="email" placeholder="Email"/>
                            </label>
                            
                            <label className={style.label_input}>
                                <input className={style.input} type="password" placeholder="Senha"/>
                            </label>
                            
                            
                                
                        </form>
                        <Link href="/"><button className={`${style.btn} ${style.btn_second}`}>Cadastrar</button> </Link>
                    </div>
                </div>
                <div className={`${style.content} ${style.second_content}`}>
                    <div className={style.first_column}>
                        <img src="../../../public/Img/logo_letra_branca.png" alt=""/>
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
                        <Link href="/"><button className= {`${style.btn} ${style.btn_second}`}>Entrar</button></Link>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}