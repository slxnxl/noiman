export default function Footer() {
  //   TODO проверить соответствие макету и расставить ссылки
  //   TODO поправить верстку макета при средней ширине экрана like 1200px
  return (
    <div>
      <hr />
      <div className="grid grid-cols-4 gap-4 font-normal text-xl gap-8 gap-x-5 gap-y-16 md:gap-y-6 grid-flow-dense md:grid-cols-1 text-lg pb-28">
        <p>Get in touch</p>
        <div className="flex flex-col">
          <p>Contact me</p>
          {/*можно попробовать сделать линию через border bottom*/}
          <a className="text-6xl md:text-3xl underline">
            hello@bellanoiman.com
          </a>
          <a className="text-6xl md:text-3xl">@bellanoiman</a>
        </div>
        <div className="col-start-4 flex flex-col md:col-start-1">
          <p>Follow me</p>
          <a className="text-6xl md:text-3xl underline">Instagram</a>
          <a className="text-6xl md:text-3xl">Behance</a>
        </div>
      </div>
    </div>
  );
}
