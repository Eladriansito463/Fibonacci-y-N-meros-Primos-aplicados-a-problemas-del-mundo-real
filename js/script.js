// Función universal para Primos
function esPrimo(n) {
    if (n <= 1) return false;
    let div = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) div++;
    }
    return div === 2;
}

// LÓGICA PÁGINA 1: Ahorro Fibonacci
function calcularAhorro() {
    const meses = parseInt(document.getElementById('meses_ahorrar').value);
    const caja = document.getElementById('resultado-secuencia');
    
    let a = 0, b = 1, c;
    let html = "";
    let acumuladoTotal = 0;

    for (let i = 1; i <= meses; i++) {
        let ahorroMes = a * 100;
        acumuladoTotal += ahorroMes;
        html += `<p>📅 Mes ${i}: Depósito: <strong>$${ahorroMes}</strong> | Acumulado: <span style="color:#00ffff;">$${acumuladoTotal}</span></p>`;
        c = a + b; a = b; b = c;
    }
    caja.innerHTML = html;
    document.getElementById('resultado-container').classList.remove('hidden');
}

// LÓGICA PÁGINA 2: Control de Calidad
function verificarLotes() {
    const total = parseInt(document.getElementById('total_piezas').value);
    const caja = document.getElementById('resultado-secuencia2');
    let html = "";

    for (let i = 1; i <= total; i++) {
        if (esPrimo(i)) {
            html += `<p>⚙️ Pieza #${i}: <span style="color:#ff00ff; font-weight:bold;">[INSPECCIÓN REQUERIDA]</span></p>`;
        } else {
            html += `<p style="color:#55555c;">⚙️ Pieza #${i}: [OK - Lote regular]</p>`;
        }
    }
    caja.innerHTML = html;
    document.getElementById('resultado-container2').classList.remove('hidden');
}

// LÓGICA PÁGINA 3: Token Mixto
function generarTokenMixto() {
    const semilla = parseInt(document.getElementById('semilla_token').value);
    const caja = document.getElementById('resultado-secuencia3');
    
    let a = 0, b = 1, c;
    for (let i = 1; i <= semilla; i++) {
        c = a + b; a = b; b = c;
    }
    let factorBase = a;
    let token = `AUTH-${factorBase * 10}-X9`;
    
    let dictamen = esPrimo(factorBase) 
        ? `<span style="color:#00ffff; font-weight:bold;">NIVEL ALTO (Base Prima)</span>` 
        : `<span style="color:#ff00ff;">NIVEL ESTÁNDAR (Base No Prima)</span>`;

    let html = `
        <p>🔑 TOKEN: <span style="color:#ffff00; font-size:16px;">${token}</span></p>
        <p>🛡️ Seguridad: ${dictamen}</p>
    `;
    caja.innerHTML = html;
    document.getElementById('resultado-container3').classList.remove('hidden');
}