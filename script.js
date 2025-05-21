/**
 * Calcula o peso usando a fórmula (r² x TT x comprimento x 8).
 * Raio e Comprimento são em milímetros.
 *
 * @param {number} raioMM - O raio do eixo de ferro em milímetros.
 * @param {number} comprimentoMM - O comprimento do eixo de ferro em milímetros.
 * @returns {number} O peso da barra de ferro em quilogramas.
 */
function calcularPesoBarraFerro(raioMM, comprimentoMM) {
    // PI = 3.1416,
    const PI_CUSTOM = 3.1416; 

    //  "r² x TT x comprimento x 8"
    // Para peso real de barras de aço/ferro, a densidade é ~7850 kg/m³.

    const FATOR_CALCULO = 8000; 

    // Converte o raio de milímetros para metros (1 metro = 1000 milímetros)
    const raioM = raioMM / 1000;
    
    // Converte o comprimento de milímetros para metros (1 metro = 1000 milímetros)
    const comprimentoM = comprimentoMM / 1000;

    // Calcula o peso usando a fórmula: (raio em metros)² * PI * comprimento em metros * FATOR_CALCULO
    const peso = PI_CUSTOM * Math.pow(raioM, 2) * comprimentoM * FATOR_CALCULO;

    return peso;
}


document.addEventListener('DOMContentLoaded', function() {
    const calculadoraForm = document.getElementById('calculadoraForm');
    const raioInput = document.getElementById('raio');
    const comprimentoInput = document.getElementById('comprimento');
    const resultadoDiv = document.getElementById('resultado');

    if (calculadoraForm) {
        calculadoraForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const raio = parseFloat(raioInput.value); 
            const comprimento = parseFloat(comprimentoInput.value); 

            // Valida se os valores são números válidos e positivos
            if (isNaN(raio) || isNaN(comprimento) || raio <= 0 || comprimento <= 0) {
                resultadoDiv.textContent = "Por favor, insira valores numéricos válidos e positivos para raio e comprimento.";
                resultadoDiv.style.color = '#dc3545';
                resultadoDiv.style.borderColor = '#f5c6cb';
                resultadoDiv.style.backgroundColor = '#f8d7da';
                return;
            }

            const pesoCalculado = calcularPesoBarraFerro(raio, comprimento);

            resultadoDiv.textContent = `O peso da barra é: ${pesoCalculado.toFixed(3)} kg`;
            resultadoDiv.style.color = '#0056b3'; 
            resultadoDiv.style.borderColor = '#cce5ff';
            resultadoDiv.style.backgroundColor = '#e0f2ff';
        });
    }
});