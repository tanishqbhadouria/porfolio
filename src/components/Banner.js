import { Container, Row,Col } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import { useState,useEffect } from "react";
import headerImg from '../assets/img/headerImg.svg'


export const Banner=()=>{
    const [loopNum,setLoopNum]=useState(0);
    const toRotate = ['Web Developer','Tech Enthusiast']
    const [isDeleting,setIsDeleting]=useState(false);
    const [txt,setTxt]=useState('');
    const [index, setIndex] = useState(1);
    const [delta,setDelta]=useState(300-Math.random()*100)
    const period=2000;

    useEffect(()=>{ 
        let ticker = setInterval(()=>{
            tick();
         },delta)

         return ()=>{clearInterval(ticker)};
        },[txt])

        const tick=()=>{
            let i=loopNum % toRotate.length;
            let fullText=toRotate[i];
            let updatedText=isDeleting?fullText.substring(0,txt.length-1):fullText.substring(0,txt.length+1);

            setTxt(updatedText);

            if(isDeleting){
                setDelta(prevDelta=>prevDelta/2)
            }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setIndex(prevIndex => prevIndex - 1);
                setDelta(period);
              } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setIndex(1);
                setDelta(500);
              } else {
                setIndex(prevIndex => prevIndex + 1);
              }
            }

    return (
        <Container className="banner">
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`hi I'm Tanishq Bhadouria A `}<span>{txt}</span></h1>
                    <p>I am an aspiring software engineer with a passion for web development and have problem-solving skills.</p>
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="tanishq" />
                </Col>
            </Row>
        </Container>
    )
}
