// Вар. 3
// Метод правых прямоугольников

function F(x) {
  return x * x - x + 1;
}

function integrateRightRiemann(func, a, b, n = 1000) {
  const h = (b - a) / n;
  let s = 0;
  for (let i = 1; i <= n; i++) { 
    s += func(a + i * h);
  }
  
  return s * h;
}

const a = parseFloat(prompt("Введите нижний предел:"));
const b = parseFloat(prompt("Введите верхний предел:"));
const n = parseInt(prompt('Введите количество точек интегрирования: ', 1000));

const result = integrateRightRiemann(F, a, b, n);

alert(`Результат интегрирования:\n
      Функция: x² - x + 1
      Метод: Right Riemann Sum
      Интервал: [${a}, ${b}]
      Количество точек: ${n}
      Результат: ${result}`);