// let positionX = (~~longitude + 180) * 2;
// let positionY = (90 - ~~latitude) * 2;

console.log(cities);

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const viewbox = document.createAttribute("viewbox");
const width = document.createAttribute("width");
const height = document.createAttribute("height");
const x = document.createAttribute("x");
const y = document.createAttribute("y");
const style = document.createAttribute("style");
viewbox.value = "0 0 700 700";
width.value = "640";
height.value = "360";
style.value = "background: white;";
svg.setAttributeNode(viewbox);
svg.setAttributeNode(width);
svg.setAttributeNode(height);
svg.setAttributeNode(style);

for (i = 0; i < cities.length; i++) {
  var positieX = (cities[i].longitude + 180) * 2;
  var positieY = (90 - cities[i].latitude) * 2;

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  const cx = document.createAttribute("cx");
  const cy = document.createAttribute("cy");
  const r = document.createAttribute("r");
  const fill = document.createAttribute("fill");
  const stroke = document.createAttribute("stroke");


  r.value = 1;
  cx.value = positieX;
  cy.value = positieY;
  // fill.value = `rgb(${255 - (increment * count)},0,0)`;
  stroke.value = 'black';

  circle.setAttributeNode(cx);
  circle.setAttributeNode(cy);
  circle.setAttributeNode(r);
  circle.setAttributeNode(fill);
  circle.setAttributeNode(stroke);

  svg.appendChild(circle);
}

document.body.appendChild(svg);