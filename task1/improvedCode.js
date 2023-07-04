// Ищем максимальное значение среди вхождений (крайнее правое) a или b в строку str
// Если какое-либо из значений - пустая строка - возвращаем -1

function func(str, a, b) {
  return Math.max(
    a.length ? str.lastIndexOf(a) : -1,
    b.length ? str.lastIndexOf(b) : -1
  );
}
