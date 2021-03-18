import NavbarSubmenu from '../components/NavbarSubmenu';
import { useState } from 'react';
import logo from '../assets/img/logo/logo.png';

function Navbar(): JSX.Element {
  const [active, setActive] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button onClick={() => {setMobileActive(true)}} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
              <span className="sr-only">Open menu</span>
          
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
          
              <button onClick = {() => setActive(!active)} type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                <span>Producto</span>
            
                <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <NavbarSubmenu isActive={ active }/>
              
            </div>

            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Distribuidores
            </a>
            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Alianzas
            </a>
            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Nosotros
            </a>
            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contacto
            </a>
            
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">            
              <span></span>
              <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

            </button>
          </div>
        </div>
      </div>

      <div className={`${mobileActive ? 'block' : 'hidden'} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src={logo} alt="Workflow"/>
              </div>
              <div className="-mr-2">
                <button onClick = {()=>{setMobileActive(false)}} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Producto
                  </span>
                </a>

                <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Distribuidores
                  </span>
                </a>

                <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Alianzas
                  </span>
                </a>

                <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Nosotros
                  </span>
                </a>

                <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Contacto
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;