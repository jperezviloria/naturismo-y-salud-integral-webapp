import react from "react";
import { WelcomeStyle } from "../style/css";

export default class Welcome extends react.Component{
    render(){
        return(
            <WelcomeStyle id="welcome">
                <img src="https://www.flaticon.com/svg/static/icons/svg/499/499870.svg" alt=""/>
                <div>
                <p>Naturismo y Salud Integral es una noción holística, integrativa, del naturismo ecológico y de la salud integral como reto. A través de este espacio se ofrecen servicios de asesoría técnica y acompañamiento amigable en el ámbito naturopático, desde la perspectiva del ser humano como un todo, en unidad de cuerpo, mente y espíritu.</p>
                <p>Buscamos mostrar lo complejo de forma sencilla y accesible, para que cada quien pueda autogestionarse sus propios procesos, con una orientación profesional segura y confiable.</p>

                </div>
            </WelcomeStyle>
        )
    }
}