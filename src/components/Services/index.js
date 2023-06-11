import React from 'react';
import Icon1 from '../../images/service1.png'
import Icon2 from '../../images/service2.png'
import Icon3 from '../../images/service3.png'
import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Personalized Video message </ServicesH2>
            <ServicesP>for Hyperlocal marketing campaigns</ServicesP>
            </ServicesCard>
            <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Personalized Audio Message</ServicesH2>
            <ServicesP>for customer engagement and communication</ServicesP>
            </ServicesCard>
            <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Instructional module</ServicesH2>
            <ServicesP>Training video for Learning & Development</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services