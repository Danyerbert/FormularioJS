window.addEventListener("load", () => {
  const form = document.getElementById("registro");
  const usuario = document.getElementById("usuario");
  const cedula = document.getElementById("cedula");
  const correo = document.getElementById("email");
  const pass = document.getElementById("pass");
  const passConfirma = document.getElementById("passConfirma");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    validaCampos();
  });

  const validaCampos = () => {
    // Capturar los valores

    const usuarioValor = usuario.value.trim();
    const cedulaValor = cedula.value.trim();
    const correoValor = correo.value.trim();
    const passValor = pass.value.trim();
    const passConfirmaValor = passConfirma.value.trim();

    if (!usuarioValor) {
      console.log("Campo Vacio");
      validaFalla(usuario, "Campo Vacio");
    } else {
      console.log(usuarioValor);
      validaOk(usuario);
    }

    // Validación de cedula

    if (!cedulaValor) {
      validaFalla(cedula, "Campo Vacio");
    } else if (cedulaValor.length < 8) {
      validaFalla(cedula, "La cedula solo contigo 8 digitos");
    } else {
      validaOk(cedula);
    }

    // Validando campo email
    if (!correoValor) {
      validaFalla(correo, "Campo vacio");
    } else if (!validaEmail(correoValor)) {
      validaFalla(correo, "El correo no es válido");
    } else {
      validaOk(email);
    }

    // Validando campo password
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;
    if (!passValor) {
      validaFalla(pass, "campo vacio");
    } else if (passValor.length < 8) {
      validaFalla(pass, "Debe tener 8 caracteres como minimo");
    } else if (!passValor.match(er)) {
      validaFalla(
        pass,
        "Debe de tener al menos una mayuscula, una minuscula y un numero"
      );
    } else {
      validaOk(pass);
    }

    // Validando campo de confirmacion
    if (!passConfirmaValor) {
      validaFalla(passConfirma, "Confirme su contraseña");
    } else if (passValor !== passConfirmaValor) {
      validaFalla(passConfirma, " La contraseña no coincide");
    } else {
      validaOk(passConfirma);
    }
  };
  const validaFalla = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");
    aviso.innerText = msje;

    formControl.className = "form-control falla";
  };
  const validaOk = (input, msje) => {
    const formControl = input.parentElement;
    formControl.className = "form-control ok";
  };

  const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };
  //   console.log(form);
});
