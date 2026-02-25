import type { Core } from '@strapi/strapi';

export default ({ env }: Core.Config.Shared.ConfigParams) => ({
  // 1. Configuración de Envío de Correo (Gmail/Nodemailer)
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: env('GMAIL_USER'),
          pass: env('GMAIL_PASS'), 
        },
      },
      settings: {
        defaultFrom: env('GMAIL_USER'),
        defaultReplyTo: env('GMAIL_USER'),
      },
    },
  },

  // 2. Diseñador de Correos (Email Designer v5)
  "email-designer-5": {
    enabled: true,
    config: {
      appearance: {
        theme: "modern_light",
      },
      // Etiquetas dinámicas configurables desde el .env para reutilizar el template
      mergeTags: {
        company: {
          name: env('COMPANY_DISPLAY_NAME', 'Xen Digital'), 
          mergeTags: {
            name: {
              name: "Nombre de la Empresa",
              value: env('COMPANY_LEGAL_NAME', 'Xen Digital S.A.S.'),
            },
          },
        },
      },
    } as any,
  },

  // 3. Ocultar plugin cloud
  "cloud": {
    enabled: false,
  },
});