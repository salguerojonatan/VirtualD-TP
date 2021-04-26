

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', e =>{
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const data = {
        nombre : nombre,
        apellido : apellido,
        dni : dni
    }
   
    debugger;
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((body) => console.log(body));
    
});
