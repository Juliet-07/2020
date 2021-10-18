import styled from 'styled-components';

export const InputContainer = styled.div`
    label {
        text-align: left;
        color: #151718;
    }
    .asteriks { 
        color: red;
        margin-left: 4px;
    }
    
`;
export const InputIconStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 48px;
    border-bottom: 1px solid #3e3e41;
    border-radius: 4px;
    background-color: #fff;
    width: 100%;
    padding: 12px 16px;
    margin-top: 10px;
    .icon-wrapper {
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        .icon {
            width: 24px;
            height: 24px;
            color: #151718;
        }
    }
    input {
        width: 80%;
        height: 100%;
    }
`;
