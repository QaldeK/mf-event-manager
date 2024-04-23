import AsyncAlpine from "async-alpine";
import 'alpinejs'
// import 'htmx'  import AsyncAlpine from "async-alpine";
import Alpine from "alpinejs";




export default function initGlobalScripts() {
    // Initialisation d'Alpine.js
    AsyncAlpine.init(Alpine);
    Alpine.start();
window.Alpine = Alpine;

}