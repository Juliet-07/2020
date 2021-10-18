import { Link } from 'react-router-dom';
import { Flex } from '../../../../../components/Flex';

const updates = [
    {
      name: "Amanda Goetz",
      title: "Requested a review",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero massa, commodo in efficitur ac, lobortis a eros. Duis fermentum felis facilisis erat euismod condimentum. Aliquam vehicula purus ut eros viverra, at sollicitudin se......"
    },
    {
      name: "Samantha Blaiz",
      title: "needs an additional comment",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero massa, commodo in efficitur ac, lobortis a eros. Duis fermentum felis facilisis erat euismod condimentum. Aliquam vehicula purus ut eros viverra, at sollicitudin se......"
    },
  ]

const RightHomeWrapper = () => {
    return (
        <div className="right-wrapper">
            <div className="updates">Feedback to review</div>
            <div className="line" />
            <div className="update-contents-wrapper">
                <div className="update-padding">
                    <Flex flexDirection="column" justifyContent="space-around">
                    {updates.map((data, index) => (
                        <div key={index} className="update-content">
                            <Flex justifyContent="flex-start" alignItems="flex-start">
                                <div className="update-icon" />
                                <div className="update-description">
                                    <Link className="link" to="#">
                                    <div className="update-description-header">
                                        <span className="update-description-name">{data.name}</span>
                                        <span> {data.title}</span>
                                    </div>
                                    <div className="update-description-content">{data.content}</div>
                                    <div className="update-line" />
                                    </Link>
                                    {index === 2 && (
                                    <div className="load-more">Load More</div>
                                    )}
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