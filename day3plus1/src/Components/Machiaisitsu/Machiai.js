import "./Machiai.sass"
export const Machiai = (props)=>{
    const start = ()=>{
        props.init(false)
    }

    return(props.roomSelect?
        <div className="Machiai">
            <div className="Machiai__background"></div>
            <div className="Machiai-modal">
                <button onClick={start}>asdf</button>

            </div>
        </div>
    :""
    )
}