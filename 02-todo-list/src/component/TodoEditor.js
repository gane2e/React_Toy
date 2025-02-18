import "../component_css/TodoEditor.css"
import { useState, useRef } from "react";

const TodoEditor = ({onCreate}) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onKeyDown = (e) => {
    if(e.keyCode === 13) { //13=엔터키의미
      onSubmit();
    } 
  }
  
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if(!content) {
      alert("오늘의 할 일을 입력하세요.")
      inputRef.current.focus();
      return;
    }
    alert("등록 되었습니다.")
    onCreate(content);
    setContent("");
  }

  return (
  <div className="TodoEditor">
    <h4>새로운 Todo 작성하기</h4>
    <div className="editor_wrapper">
      <input 
      ref={inputRef}
      value={content} 
      onChange={onChangeContent} 
      onKeyDown={onKeyDown}
      placeholder="새로운 Todo.."
       />
      <button onClick={onSubmit}>추가</button>
    </div>
  </div>
)
}
export default TodoEditor;