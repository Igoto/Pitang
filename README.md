README.md

Automação de Testes com Playwright

Esse projeto foi criado para testar tanto a interface quanto a API da aplicação de editais.
  ├── ui/
  │     └── edital.spec.ts
  ├── api/
  │     └── api.spec.ts
  
  Testes de UI
  Cenário coberto
  Validação dos editais exibidos na tela inicial.
  O teste verifica se apenas editais dentro do prazo permitem interação com o botão de detalhes.
  Como rodar npx playwright test tests/ui
  Testes de API
  Cenário coberto
  CRUD completo de lotes:
  criação
  consulta
  atualização
  remoção
  Como rodar
  npx playwright test tests/api
  Instalação
  npm install
  
  Se aparecer erro relacionado a módulos como fs ou path,
   rode:npm install --save-dev @types/node
   
   Executando tudo
   npx playwright testRelatório
   
   npx playwright show-report
   
   ObservaçõesAlguns endpoints da API (POST, PUT e DELETE) estão retornando erro 500 no momento.
   Isso não impede a execução dos testes, mas indica que existe um problema no backend que precisa ser tratado.
   Possíveis melhoriasorganizar melhor os testes usando Page Objectgerar dados dinâmicosadicionar execução automática em CI/CDmockar API para cenários mais controlados
   
   Objetivo
   Esse projeto foi feito como prática de automação para a vaga de QA na Pitang, focando mais em lógica e validação do que apenas em clicar na interface.
