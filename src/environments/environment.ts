// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/**
 * variables de entorno desarrollo
 */
export const environment = {
  production: false,
  titleApp: 'Pizzeria Belsay',
  infoApp: {
    info: 'BELSAY (Fuentes de andalucía) YA TIENE SU SITIO EN INTERNET',
    address: 'Calle Manuel de Falla, 41420 Fuentes de Andalucía',
    phone1: '95 483 81 00',
    phone2: '64 944 98 32',
    links: {
      facebook: 'https://www.facebook.com/profile.php?id=100057086216366',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
