import './Manillas.css'
import Pulceras from './Imagenes/pus.png';
function Manillas(){
return(
<div className='ContenedorMan'> 
    <div className='Titulo'> Manilla  sa y accesosrios</div>
    <img src={Pulceras} className='Imagen' alt="Manilla artesanal" /> 
</div>
);

}

export default Manillas;