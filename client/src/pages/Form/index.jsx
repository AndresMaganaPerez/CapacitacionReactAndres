import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import InputForm from '../../components/InputForm';
import TextArea from '../../components/TextArea';

function Form() {
  return (
    <div>
        <div>
            <Navbar/>
            <div className='w-full'>
              <p className='font-semibold text-xl m-4'>Agregar un platillo</p>
              
              <div className='w-full m-4'>
                <div className='flex w-full'>
                  <div className='w-1/3'>
                    <InputForm
                      type="text"
                      name="nameComida"
                      label="Platillo"
                      placeholder="Hamburguesa"
                      defaultValue=""
                    />
                    <InputForm
                      type="text"
                      name="nameRestaurante"
                      label="Restaurante"
                      placeholder="Restaurante que te guste"
                      defaultValue=""
                    />
                    <TextArea
                      name="descripcion"
                      label="Descripcion"
                      placeholder="Una deliciosa hamburguesa"
                      defaultValue=""
                    />
                  </div>
                  <div className='mx-6 w-1/3'>
                    <InputForm
                      type="file"
                      name="nameImagen"
                      label="Imagen"
                      placeholder="Foto"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/3 m-4'>
                <Button type="submit" text="Agregar"/>
            </div>
            <p className='font-semibold text-lg m-4'>Platillos</p>
            <div className='w-1/3'>
              <Card img='../assets/burger.jpg' title="Hamburguesa Premium" rest="Wings Army" desc="Hamburguesa con extra queso"/>
            </div>
        </div>
    </div>
  );
}

export default Form;
