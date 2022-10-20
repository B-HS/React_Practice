import  {useState} from 'react'

export const Form = () =>{
    const [username, setUsername] = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`From data is ${username}`)
    }
    return <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' value={username} onChange={(event)=>setUsername(event.target.value)}/>
        <button type='submit'> submit</button>
    </form>
}