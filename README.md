# Chronus Estética

Site da **Chronus Estética** — estética facial e corporal no Centro de Niterói, RJ.

🌐 **No ar:** https://pedroazevedoferreira.github.io/chronus-estetica/

Feito com React + Vite, responsivo (celular, tablet e computador). Página inicial com seções e uma
página para cada tratamento (endereço `#/tratamento/<slug>`, ex.: `#/tratamento/estetica-facial`).

## ⚠️ Conteúdo de exemplo para trocar

Tudo marcado com `EXEMPLO` em [`src/data/content.js`](src/data/content.js) é fictício:

- [ ] **Depoimentos** (`testimonials`) — troque pelos relatos reais (com autorização das pacientes) e
      apague `example: true`. Enquanto houver algum exemplo, o site mostra "Depoimentos ilustrativos".
- [ ] **Páginas de tratamento** (`treatments`) — indicações, procedimentos, duração, sessões e recuperação.
- [ ] **Dúvidas frequentes** (`faq`) — respostas genéricas; revise com a Fernanda.
- [ ] **WhatsApp** — veja abaixo.
- [ ] **Fotos** — veja "Observações".

## Rodar no computador

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Publicação

Todo `git push` na branch `main` publica o site automaticamente pelo GitHub Actions
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)). O andamento aparece na aba **Actions** do repositório.

Na primeira vez é preciso ativar o GitHub Pages: **Settings → Pages → Source: GitHub Actions**.

## Onde editar cada coisa

| Quero mudar… | Arquivo |
| --- | --- |
| WhatsApp e Instagram | [`src/siteConfig.js`](src/siteConfig.js) |
| Textos de tratamentos, especialista, resultados, horários, endereço e menu | [`src/data/content.js`](src/data/content.js) |
| Textos de cada seção | [`src/components/`](src/components) |
| Cores, fontes e layout | [`src/styles.css`](src/styles.css) (cores no topo, em `:root`) |
| Fotos | [`public/images/`](public/images) |

### WhatsApp

Em [`src/siteConfig.js`](src/siteConfig.js), coloque o número só com dígitos, com 55 e o DDD (ex.: `5521999999999`).
Enquanto estiver vazio, os botões de agendamento do site publicado levam ao Instagram e mostram "Fale pelo Instagram".

No `npm run dev` o site usa um número **inválido** de demonstração só para você ver o visual com WhatsApp
(botão verde flutuante e ícones). Esse número nunca vai para o site publicado.

## Estrutura

```
├── .github/workflows/deploy.yml   publicação automática no GitHub Pages
├── public/
│   ├── favicon.svg
│   └── images/                    fotos usadas no site
├── src/
│   ├── components/                uma seção por arquivo (Header, Hero, Treatments, Testimonials, Faq…)
│   │   └── TreatmentPage.jsx      página de cada tratamento
│   ├── data/content.js            conteúdo editável (listas, links, horários)
│   ├── hooks/                     comportamentos (rolagem, animações, menu ativo)
│   ├── siteConfig.js              WhatsApp e Instagram
│   ├── styles.css
│   ├── App.jsx
│   └── main.jsx
├── index.html                     título, descrição e fontes
└── vite.config.js
```

## Observações

- Confirme a autorização das pacientes para publicar os registros de antes e depois.
- As fotos atuais foram recortadas de materiais visuais e têm resolução baixa. Fotos originais da clínica deixam o site mais nítido — basta substituir os arquivos em `public/images/` mantendo os mesmos nomes:
  - `fernanda-profile.jpg` — retrato vertical da Fernanda (topo e seção "Sobre"; ideal 900×1300 px ou mais)
  - `treatment-facial.jpg`, `treatment-lips.jpg`, `treatment-body.jpg`, `treatment-skin.jpg` — um por tratamento (ideal 1200 px de largura)
  - `clinic-room.jpg` — recepção/ambiente da clínica
  - `result-*.jpg` — antes e depois
