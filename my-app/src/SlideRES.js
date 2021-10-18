import React, {Component} from 'react'
import House1 from './pix/House1.jpg'
import House2 from './pix/House2.jpg'
import House3 from './pix/House3.jpg'
import House4 from './pix/House4.jpg'
import land1 from './pix/Land1.jpg'
import land2 from './pix/Land2.jpg'
import land3 from './pix/Land3.jpg'
import land4 from './pix/Land4.jpg'
import './SlideRES.css'

class Slider extends Component{
    render(){
        return(
            <div>
                <div class="mainslide">
                    <slider key="id">
                        <slide><img src={House1} alt="land"/></slide>
                        <slide><img src={House2} alt="land"/></slide>
                        <slide><img src={House3} alt="land"/></slide>
                        <slide><img src={House4} alt="land"/></slide>
                        <slide><img src={land1} alt="land"/></slide>
                        <slide><img src={land2} alt="land"/></slide>
                        <slide><img src={land3} alt="land"/></slide>
                        <slide><img src={land4} alt="land"/></slide>
                    </slider>
                </div>
            </div>
        )
    }
}
export default Slider