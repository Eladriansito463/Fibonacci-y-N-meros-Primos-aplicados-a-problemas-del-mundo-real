# 🚀 Suite Neón: Matemáticas Aplicadas al Mundo Real

Bienvenido al repositorio oficial de la **Suite de Soluciones Web**. Este proyecto interactivo ha sido desarrollado para demostrar cómo los conceptos lógicos y matemáticos abstractos resuelven problemas críticos en escenarios reales de ingeniería, finanzas y ciberseguridad.

> 🌐 **Live Demo (Página en Vivo):** [INSERTA_AQUÍ_TU_LINK_DE_GITHUB_PAGES]  
> 📦 **Repositorio GitHub:** [INSERTA_AQUÍ_TU_LINK_DEL_REPOSITORIO]

---

## 🎯 Análisis y Planificación del Proyecto (Fase de Diseño)

Para cumplir con los criterios de evaluación técnicos, el desarrollo se planificó respondiendo a los siguientes pilares de arquitectura de software:

### 1. ¿Qué problema del mundo real se está resolviendo?
El proyecto no se limita a un solo escenario, sino que ofrece una plataforma con tres módulos independientes:
* **Módulo Financiero:** Modela un sistema de ahorro programado escalable.
* **Módulo Industrial:** Automatiza la selección de lotes críticos para pruebas de control de calidad destructivas.
* **Módulo de Ciberseguridad:** Genera Tokens de un solo uso (OTP) encriptados mediante propiedades aritméticas.

### 2. ¿Se utiliza Fibonacci, Números Primos o ambos?
La suite integra **ambos teoremas** de forma modular:
* El *Módulo 1* utiliza exclusivamente la Sucesión de Fibonacci.
* El *Módulo 2* utiliza exclusivamente la validación de Números Primos.
* El *Módulo 3* (Token) realiza una hibridación, usando Fibonacci como base de generación y Primos como enmascaramiento de seguridad.

### 3. ¿Qué datos ingresará el usuario?
A través de formularios HTML5 controlados, el usuario ingresa variables numéricas enteras: la cantidad de meses a proyectar (ahorro), el total de piezas fabricadas (calidad) o la semilla inicial del sistema (criptografía).

### 4. ¿Qué resultado debe mostrar la página?
El sistema evita el uso de alertas intrusivas o la consola del desarrollador. En su lugar, intercepta los eventos y renderiza los resultados dinámicamente mediante `innerHTML` dentro de un contenedor gráfico (`div`) que simula una terminal de comandos retro-futurista (Cyberpunk/Neón).

### 5. Explicación Algorítmica (Lógica Interna)
* **Sucesión de Fibonacci:** El algoritmo utiliza un bucle iterativo que almacena las variables temporales para calcular el siguiente término basándose en la fórmula matemática pura:
  $$F_n = F_{n-1} + F_{n-2}$$
* **Primalidad:** Se ejecuta un algoritmo de fuerza bruta estructurado mediante un ciclo `for` que cuenta la cantidad exacta de residuos iguales a cero. Si el contador totaliza exactamente 2 (divisible por 1 y por sí mismo), la condición booleana retorna `true`.

### 6. Diseño Responsivo y Experiencia de Usuario (UI/UX)
La interfaz fue maquetada bajo el concepto *Tech Minimalist / Cyberpunk*. Utiliza el modelo de caja estándar (Box Model) con anchos porcentuales y `max-width` limitados. Mediante Media Queries (`@media`), el sistema garantiza que la experiencia sea igual de inmersiva y funcional tanto en monitores de escritorio como en dispositivos móviles.

---

## 🛠️ Arquitectura de Archivos

El sistema respeta una separación estricta de responsabilidades (Estructura MVC adaptada al frontend):

```text
📁 suite-matematica-neon/
│
├── 📄 index.html          # Interfaz de enrutamiento (Menú Principal)
├── 📄 ahorro.html         # Módulo 1: Proyección Financiera
├── 📄 calidad.html        # Módulo 2: Auditoría Industrial
├── 📄 token.html          # Módulo 3: Criptografía Híbrida
├── 📄 README.md           # Documentación técnica
│
├── 📁 css/
│   └── 📄 estilos.css     # Hoja de estilos globales (Efectos Neón/Glow)
│
└── 📁 js/
    └── 📄 script.js       # Core lógico universal y manipulación del DOM
