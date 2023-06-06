//Abrir o mockup local com fetch
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

fetch('./mockup.json')
  .then(resposta => resposta.json())
  .then(dados => {
    const primeiroPerfil = dados[0]; // Acessar o primeiro objeto do array
    
    // Preencher os campos do formulário com os dados do mockup
    const perfil = document.getElementById('perfil');
    perfil.id.value = primeiroPerfil.id;
    perfil.nome.value = primeiroPerfil.nome;
    perfil.cpf.value = primeiroPerfil.cpf;
    perfil.email.value = primeiroPerfil.email;
    perfil.nascimento.value = primeiroPerfil.nascto;
    perfil.cep.value = primeiroPerfil.endereco.cep;
    perfil.numero.value = primeiroPerfil.endereco.numero;
    perfil.complemento.value = primeiroPerfil.endereco.complemento;
    perfil.telefones.value = primeiroPerfil.telefones;
  })
  .catch(erro => {
    console.log(erro);
  });
