export const TodoListCard = (props)=>{
    const isCheck = (e, number) =>{
        e.target.checked === true ? props.checking(number) : props.checking(number*-1)
    }
    const deleteBtn = (index) =>{
        props.deleteTodo(index)
    }
    return(
        <div className="listcard">
            <span className="listcard__number"> {props.number+1}</span>
            <span className="listcard__title"> {props.context} </span>
            <span className="listcard__etc"> {props.etc}</span>
            <input type="checkbox" className="listcard__iscleared"  checked={props.checked} onChange={(e)=>isCheck(e, props.number+1)}/>
            {props.checked?<button onClick={()=> deleteBtn(props.number)}>삭제</button>:""}
        </div>
    )
}