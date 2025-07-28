import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        setFormData({
            nombre: '',
            email: '',
            asunto: '',
            mensaje: ''
        });
    };

    return (
        <div>
            {/* Portada con proporción fija */}
            <div className="relative -mt-6 w-full">
                <div className="w-full aspect-[16/9] md:aspect-[21/9]">
                    <img
                        src="/imagenes/portada-contacto.jpg"
                        alt="inicio"
                        className="w-full h-full object-cover opacity-90 object-[center_55%]"
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Texto explicativo */}
                    <div className="md:w-1/2 text-center md:text-center text-xl text-black">
                        <h1 className="text-2xl font-bold mb-4">
                            <FormattedMessage id="contacto" defaultMessage="Contacto" />
                        </h1>
                        <p className="whitespace-pre-line max-w-xl mx-auto md:mx-0">
                            <FormattedMessage
                                id="contacto.mensaje"
                                defaultMessage={`Escucharte es muy importante para nosotros.\nSi tienes alguna duda, comentario o necesitas más información acerca de alguna de nuestras actividades, si quieres pedir un turno o quieres dejarnos un testimonio de tu experiencia, no dudes en ponerte en contacto.`}
                            />
                        </p>
                    </div>

                    {/* Formulario */}
                    <form
                        onSubmit={handleSubmit}
                        className="md:w-1/2 flex flex-col space-y-4 text-base text-black max-w-xl mx-auto md:mx-0"
                    >
                        <label className="flex flex-col">
                            <span>Nombre</span>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                                className="border border-red-900 p-2 rounded mt-1"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span>Email</span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="border border-red-900 p-2 rounded mt-1"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span>Asunto</span>
                            <input
                                type="text"
                                name="asunto"
                                value={formData.asunto}
                                onChange={handleChange}
                                required
                                className="border border-red-900 p-2 rounded mt-1"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span>Mensaje</span>
                            <textarea
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="border border-red-900 p-2 rounded mt-1 resize-y"
                            />
                        </label>

                        <button
                            type="submit"
                            className="bg-red-900 text-white font-bold border border-red-900 px-6 py-3 rounded-md hover:scale-105 transition-transform w-full md:w-auto self-center"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
