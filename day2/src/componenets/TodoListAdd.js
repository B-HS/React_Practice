import { useState } from "react";

export const TodoListAdd = (props) => {
    const [inputs, setInputs] = useState({
        context:"", etc:"", index:props.index
    })
    const {context, etc, index} = inputs
    const inputChange = (e)=>{
        const { value, name } = e.target
        setInputs({
            ...inputs, [name]: value
        })
    }
    const resetInputs = () => {
        setInputs({
            context: '',
            etc: '',
            index: '',
        });
    }
    const adding = ()=>{
        props.addTodo(context, etc, props.index)
        resetInputs()
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
    }

    return (
        <div className="todolist__detail__add">
            <span className="todolist__detail__header"> ADD </span>
            <form onSubmit={handleSubmit}>
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
                </div>
            </form>
        </div>
    );
};
