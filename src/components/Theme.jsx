import React, { useContext } from 'react';
import { MyThemeContext } from '../Store/MyThemeContext';
export default function Theme({ children }) {
  const { theme, darkMode } = useContext(MyThemeContext);
  return (
    <div
      className="LoginForm componentBox"
      style={{ background: theme.background, color: theme.foreground }}
    >
      {children}
    </div>
  );
}
