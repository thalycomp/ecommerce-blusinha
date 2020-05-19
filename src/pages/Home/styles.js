import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 60px;
`;

export const TshirtList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 15px;
        justify-content: center;

        img {
            align-self: center;
            max-height: 250px;
            max-width: 400px;
        }

        strong {
            font-size: 14px;
            line-height: 20px;
            margin-top: 5px;
        }

        span {
            text-align: center;
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 20px;
        }

        a {
            background: linear-gradient(-75deg, #23a6d5, #e73c7e);
            background-size: 400% 400% 400%;
            text-decoration: none;
            text-align: center;
            border: none;
            color: #fff;
            border-radius: 4px;
            overflow: hidden;
            margin-top: 8px;
            padding: 10px 5px;
            font-weight: bold;

            transition: background 0.2s;

            &:hover {
                opacity: 0.7;
            }
        }
        &:hover {
            box-shadow: 8px 10px 10px 10px rgba(0, 0, 0, 0.1);
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -o-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }
    }
`;
