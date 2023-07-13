// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment, PartialDeep } from 'src/app/shared/helpers/config';

export const environment: Environment = {
  production: true,
  apiUrl: 'https://pisek-novi.acm.si/api', //'http://pisek-novi.acm.si:8080', //'http://localhost:8080', //'https://dev.algorea.org/api', // 'http://localhost:3000/api',
  oauthServerUrl: 'https://pisek-novi.acm.si/login_module' , //'http://localhost:8282',//'https://login.france-ioi.org', //TODO change
  forumServerUrl: 'ws://localhost:3001',
  forumApiUrl: 'http://localhost:3000',
  oauthClientId: '22',

  defaultActivityId: '1',

  languages: [
    { tag: 'fr', path: '/fr/' },
    { tag: 'en', path: '/en/' },
    { tag: 'sl', path: '/sl/' },
  ],
  defaultTitle: 'Algorea Platform',
  languageSpecificTitles: { fr: 'Plateforme Algoréa' },
  allowForcedToken: true,
  authType: 'tokens',

  itemPlatformId: 'algorea_backend',

  theme: 'default',
  featureFlags: {
    hideTaskTabs: [],
    skillsDisabled: false,
  },
};

type Preset = 'demo';
export const presets: Record<Preset, PartialDeep<Environment>> = {
  demo: {
    defaultActivityId: '1352246428241737349', // SNT
    defaultTitle: 'Demo app',
    authType: 'cookies',
    theme: 'coursera-pt',
  },
};

export function getPresetNameByOrigin(origin: string): Preset | null {
  switch (origin) {
    case 'http://demo.localhost': return 'demo';
    default: return null;
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
