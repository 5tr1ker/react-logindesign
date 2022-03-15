import '../../_style/loginScreen.css'

const FindID = () => {
    return(
        <div className="loginFrame">
                <div className="findIDArea">
                    <form>
                        <input type="text" className="idInput" placeholder="Username"/><br/>
                        <button type="submit" className="sbButton">비밀번호 찾기</button>
                        <button type="submit" className="sbButton returnButton">돌아가기</button>
                    </form>
                </div>
            </div>
    )
}

export default FindID;