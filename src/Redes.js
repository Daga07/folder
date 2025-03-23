import './Redes.css'
import Logowhatsapp from './Imagenes/whatsapp.png';
import Logoinstagram from './Imagenes/instagram.png';

const numeroWhatsApp = "+573171618621";
const mensaje = "¡Hola! ✨ Bienvenido a Lux Jewels 💎. ¿En qué puedo ayudarte hoy?";
const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;

function Redes(){
    return(
        <div className='flotante'> 
        <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer">
        <img src={Logowhatsapp} alt="WhatsApp" className='iconI' />
        </a>
        
        <a href="https://www.instagram.com/lux_jewels_tc?igsh=MXBhM2xxdHRqaTB2Ng==" target="_blank" rel="noopener noreferrer">
        <img src={Logoinstagram} alt="instagram" className='iconI' /> </a>
    </div>
    
    );
}

export default Redes    