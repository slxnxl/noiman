// Функция для анимации элементов при прокрутке
import React, { useEffect } from "react";
export default function animateElements() {
  console.log("animateElements run");
  // TODO добавить useEffect в этой функции
  // useEffect(() => {
  //   ;
  // }, []);

  const classForAnimated = "content_hide";
  const square = document.getElementsByClassName(classForAnimated);
  console.log("square: ", square);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log("entry: ", entry);
      if (entry.isIntersecting && entry.classList.contains(classForAnimated)) {
        console.log("square: ", square);
        // delete hide class
        square.classList.remove(classForAnimated);
        // add animate class
        square.classList.add("square-transition");
      }
    });
  });
  observer.observe(square);
}
// // Удалить CSS-класс square-transition
// const square = document.querySelector(".square");
// square.classList.remove("square-transition");
//
// // Добавить наблюдение за появлением элемента
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       square.classList.add("square-transition");
//       return;
//     }
//     square.classList.remove("square-transition");
//   });
// });
// observer.observe(document.querySelector(".square-wrapper"));
