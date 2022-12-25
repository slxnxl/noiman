// TODO повторить как работает async await
// TODO  почему-то 4 консоль лога а не 2
// TODO реализовать возврат promises

export default async function preloadImages(array) {
  await array.map((source) => {
    console.log("загрузочка");
    const img = new Image();
    img.src = source;
  });
}

// export default async function preloadImagesPromise(array) {
//   return Promise.all(await preloadImages(array))
// }
