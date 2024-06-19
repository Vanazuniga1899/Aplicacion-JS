document.getElementById('form_pesoIdeal').addEventListener('submit',function(event) {
    event.preventDefault();

    //Obtener los valores del formulario
    const sexo5 = document.getElementById('sexo5').value;
    const edad5 = parseInt(document.getElementById('edad5').value);
    const pesoActual = parseFloat(document.getElementById('pesoActual').value);
    let estatura5 = parseFloat (document.getElementById('estatura5').value);

    let pesoIdeal,imc,calificacion;

    //Calcular el peso idealbasado en el sexo
    if(sexo5==='Masculino'){
        pesoIdeal = estatura5-100-((estatura5-150)/ 4);
    }else if (sexo5 ==='Femenino'){
        pesoIdeal = estatura5-100-((estatura5-150)/ 2);
    }else {
        document.getElementById('resultado5').innerHTML =`<div class="alert alert-danger" role"alert"><strong>¡Error!</strong> Seleccione su sexo.</div>`;
    return;
    }
    //Convertir estatura a centimetros
    estatura5 = estatura5 / 100;

    //Calcular IMC
    imc = pesoActual / (estatura5 * estatura5);

   //Calificar el IMC
    if (imc < 18.5) {
        calificacion=`<span class="badge text-bg-warning">Bajo peso</span>`;
    }else if (imc >= 18.5 && imc <= 24.9){
        calificacion=`<span class="badge text-bg-success">peso Normal</span>`;
    }else if (imc >= 25 && imc <= 29.9){
        calificacion=`<span class="badge text-bg-warning">Sobrepeso</span>`;
    }else if (imc >= 30 && imc <= 34.9){
        calificacion=`<span class="badge text-bg-danger">Obesidad I</span>`;
    }else if (imc >= 35 && imc <= 39.9){
        calificacion=`<span class="badge text-bg-danger">Obesidad II</span>`;
    }else if (imc >= 40 && imc <= 49.9){
        calificacion=`<span class="badge text-bg-danger">Obesidad III</span>`;
    }else if (imc >= 50){
        calificacion=`<span class="badge text-bg-danger">Obesidad VI</span>`;
    }

    // Mostrar resultado
    document.getElementById('resultado5').innerHTML = `<div class="alert alert-success" role="alert">
        <strong>Sexo:</strong> ${sexo5}<br>
        <strong>Edad:</strong> ${edad5} años<br>
        <strong>Peso Actual:</strong> ${pesoActual} kg<br>
        <strong>Altura:</strong> ${estatura5} cm<br>
        <strong>IMC:</strong> ${imc.toFixed(1)} ${calificacion}<br>
        <strong>Peso Ideal:</strong> <span class="badge bg-info">${pesoIdeal.toFixed(1)} kg</span><br>
        <strong>Deberias perder:</strong> <span class="badge bg-dark">${(pesoActual - pesoIdeal).toFixed(1)} kg</span>
    </div>`;
});
