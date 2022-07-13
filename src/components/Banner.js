import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeliting, setIsDeliting] = useState(false);
  const toRotate = ["Web developer", "Web designer", "UX/UI designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeliting
      ? fullText.substring(0, text.string - 1)
      : fullText.substring(0, text.string + 1);

    setText(updatedText);
    if (isDeliting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeliting && updatedText === fullText) {
      setIsDeliting(true);
      setDelta(period);
    } else if (isDeliting && updatedText === "") {
      setIsDeliting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home" className="banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`I'm webcoded`}
              <span className="wrap">{text}</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button onClick={() => console.log("Connect")}>
                Let's connect <ArrowRightCircle size={24} />
              </button>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
