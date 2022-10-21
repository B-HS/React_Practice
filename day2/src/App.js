import { TodoHeader } from "./componenets/Header.js"
// import "./App.css";
import "./App.sass";
import { TodoList } from "./componenets/TodoList.js";

function App() {
    return (
        <div className="App">
            <TodoHeader/>
            <TodoList/>
        </div>
    );
}

export default App;
