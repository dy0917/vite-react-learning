import { useState } from 'react';

const phrases = new Map([
  ['english', 'Happy Birthday'],
  ['german', 'Alles Gute zum Geburtstag'],
  ['spanish', 'Feliz Cumpleaños'],
]);

export default function BirthdayTranslator() {
  const [currentPhrase, setCurrentPhrase] = useState({
    lang: 'english',
    phrase: 'Happy Birthday',
  });

  const [thisClass, setClass] = useState({
    location: 'AUT',
    topic: 'react',
  });
  const [students, setStudents] = useState([
    { firstName: 'firstName', lastName: 'LastName', papers: [] },
    { firstName: 'firstName', lastName: 'LastName' },
    { firstName: 'firstName', lastName: 'LastName' },
    { firstName: 'firstName', lastName: 'LastName' },
  ]);

  const handleChangeLanguage = (newlang) => {
    setCurrentPhrase({ lang: newlang, phrase: phrases.get(newlang) });
  };

  return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {phrases.get(currentPhrase.lang)}! ({currentPhrase.lang})
      </h3>
      <button onClick={() => handleChangeLanguage('english')}>English</button>
      <button onClick={() => handleChangeLanguage('german')}>German</button>
      <button onClick={() => handleChangeLanguage('spanish')}>Spanish</button>
    </div>
  );
}
