import React from 'react'

function Opiniones(props) {
    return (
        <div>
            <div className=' container mx-auto  bg-gray-100 my-8 border rounded-md border-red-900'>
                <p className='my-2 mx-2'>{props.texto}</p>
                <h2 className='font-bold mb-2 flex justify-end mr-4'>{props.nombre}</h2>

            </div>
        </div>
    )
}

export default Opiniones