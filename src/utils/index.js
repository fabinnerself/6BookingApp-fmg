import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'
 

export const priceFormat = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD',
    minimumFractionDigits:2})



    const languages = {
        en: 'en-US', // Inglés
        tr: 'tr-TR', // Turco
        de: 'de-DE', // Alemán
        es: 'es-ES', // Español
        it: 'it-IT', // Italiano
        fr: 'fr-FR', // Francés
        bolivian: 'es-BO', // Español (Bolivia)
        mexican: 'es-MX', // Español (México)
    };
    
    const currencies = {
        usd: 'USD',
        eur: 'EUR',
        bob: 'BOB',
        mxn: 'MXN',
        cad: 'CAD',
        ars: 'ARS',
        clp: 'CLP',
        pyg: 'PYG',
        uyu: 'UYU',
        brl: 'BRL'
    };
    
    // Función para obtener la combinación de idioma y moneda
    const getLocaleCurrency = (language, currency) => {
        const locale = languages[language];
        const currencyCode = currencies[currency];
    
        if (!locale || !currencyCode) {
            throw new Error('Invalid language or currency');
        }
    
        return { locale, currency: currencyCode };
    };
    
    // Función para formatear el precio
    export const priceFormatCurrency = (amount, language, currency) => {
        const { locale, currency: currencyCode } = getLocaleCurrency(language, currency);
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        }).format(amount);
    };


    export const formatDate = (date, language) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const dateObj = new Date(date);
    
        switch (language) {
            case 'es': // Español
            case 'fr': // Francés
            case 'it': // Italiano
            case 'tk': // Turco
                return dateObj.toLocaleDateString('es-ES', options).replace(/\//g, '/');
            
            case 'en': // Inglés
                return dateObj.toLocaleDateString('en-US', options).replace(/\//g, '/');
            
            case 'de': // Alemán
                return dateObj.toLocaleDateString('de-DE', options).replace(/\//g, '.');
            
            default:
                throw new Error('Idioma no soportado');
        }
    }
    
    // Ejemplo de uso:
    // console.log(formatDate('2023-12-25', 'es')); // 25/12/2023
    // console.log(formatDate('2023-12-25', 'en')); // 12/25/2023
    // console.log(formatDate('2023-12-25', 'fr')); // 25/12/2023
    // console.log(formatDate('2023-12-25', 'de')); // 25.12.2023
    // console.log(formatDate('2023-12-25', 'it')); // 25/12/2023
    // console.log(formatDate('2023-12-25', 'tk')); // 25/12/2023
export const cn = (...styles) => {
    return twMerge(clsx(styles))
}