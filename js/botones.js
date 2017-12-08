/**
*
*/



let abrirForm= function(form){
	if(form==='tarea'){
		window.open('./formTarea.html', '','height = 500 px, width = 600px');
	}else if(form==='modulo'){
		window.open('./formModulo.html', '','height = 300 px, width = 600px');
	}else if(form==='edit'){
		window.open('./formEdit.html', '','height = 500 px, width = 600px');
	}
}

let init = function(){
	let btnTarea = document.getElementById('btnTarea');
	let btnTarea2 = document.getElementById('btnTarea2');
	let btnMod = document.getElementById('btnMod');
	let btnEdit = document.getElementsByClassName('edit');

	btnTarea.addEventListener('click', abrirForm.bind(null,'tarea'));
	btnTarea2.addEventListener('click', abrirForm.bind(null,'tarea'));
	btnMod.addEventListener('click', abrirForm.bind(null, 'modulo'));
	btnEdit[0].addEventListener('click', abrirForm.bind(null, 'edit'));
	btnEdit[1].addEventListener('click', abrirForm.bind(null, 'edit'));
	btnEdit[2].addEventListener('click', abrirForm.bind(null, 'edit'));
	btnEdit[3].addEventListener('click', abrirForm.bind(null, 'edit'));
	btnEdit[4].addEventListener('click', abrirForm.bind(null, 'edit'));
	btnEdit[5].addEventListener('click', abrirForm.bind(null, 'edit'));
}

window.onload=init;