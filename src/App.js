import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Feed } from "./Feed";
import Header from "./Header";
import { Posting } from "./Posting";
import { Sidebar } from "./Sidebar";
import { Widget } from "./Widget";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return { width: size[0], height: size[1] };
}

function App() {
  const [height, setHeight] = useState(null);
  const refHeight = useRef(null);
  const [isPosting, setIsPosting] = useState(true);

  useEffect(() => {
    setHeight(
      window.innerHeight - refHeight.current.firstChild.offsetHeight - 5
    );
  }, []);

  return (
    <div
      className="App"
      ref={refHeight}
      style={{ ...useWindowSize(), overflowY: isPosting ? "hidden" : "scroll" }}
    >
      {isPosting && <Posting />}
      <Header />
      <div className="app__body">
        <Sidebar height={height} />
        <Feed />
        <Widget height={height} />
      </div>
    </div>
  );
}

export default App;
