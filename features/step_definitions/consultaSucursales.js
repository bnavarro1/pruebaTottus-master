const { Given, When, Then } = require('cucumber');
const Selector = require('testcafe').Selector;

Given('Yo abro la web de google', async function () {
    await testController.navigateTo('http://www.google.cl/');
});

When('Yo escribo en el campo de busqueda {string}', async function (text) {
    var input = Selector('.gLFyf').with({ boundTestRun: testController });
    await testController.typeText(input, text);
});

Then('Yo presiono tecla {string} en google', async function (text) {
    await testController.pressKey(text);
});

Then('Yo presiono texto {string}', async function (text) {
    await testController.click(Selector('span').withText(text));
});

Then('Yo presiono boton Sitio Web', async function () {
    await testController.click(Selector('a').withText('Sitio web'));
});

 Then('Yo presiono boton Recetas y mas', async function () {
    await testController.hover(Selector('#new_tottus_nav_cliente_recetas').find('a').find('img'));
    await testController.click(Selector('#new_tottus_nav_cliente_recetas').find('a').find('img'));
});

Then('Yo selecciono Dificultad {string}', async function (text) {
    await testController.click(Selector('button').withText(text));
});

Then('Yo Presiono {string}', async function (text) {
    await testController.click(Selector('h3').withText(text));
});

Then('Yo valido ingredientes {string} y {string}', async function (text1,text2) {
    const firstLink = Selector('.divRecipe').with({boundTestRun: testController});
    await testController.expect(firstLink.innerText).contains(text1);
    await testController.expect(firstLink.innerText).contains(text2);
});


