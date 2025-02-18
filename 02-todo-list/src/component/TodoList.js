import { useState } from "react";
import "../component_css/TodoList.css"
import TodoItem from "./TodoItem";

const TodoList = ({ todo, onUpdate, onDelete }) => {

  const [search, setSearch] = useState(""); //검색어 State
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it)=> it.content.toLowerCase().includes(search.toLowerCase())); //검색결과조회,(대소문자구별x)
  };

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>

      <input 
      value={search}
      onChange={onChangeSearch}
      className="searchBar" 
      placeholder="검색어를 입력하세요." />

      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} 
          onUpdate={onUpdate}
          onDelete={onDelete}/>
        ))}
      </div>
    </div>
  )
}

export default TodoList;