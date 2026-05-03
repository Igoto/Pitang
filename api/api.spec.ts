import { test, expect  } from '@playwright/test';


test('(GET) Retorna Edital', async ({ request }) => {
  const response = await request.get('https://jornallicitante.vercel.app/api/editais?id=4&dataLimiteInicio=2023-08-11T02:03:46.145+00:00&dataLimiteFim=2026-05-30T23:40:26.239Z&valorInicio=100&valorFim=500');
  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
 // expect(Array.isArray(body)).toBeTruthy();
});
