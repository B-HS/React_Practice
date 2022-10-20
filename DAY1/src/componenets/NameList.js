export const NameList = () =>{
    const names= ['bruce', 'clark','diana']
    return <div>
        {
            names.map((name)=>{
                return <h2 key={name}>{name}</h2>
            })
        }
    </div>
}