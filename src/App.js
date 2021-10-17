import React,{useState,useEffect} from 'react';
import './App.css';
import Blob from './components/Blob.js';
import Controller from './components/Controller.js';

const INIT = {
  width : 360,
  height : 360,
  fbgColor : '#d0de17',
  tbgColor : '#54c10b',
  borderRadius : 20,
  isBorderIndivisual : false,
  childData:[45,55,46,54,39,46,54,61] // Default shape of the blob
};

function copyResult(e){
  navigator.clipboard.writeText(document.getElementById("code").innerText);
  e.target.disabled = true;
  setTimeout(() => {e.target.disabled = false;},1500)
}

function App() {
  const [fbgColor, setFBgColor] = useState(INIT.fbgColor);
  const [tbgColor, setTBgColor] = useState(INIT.tbgColor);
  const [width,setWidth] = useState(INIT.width);
  const [height,setHeight] = useState(INIT.height);
  const [borderRadius,setBorderRadius] = useState(INIT.borderRadius);

  const [childData,setChildData] = useState(INIT.childData);
  let [a,b,c,d,e,f,g,h] = childData;

  useEffect(() => {
    document.body.style.background = fbgColor+'2B';
  });




  return (
    <React.Fragment>
    <div className="App">
      <div className="finalResult">
        <code id="code">
          width : {width}px;<br/>
          height : {height}px;<br/>
          background: linear-gradient(-45deg, {fbgColor},{tbgColor});<br/>
          border-radius : {a}% {b}% {c}% {d}% / {e}% {f}% {g}% {h}%;
        </code>
        <button id="copyResult" onClick={e => copyResult(e)}>
          <span id="span_copyText">copy</span>
          <span id="span_copiedText">copied!</span>
        </button>
        <button type="reset" onClick={() => {
              setFBgColor(INIT.fbgColor)
              setTBgColor(INIT.tbgColor)
              setWidth(INIT.width)
              setHeight(INIT.height)
              setBorderRadius(INIT.borderRadius)
              setChildData(INIT.childData)
        }}>Reset</button>
      </div>

      <section id="left">
        <Blob 
          width={width} 
          height={height} 
          fbg={fbgColor} 
          tbg={tbgColor} 
          bt={borderRadius}
          bti={childData}

        />
      <Controller data={childData} callback={(e) => setChildData(e)}/>
      

      </section>

      <section id="right">
        <div className="fieldWrapper">
          <label htmlFor="color">Color</label>
  
          <div className="inputWrapper">
            <div>
              <input type="color" onChange={(e) => setFBgColor(e.target.value)} value={fbgColor} />
              <input type="color" onChange={(e) => setTBgColor(e.target.value)} value={tbgColor} />
            </div>
            <div>
              <p id="colorValue" style={{color : fbgColor}}>{fbgColor}</p>
              <p style={{color : tbgColor}}>{tbgColor}</p>
            </div>
          </div>
        </div>

        <div className="fieldWrapper">
          <label htmlFor="widthNum">Width (px)</label>
          <div className="inputWrapper">
            <input id="widthNum" name="widthNum" type="number" onChange={(e) => setWidth(e.target.value)} min="100" max="500" value={width}/>
            <input name="widthRange" type="range" onChange={(e) => setWidth(e.target.value)} min="100" max="500" value={width}/>
          </div>
        </div>

        <div className="fieldWrapper">
          <label htmlFor="heightNum">Height (px)</label>
          <div className="inputWrapper">
            <input id="heightNum" name="heightNum" type="number" onChange={(e) => setHeight(e.target.value)} min="100" max="500" value={height}/>
            <input name="heightRange" type="range" onChange={(e) => setHeight(e.target.value)} min="100" max="500" value={height}/>
          </div>
        </div>

        
      </section>
    </div>
    </React.Fragment>
  );
}

export default App;
