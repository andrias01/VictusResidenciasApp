import Header from "./Header"
import '../cssComponents/LoginAdmin.css'
const LoginAdmin = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h2 className="text-initial">
                    Iniciar Sesión 'Como Admin'
                </h2>
                <form>
                    <div className="information">
                        <label className="textInput" htmlFor="email">
                            Correo o usuario
                        </label>
                        <input  id="email" type="text" />
                    </div>
                    <div className="information">
                        <label className="textInput" htmlFor="password">
                            Contraseña
                        </label>
                        <input id="password" type="password" />
                    </div>
                    <div className="linksWithButton">
                        <a className="linkRegister" href="#">
                            Registrarse
                        </a>
                        <button className="ButtonAccept" type="submit">
                            Aceptar
                        </button>
                        <a className="linkForgetPassword" href="#">
                            ¿Olvidó la contraseña?
                        </a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginAdmin
