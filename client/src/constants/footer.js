import { FaGlobeAmericas, FaWhatsapp, FaEnvelopeOpen, FaRegCreditCard } from "react-icons/fa"; 
import { BsHourglassSplit } from "react-icons/bs"; 

export const footerContact = [
    {
        id: 1, 
        logo: <FaGlobeAmericas />, 
        text: "1502 N Milwaukee Ave, Chicago, IL 60622", 
    }, 
    {
        id: 2, 
        logo: <FaWhatsapp />, 
        text: "+1 (312) 846-9730",
    }, 
    {
        id: 3, 
        logo: <FaEnvelopeOpen />, 
        text: "contact@bobalife.com",
    }, 
    {
        id: 4, 
        logo: <FaRegCreditCard />, 
        text: "Contactless payments accepted",
    }, 
]; 

export const footerHours = [
    {
        id: 1, 
        logo: <BsHourglassSplit />, 
        text: "Every Day @ 11:00 - 21:00", 
    }, 
]; 