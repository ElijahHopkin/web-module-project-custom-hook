import localStorage from './useLocalStorage';

const useDarkMode = (initValue) => {
    const [darkMode, setDarkMode] = localStorage('useDark', initValue);

    return [darkMode, setDarkMode];
};

export default useDarkMode;