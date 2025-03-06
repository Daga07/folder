import './Redes.css'
import Logowhatsapp from './Imagenes/whatsapp.png';
import Logoinstagram from './Imagenes/instagram.png';
function Redes(){
    return(
        <div className='flotante'> 
        <a href="https://WhatsApp.com" target="_blank" rel="noopener noreferrer">
        <img src={Logowhatsapp} alt="WhatsApp" className='iconI' /></a>
        
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={Logoinstagram} alt="instagram" className='iconI' /> </a>
    </div>
    
    );
}

export default Redes    