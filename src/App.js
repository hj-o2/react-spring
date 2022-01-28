import React  from "react";
import { useSpring, animated } from "@react-spring/web";
import "./styles.css";

export default function App() {
  const [toggle, setToggle] = React.useState(true);
  const styles = useSpring({
    opacity: toggle ? 1 : 0
  });

  return (
    <div className="App">
      <animated.h1 style={styles} onclick={() => setToggle(!toggle)}>
        Hello CodeSandbox
      </animated.h1>
    </div>
  );

  // const styles = useSpring({
  //   from: {
  //     opacity: 0,
  //     color: "pink",
  //     y: 20,
  //     scale: 0.8
  //   },
  //   to: {
  //     opacity: 1,
  //     color: "blue",
  //     y: 0,
  //     scale: 1
  //   }
  // });
  // return (
  //   <div className="App">
  //     <animated.h1 style={styles}>Hello CodeSandbox</animated.h1>
  //   </div>
  // );
}
