import react from "react";
import { ServiceStyle } from "../style/css";

export default class Service extends react.Component {
    render() {
        return (
            <ServiceStyle>
                <h3>{this.props.title}</h3>
                <img src={this.props.image} alt="" />
                <p>{this.props.description}</p>
                <p className="price">{ this.props.price}</p>
            </ServiceStyle>
        )
    }
}