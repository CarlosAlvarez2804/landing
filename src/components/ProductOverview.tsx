interface ProductData {
  headerText: string;
  footerText: string;
  imgSrc: string;
}

interface IProductOverview {
  className?: string;
  children?: JSX.Element;
  data: ProductData[];
}

function ProductOverview({ className, data } : IProductOverview): JSX.Element {
  return (
    <div className={`${ className } container my-12 mx-auto px-4 md:px-12`}>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">

        {data.map((value, index) => (
          <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transition duration-700 ease-in-out transform hover:scale-110">

            <article className="overflow-hidden rounded-lg shadow-lg">

              <a href="/">
                <img alt="Placeholder" className="block h-auto w-full" src={value.imgSrc}/>
              </a>

              <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black text-center" href="/">
                    {value.headerText}
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-center leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="/">
                  <p className="text-sm">
                    {value.footerText}
                  </p>
                </a>
              </footer>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductOverview;