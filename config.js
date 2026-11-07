/* =====================================================================
   CONFIGURACIÓN DE LA CLIENTA — Noemy Gavilanes Nails
   Este es el único archivo que cambia entre clientas.
   ===================================================================== */
const CONFIG = {
  // Supabase > Project Settings > API Keys (URL sin /rest/v1/ al final)
  SUPABASE_URL: 'https://bothajdpgwofinvetptw.supabase.co',
  SUPABASE_KEY: 'sb_publishable_5JbjFoj_LS1LQ5LWcBZUsw__1C0eU_z',

  // Avisos push: clave pública generada con generar-claves.html (vacío = avisos apagados)
  VAPID_PUBLIC: 'BEQjPn_4oLn8yVzKp03VT2UesUHpluCTgee-Jfr4vJFHjXYCZpsU-ajiuvGheNhR91A2CyfvF-OtwO3NSDyKQHM',
  minutosAviso: 15,

  negocio: 'Noemy Gavilanes Nails',
  marca: {
    nombre: 'Noemy Gavilanes',            // texto grande de la cabecera
    sub: 'NAILS · AGENDA',          // texto pequeño debajo
    subLogin: 'NAILS · AGENDA',       // texto bajo el logo en la pantalla de inicio de sesión
    tituloApp: 'Agenda NG'          // nombre del ícono en el celular
  },

  // Colores: crema, café espresso y bronce/oro rosa
  colores: {
    fondo: '#F6EEE6',
    tarjeta: '#FFFFFF',
    tinta: '#3A2A22',
    suave: '#73604F',
    borde: '#E6D5C3',
    principal: '#8A6445',
    principalOscuro: '#6E4C33',
    principalClaro: '#F1E2D3',
    acento: '#C9A27E'
  },

  maxTurnos: 2,            // máximo de turnos por cita, aunque elija más servicios
  abono: 5,                // abono por reserva (aunque ocupe varios turnos)
  horasLimite: 3,          // horas que tiene la clienta para enviar el abono

  reglas: {
    llegarAntes: 10,       // minutos antes que debe llegar
    tolerancia: 15         // minutos de retraso tras los que se pierde la cita
  },

  banco: 'Banco Pichincha',
  tipoCuenta: 'Ahorros',
  cuenta: '2211386394',
  cedula: '1207683465',
  titular: 'Noemy Anahi Gavilanes Diaz',             // nombre completo del titular de la cuenta (si se deja vacío, no aparece)

  // Cada servicio u opción ocupa 1 turno, hasta el máximo de "maxTurnos".
  // Si eligen más servicios, se reparten dentro de esos turnos.
  // Los que tienen "opciones" se muestran como desplegable.
  servicios: [
    { nombre: 'Uñas', opciones: ['Manos', 'Pies'] },
    { nombre: 'Cejas' },
    { nombre: 'Pestañas' },
    { nombre: 'Cabello' }
  ],

  // Turnos del día: [inicio, fin] en formato 24 h
  horarios: [
    ['06:00', '07:30'], ['07:30', '09:00'], ['09:00', '10:30'],
    ['10:30', '12:00'], ['12:00', '13:30'], ['13:30', '15:00'],
    ['15:00', '16:30'], ['16:30', '18:00'], ['18:00', '19:30'],
    ['19:30', '21:00'], ['21:00', '22:30']
  ]
};
