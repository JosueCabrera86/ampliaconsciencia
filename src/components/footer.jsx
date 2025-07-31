import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";


function Footer() {
    return (
        <div>
            <div className="flex justify-center mt-6">

                <a
                    href="https://www.facebook.com/ampliaconsciencia/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook size={30} color="#3b5998" />
                </a>
                <a
                    href="https://www.instagram.com/diego.diaz.green/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram size={30} color="#C13584" />
                </a>
                <a
                    href="https://wa.me/529982364374"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp size={30} color="#25D366" />
                </a>

            </div>
            <div className="flex justify-center  bg-red-900 text-white text-lg mt-4 ">
                <p className="text-center px-4">
                    &copy; {new Date().getFullYear()} Amplia Consciencia.
                    <span className="block sm:inline"> Todos los derechos reservados.</span>
                </p>

            </div>
        </div>
    );
}

export default Footer;
