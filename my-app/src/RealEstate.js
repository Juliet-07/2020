import React, {Component} from 'react'
import Slider from './SlideRES'
import './RealEstate.css'
import Footer from './FooterRES'

class RealEstate extends Component{
    render(){
        return(
            <div>
                <nav>
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo">Logo</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="row">
                    <div class="col s12">
                        <ul class="tabs">
                            <li class="tab col s3"><a href="#home">Home</a></li>
                            <li class="tab col s3"><a href="#house">Houses</a></li>
                            <li class="tab col s3"><a href="#lands">Lands</a></li>
                            <li class="tab col s3"><a href="#others">Others</a></li>
                        </ul>
                    </div>
                </div>
                <Slider/>
                <div class="onslide">
                    <p>
                        In the bid to solve the problem of acquisition and renting<br/>
                        of both houses and lands in Nigeria, Get-In provides the simplest<br/>
                        and surest platform for you to search and get your desired<br/>
                        apartment or landed property from your comfort zone.
                    </p>
                    <button>Login</button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default RealEstate