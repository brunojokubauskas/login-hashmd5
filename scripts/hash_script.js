// Importar a biblioteca 'crypto'
const crypto = require('crypto');

function calcularMD5(string) {
  const hash = CryptoJS.MD5(string); // Usando a biblioteca CryptoJS para calcular o MD5
  return hash.toString(CryptoJS.enc.Hex);
}

// Dados do mockup
const dados = [
  {
    "id": 123,
    "nome": "Passos Dias Aguiar",
    "cpf": "123.456.789-01",
    "email": "passos@email.com",
    "senha": "-2884944701",
    "nascto": "2000-03-01",
    "endereco": {
      "cep": "13914-552",
      "numero": "2925",
      "complemento": "BL16 AP14"
    },
    "telefones": [
      "19-99874-8789",
      "19-992804020"
    ]
  },
  {
    "id": 321,
    "nome": "Ana Aguiar",
    "cpf": "987.654.321-99",
    "email": "ana@email.com",
    "senha": "-2884944701",
    "nascto": "2000-03-20",
    "endereco": {
      "cep": "13914-552",
      "numero": "2925",
      "complemento": "BL16 AP15"
    },
    "telefones": [
      "19-99874-8888",
      "19-992800001",
      "19-992800002"
    ]
  }
];

// Aplicar o cálculo de MD5 aos dados
const dadosComMD5 = dados.map(item => {
  const senhaMD5 = calcularMD5(item.senha);
  return { ...item, senha: senhaMD5 };
});

console.log(dadosComMD5);