import logo from '../logo.svg'
export const TodoHeader = ()=>{

    return (
    <div className="header">
        <div className="header__logo">
            <img src={logo} alt='headerlogo'/>
        </div>
        <div className="header__title">
            <span>TODO APP</span>
        </div>
        <div className="header__today">
            <span>DAY 2</span>
        </div>
    </div>)
}