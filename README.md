# TikTok Pesquisa para Firefox

Extensão simples para abrir pesquisas do TikTok em uma nova aba do Firefox.

## Recursos

- Pesquisar vídeos por palavra-chave.
- Abrir a página inicial do TikTok.
- Interface em português.
- Não exige Python, Selenium, geckodriver ou dependências externas.

## Requisitos

- Mozilla Firefox compatível com Manifest V3.
- Conexão com a internet.

## Instalação temporária para testar

1. Baixe ou clone este repositório.
2. Abra o Firefox.
3. Digite `about:debugging` na barra de endereços.
4. Selecione **Este Firefox**.
5. Clique em **Carregar extensão temporária…**.
6. Selecione o arquivo `manifest.json` deste projeto.
7. Clique no ícone da extensão e faça uma pesquisa.

A extensão temporária pode precisar ser carregada novamente depois que o Firefox for fechado.

## Executar a partir do código

Não é necessário compilar o projeto. Os arquivos `manifest.json`, `popup.html` e `popup.js` devem permanecer na mesma pasta.

## Publicar no GitHub

### Pelo site

1. Entre em https://github.com/.
2. Clique em **New repository**.
3. Escolha o nome `tiktok-pesquisa-firefox`.
4. Selecione público ou privado.
5. Crie o repositório.
6. Use **Add file → Upload files** e envie os arquivos desta pasta, incluindo este README.

### Pelo terminal do Visual Studio Code

Na pasta do projeto, execute:

```bash
git init
git add .
git commit -m "Adiciona extensão de pesquisa do TikTok para Firefox"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/tiktok-pesquisa-firefox.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub. O repositório remoto deve ser criado antes de executar `git push`.

## Limitações

Esta extensão abre a página de pesquisa do TikTok. Ela não extrai resultados por conta própria nem automatiza visualizações, curtidas ou compartilhamentos. O funcionamento da página de pesquisa depende do próprio TikTok, da conexão e das configurações da conta.

## Licença

Ainda não foi definida uma licença. Se quiser permitir reutilização pública do código, escolha uma licença apropriada antes de distribuir.
