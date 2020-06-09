import styled from 'styled-components';

export const CartVazio = styled.strong`
    display: flex;
    justify-content: center;
    font-size: 18px;
    color: #fff;
`;

export const Container = styled.div`
    background: #fff;
    border-radius: 4px;
    padding: 25px;
    margin-top: 50px;
`;
export const ProductCart = styled.main`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    border-bottom: 1px solid #eee;

    > section {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 5px;

        img {
            height: 120px;
            margin-right: 20px;
        }

        > div {
            margin: 5px;

            p {
                font-size: 12px;
                margin-bottom: 8px;
                max-width: 400px;
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

            input {
                border: 1px solid #fff;
                border-radius: 2px;
                padding-left: 15px;
                width: 40px;
            }

            button {
                background: none;
                border: 0;
                padding: 6px;
            }
        }
    }

    @media (max-width: 490px) {
        > section {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 972px) {
        flex-direction: column;
    }
`;

export const ButtonsNav = styled.section`
    > strong {
        display: block;
        text-align: center;
        margin: 10px;
        font-size: 16px;
    }
    div {
        display: flex;
        justify-content: space-between;
        border: 0;

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(
                -75deg,
                var(--azul-color),
                var(--rosa-color)
            );
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
            background: linear-gradient(
                -75deg,
                var(--azul-color),
                var(--rosa-color)
            );
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
    @media (max-width: 575px) {
        div {
            margin-top: 50px;

            a {
                font-size: 10px;
                margin-right: 5px;
            }
            button {
                padding: 2px;
                font-size: 10px;
            }
        }
    }
`;
