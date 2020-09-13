export default function validarCrearComentario(valores) {
    
    let errores = {};
    
    // Validar email
    if( !valores.mensaje ) {
        errores.mensaje = "Debe agregar un comentario";
    }

    return errores;
}