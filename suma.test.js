const suma = require('./suma'); 

test('Suma 5 + 5 para igualar 10', () => {
  expect(suma(5, 5)).toBe(10); 
});
