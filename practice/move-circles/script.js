const canvas = document.querySelector("canvas");
const widhtWindow = window.innerWidth - 10;
const heightWindow = window.innerHeight - 10;
canvas.width = widhtWindow;
canvas.height = heightWindow;

// bydem sozdavat' elements v 2d
// dlya etogo neobhodimo inicializirovat' canvas s etim kontextom
// to est' peremennoi 'c' mi prisvaevaem canvas s neobhodimimi metodami
const c = canvas.getContext("2d");

//sozdadim new class Circle
class Circle {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }
  draw() {
    // na4alo risovaniya novogo ob'ekta
    c.beginPath();
    // ob'ekt risovaniya (circle)
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // cvet
    c.fillStyle = this.color;
    c.fill();
    // render circle
    c.stroke();

    this.update();
  }
  update() {
    // ysloviya neobhodimie dlya otskoka ot granic okna
    if (this.x + this.radius > widhtWindow || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > heightWindow || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    // skorost' dvizheniya circles
    this.x += this.dx;
    this.y += this.dy;
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colorsArray = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee",
  "#fff",
];
const circlesArray = [];

for (let i = 0; i < 100; i++) {
  // metod Math.random - poly4aem sly4ainoe 4islo ot 0 do 1
  // and ymnozhaem na widht or height of display
  // or otnimaen 0.5 dlya izmeneniya yskoreniya and napravleniya
  let radius = 10;
  let x = Math.random() * (widhtWindow - radius * 2) + radius;
  let y = Math.random() * (heightWindow - radius * 2) + radius;

  let dx = (Math.random() - 0.5) * 5;
  let dy = (Math.random() - 0.5) * 5;

  const colorIndex = randomInteger(0, colorsArray.length - 1);
  // pushim v massiv new circle
  circlesArray.push(new Circle(x, y, radius, dx, dy, colorsArray[colorIndex]));
}

function animate() {
  //risovanie kadra
  requestAnimationFrame(animate);

  // o4ishaem canvas(2 parametra: koordinati up left to4ka
  // and down right to4ka)
  c.clearRect(0, 0, widhtWindow, heightWindow);

  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i].draw();
  }
}

animate();
