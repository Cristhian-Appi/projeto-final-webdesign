# Landing Page - Promoção de Habilidades de Programação

## 📋 Resumo do Projeto

Este projeto consiste em uma landing page desenvolvida com HTML5, CSS3 e JavaScript, com o objetivo de promover habilidades de programação. A página é responsiva e acessível, seguindo boas práticas de desenvolvimento web e garantindo uma experiência otimizada para os usuários. 

## 🛠️ Recursos Utilizados

### Linguagens e Ferramentas
- **HTML5**: Estruturação semântica e organização do conteúdo.
- **CSS3**: Estilização avançada utilizando:
  - Flexbox e Grid para layout.
  - Variáveis CSS para definição de paleta de cores.
- **JavaScript**: Interatividade e validação do formulário.
- **Normalize.css**: Reset de estilos padrão dos navegadores.
- **Google Fonts**: Fontes `Roboto` e `Jaro` para tipografia moderna.
- **LocalStorage**: Armazenamento das mensagens enviadas via formulário no navegador.

### Estrutura do Projeto
- **HTML**: Estrutura clara e semântica, dividida em:
  - Header, Main e Footer.
  - Seções de apresentação, benefícios, projetos, parceiros e contato.
- **CSS**: 
  - Cores definidas como variáveis (Primária, Secundária, Acento).
  - Box Model, Flexbox e Grid para layout responsivo.
  - Estilização consistente com foco em acessibilidade e experiência do usuário.
- **Imagens**: Organizadamente armazenadas na pasta `/imagens`, em formato `.webp` para melhor desempenho.

### Funcionalidades do Formulário
- Validação dos campos:
  - Nome, email e mensagem obrigatórios.
  - Email validado com regex.
  - Mensagem com mínimo de 30 caracteres.
- Armazenamento de mensagens no navegador usando LocalStorage.

## 🎨 Design Responsivo

A landing page foi projetada para ser responsiva, adaptando-se a diferentes tamanhos de tela, como desktops, tablets e smartphones. Principais recursos de responsividade:
- Unidades relativas (%, `rem`, `vw`, `vh`).
- Layouts flexíveis usando Flexbox e Grid.
- Ajustes automáticos de imagens e espaçamentos.

## ♿ Critérios de Acessibilidade

O projeto segue princípios da WCAG, incluindo:
1. **Texto Alternativo**: Imagens possuem descrição através do atributo `alt`.
2. **Semântica**: Estruturas HTML claras como `header`, `main` e `footer`.
3. **Rótulos Associados**: Labels conectados aos campos do formulário.
4. **Responsividade e foco visível**: Garantindo navegação eficiente via teclado e leitores de tela.

## 🚀 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
