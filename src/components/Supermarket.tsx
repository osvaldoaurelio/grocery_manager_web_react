import React from 'react';

import { ISupermarket, InnerProducts } from '../@types'

interface Props {
  supermarket: ISupermarket;
}

const Supermarket: React.FC<Props> = ({ supermarket }) => {
  const {
    fantasia,
    cnpj,
    municipio,
    uf,
    bairro,
    logradouro,
    numero,
    cep,
    telefone,
    products
  } = supermarket;

   return (
    <div>
      <p><strong>fantasia: </strong>{fantasia}</p>
      <p><strong>cnpj: </strong>{cnpj}</p>
      <p><strong>municipio: </strong>{municipio}</p>
      <p><strong>uf: </strong>{uf}</p>
      <p><strong>bairro: </strong>{bairro}</p>
      <p><strong>logradouro: </strong>{logradouro}</p>
      <p><strong>numero: </strong>{numero}</p>
      <p><strong>cep: </strong>{cep}</p>
      <p><strong>telefone: </strong>{telefone}</p>
      <p><strong>products: </strong>{products?.map((product: InnerProducts)=> (
        <li>{product.description} | {product.price}</li>
      ))}</p>
    </div>
  );
}

export default Supermarket;
