import styled from 'styled-components';
import { Flex } from '../../components/Flex';

export const FormStyles = styled.div`
    form > * {
        margin-bottom: 20px;
    }
    .btn {
        margin-top: 40px;
    }
    .asteriks {
        color: red;
        margin-left: 4px;
    }
  
`;

export const LilText = styled(Flex)`
     & > p {
            color: #2ec2b3;
            text-decoration: underline;
        }
`;
export const DoubleInputWrapper = styled(Flex)`
    display: flex;
    justify-content: space-between;
    & > div {
        width: 47%;
        display: flex;
        flex-direction: column;
        label {
            text-align: left;
        }
        select {
            margin-top: 10px;
        }
    }
`;

export const FullInput = styled.div`
    width: 100%;
    & > label {
        padding-bottom: 10px;
    }
`;
