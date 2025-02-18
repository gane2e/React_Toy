import './App.css';
import Header from './component/Header';
import TestComp from './component/TestComp';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import {useState, useRef} from "react";

const mockTodo = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    createdDate : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "빨래 널기",
    createdDate : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    content : "노래 연습하기",
    createdDate : new Date().getTime(),
  }
]

function App() {

  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  }

  //todoItem 체크박스에 틱 발생 시 호출
  const onUpdate = (targetId) => {
    setTodo(
      todo.map(
        (it) => {
          if(it.id === targetId) {
            return {
              ...it,
              isDone: !it.isDone,
            };
          } else {
            return it;
          }
        }
      )
    )
  }

  //targetId에 해당하지 않는 배열만 리턴함
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  }

  //할 일 앙템 상태 관리할 State, 인수로 빈 배열 전달하여 State변수 todo의 기본값을 빈 배열로 초기화
  const [todo, setTodo] = useState(mockTodo); //등록한 할 일 관리

  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoEditor onCreate={onCreate}/> 
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
