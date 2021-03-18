function SectionHeader(): JSX.Element {
  return (
    <div className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Requiez</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Productos Nuevos
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Encuentra la solución adecuada para cada espacio y necesidad con el máximo confort y calidad. Diseño, tecnología y eficiencia en cada uno de nuestros productos..
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;