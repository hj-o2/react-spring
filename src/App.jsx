/* eslint-disable */
import "./styles.css";
import { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import { divide } from "lodash";
import sc from "styled-components";
import styled from "styled-components";

export default function App() {
  // 方法１（async）
  const [toggle, setToggle] = useState(false);
  const styles = useSpring({
    fromugiuuiujj
  })

  return (
    <a.div className="App">
      <Container onClick={() => setToggle(!toggle)}>
        <Meter style={styles} />
      </Container>
    </a.div>
  );


  // const [toggle, setToggle] = useState(false);

  // const styles = useSpring({
  //   width: toggle ? "100%" : "0%",
  // });

  // const Container = styled(a.div)({
  //   width: 400,
  //   height: 70,
  //   backgroundColor: "#ccc",
  // });

  // const Meter = styled(a.div)({
  //   width: 400,
  //   height: 70,
  //   backgroundColor: "skyblue",
  // });

  // return (
  //   <a.div className="App">
  //     <Container onClick={() => setToggle(!toggle)}>
  //       <Meter style={styles} />
  //     </Container>
  //   </a.div>
  // );

  // #10
  // const styles = useSpring({
  //   from: {
  //     rotate: "0deg",
  //   },
  //   to: {
  //     rotate: "360deg",
  //   },
  //   loop: true,
  //   config: {
  //     duration: 700,
  //   },
  // });
  // const Loader = styled(a.div)({
  //   width: 50,
  //   height: 50,
  //   borderRadius: "50%",
  //   border: "5px solid #fff",
  //   borderTopColor: "transparent",
  // });

  // return (
  //   <a.div
  //     className="App"
  //     style={{
  //       backgroundColor: "turquoise",
  //     }}
  //   >
  //     <Loader style={styles} />
  //     <div />
  //   </a.div>
  // );

  // #9
  // const [flipped, setFlipped] = useState(false);
  // const styles = useSpring({
  //   opacity: flipped ? 1 : 0,
  //   rotateY: flipped ? "180deg" : "0deg",
  // });

  // const PinkCard = sc(animated.div)({
  //   position: "absolute",
  //   width: 500,
  //   height: 300,
  //   borderRadius: 20,
  //   backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
  // });

  // const BlueCard = sc(animated.div)({
  //   position: "absolute",
  //   width: 500,
  //   height: 300,
  //   borderRadius: 20,
  //   backgroundImage: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
  // });

  // return (
  //   <div
  //     className="App"
  //     style={{
  //       perspective: "500px",
  //     }}
  //     onClick={() => {
  //       setFlipped(!flipped);
  //     }}
  //   >
  //     <PinkCard style={styles} />
  //     <BlueCard
  //       style={{
  //         opacity: styles.opacity.to((o) => 1 - o),
  //         rotateY: styles.rotateY,
  //       }}
  //     />
  //   </div>
  // );

  // #8
  // const [toggle, setToggle] = useState(true);
  // const styles = useSpring({
  //   opacity: toggle ? 1 : 0
  // });
  // return (
  //   <div className="App">
  //     <animated.h1 style={styles} onClick={() => setToggle(!toggle)}>
  //       Hello CodeSandbox
  //     </animated.h1>
  //   </div>
  // );
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
