import React ,{useContext} from 'react';
import { THEMES } from './constants';
import {  LanguageContext } from '../containers/Language';

const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`;

const MenuTheme = ({ onThemeChange , currentTheme }) => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <nav>
      <select defaultValue={currentTheme} onChange={(e) => onThemeChange(e.target.value)} className='w-full border rounded-md p-2'>
        {THEMES.map(({ code, label }) => (
          <option key={code} value={code}>
            {dictionary[label]}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default MenuTheme;