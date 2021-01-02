// Import stylesheets
import "./style.css";

////if mouse pressed
let log = [];
const mouse_clicked = event => {
  if (event.button == 0) return log.push(`left_click = ${event.target.id}`);
  else return log.push(`right_click`);
};
document.addEventListener("mousedown", mouse_clicked);

////if key pressed
const key_press = event => {
  log.push(`key pressed = ${event.key}`);
};
document.body.addEventListener("keypress", key_press);

////show
const show_log = () => {
  console.log(log);
};
document.getElementById("show_log").addEventListener("click", show_log);
