import {useState} from 'react'

const localStorage = (key, initValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initValue;
      });
      const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      };
      return [storedValue, setValue];
    };

     export default localStorage;