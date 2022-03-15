import './App.css';
import FindID from './component/login/findID';
import Logins from './component/login/login';
import Register from './component/login/register';
import NoticeFrame from './component/noticeboard/noticeboardFrame';

function App() {
  //   <FindID/>  <Register/>  <Logins/>
  //  
  return (
    <div className='mainArea'>
      <NoticeFrame/>
    </div>
  );
}

export default App;
