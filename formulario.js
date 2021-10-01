function myform(datos) {
  event.preventDefault();

  let form = {
    nombre: datos.user_name.value,
    correo: datos.user_mail.value,
    telefono: datos.user_telefono.value,
    mensaje: datos.user_message.value,
  };

  console.log("form:", form);
}
