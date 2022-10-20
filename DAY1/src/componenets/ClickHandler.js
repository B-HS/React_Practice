export const ClickHandler = () => {
    const clickHandler =(e, count=1)=>{
        console.log("button Clicked!");
        console.log(e);
        console.log(count);
    }
    return (
    <div>
        <button onClick={clickHandler}>Click</button>
        <button onClick={(e)=>clickHandler(e,10)}>Click</button>
    </div>)
}