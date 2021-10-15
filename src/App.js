import { useEffect, useRef, useState } from "react";
import "./App.css";
import { FacebookProvider } from "./context/FacebookContext";
import { Feed } from "./Feed";
import Header from "./Header";
import { Posting } from "./Posting";
import { Sidebar } from "./Sidebar";
import { Widget } from "./Widget";

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    console.log(window.innerHeight);
    function updateSize() {
      console.log("dang update");
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return { width: size[0], height: size[1] };
}

function App() {
  const [isPosting, setIsPosting] = useState(true);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsPosting);
  const height = window.innerHeight;
  const refHeight = useRef(null);

  const context = { setIsPosting };
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsPosting(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  return (
    <FacebookProvider value={context}>
      <div className="App" ref={refHeight} style={{ ...useWindowSize() }}>
        {isPosting && <Posting wrapperRef={wrapperRef} />}
        <Header />
        <div
          className="app__body"
          style={{
            height: height - 59.56,
          }}
        >
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </FacebookProvider>
  );
}

export default App;
