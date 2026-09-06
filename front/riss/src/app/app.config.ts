import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({
        theme: {
          preset: Aura
        },
        license:
          'eyJpZCI6ImEwNmVmN2FhLWI3NzQtNGVkYS1iNDIyLTY0MzI5YzczN2I0MiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODg2NDMwODIsImV4cCI6MTgyMDE3OTA4Mn0.6QTIBp3MFUIT_ZIRmuGP3xb8XKuT-CEXqQsHzKOWHYUrZTKFD_v-xc1_dWVkydNjNuzkmlbnbug1pMoOk_h_Ag'
      })
    ]
};
