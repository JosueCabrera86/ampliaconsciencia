import React, { useState } from 'react';
import { FaWind } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

function Rebirthing() {
    const faqs = [
        { preguntaId: "rebirthing.faq1.pregunta", respuestaId: "rebirthing.faq1.respuesta" },
        { preguntaId: "rebirthing.faq2.pregunta", respuestaId: "rebirthing.faq2.respuesta" },
        { preguntaId: "rebirthing.faq3.pregunta", respuestaId: "rebirthing.faq3.respuesta" },
        { preguntaId: "rebirthing.faq4.pregunta", respuestaId: "rebirthing.faq4.respuesta" },
        { preguntaId: "rebirthing.faq5.pregunta", respuestaId: "rebirthing.faq5.respuesta" },
        { preguntaId: "rebirthing.faq6.pregunta", respuestaId: "rebirthing.faq6.respuesta" }
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    const intl = useIntl();
    const idioma = intl.locale;
    const videoUrl =
        idioma === 'es'
            ? 'https://www.youtube.com/embed/aero-7CIPKI' // Español
            : 'https://www.youtube.com/embed/I2rIhNjjI74'; // Inglés

    return (
        <div className="w-full overflow-x-hidden">

            <div className="relative -mt-6 w-full">
                {/* Contenedor con proporción 16:9 */}
                <div className="w-full aspect-[16/9] md:aspect-[21/9]">
                    <img
                        src="/imagenes/portada.png"
                        alt="inicio"
                        className="w-full h-full object-cover opacity-90 object-[center_25%]"
                    />
                </div>
                <div className="absolute inset-0 flex justify-center items-center px-4">
                    <h1 className="text-white text-center text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg italic leading-tight whitespace-pre-line">
                        Rebirthing <br /> Breathwork
                    </h1>
                </div>
            </div>
            {/* ¿Qué es el Rebirthing? */}
            <div className="container max-w-screen-lg mx-auto my-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
                    <FormattedMessage id="rebirthing.que" />
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Video vertical a la izquierda */}
                    <div className="md:w-1/2 w-full flex justify-center md:justify-center">
                        <iframe
                            src={videoUrl}
                            title="Rebirthing Explicación"
                            className="rounded-xl shadow-lg w-[280px] sm:w-[300px] h-[20rem] sm:h-[22rem]"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Texto a la derecha */}
                    <div className="md:w-1/2 text-base sm:text-lg italic leading-relaxed whitespace-pre-line text-justify">
                        <FormattedMessage id="rebirthing.definicion" />
                    </div>
                </div>
            </div>

            {/* Continuación */}
            <div className="w-full bg-gray-200 py-6 sm:py-8 lg:py-12">
                <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <p className="text-base sm:text-lg italic leading-relaxed text-justify whitespace-pre-line">
                            <FormattedMessage
                                id="rebirthing.continuacion"
                                defaultMessage={`El nombre de \"Rebirthing\" (renacimiento) surge de la idea de que muchas de nuestras heridas emocionales más profundas se originan en nuestro nacimiento y en la etapa prenatal. Recordando estas vivencias, podemos integrarlas y damos lugar a un \"renacer\" emocional y espiritual.\nVamos encontrando así, una profunda claridad interior que nos guía a través de nuestros desafíos actuales, nos damos la posibilidad de ir fuera de nuestras limitaciones y vamos poco a poco encontrando nuestra esencia y nuestro sentido de propósito.`}
                                values={{
                                    strong: (chunks) => <strong>{chunks}</strong>,
                                }}
                            />
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="/imagenes/rebirthing/rebirthing1.jpg"
                            alt="rebirthing"
                            className="w-56 sm:w-72 rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Cómo se practica */}
            <div className="container max-w-screen-lg mx-auto my-8 px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    <FormattedMessage id="rebirthing.cómo" defaultMessage="¿CÓMO SE PRACTICA EL REBIRTHING?" />
                </h2>
                <p className="text-base sm:text-lg italic leading-relaxed whitespace-pre-line">
                    <FormattedMessage
                        id="rebirthing.practica"
                        defaultMessage={`El encuentro inicia con una conversación compartida. El facilitador cuenta sobre la práctica, el consultante abre su historia y sus desafíos actuales, aquello que lo convoca.\nLuego sigue la sesión de respiración. En este caso el trabajo lo realiza el consultante guiado por la energía vital del aire. El facilitador cuida que la respiración se sostenga y acompaña a que el consultante ingrese en la experiencia y atraviese la liberación emocional.\nPor último, se busca integrar las experiencias vivenciadas en un compartir final.\nEn el caso de hacer un proceso de varias sesiones, el facilitador va ofreciendo una serie de propuestas o ejercicios para hacer entre sesiones.`}
                    />
                </p>
            </div>

            {/* Preguntas frecuentes */}
            <div className="w-full bg-gray-200 py-8 sm:py-12">
                <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-12">
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="./imagenes/rebirthing/rebirthing2.png"
                            alt="faq rebirthing"
                            className="w-56 sm:w-72 rounded-xl shadow-lg"
                        />
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left text-black">
                            <FormattedMessage id="rebirthing.preguntas" defaultMessage="Preguntas Frecuentes" />
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-red-900 pb-4">
                                    <button
                                        className="w-full text-left text-lg sm:text-xl font-semibold text-black cursor-pointer focus:outline-none"
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={openIndex === index}
                                        aria-controls={`faq-answer-${index}`}
                                    >
                                        <FormattedMessage id={faq.preguntaId} defaultMessage="..." />
                                    </button>

                                    {openIndex === index && (
                                        <ul
                                            id={`faq-answer-${index}`}
                                            className="mt-3 space-y-2 text-gray-700"
                                        >
                                            {intl
                                                .formatMessage({ id: faq.respuestaId, defaultMessage: '' })
                                                .split('\n')
                                                .map((linea, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <FaWind size={18} className="text-black-400 mt-1" />
                                                        <span>{linea}</span>
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <Link to="/contacto">
                                <button className="border my-6 px-6 py-4 rounded-md cursor-pointer text-white bg-red-900 hover:bg-red-800 transition-colors duration-300">
                                    <FormattedMessage id="boton.saber" defaultMessage="Quiero saber más" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rebirthing;
