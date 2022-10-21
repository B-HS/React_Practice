export const TodoListResult = ()=>{
    return (
        <div className="todolist__detail__result">
            <span>result</span>
            <div className="todolist__detail__result__all">
                <span className="todolist__detail__result__all__title">일 총합</span>
                <span className="todolist__detail__result__all__context">{}개</span>
            </div>
            <div className="todolist__detail__result__remain">
                <span className="todolist__detail__result__remain__title">남은 일</span>
                <span className="todolist__detail__result__remain__context">{}개</span>
            </div>
            <div className="todolist__detail__result__donelist">
                <span>완료된 리스트</span>

            </div>
        </div>
    )
}