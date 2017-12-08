
let cambiarFondo = function(){
	let opcion = select.options[select.selectedIndex].value;
	switch (opcion) {
		case 'Despliegue': 
			select.style.color= '#FD5F00';
			break;
		case 'Entorno Cliente':
			select.style.color= '#E211AD';
			break;
		case 'Empresas':
			select.style.color= '#C600EB';
			break;
		case 'Entorno Servidor':
			select.style.color='#027BB7';
			break;
		case 'Diseño':
			select.style.color= '#FFFF00';
			break;
		default:
			select.style.color= '#11E211';
			break;
	}
}


let init = function(){
	let select = document.getElementById('select');
	select.addEventListener('change', cambiarFondo);
}

window.onload=init;
