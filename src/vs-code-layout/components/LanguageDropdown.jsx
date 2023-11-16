import React, { useState } from 'react';
import i18n from 'i18next';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('pt-br'); 

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  return (
    <div>
      <select
        id="language"
        onChange={(e) => changeLanguage(e.target.value)}
        value={selectedLanguage}
      >
        <option value="pt-br">PT/BR</option>
        <option value="en-en">EN/EN</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;
