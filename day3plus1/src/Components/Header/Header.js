import logo from './haku.png'
import "./Header.sass"
export const Headers = ()=>{

    return (
    <div className="header">
        <div className="header__logo">
            <img src={logo} alt='headerlogo'/>
        </div>
        <div className="header__title">
            <span>麻雀</span>
        </div>
        <div className="header__today">
            <span>현석</span>
        </div>
    </div>)
}