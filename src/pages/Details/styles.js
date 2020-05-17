import styled from 'styled-components';


export const DetailsContainer = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 25px;

    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    > div {
        height: 300px;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
`;




export const ProductDetails = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > strong {
        font-size: 30px;
        color: #e73c7e;
        border: 1px solid #e73c7e;
        padding: 10px 20px;
        text-align: center;
        border-radius: 4px;
    }

    div {
        strong {
            font-size: 18px;
            margin-bottom: 5px;
        }
        p {
            font-size: 12px;
        }
        span {
            display: block;
            font-size: 10px;
            color: #999;
            margin-bottom: 4px;
        }
    }


`;

export const ButtonsNav = styled.section`

    div {
        display: flex;
        justify-content: space-between;
        border: 0;
        border-top: 1px solid #eee;

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
    }
`;


export const InfoProducts = styled.div`
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 25px;
    margin-top: 40px;
    align-items: center;
    color: #999;
    text-align: center;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

        p {
            max-width: 300px;
            margin-top: 5px;
            text-align: justify;
            font-size: 12px;
            margin: 5px;
        }
    }

`;

export const SizeTable = styled.table`
    max-width: 200px;
    text-align: center;

    thead th {
        padding: 4px;
        border-bottom: 1px solid #eee;
    }

`;
