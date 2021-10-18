// import { Link } from 'react-router-dom';
import { Flex } from '../../../../../components/Flex';

const updates = [
    {
      name: "Amanda Goetz",
      title: "Ideas Engineering",
      content: "A somewhat short bio written by the supervisor"
    },
    {
      name: "Samantha Blaiz",
      title: "Product Design",
      content: "A somewhat short bio written by the supervisor"
    },
    {
        name: "John Gilbert",
        title: "Social Media Marketing",
        content: "A somewhat short bio written by the supervisor"
    },
    {
        name: "Klaus Michaelson",
        title: "AI Research",
        content: "A somewhat short bio written by the supervisor"
    },
  ]

const RightHomeWrapper = () => {
    return (
        <div className="right-wrapper">
            <div className="updates">All Supervisors</div>
            <div className="line" />
            <div className="update-contents-wrapper">
                <div className="update-padding">
                    <Flex flexDirection="column" justifyContent="space-around">
                    {updates.map((data, index) => (
                        <div key={index} className="update-content">
                            <Flex justifyContent="flex-start" alignItems="flex-start">
                                <div className="update-icon" />
                                <div className="update-description">
                                    <div className="update-description-header">
                                        <span className="update-description-name">{data.name}</span>
                                        <span> - {data.title}</span>
                                    </div>
                                    <div className="update-description-content">{data.content}</div>
                                    <div className="update-line" />                                
                                </div>
                            </Flex>
                        </div>
                    ))}
                    </Flex>
                </div>
            </div>
        </div>
    )
}

export default RightHomeWrapper;