This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

1. Qual foi a maior dificuldade que você enfrentou ao realizar o teste?

Acredito que a maior "dificuldade" foi combinar o resultado a chamada à api que retorna os dados de longitude e latitude de um local e repassar essas informações para outra api fazer a busca do clima, e fazer com que o zustand controle o estado da aplicação, sem fazer todos os componentes renderizar a todo momento.
Outro desafio é saber utilizar o nextjs de forma eficiente pois do lado do servidor não temos como acessar determinadas funcionalidades como as funções de navegador, precisamos fazer isso do lado do client, e garantir uma boa experiência para usuário.
Outro ponto a se destacar é manter os componentes responsivos e diversos dispositivos, e garantir uma boa experiência para usuário.

2. Descreva a funcionalidade e o por quê da utilização das bibliotecas
   escolhidas por você para concluir o desafio.

Utilizei o nextjs para criar a aplicação, e o zustand para controlar o estado da aplicação, gosto do zustand pois diferente do Redux ou da Context api, ele não precisa de um provider, e é muito mais simples de se utilizar, e não precisa de muito boilerplate para criar um store. Além do uso do Tailwind para estilização, gosto da ideia do uso de classes utilitárias, e a possibilidade de criar componentes customizados com Tailwind.

3. Como você se vê daqui a 5 anos?

Quero me especializar cada vez mais em desenvolvimento web, e ter uma carreira sólida na área, e que me traga uma boa remuneração, e que me permita ter uma vida equilibrada e saudável. Além disso tendo em vista a crescente demanda por desenvolvedores que também consigam integrar IA para obter melhores resultados (aprendizado de máquina para recohecimento de padrões), quero adicionar também essa habilidade na forma como passarei a desenvolver novas aplicações.

4. Caso você tenha dado um “Tchammmm!” na sua aplicação, descreva o
   que você fez, como isso irá melhorar a experiência do usuário.

Para além de uma boa estrutura de código e de componentização e estrutura do projeto. Eu integrei as funcionalidades de consulta de localidade para que o usuário possa buscar por uma localidade e obter informações de clima, e também adicionei uma funcionalidade de busca de localidade por geolocalização, que utiliza a API do navegador para obter a localidade do usuário e fazer a busca por clima.
