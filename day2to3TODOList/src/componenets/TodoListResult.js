import { useEffect, useState } from "react"
import { TodoListResultCard } from "./TodoResultListCard"

export const TodoListResult = (props)=>{
    const [result, setresult] = useState([])
    let list = JSON.parse(props.rawList)

    useEffect(()=>{
        let tmp = []
        let rawList = JSON.parse(props.rawList)
        for (let i = 0; i < rawList.length; i++) {
            const element = rawList[i];
            if(props.checkedList.includes(element.index)){
                tmp.push(element)
            }
        }
        setresult(JSON.parse(JSON.stringify(tmp)))
    },  [props.checkedList, props.rawList])


    return (
        <div className="todolist__detail__result">
            <span>result</span>
            <div className="todolist__detail__result__all">
                <span className="todolist__detail__result__all__title">일 총합</span>
                <span className="todolist__detail__result__all__context">{list.length}개</span>
            </div>
            <div className="todolist__detail__result__remain">
                <span className="todolist__detail__result__remain__title">남은 일</span>
                <span className="todolist__detail__result__remain__context">{list.length-props.checkedList.length<0?0:list.length-props.checkedList.length}개</span>
            </div>
            <div className="todolist__detail__result__donelist">
                <span>완료된 리스트</span>
                {result.map((ele, index)=>{return <TodoListResultCard key={index} number={index+1} info={JSON.stringify(ele)}></TodoListResultCard>})}
                
            </div>
        </div>
    )
}