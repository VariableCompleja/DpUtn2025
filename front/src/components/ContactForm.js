export default function ContactoForm() {
    return (
        <>
            <form action="/contacto" method="post" className="formulario">
                <p>
                    <label>Nombre</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label>Email</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label>Telefono</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label>Mensaje</label>
                    <textarea name="mensaje"></textarea>
                </p>
                <p className="centrar">
                    <input type="submit" value="Enviar" />
                </p>
            </form>
        </>
    )
}