/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const whos = ["The dog", "My grandma", "The mailman", "My bird"];
  const actions = ["ate", "peed", "crushed", "broke"];
  const whats = ["my homework", "my phone", "the car"];
  const whens = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const whosIndex = Math.trunc(Math.random() * whos.length);
  const who = whos[whosIndex];
  const actionsIndex = Math.trunc(Math.random() * actions.length);
  const action = actions[actionsIndex];
  const whatsIndex = Math.trunc(Math.random() * whats.length);
  const what = whos[whatsIndex];
  const whensIndex = Math.trunc(Math.random() * whens.length);
  const when = whens[whensIndex];
  const excuse = `${who} ${action} ${what} ${when}`;
  const p = document.querySelector("#excuse");
  p.innerHTML = excuse;
  console.log("Hello Rigo from the console!");
};
