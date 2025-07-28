import React, { useState } from 'react';
import { FaWind } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';


function BiografiaHumana() {
    const faqs = [
        {
            preguntaId: "biografia.faq1.pregunta",
            respuestaId: "biografia.faq1.respuesta"
        },
        {
            preguntaId: "biografia.faq2.pregunta",
            respuestaId: "biografia.faq2.respuesta"
        },
        {
            preguntaId: "biografia.faq3.pregunta",
            respuestaId: "biografia.faq3.respuesta"
        },
        {
            preguntaId: "biografia.faq4.pregunta",
            respuestaId: "biografia.faq4.respuesta"
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const intl = useIntl();
    return (
        <div>
            {/* Portada con contenedor de proporción fija */}
            <div className="relative -mt-6 w-full">
                <div className="w-full aspect-[16/9] md:aspect-[21/9]">
                    <img
                        src="/imagenes/biografia-portada.jpg"
                        alt="inicio"
                        className="w-full h-full object-cover opacity-90 object-[center_35%]"
                    />
                </div>
                <div className="absolute inset-0 flex justify-center items-center px-4">
                    <h1 className="text-white text-center text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg italic leading-tight whitespace-pre-line">
                        <FormattedMessage id="biografia.titulo" defaultMessage="BIOGRAFÍA HUMANA" />
                    </h1>
                </div>
            </div>

            {/* Contenido */}
            <div className="container mx-auto my-8 px-4 text-center ">
                <h2 className="text-4xl font-bold mb-4">
                    <FormattedMessage id="biografia.que" defaultMessage="¿QUÉ ES LA BIOGRAFÍA HUMANA?" />
                </h2>
                <p className="text-xl italic leading-relaxed whitespace-pre-line max-w-4xl mx-auto">
                    <FormattedMessage
                        id="biografia.definicion"
                        defaultMessage="La propuesta de la Biografía Humana es salir de nuestra visión acotada, para revisar la totalidad de nuestra vida desde una mirada ampliada.\nEn este recorrido, inicialmente se coloca una base en las necesidades emocionales y fisiológicas naturales de la criatura humana. A partir de eso, se propone una terapia conversacional que busca revisar las vivencias atravesadas desde nuestra primera infancia y contrastar lo atravesado, con esta base."
                    />
                </p>
            </div>

            <div className="w-full bg-gray-200 py-2">
                <div className="container mx-auto my-8 px-4 flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <p className="text-xl italic leading-relaxed text-justify whitespace-pre-line max-w-xl mx-auto md:mx-0">
                            <FormattedMessage
                                id="biografia.continuacion"
                                defaultMessage='Comprendiendo esta distancia, junto con los mecanismos y estrategias de supervivencia que desarrollamos desde pequeños para navegar ese escenario, podemos ir comprendiendo mejor nuestro accionar inconsciente en la actualidad.\nEstos rasgos característicos que cada persona fue encontrando para conseguir las necesidades básicas emocionales y que nos ayudaron en algún momento, conforman hoy nuestras mayores limitaciones inconscientes a la hora de desplegar nuestros deseos, nuestra autenticidad, generosidad y amor incondicional.\nSe propone entonces entrenarnos en un cambio de rumbo, aclarando nuestro propósito, como parte de un recorrido de reencuentro con nuestro ser esencial auténtico.'
                            />
                        </p>
                    </div>
                    <div className="md:w-1/2 ml-8">
                        <img
                            src="/imagenes/1.jpg"
                            alt="rebirthing"
                            className="w-[800px] mx-auto rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto my-8 px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    <FormattedMessage id="biografia.cómo" defaultMessage="¿CÓMO SE PRACTICA LA BIOGRAFÍA HUMANA?" />
                </h2>
                <p className="text-xl italic leading-relaxed whitespace-pre-line max-w-4xl mx-auto">
                    <FormattedMessage
                        id="biografia.practica"
                        defaultMessage='Esta práctica se realiza en sesiones individuales, periódicas y de manera online.\nDurante las primeras sesiones se propone un recorrido por la historia personal, con una mirada objetiva y ampliada de los sucesos atravesados, revisando discursos y paradigmas engañados.\nSe intenta describir los rasgos del escenario de infancia a través de una imagen metafórica que resume las características principales del lugar de donde venimos. \nLuego nos enfocamos en ir detectando las características y pulsos que hemos desarrollado para poder navegar dicho escenario, que nos sirvieron para conseguir el alimento emocional básico. Estas características se intentan resumir en una segunda imagen del personaje o traje que nos hemos puesto inconscientemente.\nIntentamos ir desanudando qué beneficios y desventajas tienen estos arraigados rasgos inconscientes de nuestra personalidad. Cómo benefician o perjudican nuestro propio desarrollo y a las personas de nuestro entorno. Esta mirada ampliada nos brinda la posibilidad de elegir decisiones diferentes a las que automáticamente tomamos día a día.\nPor último se plantea un propósito de vida, con posibilidades diferentes a las habituales, se intenta ir entrenando cambios de rumbo para ir alineándose poco a poco con nuestro ser esencial auténtico.'
                    />
                </p>
            </div>

            <div className="w-full bg-gray-200 py-12">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-start gap-12">
                    <div className="md:w-1/2">
                        <img
                            src="./imagenes/3.jpg"
                            alt="faq rebirthing"
                            className="mx-auto rounded-xl shadow-lg w-[700px]"
                        />
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-4xl text-black font-bold mb-6 text-center md:text-left">
                            <FormattedMessage id="rebirthing.preguntas" defaultMessage="Preguntas Frecuentes" />
                        </h2>
                        <div className="space-y-4 max-w-xl mx-auto md:mx-0">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-red-900 pb-4">
                                    <button
                                        className="w-full text-left text-xl font-semibold text-black cursor-pointer focus:outline-none"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <FormattedMessage id={faq.preguntaId} defaultMessage="..." />
                                    </button>

                                    {openIndex === index && (
                                        <ul className="mt-3 space-y-2 text-gray-700">
                                            {intl
                                                .formatMessage({ id: faq.respuestaId, defaultMessage: '' })
                                                .split('\n')
                                                .map((linea, idx) => (
                                                    <li key={idx} className="flex items-center gap-2">
                                                        <FaWind size={18} className="text-black-400 mt-1" />
                                                        <span>{linea}</span>
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <Link to="/contacto">
                                <button className="border my-6 px-4 py-4 rounded-md cursor-pointer text-white bg-red-900">
                                    Quiero saber más
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BiografiaHumana;
