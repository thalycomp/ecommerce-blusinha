import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    border-radius: 4px;
    padding: 25px;
    margin-top: 50px;
`;
export const ProductCart = styled.table`
    width: 100%;

    thead th {
        color: #999;
        border-bottom: 1px solid #eee;
        text-align: center;
        padding: 4px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;

        svg {
            cursor: pointer;
        }

        p {
            font-size: 12px;
            margin-bottom: 8px;
        }
        strong {
            font-size: 16px;
            margin-bottom: 4px;
        }
        span {
            display: block;
            font-size: 10px;
            color: #999;
            margin-bottom: 4px;
            text-transform: uppercase;
        }
        div {
            display: flex;
            align-items: center;

            input {
                border: 1px solid #fff;
                border-radius: 2px;
                padding-left: 15px;
                width: 40px;
            }
        }
        button {
            background: none;
            border: 0;
            padding: 6px;
        }
    }

    img {
        height: 120px;
    }
`;

export const ButtonsNav = styled.section`
    div {
        display: flex;
        justify-content: space-between;
        border: 0;

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(-75deg, #23a6d5, #e73c7e);
            background-size: 400% 400% 400%;

            border: none;
            color: #fff;
            border-radius: 4px;
            overflow: hidden;
            margin-top: 10px;
            padding: 12px;
            font-weight: bold;

            transition: background 0.2s;

            &:hover {
                opacity: 0.7;
            }
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(-75deg, #23a6d5, #e73c7e);
            background-size: 400% 400% 400%;
            text-decoration: none;
            text-align: center;

            border: none;
            color: #fff;
            border-radius: 4px;
            overflow: hidden;
            margin-top: 10px;
            padding: 12px;
            font-weight: bold;

            transition: background 0.2s;

            &:hover {
                opacity: 0.7;
            }
        }
    }
`;
