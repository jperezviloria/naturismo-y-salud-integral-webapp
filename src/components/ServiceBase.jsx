import react from "react";
import Service from "./Services";
import { ServiceBaseStyle } from "../style/css";

export default class ServiceBase extends react.Component{
    render(){
        return(
            <ServiceBaseStyle id="service">
                <Service
                title="Titulo 1"
                image="https://www.flaticon.es/svg/static/icons/svg/3846/3846650.svg"
                description="Conceptualización, diseño, desarrollo, instrumentación y evaluación de cursos, talleres y programas de formación en el ámbito del naturismo ecológico y de la salud integral naturopática."
                price="30$ USD"/>
                <Service
                title="Titulo 2"
                image="https://www.flaticon.com/svg/static/icons/svg/3089/3089323.svg"
                description="Asesoría específica en cuanto al uso terapéutico de plantas y de productos naturales, en el tratamiento de diversas afectaciones de salud."
                price="20$ USD"/>
                <Service
                title="Titulo 3"
                image="https://www.flaticon.com/svg/static/icons/svg/2739/2739423.svg"
                description="Asesoria técnica y acompañamiento en cuanto al uso terapéutico y los beneficios en la salud del agua de mar. Ello abarca desde las fuentes de información más sólidas y confiables, hasta la multiplicidad de beneficios que aporta el agua de mar y la talasoteraapia, pasando por proceso de recolección en forma inocua y segura en los lugares apropiados, hasta su depósito y procesamiento para el consumo diario"
                price="20$ USD"/>
            </ServiceBaseStyle>
        )
    }
}