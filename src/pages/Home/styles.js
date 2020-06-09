import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 60px;
    background: #fff;
    padding: 20px;
    border-radius: 4px;
`;

export const TshirtList = styled.ul`
    display: grid;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 10px;
        justify-content: center;
        border: 1px solid #eee;

        div {
            display: flex;
            justify-content: initial;

            img {
                margin-left: 15px;
                max-height: 230px;
                max-width: 400px;
            }
            button {
                background-color: transparent;
                border: none;
                height: 30px;
            }
        }
        strong {
            font-size: 14px;
            line-height: 20px;
            margin-top: 5px;
            text-align: center;
        }

        span {
            text-align: center;
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 20px;
        }

        a {
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
            margin-top: 8px;
            padding: 10px 5px;
            font-weight: bold;

            transition: background 0.2s;

            &:hover {
                opacity: 0.7;
            }
        }
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);

        li {
            padding: 8px;
            margin: 4px;

            div {
                justify-content: center;

                img {
                    max-width: 200px;
                }
            }
        }
    }
    @media (min-width: 500px) and (max-width: 770px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;

        li {
            padding: 8px;
            margin: 4px;

            div {
                justify-content: center;

                img {
                    max-width: 200px;
                }
            }
        }
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;

        li {
            div {
                justify-content: center;
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
    }

    @media (min-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 15px;
    }
`;
