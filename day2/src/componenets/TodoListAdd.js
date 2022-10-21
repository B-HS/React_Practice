import { useState } from "react";

export const TodoListAdd = (props) => {
    const [inputs, setInputs] = useState({
        context:"", etc:""
    })

    const {context, etc} = inputs

    const inputChange = (e)=>{
        const { value, name } = e.target
        setInputs({
            ...inputs, [name]: value
        })
        
    }

    const resetInputs = () => {
        setInputs({
            context: '',
            etc: ''
        });
    }

    const adding = ()=>{
        props.addTodo(context, etc)
        resetInputs()
    }
    return (
        <div className="todolist__detail__add">
            <span className="todolist__detail__header"> ADD </span>
            <form>
                <div className="todolist__detail__input">
                    <label htmlFor="context">할일</label>
                    <input id="context" type="text" name="context" value={context} onChange={inputChange}/>
                </div>
                <div className="todolist__detail__input">
                    <label htmlFor="etc">비고</label>
                    <input id="etc" type="text" name="etc" value={etc} onChange={inputChange}/>
                </div>
                <div className="todolist__detail__btn">
                    <button onClick={adding}>추가</button>
                    <button>작업 끝</button>
                    <button>삭제</button>
                </div>
            </form>
        </div>
    );
};
