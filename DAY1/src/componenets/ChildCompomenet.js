

export const ChildComponent = (props)=>{
    return (
        <div>
            <button  onClick={()=> props.greetHandler('child')}>Clickkk</button>
        </div>
    )
}