<b>Automação de Testes com Playwright</b>

Esse projeto foi criado para testar tanto a interface quanto a API da aplicação de editais.
  
  ├── ui/
  
  │     └── edital.spec.ts
  
  ├── api/
  
  │     └── api.spec.ts
  
  Testes de UI
  Cenários cobertos
Os testes de interface cobrem o fluxo principal do usuário dentro da aplicação, desde o acesso inicial até interações mais específicas com os editais.

<b>Autenticação</b>

Criar conta de usuário
Valida o cadastro de um novo usuário, garantindo que o processo é concluído com sucesso.
Login
Verifica se o usuário consegue se autenticar e acessar o sistema corretamente.

<b>Interação com Editais</b>

Selecionar um edital
Garante que é possível acessar os detalhes de um edital específico e que as informações exibidas estão corretas.
Pesquisar editais
Valida o funcionamento da busca por termo ou número, retornando apenas resultados relevantes.
Filtrar editais
Testa os filtros disponíveis, garantindo que a listagem é atualizada conforme os critérios aplicados.

<b>Ordenação e Regras de Negócio</b>

Buscar por maior data limite
Verifica se a ordenação por data funciona corretamente (ex: editais mais recentes primeiro).
Verificar editais ativos
Valida a regra de negócio onde apenas editais com data limite maior ou igual à data atual são considerados ativos.

<b>Funcionalidade adicional</b>

Calcular lotes (calculadora)
Testa o cálculo automático de valores na calculadora de lotes, garantindo precisão nos resultados exibidos.
  
 <b>Como rodar</b>
  
  npx playwright test tests/ui
  
  <b>Testes de API</b>
  Cenário cobertos
  
  CRUD completo para editais/lotes:
  
  criação
  
  consulta
  
  atualização
  
  remoção
  
  <b>Como rodar</b>
  
  npx playwright test tests/api
  
  <b>Instalação</b>
  
  npm install
  
  Se aparecer erro relacionado a módulos como fs ou path,
   rode:
   npm install --save-dev @types/node
   
  <b> Executando tudo </b>
   npx playwright test
   
   
   <b>Relatório</b>
   
   npx playwright show-report
   
   <b>Observações:</b>
   
   Alguns endpoints da API (POST, PUT e DELETE) estão retornando erro 500 no momento.
   
   Isso não impede a execução dos testes, mas indica que existe um problema no backend que precisa ser tratado.
   
   Objetivo
   Esse projeto foi feito como prática de automação para a vaga de QA na Pitang, focando mais em lógica e validação do que apenas em clicar na interface.

   <img width="1536" height="1024" alt="automacao_UI" src="https://github.com/user-attachments/assets/a08d1622-1157-4223-b427-d3dd31ff1281" />
