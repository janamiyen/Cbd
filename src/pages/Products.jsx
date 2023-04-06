

const products = [
    {
      id: 1,
      name: 'Cbd oil',
      href: '#',
      price: '$10.000',
      imageSrc: 'https://nutricionyfarmacia.com/blog/wp-content/uploads/2021/10/cbd-Cannabidiol-salud.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'CBD para caninos',
      href: '#',
      price: '$8.000',
      imageSrc: 'https://www.aon.es/personales/seguro-perro-gato/wp-content/uploads/sites/2/2021/06/aceite-cbd-mascotas.jpg.webp',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://www.elsoldehermosillo.com.mx/doble-via/salud/g11xyy-el-cbd-puede-aportar-a-tu-salud/ALTERNATES/LANDSCAPE_768/El%20CBD%20puede%20aportar%20a%20tu%20salud',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://img.freepik.com/fotos-premium/comida-cannabis-hierba-marihuana-hoja-cannabis-chocolate-sobre-fondo-oscuro-deliciosa-galleta-postre-dulce-planta-hoja-canamo-thc-cbd-hierbas-comida-snack-medicina_73523-7642.jpg?w=740',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
        
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
       
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }