const combo = document.querySelector(".combo");
const num_ingresado = document.querySelector(".num_grados");
const btn_calcular = document.querySelector(".calcular");
const txt_convertido = document.querySelector(".text_convertido");
const num_convertido = document.querySelector(".num_convertido");

txt_convertido.textContent = "Convertido a: "

btn_calcular.addEventListener("click", function() {
        if (combo.value == "Celsius") {
            num_convertido.value = ((num_ingresado.value * (9 / 5)) + 32).toFixed(2);
            txt_convertido.textContent = "Convertido a: Fahrenheit";
        } else if (combo.value == "Fahrenheit") {
            num_convertido.value = ((num_ingresado.value - 32) * (5 / 9)).toFixed(2);
            txt_convertido.textContent = "Convertido a: Celsius";
        } else {
            alert('Selecciones una opción');
        }
});