class Cookie {
  constructor(cookie) {
    this.cookie = cookie;
  }
  getColor() {
    //getter
    return this.color;
  }
  setColor(color) {
    //setter
    this.color = color;
  }
}
const cookieOne = new Cookie("Blue");
const cookieTwo = new Cookie("Red");

cookieTwo.setColor("black");
console.log(cookieTwo.getColor());
