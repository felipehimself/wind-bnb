## Wind BNB

- Trata-se de uma interface inicial de um site de locação de imóveis. O design foi inspirado pelo desafio publicado no site [**Dev Challenges**](https://devchallenges.io/).

## Sumário

- [Tecnologias utilizadas](#tecnologias)
- [Instruções para rodar o projeto](#instrucoes)
- [Organização e estruturação do projeto](#organizacao)
- [Desenvolvimento](#desenvolvimento)

## Tecnologias Utilizadas <a name="tecnologias"></a>

- [**React**](https://pt-br.reactjs.org/)
- [**React Hooks**](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [**Styled Components**](https://styled-components.com/)
- [**React Icons**](https://react-icons.github.io/react-icons/)

## Instruções para rodar o projeto <a name="instrucoes"></a>

### Será necessário ter instalado na sua máquina:

```
Git
React
```

- Clone o repositório com o comando **git clone**:

```
git clone https://github.com/felipehimself/wind-bnb.git
```

- Entre no diretório que acabou de ser criado:

```
cd wind-bnb
```

- Para o projeto funcionar na sua máquina, será necessário instalar suas dependências, para isso, utilize o comando **npm install**:

```
npm install
```

- Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm run dev**:

```
npm run dev
```

## Organização e estruturação do projeto <a name="organizacao"></a>

O projeto está organizado e estruturado da seguinte forma:

```
      .eslintrc.json
│   .gitignore
│   index.html
│   package-lock.json
│   package.json
│   readme.md
│   tsconfig.json
│   tsconfig.node.json
│   vite.config.ts
│
└───src
    │   App.tsx
    │   favicon.svg
    │   logo.svg
    │   main.tsx
    │   vite-env.d.ts
    │
    ├───assets
    │       location.svg
    │       logo.svg
    │       search.svg
    │       star.svg
    │
    ├───components
    │   ├───elements
    │   │       Header.tsx
    │   │       Main.tsx
    │   │       NavBar.tsx
    │   │       NavItensContainer.tsx
    │   │       OptionsContainer.tsx
    │   │       OptionsList.tsx
    │   │       PlacesList.tsx
    │   │       StaysList.tsx
    │   │
    │   └───ui
    │           AddGuestsItem.tsx
    │           LocationInput.tsx
    │           OptionsItem.tsx
    │           PlaceListItem.tsx
    │           SearchButton.tsx
    │           StaysListItem.tsx
    │
    ├───constants
    │       colors.ts
    │
    ├───data
    │       data.ts
    │
    ├───interfaces
    │       dataInterface.ts
    │       propsInterfaces.ts
    │
    ├───store
    │       context.tsx
    │
    └───styles
            GlobalCSS.tsx
            GlobalStyledComponents.tsx
```

## Desenvolvimento <a name="desenvolvimento" ></a>

### Estilização

Para realizar a estilização, foi utilizado o framework [**Styled Components**](https://styled-components.com/).

Para realizar a utilização de ícones, foi utilizado o package [**React Icons**](https://react-icons.github.io/react-icons/).
