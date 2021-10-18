import { Flex } from '../../../components/Flex';

const LeftWrapper = () => {
    return (
        <div className="left-wrapper">
            <Flex flexDir="column" justifyContent="space-around" alignItems="flex-start">
                <h1>
                    Welcome to the Freetech Academy <span className="feedback">feedback</span> platform
                </h1>
                <div className="axel-wrapper">
                    <Flex justifyContent="flex-start" alignItems="flex-end">
                        <div className="axel">axel springer</div>
                        <div className="line" />
                    </Flex>
                </div>
            </Flex>
        </div>
    )
}

export default LeftWrapper;