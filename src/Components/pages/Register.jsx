import React, { useContext, useState } from 'react'
import '../../App.css';
import { UserContext } from './../../context/userContext'
import Form from './../shared/Form'


function Register() {
    const [loading, setLoading] = useState(false);
    const userCtx = useContext(UserContext)

    const { registerUser, formData, success, error } = userCtx

    const sendData = (event) => {
        event.preventDefault()
        setLoading(true)
        registerUser(formData)
        setLoading(false)
        event.target.reset();
       
    }


    return (
        
        <div className='center-container'>
           
            <div className='form-container'>
                <h2>Crear cuenta</h2>

                <form onSubmit={(e) => sendData(e)}>
                    <Form tipo='name' />
                    <Form tipo='email' />
                    <Form tipo='password' />
                { loading ? ( <img src= "https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"></img>) : (<br/>) }
                    <button type='submit'>
                        Registrarme
                    </button>
                </form>
                {success && (
                    <div className='alert alert-success m4' role='alert'>
                        Se registro usuario con éxito
                    </div>
                )}
                {error && (
                    <div className='alert alert-danger m4' role='alert'>
                        Hubo un error creando el usuario
                    </div>
                )}
            </div>
        </div>
    )
}

export default Register