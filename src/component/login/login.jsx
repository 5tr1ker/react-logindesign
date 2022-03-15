import '../../_style/loginScreen.css'

const Logins = () => {
    return(
        <div className="loginFrame">
            <div className="loginArea">
                <form>
                    <input type="text" className="idInput" placeholder="Username" />
                    <input type="password" className="pwInput" placeholder="password"/><br/>
                    <button type="submit" className="sbButton">로그인</button>
                </form>
                <div>
                    <span className="findId">아이디/비밀번호 찾기</span>
                    <span className="regis">회원가입</span>
                </div>
            </div>
        </div>
    )
}

export default Logins;