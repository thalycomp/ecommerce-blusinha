import React from 'react';
import Checkbox from '../../components/Checkbox/index';

import {
    Container,
    ProductDetails,
    ProductConteiner,
    ProductDescription,
} from './styles';

function Details() {
    return (
        <Container>
            <ProductDetails>
                <div className="">
                    <img
                        src="https://t-static.dafiti.com.br/Ubg3fw2vDGCPyWHG0SbSfhNBrQA=/fit-in/427x620/static.dafiti.com.br/p/fatal-camiseta-fatal-logo-preta-2837-7570015-1-product.jpg"
                        alt="Blusa preta"
                    />
                </div>
                <ProductConteiner>
                    <ProductDescription>
                        <strong>Camiseta básica confortável preta</strong>
                        <p>
                            Blusa básica da marca Derifante feita 100% de
                            algodão.
                        </p>
                        <span>CÓD: 1234</span>

                        <div>
                            <strong>R$ 59,90</strong>
                            <span> 10 x de 5,99 sem juros</span>
                        </div>
                    </ProductDescription>
                    <div>
                        <Checkbox name="coisa" value="P" label="P" />
                        <Checkbox name="coisa" value="M" label="M" />
                        <Checkbox name="coisa" value="G" label="G" />
                        <Checkbox name="coisa" value="GG" label="GG" />
                    </div>
                </ProductConteiner>
            </ProductDetails>
        </Container>
    );
}

export default Details;
