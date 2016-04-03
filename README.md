## Билинейная интерполяция
[Билинейная интерполяция](https://ru.wikipedia.org/wiki/Билинейная_интерполяция "Билинейная интерполяция")

Дан квадрат с координатами вершин `(0, 0)`, `(0, 1)`, `(1, 0)`, `(1, 1)`. Заданы значения яркостей (числа) в четырех углах и координата `(x, y)` точки внутри квадрата или на его сторонах. Необходимо вычислить значение яркости в точке `(x, y)`.

### solution.js
Нужно написать функцию `bilinear`, принимающую координаты точки `(x, y)`, яркости цветов в четрырех вершинах и возвращающую яркость в точке `(x ,y)`. Если `(x, y)` вне допустимого диапазона
```
0 <= x <= 1,
0 <= y <= 1,
```
то функция должна вернуть `undefined`.
