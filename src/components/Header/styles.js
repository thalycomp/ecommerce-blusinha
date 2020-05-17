import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0px;
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;

    div {
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -15px;
        margin-bottom: -30px;
        span {
            font-size: 16px;
            font-weight: bold;
            color: #23a6d5;
        }
    }

    &:hover {
        transition: background 0.2s;

        svg {
            fill: #e73c7e;
        }
        div {
            background-color: #e73c7e;
        }
    }
`;
