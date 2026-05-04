import { test, expect  } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';


test.setTimeout(60000); 

test('create an user account', async ({ page }) => {

  await page.goto('https://jornallicitante.vercel.app/');

  
//  await page.getByText('Entrar').click();
//await page.getByRole('button', { name: 'Entrar' }).click();
 await expect(page).toHaveTitle('Jornal do Licitante');


await page.getByText('Entrar').click();

await page.waitForTimeout(3000);

const randomNumber = Math.floor(Math.random() * 10000) + 1;


await page.locator("#identifier-field").fill('igor.borges'+randomNumber.toString()+'@hotmail.com');

await page.waitForTimeout(1000);

// Expect a title "to contain" a substring.
await page.locator('.cl-internal-2iusy0').click(); //click in continue button

await page.waitForTimeout(2000);

await page.getByText('Sign up').click();

await page.waitForTimeout(2000);


await page.locator("#username-field").fill('IgorBorges'+randomNumber.toString());


await page.locator("#emailAddress-field").fill('igor.borges'+randomNumber.toString()+'@hotmail.com');

await page.locator("#password-field").fill('igor2026@');

await page.locator('.cl-internal-2iusy0').click();
await page.waitForTimeout(1000);

});

test('login', async ({ page }) => {
  await page.goto('https://jornallicitante.vercel.app/');

   await page.getByText('Entrar').click();

  await page.waitForTimeout(3000);

  await page.locator("#identifier-field").fill('igor.borges@hotmail.com');


  await page.locator('.cl-internal-2iusy0').click(); //click in continue button

  await page.waitForTimeout(1000);
  await page.locator("#password-field").fill('igor2026@');
  await page.waitForTimeout(1000);

  await page.locator('.cl-internal-2iusy0').click(); //click in continue button
  await page.waitForTimeout(3000);


});


test('selecionar um edital', async ({ page }) => {
  await page.goto('https://jornallicitante.vercel.app/');

   await page.getByText('Entrar').click();

  await page.waitForTimeout(3000);

  await page.locator("#identifier-field").fill('igor.borges@hotmail.com');


  await page.locator('.cl-internal-2iusy0').click(); //click in continue button

  await page.waitForTimeout(1000);
  await page.locator("#password-field").fill('igor2026@');
  await page.waitForTimeout(1000);

  await page.locator('.cl-internal-2iusy0').click(); //click in continue button
  await page.waitForTimeout(5000);

  await page.getByRole('button', { name: 'Ver Detalhes' }).nth(2).click();
    await page.waitForTimeout(2000);


});



test('pesquisar editais', async ({ page }) => {
  await page.goto('https://jornallicitante.vercel.app/');

   await page.getByText('Entrar').click();

  await page.waitForTimeout(3000);

  await page.locator("#identifier-field").fill('igor.borges@hotmail.com');


  await page.locator('.cl-internal-2iusy0').click(); //click in continue button

  await page.waitForTimeout(1000);
  await page.locator("#password-field").fill('igor2026@');
  await page.waitForTimeout(1000);

  await page.locator('.cl-internal-2iusy0').click(); //click in continue button
  await page.waitForTimeout(2500);


await page.getByPlaceholder('Pesquisar editais por número ou promotor...').fill('Aquisição');

await page.getByText('Carregando editais').waitFor();

await page.waitForTimeout(20000);


});


test('filtrar editais', async ({ page }) => {
  await page.goto('https://jornallicitante.vercel.app/');

   await page.getByText('Entrar').click();

  await page.waitForTimeout(3000);

  await page.locator("#identifier-field").fill('igor.borges@hotmail.com');


  await page.locator('.cl-internal-2iusy0').click(); //click in continue button

  await page.waitForTimeout(1000);
  await page.locator("#password-field").fill('igor2026@');
  await page.waitForTimeout(1000);

  await page.locator('.cl-internal-2iusy0').click(); //click in continue button
  await page.waitForTimeout(2500);


//await page.getByPlaceholder('Pesquisar editais por número ou promotor...').fill('t');

await page.getByRole('combobox').click();

await page.waitForTimeout(1000);


await page.getByRole('option', { name: 'Maior valor' }).waitFor();

// muda antes pra garantir evento
await page.getByRole('option', { name: 'Maior valor' }).click();
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');

await page.getByText('Carregando editais').waitFor();

await page.waitForTimeout(20000);


});

test('buscar por maior data limite', async ({ page }) => {
  await page.goto('https://jornallicitante.vercel.app/');

   await page.getByText('Entrar').click();

  await page.waitForTimeout(3000);

  await page.locator("#identifier-field").fill('igor.borges@hotmail.com');


  await page.locator('.cl-internal-2iusy0').click(); //click in continue button

  await page.waitForTimeout(1000);
  await page.locator("#password-field").fill('igor2026@');
  await page.waitForTimeout(1000);

  await page.locator('.cl-internal-2iusy0').click(); //click in continue button
  await page.waitForTimeout(2500);


//await page.getByPlaceholder('Pesquisar editais por número ou promotor...').fill('t');

await page.getByRole('combobox').click();

await page.waitForTimeout(1000);


await page.getByRole('option', { name: 'Maior Data Limite' }).waitFor();

// muda antes pra garantir evento
await page.getByRole('option', { name: 'Maior Data Limite' }).click();
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');

await page.getByText('Carregando editais').waitFor();

await page.waitForTimeout(20000);


});


function parseDataBR(data: string): Date {
  const [dia, mes, ano] = data.split('/').map(Number);
  return new Date(ano, mes - 1, dia);
}

test('verifica os editais ativos', async ({ page }) => {
test.setTimeout(120000); 

 await page.goto('https://jornallicitante.vercel.app/');

   await page.getByText('Entrar').click();

  await page.waitForTimeout(3000);

  await page.locator("#identifier-field").fill('igor.borges@hotmail.com');


  await page.locator('.cl-internal-2iusy0').click(); //click in continue button

  await page.waitForTimeout(1000);
  await page.locator("#password-field").fill('igor2026@');
  await page.waitForTimeout(1000);

  await page.locator('.cl-internal-2iusy0').click(); //click in continue button
  await page.waitForTimeout(5000);


  const editais = page.locator('div.rounded-xl.border');
  const total = await editais.count();

  //const hoje = new Date();
  const hoje = new Date(2026, 2, 1);

  hoje.setHours(0, 0, 0, 0);

  for (let i = 0; i < total; i++) {
    const edital = editais.nth(i);

    const dataTexto = await edital.locator('span')
      .filter({ hasText: 'Data Limite' })
      .textContent();

    if (!dataTexto) continue;

    const dataLimiteStr = dataTexto.replace('Data Limite:', '').trim();
    const dataLimite = parseDataBR(dataLimiteStr);

    console.log(`Edital ${i} → ${dataLimiteStr}`);

    if (dataLimite.getTime() >= hoje.getTime()) {
      console.log(`O Edital ${i} está ativo — clicando no botão`);



      await page.getByRole('button', { name: 'Ver Detalhes' }).nth(i).click();

      await page.waitForTimeout(3000);


      await page.locator('.sr-only').click();//close popup
      await page.waitForTimeout(2000);

      await page.goBack();//continue loop
    }
  }
});


test('calcular lotes de calculadora', async ({ page }) => {
  await page.goto('https://jornallicitante.vercel.app/');

   await page.getByText('Entrar').click();

  await page.waitForTimeout(3000);

  await page.locator("#identifier-field").fill('igor.borges@hotmail.com');


  await page.locator('.cl-internal-2iusy0').click(); //click in continue button

  await page.waitForTimeout(1000);
  await page.locator("#password-field").fill('igor2026@');
  await page.waitForTimeout(1000);

  await page.locator('.cl-internal-2iusy0').click(); //click in continue button
  await page.waitForTimeout(2500);


await page.getByPlaceholder('Pesquisar editais por número ou promotor...').fill('Aquisição de equipamentos médicos - Edital 012/2024');

//await page.getByText('Carregando editais').waitFor();

await page.waitForTimeout(4000);

  await page.getByRole('button', { name: 'Ver Detalhes' }).click();
  
  
await page.waitForTimeout(3000);

const orgaoResponsavel = await page
  .locator('text=Órgão Responsável')
  .locator('xpath=following-sibling::*')
  .first()
  .innerText();

const dataLimite = await page
  .locator('text=Data Limite')
  .locator('xpath=following-sibling::*')
  .first()
  .innerText();

const valorEstimado = await page
  .locator('text=Valor Estimado')
  .locator('xpath=following-sibling::*')
  .first()
  .innerText();

const descricao = await page
  .locator('text=Descrição')
  .locator('xpath=following-sibling::*')
  .first()
  .innerText();


  const titulo = await page.getByRole('heading', { level: 2 }).innerText();
console.log(titulo);
console.log('Órgão Responsável:', orgaoResponsavel.trim());
console.log('Data Limite:', dataLimite.trim());
console.log('Valor Estimado:', valorEstimado.trim());
console.log('Descrição:', descricao.trim());

await page.waitForTimeout(2000);

await page.getByRole('tab', { name: 'Lotes' }).click();

await expect(
  page.locator('table tbody tr').first()
).toBeVisible({ timeout: 15000 });



const linhas = page.locator('table tbody tr');
const totalLinhas = await linhas.count();

for (let i = 0; i < totalLinhas; i++) {
  const linha = linhas.nth(i);
  const colunas = linha.locator('td');

  const descricao = (await colunas.nth(1).innerText()).trim();

  if (descricao === 'Calculadoras') {
    const dados = {
      numero: (await colunas.nth(0).innerText()).trim(),
      descricao,
      unidadeMedida: (await colunas.nth(2).innerText()).trim(),
      quantidade: (await colunas.nth(3).innerText()).trim(),
      valorUnitario: (await colunas.nth(4).innerText()).trim(),
      valorTotal: (await colunas.nth(5).innerText()).trim()
    };

    console.log('Linha Calculadoras:', dados);
  }
}


let soma = 0;

// ajusta o seletor se o tbody for diferente

for (let i = 0; i < totalLinhas; i++) {
  const linha = linhas.nth(i);

  // Coluna "Descrição" (2ª coluna)
  const descricao = (await linha.locator('td').nth(1).innerText()).trim();

  if (descricao === 'Calculadoras') {
    // Coluna "Valor Total Estimado" (6ª coluna)
    const valorTexto = await linha.locator('td').nth(5).innerText();

    const valorNumerico = Number(
      valorTexto
        .replace('R$', '')
        .replace(/\./g, '')   // remove separador de milhar
        .replace(',', '.')   // troca vírgula por ponto
        .trim()
    );

    soma += valorNumerico;
  }
}

console.log('Total de Calculadoras:', soma);

await page.getByRole('tab', { name: 'Relatórios' }).click();

const botoes = page.getByRole('button', { name: 'Visualizar' });
const total = await botoes.count();

for (let i = 0; i < total; i++) {
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    botoes.nth(i).click()
  ]);

  const nomeOriginal = download.suggestedFilename();
  const extensao = path.extname(nomeOriginal);

  const novoNome = `documento_${i + 1}${extensao}`;

  await download.saveAs(path.join('downloads', novoNome));

  console.log(`Baixado: ${novoNome}`);
}

});

