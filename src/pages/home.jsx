import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Opiniones from '../components/opiniones';

function Home() {
    return (
        <div className="w-full overflow-x-hidden">
            {/* Portada */}
            <div className="relative -mt-6">
                <img
                    src="./imagenes/home/portada2.png"
                    alt="portada"
                    className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 flex items-center justify-start px-4 md:px-16">
                    <h1 className="text-white text-4xl md:text-7xl font-bold drop-shadow-lg whitespace-pre-line">
                        <FormattedMessage
                            id="home.portada"
                            defaultMessage="RESPIRA,\n RECUERDA,\n RENACE."
                        />
                    </h1>
                </div>
            </div>

            {/* Bienvenida */}
            <div className="text-center py-12 px-4 md:px-0 max-w-screen-lg mx-auto">
                <h1 className="text-lg md:text-2xl italic whitespace-pre-line mb-10">
                    <FormattedMessage
                        id="home.bienvenida"
                        defaultMessage="Somos un espacio de exploración interior..."
                    />
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    <FormattedMessage id="home" defaultMessage="Dos caminos hacia tu esencia" />
                </h2>
            </div>

            {/* Caminos (rebirthing + biografía) */}
            <motion.div
                className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-4 md:px-0 py-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <Link to="/rebirthing" className="flex flex-col items-center group cursor-pointer">
                    <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <img
                            src="./imagenes/home/pris.PNG"
                            alt="Rebirthing"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="mt-4 text-lg md:text-xl font-semibold group-hover:text-red-900 transition-colors duration-300">
                        Rebirthing Breathwork
                    </h2>
                </Link>

                <Link to="/biografia" className="flex flex-col items-center group cursor-pointer">
                    <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <img
                            src="./imagenes/home/biografia.jpg"
                            alt="Biografía humana"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="mt-4 text-lg md:text-xl font-semibold group-hover:text-red-900 transition-colors duration-300">
                        <FormattedMessage id="biografia.enlace" defaultMessage="Biografía Humana" />
                    </h2>
                </Link>
            </motion.div>

            {/* Opiniones */}
            <div className="bg-gray-100 py-8 px-4 md:px-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
                    <FormattedMessage id="opiniones.titulo" defaultMessage="Testimonios" />
                </h2>
                <Opiniones
                    texto={<FormattedMessage id="opiniones.virginia.texto" />}
                    nombre={<FormattedMessage id="opiniones.virginia.nombre" />}
                />
                <Opiniones
                    texto={<FormattedMessage id="opiniones.tracy.texto" />}
                    nombre={<FormattedMessage id="opiniones.tracy.nombre" />}
                />
                <Opiniones
                    texto={<FormattedMessage id="opiniones.blanca.texto" />}
                    nombre={<FormattedMessage id="opiniones.blanca.nombre" />}
                />
                <Opiniones
                    texto={<FormattedMessage id="opiniones.cynthia.texto" />}
                    nombre={<FormattedMessage id="opiniones.cynthia.nombre" />}

                />

                <Opiniones
                    texto={<FormattedMessage id="opiniones.kim.texto" />}
                    nombre={<FormattedMessage id="opiniones.kim.nombre" />}

                />
            </div>
        </div>
    );
}

export default Home;
