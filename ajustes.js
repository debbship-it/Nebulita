/* =====================================================
   AJUSTES DE NEBULITA  (puedes editar este archivo tú misma)
   -----------------------------------------------------
   Cambia números y nombres, guarda, súbelo a GitHub y listo.
   No cambies las palabras de la izquierda (precio, req, n...).
   Cuida las comas ( , ) y las comillas ( ' ) para que no se rompa.
   Si algo se rompe, borra este archivo y el juego usa sus valores de siempre.
   ===================================================== */
window.AJUSTES = {

  /* ---- Números generales ---- */
  precioCacao: 50,                 // paquete de cacao en la Tienda (pétalos 🌸)
  preciosParcelas: [0,0,0,60,120,200],  // costo de cada cuadrito del huerto
  segundosPorHuevo: 30,            // cada cuántos segundos pone un huevo la gallinita normal
  metaSeguidores: 1000,            // seguidores para la insignia ✔
  segundosLive: 40,                // duración de un Live
  descansoLiveMs: 90000,           // descanso entre Lives (en milisegundos: 90000 = 90 s)
  seguidoresParaLive: 10,          // seguidores para desbloquear el Live

  /* ---- Gallinitas: n=nombre, req=seguidores, mult=velocidad de huevos, p=precio ---- */
  gallinas: [
    {n:'Pochi',req:0,mult:1,p:0},
    {n:'Lacitos',req:50,mult:1.3,p:150},
    {n:'Estrellita',req:150,mult:1.7,p:400},
    {n:'Canela',req:300,mult:2.2,p:900}
  ],

  /* ---- Vaquitas: n=nombre, sab=tipo de leche, req=seguidores, p=precio, sec=segundos para llenarse, extra=leche extra al ordeñar ---- */
  vacas: [
    {n:'Manchitas',sab:'leche',req:20,p:250,sec:60,extra:0},
      {n:'Rosita',sab:'leche_fresa',req:60,p:600,sec:65,extra:0},
      {n:'Canelita',sab:'leche_caramelo',req:100,p:1000,sec:70,extra:0},
      {n:'Moradita',sab:'leche_uva',req:150,p:1600,sec:80,extra:0},
      {n:'Tostadita',sab:'leche_mantequilla',req:200,p:2400,sec:90,extra:0},
      {n:'Fresita',sab:'leche_fresa',req:300,p:3500,sec:100,extra:1}
  ],

  /* ---- Recetas: precio de venta y seguidores que piden ---- */
  recetas: {
    galleta: {precio:14,req:0},
    galleta_flor: {precio:24,req:15},
    cupcake: {precio:34,req:20},
    galleta_grietas: {precio:22,req:40},
    galleta_ajedrez: {precio:44,req:60},
    chocolate_galactico: {precio:70,req:80},
    cupcake_galaxia: {precio:62,req:100},
    galleta_leche: {precio:30,req:30},
    pan_mantequilla: {precio:46,req:90},
    batido_fresa: {precio:52,req:70},
    flan_caramelo: {precio:60,req:110},
    cupcake_uva: {precio:58,req:150}
  },

  /* ---- Nombres que se ven en el juego (la palabra de la izquierda no se cambia) ---- */
  nombres: {
    fresa: 'Fresa',
    trigo: 'Trigo',
    huevo: 'Huevo',
    cacao: 'Cacao',
    galleta: 'Galleta casera',
    galleta_flor: 'Galleta flor',
    cupcake: 'Cupcake de fresa',
    cupcake_galaxia: 'Cupcake galáctico',
    galleta_grietas: 'Galleta crujiente',
    galleta_ajedrez: 'Galleta ajedrez',
    chocolate_galactico: 'Chocolate galáctico',
    leche: 'Leche',
    leche_fresa: 'Leche de fresa',
    leche_caramelo: 'Leche de caramelo',
    leche_uva: 'Leche de uva',
    leche_mantequilla: 'Leche de mantequilla',
    chispa: 'Chispa',
    galleta_leche: 'Galleta con leche',
    pan_mantequilla: 'Pan de mantequilla',
    batido_fresa: 'Batido de fresa',
    flan_caramelo: 'Flan de caramelo',
    cupcake_uva: 'Cupcake de uva'
  },

  /* ---- Textos de los posts y nombres de los clientes ---- */
  frases: ['Recién salidito del horno ✨','Hecho con mucho cariño 💕','¡Quedó hermoso! 🌸','Para endulzar tu día 🍓','Edición limitada (hasta que me lo coma) 😋'],
  usuarios: ['luna_nebu','chispa_estelar','mochi_cosmico','astro_pan','nubecita99','kiwi.galaxia','pixel_star']
};
