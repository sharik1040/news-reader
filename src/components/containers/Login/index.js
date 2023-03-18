import { LoginForm } from "../../forms/LoginForm/index";
import "./CustomLogin.styles.css";
import LoginImg from "../../../assets/images/login/img.jpg";

export const LoginContainer = () => {
    return (
        <div className="login-container">
            <div className="img-wrapper">
                <img src={LoginImg} alt="Freedom to Ukraine" id="image-section"/>
            </div>
            <div className="form-wrapper">
                <LoginForm />
            </div>
        </div>
    )
}