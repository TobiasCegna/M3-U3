<form action="/contacto" method="post" class="formulario">
    <p>
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre"></input>
    </p>
    <p>
        <label for="email">email</label>
        <input type="text" name="email"></input>
    </p>
    <p>
        <label for="telefono">telefono</label>
        <input type="text" name="tel"></input>
    </p>
    <p>
        <label for="mensaje">mensaje</label>
        <textarea name="mensaje"></textarea>
    </p>
    <p class= "acciones"><input type="submit" value="Enviar"></input></p></form>


    {{ message }}