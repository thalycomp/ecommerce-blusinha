import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 60px;
`;

export const ProductDetails = styled.div`
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;

    display: flex;
    justify-content: left;
    align-items: flex-start;
    flex-shrink: 1;

    > div {
        max-height: 300px;
        max-width: 250px;

        img {
            margin-right: 80px;
            max-width: 100%;
            max-height: 100%;
            border: 1px solid #eee;
            padding: 0px 15px;
            flex-shrink: 1;
            border-radius: 4px;
        }
    }
`;

export const ProductConteiner = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    max-height: 500px;
    max-width: 500px;
    color: #333;
    flex-direction: column;
    justify-content: space-between;
    background-color: red;

    div {
        display: flex;

        input[type='checkbox'] {
            cursor: pointer;
            border: 4px solid red;
            width: 15px;
            height: 15px;
        }

        input:checked {
            background-color: red;
        }

        input:checked + label:before {
            background-color: black;
        }
    }
`;

export const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;

    strong {
        font-size: 25px;
    }

    p {
        width: 100%;
        text-align: justify;
        color: #797979;
        font-size: 14px;
        margin-bottom: 4px;
        margin-top: 4px;
    }

    span {
        font-size: 12px;
        justify-items: flex-end;
    }
`;
