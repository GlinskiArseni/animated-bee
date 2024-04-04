/*(Russia)
цифры в скобках(только в расписке) - строка 
canvas(22) - ищет элемент в документе с id
ctx(23) - он задает контекст в виде 2d формата
функция circle(28) - создает круг по заданным кординатам(25,26) 
функция drawBee(38) - рисует пчелу функцией circle
функция update(50) - обновляет кординаты пчелы на рандомное число от -2 до 2
и если он достигает больше 200 то возвращается на раньше заданные кординаты 
либо если становится больше 0 то также возвращается на раньше заданные кординаты
функция setInterval(61) - очищает поле и рисует пчелу каждые 30 милисекунд
(English)
numbers in brackets (only in receipt) - line
canvas(22) - searches for an element in the document with id
ctx(23) - it sets the context in 2d format
function circle(28) - creates a circle at given coordinates(25,26)
function drawBee(38) - draws a bee using the circle function
function update(50) - updates the coordinates of the bee to a random number from -2 to 2
and if it reaches more than 200 then it returns to the previously specified coordinates
or if it becomes greater than 0, it also returns to the previously specified coordinates
function setInterval(61) - clears the field and draws a bee every 30 milliseconds
*/
let  canvas = document.getElementById("canvas")
let  ctx =  canvas.getContext("2d");

let x = 100;
let y = 100;

let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false); 
  if (fillCircle) {
    ctx.fill();
  } else {
   ctx.stroke();
  }
};

let drawBee = function (x,y) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Gold";

    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x -5, y -11, 5, false);
    circle(x +5, y -11, 5, false);
    circle(x -2, y -1, 2, false);
    circle(x +2, y -1, 2, false);
};
let update = function (coordinate) {
    let offset = Math.random() * 4 - 2;
    coordinate += offset;
    if (coordinate > 200) {
        coordinate = 200;
    }
    if (coordinate < 0) {
        coordinate = 0;
    }
    return coordinate;
}
setInterval(function () {
    ctx.clearRect(0, 0, 200, 200);
    drawBee(x, y);
    x = update(x);
    y = update(y);
    ctx.strokeRect(0, 0, 200, 200);
}, 30);