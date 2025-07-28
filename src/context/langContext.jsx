import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import MensajesEspañol from '../lang/español.json'
import MensajesEnglish from '../lang/english.json'

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    const [mensajes, establecerMensajes] = useState(MensajesEspañol);
    const [locale, establecerLocale] = useState('es');

    const establecerLenguaje = (lenguaje) => {
        switch (lenguaje) {
            case 'es':
                establecerMensajes(MensajesEspañol);
                establecerLocale('es');
                break;
            case 'en':
                establecerMensajes(MensajesEnglish);
                establecerLocale('en');
                break;
            default:
                establecerMensajes(MensajesEspañol);
                establecerLocale('es');
        }
    }


    return (
        <langContext.Provider value={{ establecerLenguaje, locale }} >
            <IntlProvider locale={locale} messages={mensajes}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export { LangProvider, langContext };