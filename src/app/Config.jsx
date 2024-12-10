import React, { useEffect, useState } from 'react'
import {cnf} from "./../assets/img/index"
import LanguageSelector from '../components/LanguageSelector';
import { Text } from '../containers/Language';
import MenuTheme from '../components/MenuTheme';



function Config() {
    const [theme, setTheme] = useState('light');
    const [currency, setCurrency] = useState('US');

    const currTheme = window.localStorage.getItem('rcml-theme') || 'light'
    const currCurrency = window.localStorage.getItem('rcml-currency') || 'US'

const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    window.localStorage.setItem('rcml-theme',newTheme)
    document.body.className = newTheme; 
};

 

const onCurrencyChange = (newCurrency) => {
    console.log(" val ",newCurrency)
    window.localStorage.setItem('rcml-currency',newCurrency)
    setCurrency(newCurrency)
}
  return (
       
    <div className={`min-h-screen  flex flex-col `}>
        <div className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center"
              style={{                  
                  backgroundImage: `url('${cnf}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
              }}>            
        </div>

        <div className={`w-full px-4 sm:px-6 lg:px-8 py-6 flex-grow `}>
            <div className="custom-card shadow-lg rounded-lg w-full max-w-4xl mx-auto">
                
                <div className="border-b p-4">
                    <h1 className="text-xl font-semibold text-gray-700"><Text tid="c_as" /> </h1>
                </div>

                
                <div className="p-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                  <Text tid="c_lan" />
                            </label>
                            <LanguageSelector className={"w-full border rounded-md p-2"} />                           
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                 <Text tid="c_theme" />
                            </label>
                            <MenuTheme onThemeChange={handleThemeChange} currentTheme={currTheme} />

                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            <Text tid="c_localCurrency" /> 
                            </label>
                            <select className="w-full border rounded-md p-2"
                                defaultValue={currCurrency}
                                
                                onChange={(e) => onCurrencyChange(e.target.value)} >                                
                                <option value="bob">Bolivian Peso</option>
                                <option value="eur">Euro</option>
                                <option value="cad">Canadian Dollar</option>
                                <option value="mxn">Mexican Peso</option>
                                <option value="ars">Argentine Peso</option>
                                <option value="clp">Chilean Peso</option>
                                <option value="pyg">Paraguayan Guaraní</option>
                                <option value="uyu">Uruguayan Peso</option>
                                <option value="brl">Brazilian Real</option>
                            </select>
                        </div>                        
                    </div>
                </div>

                 
            </div>
        </div>
    </div>    
  )
}

export { Config }