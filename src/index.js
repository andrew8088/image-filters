const el = document.querySelector('canvas');
const WIDTH = document.documentElement.clientWidth;
const HEIGHT = document.documentElement.clientHeight;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

el.width = WIDTH;
el.height = HEIGHT;

const ctx = el.getContext('2d');

const img = new Image();

img.onload = function (e) {
  if (WIDTH > HEIGHT) {
    let divisor = this.height / HEIGHT;
    ctx.drawImage(img, 0, 0, this.width / divisor, HEIGHT);
  } else {
    let divisor = this.width / WIDTH;
    ctx.drawImage(img, 0, 0, WIDTH, this.height / divisor);
  }
};

let src = `./test-images/${rand(1,4)}.jpg`;
img.src = src;
