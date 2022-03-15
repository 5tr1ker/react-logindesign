import { Fragment } from "react"
import '../../_style/loginScreen.css'

const Register = () => {
    return (
        <Fragment>
            <div className="loginFrame">
                <div className="registerArea">
                    <form>
                        <input type="text" className="idInput" placeholder="Username"/>
                        <input type="password" className="idInput" placeholder="password"/>
                        <input type="password" className="idInput" placeholder="Confirm password"/><br/>
                        <label className="showPw">
                        <input type="checkbox" className="showPw"/> 비밀번호 표시
                        </label><br/>
                        <span className="pwChecking">비밀번호가 일치하지 않습니다.</span>
                        <button type="submit" className="sbButton">회원가입</button>
                        <button type="submit" className="sbButton returnButton">돌아가기</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Register;

