import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import emailjs from '@emailjs/browser';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
        if (!formData.email.trim()) newErrors.email = 'El correo es obligatorio';
        if (!formData.asunto.trim()) newErrors.asunto = 'El asunto es obligatorio';
        if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        const serviceID = 'service_pevmvcq';
        const templateID = 'template_8snys1c';
        const publicKey = '_iSrpBHpITtiNXgM4';

        const templateParams = {
            from_name: formData.nombre,
            from_email: formData.email,
            subject: formData.asunto,
            message: formData.mensaje
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(() => {
                alert('Mensaje enviado con éxito.');
                setFormData({
                    nombre: '',
                    email: '',
                    asunto: '',
                    mensaje: ''
                });
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error al enviar mensaje:', error);
                alert('Error al enviar el mensaje. Intenta de nuevo.');
            });
    };

    return (
        <div>
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
                                className="border border-red-900 p-2 rounded mt-1"
                            />
                            {errors.nombre && <span className="text-red-600 text-sm">{errors.nombre}</span>}
                        </label>

                        <label className="flex flex-col">
                            <span>Email</span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-red-900 p-2 rounded mt-1"
                            />
                            {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
                        </label>

                        <label className="flex flex-col">
                            <span>Asunto</span>
                            <input
                                type="text"
                                name="asunto"
                                value={formData.asunto}
                                onChange={handleChange}
                                className="border border-red-900 p-2 rounded mt-1"
                            />
                            {errors.asunto && <span className="text-red-600 text-sm">{errors.asunto}</span>}
                        </label>

                        <label className="flex flex-col">
                            <span>Mensaje</span>
                            <textarea
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                rows={5}
                                className="border border-red-900 p-2 rounded mt-1 resize-y"
                            />
                            {errors.mensaje && <span className="text-red-600 text-sm">{errors.mensaje}</span>}
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
