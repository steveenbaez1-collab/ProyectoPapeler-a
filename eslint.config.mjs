// Configuración del análisis estático de js/app.js.
// Ejecutar: npm install (una sola vez) y luego npm run analisis
import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["js/**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "script",
            globals: globals.browser
        },
        rules: {
            // ACQ-04: ninguna función con complejidad ciclomática mayor que 10.
            complexity: ["warn", 10],
            // mostrarSeccion se invoca desde los atributos onclick de index.html.
            "no-unused-vars": ["error", { varsIgnorePattern: "^mostrarSeccion$" }]
        }
    }
];
