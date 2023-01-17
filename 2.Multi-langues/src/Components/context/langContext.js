import React, {createContext, useState} from 'react'

export const Context = createContext();

// Récupère les langues du navigator
const supportedLang = ['EN', 'ES', 'FR']
// fr-FR => FR
const navigatorLang = navigator.language.slice(0,2).toUpperCase();
const defaultlang = supportedLang.includes(navigatorLang) ? navigatorLang : 'EN';

const ContextProvider = props => {
    const [lang, setLang] = useState(defaultlang)

    const toggleLang = changeLang => {
        setLang(changeLang)
    }

    return (
        <Context.Provider value={{lang, toggleLang}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider