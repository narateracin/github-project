import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px 0 0 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        background-color: #fff;
    }

    button {
        padding: 8px 16px;
        margin: 0px;
        border-radius: 0 8px 8px 0;
        font-weight: bold;
        font-size: 16px;
        background-color: #AC6EFF;

        &:hover {
            box-shadow: 3px 2px 10px rgba(0, 0, 0,0.2);
            background-color: #6E20D7;
        }

        span {
            font-weight: bold;
            color: #fff;
        }
    }
`;