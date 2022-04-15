import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CarouselTest from './component/CarouselTest';
import Iframee from './component/Iframee';

function App() {

  console.log('app render');
  const [panoramaNo, setPanoramaNo] = useState(true);
  const [auto, setAuto] = useState(false);
  const [state, setState] = useState(true);

  const RenderIframe = () => {
    console.log('iframe 그리는 함수')
    return <Iframee keyNum={panoramaNo}></Iframee>
  }

  // 이미지 슬라이드에서 선택 값 가져오기 위한 함수
  const getKeyNum = (num) => { 
    console.log(num);
    setPanoramaNo(num);
    (jej).location.reload();
  }

  return (
    <div className="App">
      <RenderIframe/>
      <CarouselTest getKeyNum={getKeyNum} auto={auto} setAuto={setAuto}/>

    </div>
  );
}

export default App;
