import timeline from '../images/timeline.svg';
import bodyEllipse from '../images/body-ellipse.svg';
import supervisorIcon from '../images/supervisor_icon.svg';
import profileImage from '../images/profile-image.png';
import imageEllipse from '../images/ellipse.svg';
import Button from '../../../../../components/Button/index'

const Body = () => {
    return (
        <div className="body-container">
            <div className="body-leftmost-container">
                <div className="body-leftmost-image-container">
                    <img src={profileImage} alt="profile_image"/>
                    <img className="profile-ellipse" src={imageEllipse} alt="ellipse"/>
                </div>
                <div className="body-leftmost-aboutme-container">
                    <h2 className="body-leftmost-aboutme-header">About me</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ullam praesentium qui unde repellat itaque cum dolores voluptate numquam optio?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus itaque accusantium suscipit dolores reiciendis at consequatur qui tempora iusto! Repellat?
                    </p>
                    {/* <div className="body-leftmost-updatecv">
                        Update cv
                    </div> */}
                    <Button width="10rem" height="3rem" text="Update cv" bgColor="#FF09F5" marginTop="1rem"/>
                    
                </div>
            </div>
            <div className="body-middle-container">
                <div className="body-middle-aboutme-container">
                    <p className="body-middle-aboutme-header">Anna Swartz</p>
                    <p className="body-middle-aboutme-metadata">Fullstack Developer, Tech enthusiast, Active learner</p>
                    <p className="body-middle-aboutme-unit">APX Unit</p>
                    <p className="body-middle-aboutme-skills">Skills:<span className="body-middle-aboutme-skills-list">Javascript, ReactJs, NodeJs, EmberJs, Elixir, Go</span></p>
                </div>
                <div className="body-middle-awards-project-timeline-container">
                    <p className="body-middle-project-header">Projects</p>
                    <p className="body-middle-project-list">Bully Detector, Cryptographic Hasher</p>

                    <div className="body-middle-timeline-container">
                        <p className="body-middle-timeline-header">Timeline</p>
                        <img src={timeline} alt="timeline"/>
                        <div className="body-middle-timeline-dates-container1">
                            <p className="body-middle-timeline-dates-header">Dec 2020</p>
                            <img src={bodyEllipse} alt="timeline-ellipse"/>
                        </div>
                        <div className="body-middle-timeline-dates-container2">
                            <p className="body-middle-timeline-dates-header">Dec 2020</p>
                            <img src={bodyEllipse} alt="timeline-ellipse"/>
                        </div>
                        <div className="body-middle-timeline-dates-container3">
                            <p className="body-middle-timeline-dates-header">Dec 2020</p>
                            <img src={bodyEllipse} alt="timeline-ellipse"/>
                        </div>
                        <div className="body-middle-timeline-dates-container4">
                            <p className="body-middle-timeline-dates-header">Dec 2020</p>
                            <img src={bodyEllipse} alt="timeline-ellipse"/>
                        </div>
                    </div>
                    <div className="body-middle-awards-container">
                        <p className="body-middle-awards-header">Awards</p>
                        <div className="body-middle-award-list-wrapper">
                            <img src={bodyEllipse} className="body-middle-award-bullet-points" alt="bullet-point"/>
                            <p className="body-middle-award-point">Student of the year award</p>
                        </div>
                        <div className="body-middle-award-list-wrapper">
                            <img src={bodyEllipse} className="body-middle-award-bullet-points" alt="bullet-point"/>
                            <p className="body-middle-award-point">Mvp ReactJs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-rightmost-container">
                {/* <div className="body-rightmost-edit-profile-container">
                    <p className="body-rightmost-edit-header">Edit profile</p>
                </div> */}
                <Button width="10rem" height="3rem" text="Edit profile" marginTop="2rem" />
                <div className="body-rightmost-supervisor-container">
                    <div className="body-rightmost-supervisor">
                        <img src={supervisorIcon} className="body-rightmost-supervisor-icon" alt="supervisor-icon"/>
                        <p className="body-rightmost-supervisor-icon">supervisor</p>
                    </div>
                    <p>Amanda Goetz</p>
                </div>
            </div>
        </div>
    )
}

export default Body;