export const TodoListResultCard = (props)=>{
    return(
        <div className="listcardresult">
            <span className="listcard__title"> {JSON.parse(props.info).context} </span>
        </div>
    )
}