import './App.css';
import { useEffect, useState, useRef } from "react";
import Viewer from './component/Viewer';
import Controller from './component/Controller';
import Even from './component/Even';


function App() {
  const [count, setCount] = useState(0); //카운터 state는 항상 부모에있어야함
  const [text, setText] = useState('');

  const didMountRef = useRef(false);

  const handleSetCount = (value) => {
    setCount(count+value)
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {
    if(!didMountRef.current) { //App컴포넌트를 페이지에 마운트했는지 판단하는 변수 
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트 !");
    }
      
  });// 인수로 콜백 함수, 의존성 배열 전달
  //State 값을 초기화 할 때도 useEffect가 이 변화를 감지(초기렌더링)
  //배열 요소 중 하나가 변경되어도 useEffect는 콜백함수를 실행함

  useEffect(() => {
    console.log("컴포넌트 마운트")
  }, []); //useEffect에서 빈 배열 전달 시 마운트 시점에 콜백실행

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡")
    }, 1000);

    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    }; //컴포넌트를 렌더링할 때마다 새 인터벌을 생성하고 기존 인터벌 삭제
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
