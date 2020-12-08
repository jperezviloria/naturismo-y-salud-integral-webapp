import react from "react";
import { ContactFormStyle } from "../style/css";

export default class ContactForm extends react.Component{
    render(){
        return (
            <ContactFormStyle id="contact">
                <h2>Haz tu consulta aca</h2>
                <form action="">

                    <input type="text" placeholder="nombre" maxLength="35"/>
                    <select name="" id="">
                        <option value="no selecciona genero">Genero</option>
                        <option value="femenino">Femenino</option>
                        <option value="masculino">Masculino</option>
                    </select>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Coloque su consulta aca"></textarea>
                    <button type="submit">ENVIAR</button>

                </form>
            </ContactFormStyle>
        )
    }
}