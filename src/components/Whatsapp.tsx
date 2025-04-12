import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/images/dg.png';

const Whatsapp = () => {
    const logoUrl = logo.src;
    return <FloatingWhatsApp  
    accountName='UNV Dubai Technology' 
    phoneNumber='+971552929644' 
    avatar={logoUrl} 
    statusMessage="Live chat now"
    chatMessage="Welcome to UNV Dubai Technology 🤝. How can we help?"
    />
}

export default Whatsapp;