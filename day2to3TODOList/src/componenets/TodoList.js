import { TodoListAdd } from "./TodoListAdd";
import { TodoListCard } from "./TodoListCard";
import { TodoListResult } from "./TodoListResult";
import { useEffect, useState } from "react";

export const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [checked, setChecked] = useState([]);
    const addTodo = (context, etc, index) => {
        localStorage.setItem("todo", JSON.stringify([...todo, { context: context, etc: etc, index: index }]))
        setTodo(JSON.parse(localStorage.getItem("todo")))
        checked??localStorage.setItem([])
    };

    const checking = (index)=>{
        index>0?setChecked([...checked, index-1]):setChecked(checked.filter((ele)=>{ return ele!==(index*-1)-1 }))

        index>0
        ?
        localStorage.setItem("checked", JSON.stringify([...checked, index-1]))
        :
        localStorage.setItem("checked", JSON.stringify(JSON.parse(localStorage.getItem("checked")).filter((ele)=>{ return ele!==(index*-1)-1 })))
    }

    const deleteTodo = (index)=>{
        localStorage.setItem("checked", JSON.stringify(JSON.parse(localStorage.getItem("checked")).filter((ele)=>{ return ele!==index})))
        localStorage.setItem("todo", JSON.stringify(JSON.parse(localStorage.getItem("todo")).filter((ele)=>{ return ele.index!==index})))
        reload()
    }

    const reload = ()=>{
        let ls = localStorage.getItem("todo")
        let cls = localStorage.getItem("checked")
        if (ls){
            setTodo(JSON.parse(ls))
            setChecked(JSON.parse(cls))
        }
    }

    useEffect(()=>{
        reload()
    }, [])


    
    return (
        <div className="todolist">
            <div className="todolist__board">
                <div className="todolist__board__header">
                    <span> TODO LIST </span>
                </div>
                <div className="todolist__board__list">
                    <div className="todolist__board__list__ul">
                        {todo.map((doing, i) => {
                            return <TodoListCard key={i} number={doing.index} context={doing.context} etc={doing.etc} checking={checking} checked={checked?checked.includes(doing.index)?true:false:false} deleteTodo={deleteTodo}></TodoListCard>
                        })}
                    </div>
                </div>
            </div>

            <div className="todolist__detail">
                <TodoListAdd addTodo={addTodo} index={todo.length>0?todo[todo.length-1].index+1:todo.length} />
                <TodoListResult checkedList={checked??"0"} rawList={JSON.stringify(todo)??"0"}/>
            </div>
        </div>
    );
};
