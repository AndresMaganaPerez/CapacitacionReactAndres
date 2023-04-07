import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import Select from '../../components/Select';

const restaurants = [
  {
    name: "Restaurante 1"
  }, 
  {
    name: "Restaurante 2"
  }, 
  {
    name: "Restaurante 3"
  }
]

function DishRestaurant() {
  return (
    <div>
        <div>
            <Navbar/>
            <p className='font-semibold text-xl m-4'>Restaurante</p>
            <div className='flex w-full m-4'>
              <div className='m-4 w-1/2'>
                <Select 
                  placeholder="Restaurant" 
                  options={ restaurants }
                  label="Restaurante"
                />
              </div>
              <div className='m-4 w-1/2'>
                <SearchBar 
                  label="Buscador" 
                  type="text" 
                  placeholder="Busca un platillo"
                />
              </div>
            </div>
            <p className='font-semibold text-lg m-4'>Platillos</p>
            <div className='w-96'>
              <Card img='../assets/burger.jpg' title="Hamburguesa Premium" rest="Wings Army" desc="Hamburguesa con extra queso"/>
            </div>
        </div>
    </div>
  );
}

export default DishRestaurant;