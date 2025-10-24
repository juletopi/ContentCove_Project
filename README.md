<!--
References used in this Repository
https://github.com/kyechan99/capsule-render
https://github.com/DenverCoder1/custom-icon-badges
https://github.com/alexandresanlim/Badges4-README.md-Profile
https://developer.themoviedb.org/docs/getting-started
https://shields.io
https://getemoji.com
-->

<!-- PRESENTATION -->

<div align="center">
  <a href="">
    <img src="./assets/ContentCoveLogo.png" alt="ContentCove-Logo" width="140px" title="ContentCove - Busca de filmes">
  </a>
  <h2 align="center">ContentCove</h2>
  <p align="center">
    Aplicativo em React Native (Expo) para pesquisar filmes usando a API do TMDB.
  </p>
</div>

<div align="center">
  <a href="https://expo.dev/">
    <img src="https://img.shields.io/badge/Made%20with%20framework:-Expo%20-gray.svg?colorA=334&colorB=336&style=for-the-badge" alt="Expo-badge" style="max-width: 100%;">
  </a>
  <a href="https://reactnative.dev/">
    <img src="https://img.shields.io/badge/Made%20with%20language:-React%20Native%20-gray.svg?colorA=61DAFB&colorB=20232A&style=for-the-badge" alt="ReactNative-badge" style="max-width: 100%;">
  </a>
</div>

<br>

<div align="center">
  <a href="#instalação">Instalação</a> &#xa0; • &#xa0;
  <a href="#licença">Licença</a>
</div>

<br>

<!-- ABOUT THE PROJECT -->

## Sobre o projeto

O **ContentCove** é um aplicativo mobile criado para pesquisar filmes utilizando a API do The Movie Database (TMDB). Funcionalidades e características incluem:
- Busca de filmes via endpoint `/search/movie` da API TMDB
- Listagem otimizada com `FlatList` e paginação incremental (onEndReached)
- Tela de detalhes para cada filme (poster, sinopse, avaliação, data)
- Estrutura modular: `navigation/`, `screens/`, `services/`

<div align="left">
  <h6><a href="#contentcove"> Voltar para o início ↺</a></h6>
</div>

## Requisitos

> [!IMPORTANT]  
> Certifique-se de ter os seguintes requisitos antes de iniciar:

<a href="https://nodejs.org/">
  <img src="https://img.shields.io/badge/Node.js-14%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node-badge">
</a>
<a href="https://expo.dev/">
  <img src="https://img.shields.io/badge/Expo-CLI-336?style=for-the-badge&logo=expo&logoColor=white" alt="Expo-badge">
</a>

<div align="left">
  <h6><a href="#contentcove"> Voltar para o início ↺</a></h6>
</div>

## Tecnologias utilizadas

<a href="https://reactnative.dev/">
  <img src="https://img.shields.io/badge/React_Native-0.81.5-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="ReactNative-badge">
</a>
<a href="https://expo.dev/">
  <img src="https://img.shields.io/badge/Expo-54.0.20-336?style=for-the-badge&logo=expo&logoColor=white" alt="Expo-badge">
</a>
<a href="https://axios-http.com/">
  <img src="https://img.shields.io/badge/Axios-1.0-blue?style=for-the-badge&logo=axios&logoColor=white" alt="Axios-badge">
</a>
<a href="https://reactnavigation.org/">
  <img src="https://img.shields.io/badge/React_Navigation-7.x-43459C?style=for-the-badge" alt="ReactNavigation-badge">
</a>

<div align="left">
  <h6><a href="#contentcove"> Voltar para o início ↺</a></h6>
</div>

<!-- INSTALLATION -->

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/juletopi/ContentCove_Project.git
cd ContentCove_Project/contentCove
```

2. Instale as dependências
```bash
npm install
```

3. Configure a variável de ambiente
```bash
cp .env.example .env
# edite .env e cole sua TMDB_API_KEY
```

4. Inicie o projeto
```bash
npx expo start
```

> [!TIP]  
> Use o Expo Go no seu dispositivo para testar rapidamente ou um emulador.

<div align="left">
  <h6><a href="#contentcove"> Voltar para o início ↺</a></h6>
</div>

<!-- LICENSE -->

## Licença

Este projeto está licenciado sob uma licença personalizada que permite uso e modificação privada, mas **proíbe uso comercial**. Veja o arquivo [LICENSE](https://github.com/juletopi/PontuaDev_Project/blob/master/LICENSE) para mais detalhes.

Para uso comercial deste software, entre em contato com o autor em juliocezarpvh@hotmail.com.

<div align="left">
  <h6><a href="#contentcove"> Voltar para o início ↺</a></h6>
</div>

<br>

<!-- AUTHOR -->

## Autor

<table>
  <tr>
    <td valign="middle" width="25%">
      <div align="center">  
        <a href="https://github.com/juletopi" title="Perfil no GitHub" aria-label="GitHub - Juletopi">
          <img src="https://avatars.githubusercontent.com/u/76459155?s=400&u=4b9bd87cae92eea4fc154c28eafe226ed034a1d8&v=4" width="150" alt="Profile Pic - Juletopi"/>
          <br>
          <sub><strong>Júlio Cézar | Juletopi</strong></sub>
          <br>
        </a>
      </div>
    </td>
    <td valign="middle" width="75%">
      <ul style="list-style: none; padding-left: 0; margin: 0;">
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="15" alt="LinkedIn" style="vertical-align:middle;">
          LinkedIn — 
          <a href="https://www.linkedin.com/in/julio-cezar-pereira-camargo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn - Júlio Cézar P. Camargo">
            Júlio Cézar P. Camargo
          </a>
        </li>
        <li>
          <img src="https://pngimg.com/uploads/email/email_PNG100738.png" width="15" alt="Email" style="vertical-align:middle;">
          Email — 
          <a href="mailto:juliocezarpvh@hotmail.com" aria-label="Send email - juliocezarpvh@hotmail.com">
            juliocezarpvh@hotmail.com
          </a>
        </li>
        <li>
          <img src="https://cdn3.emoji.gg/emojis/2116-facebook.png" width="15" alt="Facebook" style="vertical-align:middle;">
          Facebook — 
          <a href="https://www.facebook.com/juhletopi" target="_blank" rel="noopener noreferrer" aria-label="Facebook - Juhletopi">
            facebook.com/juhletopi
          </a>
        </li>
        <li>
          <img src="https://cdn3.emoji.gg/emojis/6333-instagram.png" width="15" alt="Instagram" style="vertical-align:middle;">
          Instagram — 
          <a href="https://www.instagram.com/juletopi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram - Juletopi">
            @juletopi
          </a>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <img src="https://juletopi.github.io/JCPC_Portfolio/src/images/initialsLogo.png" width="25" alt="Portfolio" align="center"/>
      Portfolio —
      <a href="https://juletopi.github.io/JCPC_Portfolio/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio - Juletopi">
        juletopi.github.io/JCPC_Portfolio
      </a>
    </td>
  </tr>
</table>

<div align="left">
  <h6><a href="#contentcove"> Voltar para o início ↺</a></h6>
</div>

<br>

<!-- THANK YOU, GOODBYE -->

----

<div align="center">
  Feito com ❤️ e ☕ por <a href="https://github.com/juletopi"> Juletopi</a>.
</div>
