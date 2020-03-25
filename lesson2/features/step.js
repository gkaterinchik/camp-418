const expect = require('chai').expect;
const {Given, Then} = require('cucumber');
const request = require ('supertest');
const controller = require ('../src/game');
const app = require ('../src/server');

Given('пустое поле', () => {
  controller.reset();
});

Given('ходит игрок {int}', (i) => {
  controller.setCurrentPlayer(i);
});

Given('игрок ходит в клетку {int}, {int}', (x, y) => {
  request(app).post('/move').send({ x, y });
  controller.makeMove(x, y);
});

Then('поле становится {string}', function (pole) {
          return request(app)
          .get('/getFIeld')
          .expect(controller.textToArr(pole));
});


Given('поле {string}', (pole) => {
controller.presetField(controller.textToArr(pole));
});

Given('возвращается ошибка', () => {
cntroller.getError === true;
});

Given('победил игрок {int}', function (int)  {
return controller.checkWin();
expect(controller.checkWin()).equal(int);
});
