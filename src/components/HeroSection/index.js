import React, {useState} from 'react'
import Video from '../../videos/video1.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg,HeroContent,HeroH1,HeroH3,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

const onHover = () => {

setHover(!hover)

}
  return (
    <HeroContainer >
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video1.mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>AI-Driven Video Transformation at Your Fingertips</HeroH1>
            <HeroH3></HeroH3>
            <br/>
            <HeroP>At RgenAI, we're revolutionizing the video-making industry with our advanced generative AI technology. Our cutting-edge algorithms can automatically change video lip sync and language, creating seamless and realistic videos like never before. Experience the power of AI in video production with RgenAI.
            </HeroP>
            <HeroBtnWrapper>
            {/* <Button to='bookdemo' onMouseEnter={onHover} 
                                onMouseLeave={onHover}
                                primary='true' //here commenting them will use the unique style other wise its same common btn.
                                dark='true'>
                Book Demo {hover ? <ArrowForward /> : <ArrowRight/>}
            </Button> */}
            </HeroBtnWrapper>
        </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection