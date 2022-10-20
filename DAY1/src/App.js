import { useState, useTransition } from "react";
import "./App.css";
import NAMES from "./componenets/data.json";
// import { PostForm } from './componenets/PostForm';
// import { PostList } from './componenets/PostList';
// import './appStyles.css'
// import  styles from './appStyles.module.css'
// import { Inline } from './componenets/Inline';
// import { NameList } from './componenets/NameList';
// import { UserGreeting } from './componenets/UserGreeting';
// import { Greet } from './componenets/Greet'
// import { Message } from './componenets/Message'
// import  {ClickHandler} from "./componenets/ClickHandler"
// import  {ParentComponent} from "./componenets/ParentComponenet"
// import {Stylesheet} from "./componenets/StyleSheet"
// import { Form } from "./componenets/Form";

function App() {
    const [query, setQuery] = useState("");
    const [inputValue, setInpuValue] = useState('')
    const [isPending, startTransition] = useTransition()
    const changeHandler = (event) => {
        setInpuValue(event.target.value);
        startTransition(()=>{
            return setQuery(event.target.value)
        })
    };
    const filteredNames = NAMES.filter((item) => {
        return item.name.includes(query);
    });
    return (
        <div className="App">
            <input type="text" value={inputValue} onChange={changeHandler} />
            {isPending && <p>Updating List...</p>}
            {filteredNames.map((item) => (
                <p>{item.name}</p>
            ))}

            {/* <Greet name="aa"></Greet> 
      <Greet name="ab">
        <button>Action</button>
      </Greet>
      <Greet name="ac">
        <p>this section is children</p>
      </Greet>  */}
            {/* v-bind 처럼 변수 ="들어갈 내용" 으로 처리 가능 
      역시 복수개 사용가능
      v-bind처럼 프롭스값은 상수*/}
            {/* <Message/> */}
            {/* <ClickHandler/> */}

            {/* <ParentComponent/> */}
            {/* <UserGreeting/> */}
            {/* <NameList/> */}
            {/* <Stylesheet/> */}
            {/* <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}> Success</h1> */}
            {/* <Form/> */}
            {/* <PostForm/>
      <PostList/> */}
        </div>
    );
}

export default App;
