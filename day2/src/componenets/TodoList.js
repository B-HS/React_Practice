import { TodoListAdd } from "./TodoListAdd";
import { TodoListCard } from "./TodoListCard";
import { TodoListResult } from "./TodoListResult";
import { useState } from "react";

export const TodoList = () => {
    const [todo, setTodo] = useState([])
    const addTodo = (context, etc)=>{
        debugger
        console.log(context, etc);
        setTodo([...localStorage.getItem("todo"), {"context" : context, "etc" : etc}])
        console.log(todo);
        localStorage.setItem("todo", todo)
    }


    return (
        <div className="todolist">
            <div className="todolist__board">
                <div className="todolist__board__header">
                    <span> TODO LIST </span>
                </div>
                <div className="todolist__board__list">
                    <div className="todolist__board__list__ul">
                        { todo.map((doing, i)=>{return <TodoListCard number={i} context={doing.context} etc={doing.etc}></TodoListCard>; })
                            
                        }
                    </div>
                </div>
            </div>

            <div className="todolist__detail">
                <TodoListAdd addTodo={addTodo}/>
                <TodoListResult/>
            </div>
        </div>
    );
};
