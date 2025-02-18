import "../component_css/Header.css"

const Header = () => {
  return (
    <div className="Header">
    <h1>오늘은 📆</h1>
    <div>{new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })}</div>
  </div>
  )
}
export default Header;