// TODO повторить как работает async await
// TODO  почему-то 4 консоль лога а не 2
export default async function preloadImages(array) {
  array.map((source) => {
    console.log("загрузочка");
    const img = new Image();
    img.src = source;
  });
}
