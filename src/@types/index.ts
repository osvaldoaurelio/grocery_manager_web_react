export interface InnerProducts {
  _id: { $oid: string };
  description: string;
  price: number;
}

export interface InnerSupermarkets {
  _id: { $oid: string };
  name: string;
  address: string;
  price: number;
}

export interface IProduct {
  _id: { $oid: string },
  name: string;
  brand: string;
  type: string;
  unity: string;
  obs: string;
  supermarkets: InnerSupermarkets[]
}

export interface ISupermarket {
  _id: { $oid: string };
  fantasia: string;
  cnpj: string;
  municipio: string;
  uf: string;
  bairro: string;
  logradouro: string;
  numero: string;
  cep: string;
  telefone: string;
  products: InnerProducts[];
}
