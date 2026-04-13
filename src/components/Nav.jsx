import {  faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import images from './images.jsx'
import { faArrowRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Nav = ({pass, setPass} ) => {
  const menuList = [ '여성','Divided','남성','신생아/유아','아동','H&M HOME', 'Sale','지속가능성']
  const navigate = useNavigate()
  const goToHome = () => {
    navigate('/')
  }
  const goToLogin = () => {
    navigate('/login')
  }

  const logout = () => {
    setPass(false);
    goToHome()
  }

  const search = (e) => {

    // 한글 입력 중(조합 중)에 엔터를 눌렀을 때 이벤트가 두 번 발생하는 것을 방지합니다.
    if (e.nativeEvent.isComposing) return;
    
      if(e.key==="Enter") {
        let keyword =  e.target.value;
        navigate(`/?q=${encodeURIComponent(keyword)}`); 
        e.target.value ='';
      } 
  }
  return (
    <>

      <header>
        <h1 onClick={ () => goToHome()}>
          <img src={images.logo} alt='home' />
        </h1>
        { pass 
        ?  
        <div className="logout-button" onClick= { () => logout()}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <h2>Log-out</h2>
        </div>
        :
       
         <div className="login-button" onClick={ () => goToLogin()}>
         <FontAwesomeIcon icon={faUser} />
         <h2>Log-in</h2>
       </div>
        }
      </header>
    
      <nav>
        <ul>
          {menuList.map(  menu => (
             <li key={menu}>{menu}</li>
          ))}
        </ul>
      </nav>

      <div>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" onKeyDown={ e => search(e)} />
      </div>
    </>
  )
}

export default Nav