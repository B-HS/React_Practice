export const TodoListCard = (props)=>{
    return(
        <div className="listcard">
            <span className="listcard__number"> {props.number+1}</span>
            <span className="listcard__title"> {props.context} </span>
            <input type="checkbox" className="listcard__iscleared"/>
        </div>
    )
}