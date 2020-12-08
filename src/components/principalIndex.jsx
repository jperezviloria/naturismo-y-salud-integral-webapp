import react from "react";
import Welcome from "./welcomeComponent";
import ServiceBase from "./ServiceBase";
import ContactForm from "./ContactFrom";

import HeaderComponent from "./header"; 
import { Principal } from "../style/css";



export default class PrincipalIndex extends react.Component{
    render(){

        return(
            <Principal>
                <div className="content">
                    <Welcome/>
                    <ServiceBase/>
                    <ContactForm/>
                </div>
                <HeaderComponent/>
            </Principal>
        )
    }
}