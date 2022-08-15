// (function(){
	var fomulario = document.getElementById('formulario'),
		nombre = fomulario.nombre,
		correo = fomulario.correo,
		sexo = fomulario.sexo,
		terminos = fomulario.terminos,
		error = document.getElementById('error');

	function validarNombre(e){
		if (nombre.value == '' || nombre.value == null) {
			console.log('Por favor completar el nombre');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el nombre</li>'; 
			e.preventDefault();
		}		
	}

	function validarCorreo(e){
		if (correo.value == '' || correo.value == null) {
			console.log('Por favor completar el correo');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el correo</li>'; 
			e.preventDefault();
		}
	}

	function validarSexo(e){
		if (sexo.value == '' || sexo.value == null) {
			console.log('Por favor seleccione su sexo');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor seleccione su sexo</li>'; 
			e.preventDefault();
		}else{
			error.style.display = 'none';
		}
	}

	function validarTerminos(e){
		if (!terminos.checked) {
			console.log('Por favor acepte los terminos');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor acepte los terminos</li>'; 
			e.preventDefault();
		}
	}

	function validarFormulario(e){
		error.innerHTML = '';
		validarNombre(e);
		validarCorreo(e);
		validarSexo(e);
		validarTerminos(e);
	}

	formulario.addEventListener('submit', validarFormulario);
//}())