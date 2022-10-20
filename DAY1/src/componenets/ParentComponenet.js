import { ChildComponent } from "./ChildCompomenet"

export const ParentComponent = ()=>{
    const greetParent = (childName)=>{
        alert('Parrent ㅎㅇ' + childName)
    }
    return <ChildComponent greetHandler ={greetParent}/>
}