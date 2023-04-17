const getUsuarioByID = ( id, callback ) => {

    const user = {
        id,
        nombre: 'Marcelo'
    }

    setTimeout( () => {
        callback(user)
    }, 1400 )

}

getUsuarioByID( 10, ( usuario ) => {
    console.log( usuario.id );
    console.log( usuario.nombre.toUpperCase() );
});