import './Redes.css'
import Logowhatsapp from './Imagenes/whatsapp.png';
import Logoinstagram from './Imagenes/instagram.png';

const numeroWhatsApp = "+573145296502";
const mensaje = "Hola, estoy interesado en comprar una pulsera. ¿Podrías darme más información?";
const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;

function Redes(){
    return(
        <div className='flotante'> 
        <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer">
        <img src={Logowhatsapp} alt="WhatsApp" className='iconI' />
        </a>
        
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={Logoinstagram} alt="instagram" className='iconI' /> </a>
    </div>
    
    );
}

export default Redes    