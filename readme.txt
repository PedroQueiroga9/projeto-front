🎓 GUIA DO ALUNO - Sistema de Gestão React
Documento de apoio para aula de live-coding
Fluxo completo do projeto: Fornecedores → Produtos → Clientes → Navbar → Página Inicial

⚡ AVISOS IMPORTANTES
📁 CSS Pronto: Os arquivos CSS (index.css e App.css) devem ser distribuídos LOGO NO INÍCIO (PRÉ-AULA)
🎯 Live-coding: Fazer código ao vivo APENAS dos componentes React (JS/JSX)
📋 PRÉ-AULA: Preparação Inicial
1. Estrutura de Pastas para Criar
projeto-front/
├── src/
│   ├── pages/
│   └── components/
2. Instalação de Dependências
npm install
Dependências principais (já no package.json):

react-router-dom → Sistema de rotas/navegação
axios → Requisições HTTP para API
bootstrap e react-bootstrap → Estilização e componentes UI
json-server-> back/banco
3. Configurando o JSON SERVEr
Pegar o data/db.json do repo
Configurar o package.json para usar esse arquivos
Enpoints disponibilizados pelo json-server:
http://localhost:3000/fornecedores http://localhost:3000/produtos http://localhost:3000/clientes