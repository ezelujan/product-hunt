export default function validarCrearProducto(valores) {
    
    let errores = {};

    // Validar el nombre del usuario
    if( !valores.nombre ) {
        errores.nombre = "El nombre es obligatorio";
    }
    
    // Validar empresa
    if( !valores.empresa ) {
        errores.empresa = "El nombre de empresa es obligatorio";
    }
    
    // Validar URL
    if( !valores.url ) {
        errores.url = "El nombre de empresa es obligatorio";
    } else if( !/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url) ) {
        errores.url = "URL mal formateada o no válida";
    }
    
    // validar descripción
    if( !valores.descripcion ) {
        errores.descripcion = "Agrega una descripción de tu producto";
    }

    return errores;
}