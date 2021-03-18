interface ItemNavigatorData {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
interface ItemNavigatorProps {
  children?: JSX.Element;
  data: ItemNavigatorData[];
}

function ItemNavigator({data}: ItemNavigatorProps): JSX.Element {
  return (
    <div className="relative bg-white">
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1"></div>
          <nav className="flex justify-center md:flex space-x-10">
            {data.map((value, index) => (
              <div key={index} className="relative">
                <button onClick = {value.onClick} type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                  <span>{value.title}</span>
                </button>
              </div>
            ))}
          </nav>
          <div className="flex justify-end md:flex-1 lg:w-0"></div>
        </div>
      </div>
      <div className={`block top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}>
        <div className="rounded-lg divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="mt-6">
              <nav className="grid justify-items-center gap-y-8">
                {data.map((value, index) => (
                  <div key={index} className="relative">
                    <button onClick = {value.onClick} type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                      <span>{value.title}</span>
                    </button>
                  </div>
                ))}
                
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemNavigator;