import styled from 'styled-components';

export const LovedItEmpty = styled.strong`
    display: flex;
    justify-content: center;
    font-size: 18px;
    color: #fff;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: initial;
    background-color: #fff;
    border-radius: 4px;
    padding: 25px;
`;

export const TshirtsLovedIt = styled.main`
    h2 {
        text-align: center;
        display: block;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
    }
`;

export const ListTshirtLovedIt = styled.ul`
    li {
        border-bottom: 1px solid #eee;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        button {
            cursor: pointer;
            border: none;
            background-color: transparent;
            margin: 5px;
        }

        img {
            max-width: 100px;
            margin: 10px;
        }
        strong {
            display: block;
        }
    }

    @media (max-width: 600px) {
        li {
            display: flex;
            flex-direction: column;
            align-items: center;

            button {
                align-items: initial;
            }

            img {
                display: block;
                justify-content: center;
                align-items: center;
            }
        }
    }
`;
