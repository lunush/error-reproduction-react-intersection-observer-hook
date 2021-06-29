// import "intersection-observer";
import React, { useEffect } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";

function App() {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  useEffect(() => {
    console.log(`The component is ${isVisible ? "visible" : "not visible"}.`);
  }, [isVisible]);

  return (
    <div className="App">
      Test
      <div ref={ref}>Something</div>
    </div>
  );
}

export default App;
