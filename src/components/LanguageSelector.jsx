import React, { useContext } from 'react';

import { languageOptions } from '../languages';
import { LanguageContext } from '../containers/Language';

// import './../styles/filters.css'

export default function LanguageSelector({ className }) {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = e => userLanguageChange(e.target.value);

  return (
    <select
      onChange={handleLanguageChange}
      value={userLanguage}
      // className='select'
      className={className}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  );
};
