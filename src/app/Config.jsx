import React from 'react'
import {cnf} from "./../assets/img/index"
import LanguageSelector from '../components/LanguageSelector';
import { Text } from '../containers/Language';


function Config() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center"
              style={{                  
                  backgroundImage: `url('${cnf}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
              }}>
            {/* Hero responsivo que ocupa todo el ancho */}
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 py-6 flex-grow">
            <div className="bg-bg-gray-50 shadow-lg rounded-lg w-full max-w-4xl mx-auto">
                {/* Header */}
                <div className="border-b p-4">
                    <h1 className="text-xl font-semibold text-gray-700"><Text tid="c_as" /> </h1>
                </div>

                {/* Content */}
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
                            <select className="w-full border rounded-md p-2">
                                <option>Dark</option>
                                <option>Light</option>
                                <option>Colorful</option>
                                <option>Ocean</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Local Currency
                            </label>
                            <select className="w-full border rounded-md p-2">
                                <option>Dollar</option>
                                <option>Boliviano</option>
                                <option>Euro</option>
                                <option>Dollar Canadiense</option>
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