import React from "react";
import style from './mapa.module.css'

const Mapa: React.FC = () => {
    return (
        <>
        <div className={style.mapa} id="mapa">
            <h1>Mapa de oficinas próximas</h1>
            <iframe id="mapa" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29248.370846338443!2d-46.84218622282647!3d-23.602670399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soficinas%20mais%20bem%20avaliadas%20perto%20de%20mim%20bem%20avaliados!5e0!3m2!1spt-BR!2sbr!4v1715851290369!5m2!1spt-BR!2sbr"loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
    )
}

export default Mapa