import React from 'react';
import { useTheme } from '../ThemeContext';
import './DarkModeButton.css';

const DarkModeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
      <span className="slider round"></span>
    </label>
  );
};

export default DarkModeButton;
