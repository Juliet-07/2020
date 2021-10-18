import styled from 'styled-components';

export const ProfileStyles = styled.div`
    display: flex;
    box-sizing: border-box; 
    .profile-image-wrapper{
        width: 8.4rem;
        height: 8.4rem;
        position: relative;
        box-sizing: border-box;
        padding-left: 2rem;
    }

    .body-leftmost-image-container{
        position: relative;
    }

    .profile-image{
        border-radius: 50%
    }

    .profile-ellipse{
        position: absolute;
        bottom: -0.5rem;
        left: -0.6rem;
        width: 9.7rem;
    }

    .body-leftmost-aboutme-container{
        margin-top: 4rem;
    }

    .body-leftmost-updatecv{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FF0z9F5;
        width: 70%;
        padding: 1rem;
        font-weight: bold;
        font-size: 1rem;
        margin-top: 1rem;
    }

    .body-leftmost-aboutme-header{
        margin-bottom: 0.7rem;
    }

    .body-middle-aboutme-header{
        font-size: 2.5rem;
        font-weight: bold;
    }

    .body-middle-aboutme-metadata{
        font-weight: normal;
        font-size: 1rem;
    }

    .body-middle-aboutme-unit{
        font-weight: bold;
        font-size: 1rem;
        color: #00FF00;
    }

    .body-middle-aboutme-skills{
        font-weight: bold;
        font-size: 0.8rem;
        color: #9F9F9F;
        display: inline;
    }

    .body-middle-aboutme-skills-list{
        font-weight: normal;
    }

    .body-middle-project-header{
        margin-bottom: 0.7rem;
        font-weight: bold;
    }

    .body-middle-awards-header{
        margin-bottom: 2rem;
        font-weight: bold;
    }

    .body-middle-awards-project-timeline-container{
        margin-top: 4.8rem;
    }

    .body-middle-project-list{
        font-size: 0.9rem;
    }

    .body-middle-timeline-container{
        margin-top: 3rem;
        position: relative;
    }

    .body-middle-awards-container{
        margin-top: 3rem;
    }

    .body-middle-timeline-header{
        font-weight: bold;
        margin-bottom: 2.5rem

    }

    .profile-info-wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .profile-info-utility{
        display: flex;
        justify-content: flex-start;
        line-height: 2rem
    }

    .profile-info-name{
        font-size: 2.5rem;
    }

    .profile-info-meta-info{
        font-size: 1rem;
        height: 1.2rem
    }

    .profile-info-unit-data{
        font-size: 1.3rem;
        color: #00FF00;
    }

    .profile-info-skill-header{
        font-size: 1rem;
        color: #9F9F9F;
    }

    .container{
        width: 100vw;
        height: 100vh;
        font-family: Montserrat;
        display: flex;
        padding: 2rem;
    }

    .body-leftmost-container{
        display: flex;
        flex-direction: column;
        width: 20%;
    }

    .body-middle-container{
        display: flex;
        flex-direction: column;
        width: 60%;
        margin-left: 6rem;
    }

    .body-rightmost-container{
        display: flex;
        flex-direction: column;
        width: 20%;
        align-items: flex-start;
    }

    .profile-info-skill-list{
        display: inline;
        margin-right: 0.2rem;
        font-size: 1rem;
        color: #9F9F9F;
    }

    .body-middle-award-list-wrapper{
        display: flex;
        align-items: center;
    }

    .body-middle-award-point{
        margin-left: 1.3rem
    }

    .body-middle-award-bullet-points{
        width: 0.8rem;
        height: 0.8rem;
    }

    .body-rightmost-supervisor-container{
        margin-top: 8rem;
    }

    .body-rightmost-edit-header{
        font-weight: bold;
        font-size: 1rem;
    }

    .body-rightmost-edit-profile-container{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color:  #00FF00;
        margin-top: 2rem;
    }

    .body-rightmost-supervisor{
        display: flex;
    }

    .body-rightmost-supervisor-icon{
        margin-right: 0.8rem;
    }

    .body-rightmost-supervisor-icon{
        color: #9F9F9F;
    }

    .body-middle-timeline-dates-container1{
        position: absolute;
        bottom: -0.4rem;
    }
    .body-middle-timeline-dates-container2{
        position: absolute;
        bottom: -0.4rem;
        margin-left: 10rem;
    }
    .body-middle-timeline-dates-container3{
        position: absolute;
        bottom: -0.4rem;
        margin-left: 20rem;
    }
    .body-middle-timeline-dates-container4{
        position: absolute;
        bottom: -0.4rem;
        margin-left: 30rem;
    }

    .body-middle-timeline-dates-header{
        font-size: 1rem;
    }

    .profile-edit-wrapper{
        width: 10rem;
        height: 4rem;
        background: #00FF00;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .profile-edit{
        text-decoration: none;
        color: #000000;
        font-weight: bold;
        font-size: 1rem;
    }

    .profile-info-skill-list:last{
        margin-right: 0;
    }

    .body-container{
        width: calc(100vw - 8rem);
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        margin-left: 8rem;
    }

    .body-utility{
        display: flex;
        justify-content: flex-start;
    }

    .body-about-me-wrapper{
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 100%;
    }
    
    .body-middle-section-project-list{
        font-size: 1rem;
    }

    .bullet{
        width: 0.6rem;
        height: 0.6rem;
        margin-right: 0.7rem;
    }

    .body-about-updateCv-wrapper{
        background: #FF09F5;
        width: 10rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }

    .body-about-updateCv{
        font-weight: bold;
        font-size: 1rem;
    }

    .body-middle-section-wrapper{
        display: flex;
        flex-direction: column;
        width: 35%;
        height: 100%;
        justify-content: flex-start;
    }

    .body-supervisor-wrapper{
        display: flex;
        flex-direction: column;
        width: 30%;
    }
    
    .body-about{
        display: flex;
        flex-wrap: wrap;
    }

    .body-middle-section-timeline-wrapper{
        position: relative;
        margin-top: 4rem;
    }

    .body-middle-section-timeline{
        margin-bottom: 3rem;
    }


    .body-middle-section-timeline-vector{
        position: relative;
        width: 37rem;
    }

    .body-middle-section-timeline-ellipse-1{
        position: absolute;
        bottom: 0;
        width: 1.2rem;
        height: 1.2rem;
    }
    .body-middle-section-timeline-ellipse-2{
        position: absolute;
        bottom: 0;
        left: 8rem;
        width: 1.2rem;
        height: 1.2rem;
    }
    .body-middle-section-timeline-ellipse-3{
        position: absolute;
        bottom: 0;
        left: 15rem;
        width: 1.2rem;
        height: 1.2rem;
    }
    .body-middle-section-timeline-ellipse-4{
        position: absolute;
        bottom: 0;
        left: 25rem;
        width: 1.2rem;
        height: 1.2rem;
    }

    .body-middle-section-awards-wrapper{
        margin-top: 4rem;
        margin-bottom: 2rem;
    }

    .body-supervisor-wrapper{
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        width: 18%;
    }

    .body-supervisor-header{
        display: flex;
        color: #9F9F9F;
    }

    .body-supervisor-image{
        margin-right: 0.8rem;
    }
`