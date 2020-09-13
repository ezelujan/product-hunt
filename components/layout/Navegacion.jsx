import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FirebaseContext } from '../../firebase';

const Navegacion = () => {

    const { usuario } = useContext(FirebaseContext);

    return ( 
        <Nav>
            <Link href="/">
                <a>Inicio</a>
            </Link>
            <Link href="/populares">
                <a>Populares</a>
            </Link>
            {usuario && (
                <Link href="/nuevo-producto">
                    <a>Nuevo Producto</a>
                </Link>
            )}
        </Nav>
    );
}

const Nav = styled.nav`
    padding-left: 2rem;

    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gris2);
        font-family: 'PT Sans', sans-serif;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

 
export default Navegacion;