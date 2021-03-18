interface INavbarSubmenu {
  children?: JSX.Element;
  isActive: boolean;
}

function NavbarSubmenu({ isActive }: INavbarSubmenu): JSX.Element {
  
  return (
    <div className={`${isActive ? 'transition ease-out duration-200 opacity-100 translate-y-0' : 'transition ease-in duration-150 opacity-0 translate-y-1 hidden'} absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}>
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
          <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">
              Ejecutiva
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </a>

          <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">
              Operativa
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </a>

          <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">
              Visitantes y Eventos
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </a>

          <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">
              Confort
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </a>
          <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">
              Edu &amp; Train
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </a>
          <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">
              Industrial
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}

export default NavbarSubmenu;