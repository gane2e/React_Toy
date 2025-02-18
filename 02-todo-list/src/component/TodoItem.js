import "../component_css/TodoItem.css"

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id)
  }
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <div className="TodoItem">
      <div className="checkBox_col">
        <input checked={isDone} type="checkBox" 
        onChange={onChangeCheckBox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  )
}
export default TodoItem;