import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    head: {
      title: 'Xen CRM Admin',
    },
    locales: ['es'],
    translations: {
      es: {
        "app.components.LeftMenu.navbrand.title": "Xen CMS",
        "app.components.LeftMenu.navbrand.workplace": "Panel de Control",
        "Auth.form.welcome.title": "Bienvenido a Xen CMS",
        "Auth.form.welcome.subtitle": "Inicia sesión en tu cuenta de env('COMPANY_DISPLAY_NAME')"
      },
    },
    theme: {
      light: {
        colors: {
          // El color principal de Xen Digital
          primary100: '#e6f1f2', 
          primary200: '#b3d5d9',
          primary500: '#00727F', 
          primary600: '#005b66', // Un tono más oscuro para el hover
          primary700: '#00454d',
          buttonPrimary500: '#00727F',
          buttonPrimary600: '#005b66',
        },
      },
      dark: {
        colors: {
          // Usando el fondo oscuro de tu manual (#001020)
          primary100: '#00282d',
          primary200: '#00454d',
          primary500: '#00727F',
          primary600: '#008c9c', 
          buttonPrimary500: '#00727F',
          buttonPrimary600: '#008c9c',
          neutral0: '#000000',    // Fondo negro como en tu logo
          neutral100: '#001020',  // Fondo del sidebar
        },
      },
    },
    notifications: { release: false },
    tutorials: false,
  },

  bootstrap(app: StrapiApp) {
    console.log("Xen CRM con identidad corporativa cargado");
  },
};