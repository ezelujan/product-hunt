import React, { useState } from 'react';
import { css } from '@emotion/core';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

import firebase from '../firebase';

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validation/validarIniciarSesion';

const Login = () => {

  const STATE_INICIAL = { email: '', password: '' };

  const [ error, guardarError ] = useState(false);
  
  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarIniciarSesion, inicarSesion);
  
  const { email, password } = valores;

  async function inicarSesion() {
    try {
      await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al autenticar el usuario ', error.message);
      guardarError(error.message);
    }
  };

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Iniciar Sesión</h1>
          <Formulario
            onSubmit={handleSubmit}
            noValidate
          >
            <Campo>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                placeholder="Tu Email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>

            { errores.email && <Error>{errores.email}</Error> }

            <Campo>
              <label htmlFor="password">Email</label>
              <input 
                type="password" 
                id="password"
                name="password"
                placeholder="Tu Password"
                autoComplete="current-password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>

            { errores.password && <Error>{errores.password}</Error> }

            { error && <Error>{error}</Error> }

            <InputSubmit 
              type="submit"
              value="Iniciar Sesión"
            />
          </Formulario>
        </>
      </Layout>
    </div>
  )
};

export default Login;