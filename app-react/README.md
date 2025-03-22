<p align="center">
  <img src="https://github.com/user-attachments/assets/f9b94ac9-1dce-4e06-8e79-6919fdaf2813" alt="Descrição da Imagem" width="100">
</p>
<br><br>
<p align="center">
  <img src="https://www.fiap.com.br/wp-content/themes/fiap2016/images/mobile/home/vitrine/mba/MBA.png" alt="Descrição da Imagem" width="150">
</p>
<br><br>
<h1>📌 Documentação Técnica do Projeto</h1>

<h2>🖥️ Visão Geral</h2>
<p>Este projeto é uma aplicação desenvolvida em <strong>React</strong> que permite aos usuários interagir com posts através de um back-end <strong>RESTful</strong>. Ele segue as melhores práticas de desenvolvimento moderno, garantindo uma interface responsiva e intuitiva.</p>

<h2>🛠️ Tecnologias Utilizadas</h2>
<ul>
  <li><strong>React</strong> ⚛️ - Biblioteca para construção da interface do usuário.</li>
  <li><strong>Styled Components</strong> 🎨 - Para criar estilos dinâmicos e componentizados.</li>
  <li><strong>Context API / Redux (opcional)</strong> 🗂️ - Para gerenciamento de estado global.</li>
  <li><strong>Axios ou Fetch API</strong> 🔗 - Para integração com o back-end via chamadas REST.</li>
</ul>

<h2>📌 Requisitos Técnicos</h2>

<h3>1️⃣ Desenvolvimento em React</h3>
<ul>
  <li>✅ Utilizar <strong>React</strong> para desenvolver a interface gráfica.</li>
  <li>✅ Criar componentes reutilizáveis e bem estruturados.</li>
  <li>✅ Utilizar <code>hooks</code> (como <code>useState</code>, <code>useEffect</code>, <code>useContext</code>) e componentes funcionais para melhor performance e manutenção.</li>
</ul>

<h3>2️⃣ Estilização e Responsividade</h3>
<ul>
  <li>✅ Utilizar <strong>Styled Components</strong> ou outro método de estilização (CSS Modules, TailwindCSS, Emotion, etc.).</li>
  <li>✅ Garantir que a aplicação seja <strong>responsiva</strong>, funcionando bem tanto em dispositivos móveis quanto em desktops.</li>
  <li>✅ Aplicar boas práticas de design para melhorar a experiência do usuário (<strong>UX/UI</strong>).</li>
</ul>

<h3>3️⃣ Integração com Back-End</h3>
<ul>
  <li>✅ Realizar chamadas aos <strong>endpoints REST</strong> para:</li>
  <ul>
    <li>📄 <strong>Obter</strong> posts.</li>
    <li>✍ <strong>Criar</strong> novos posts.</li>
    <li>✏️ <strong>Editar</strong> posts existentes.</li>
    <li>❌ <strong>Excluir</strong> posts.</li>
  </ul>
  <li>✅ Utilizar <strong>Axios</strong> ou <strong>Fetch API</strong> para realizar as requisições HTTP.</li>
  <li>✅ Implementar feedbacks visuais para requisições assíncronas (<strong>loading, erros, etc.</strong>).</li>
  <li>✅ Gerenciar o estado da aplicação com <strong>Context API ou Redux</strong> (opcional).</li>
</ul>

<h2>📂 Estrutura do Projeto</h2>
<pre>
/src
  ├── components   # Componentes reutilizáveis
  ├── pages        # Páginas principais
  ├── services     # Serviços para chamadas API
  ├── store        # Gerenciamento de estado (Redux ou Context API)
  ├── styles       # Estilização global e temas
  ├── utils        # Funções auxiliares
</pre>

<h2>🚀 Instalação e Execução</h2>

<h3>1️⃣ Clonar o repositório</h3>
<pre>
git clone https://github.com/dearluana/fiap-tech-challenge-blogging-api-react.git
cd fiap-tech-challenge-blogging-api-react
</pre>

<h3>2️⃣ Instalar dependências</h3>
<pre>
yarn install  # ou npm install
</pre>

<h3>3️⃣ Rodar a aplicação</h3>
<pre>
yarn start  # ou npm start
</pre>

<h2>🤝 Contribuição</h2>
<p>Contribuições são bem-vindas! Siga as etapas:</p>
<ol>
  <li><strong>Fork</strong> este repositório.</li>
  <li>Crie uma <strong>branch</strong> (<code>feature/nova-funcionalidade</code>).</li>
  <li>Envie um <strong>pull request</strong>.</li>
</ol>
