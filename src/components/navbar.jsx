import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import { langContext } from '../context/langContext.jsx';
import { FormattedMessage } from 'react-intl';

function Navbar() {
    const { establecerLenguaje, locale } = useContext(langContext);
    const idiomaSiguiente = locale === 'es' ? 'en' : 'es';
    const toggleIdioma = () => establecerLenguaje(idiomaSiguiente);
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => setMenuAbierto(!menuAbierto);
    const cerrarMenu = () => setMenuAbierto(false);

    return (
        <nav className="bg-gray-100 shadow">
            <div className="container mx-auto px-2">
                {/* Contenedor principal: en lg fila, en móviles columna */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-2">
                    {/* Logo + Hamburguesa en móvil */}
                    <div className="flex items-center justify-between">
                        <img src="/Logo RB/Logo.png" alt="logo" className="w-22" />
                        <button
                            className="lg:hidden text-red-900 text-xl"
                            onClick={toggleMenu}
                            aria-label="Abrir menú"
                        >
                            {menuAbierto ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Menú de navegación (colapsable en móviles, visible en lg) */}
                    <div className={`mt-4 lg:mt-0 ${menuAbierto ? 'block' : 'hidden'} lg:flex lg:items-center lg:gap-6`}>
                        <div className="flex flex-col lg:flex-row items-center gap-4 text-xl text-red-900 relative -top-4">
                            <Link to="/Home" onClick={cerrarMenu}>
                                <FormattedMessage id="navbar.home" defaultMessage="Inicio" />
                            </Link>
                            <Link to="/rebirthing" onClick={cerrarMenu}>
                                <FormattedMessage id="navbar.rebirthing" defaultMessage="Rebirthing Breathwork" />
                            </Link>
                            <Link to="/biografia" onClick={cerrarMenu}>
                                <FormattedMessage id="navbar.biografia" defaultMessage="Biografía Humana" />
                            </Link>
                            <Link to="/contacto" onClick={cerrarMenu}>
                                <FormattedMessage id="navbar.contacto" defaultMessage="Contacto" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Botón de idioma separado, pero alineado correctamente */}
                <div className="flex justify-end">

                    <button onClick={toggleIdioma} className="relative -top-10 flex gap-1 px-2 py-2 text-sm text-red-900 border border-red-900 rounded hover:bg-gray-200 transition"
                    >
                        <FaGlobe />
                        <span className="uppercase">
                            <span className={locale === 'es' ? 'font-bold ' : ''}>es</span> |
                            <span className={locale === 'en' ? 'font-bold ' : ''}>en</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
