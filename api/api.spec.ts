import { test, expect, APIRequestContext   } from '@playwright/test';

let api: APIRequestContext;


test.beforeAll(async ({ playwright }) => {
  api = await playwright.request.newContext({
    baseURL: 'https://jornallicitante.vercel.app',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  });
});


test.describe('API Editais', () => {

test('GET - Listar editais', async () => {
  const response = await api.get('/api/editais');

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);

  expect(Array.isArray(body)).toBeTruthy();
});

test('POST - Criar edital', async () => {
  const response = await api.post('/api/editais', {
    data: {
      id: '5',
      titulo: 'ABCD',
      orgao: 'Federal',
      dataLimite: "2026-04-30T23:40:26.239Z",
      valor: 50,
      descricao: 'String'
    },
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log(body);
});


test('PUT - Atualizar edital', async () => {
  const response = await api.put('/api/editais', {
     data: {
      id: '3',
      titulo: 'Teste no Playwright',
      orgao: 'Municipal',
      dataLimite: "2026-04-30T23:40:26.239Z",
      valor: 50,
      descricao: 'String'
    },
  });

  expect(response.ok()).toBeTruthy();
});


test('DELETE - Remover edital', async () => {
  const response = await api.delete('/api/editais?id=4');

  expect(response.status()).toBe(200);
});
});


test.describe('API Lotes', () => {
  let loteId: string;

  test('GET - Buscar lote por ID', async () => {
    const response = await api.get('/api/lotes?id=15');

    expect(response.status()).toBe(200);

    const body = await response.json();
  });


  
  test('POST - Criar lote', async () => {

      const response = await api.post('/api/lotes', {

      data: {
        numero: '15',
        descricao: 'Automação Playwright',
        unidadeMedida: 'UN',
        quantidade: 15,
        valorUnitarioEstimado: 1005,
        valorEstimado: 10000,
        idEdital: '1'
      }


    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body).toHaveProperty('id');

    loteId = body.id;
    console.log('Lote criado:', loteId);
  });

  test('PUT - Atualizar lote', async () => {
    const response = await api.put('/api/lotes', {
      data: {
        id: "1",
        numero: "1",
        descricao: "Lote atualizado",
        unidadeMedida: "UN",
        quantidade: 15,
        valorUnitarioEstimado: 150.75,
        valorEstimado: 2261.25,
        idEdital: "1"
      }
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body.nome).toBe('Lote Atualizado');
  });

  test('DELETE - Remover lote', async () => {
    const response = await api.delete('/api/lotes?id=15');

    expect(response.status()).toBe(204);
  });
});