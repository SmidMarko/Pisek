import { Environment, PartialDeep } from 'src/app/shared/helpers/config';

export const environment: Environment = {
  production: true,
  apiUrl: 'https://pisek-novi.acm.si/api', //'http://pisek-novi.acm.si:8080', //'http://localhost:8080', //'https://dev.algorea.org/api', // 'http://localhost:3000/api',
  oauthServerUrl: 'https://pisek-novi.acm.si/login_module' , //'http://localhost:8282',//'https://login.france-ioi.org', //TODO change
  forumServerUrl: null,
  forumApiUrl: null,
  oauthClientId: '22',
  sentryDsn: 'https://6295834d69104f54b55cc0ebe4ada310@o1167067.ingest.sentry.io/6257761',

  defaultActivityId: '1',

  languages: [
    { tag: 'fr', path: '/fr/' },
    { tag: 'en', path: '/en/' },
    { tag: 'sl', path: '/sl/' },
  ],
  defaultTitle: 'NOVI PIŠEK',
  languageSpecificTitles: { fr: 'NOVI PIŠEK' },

  allowForcedToken: true,
  authType: 'tokens',

  itemPlatformId: 'algorea_backend',

  theme: 'default',
  featureFlags: {
    hideTaskTabs: [],
    skillsDisabled: false,
  },
};

type Preset = 'telecomParis';
export const presets: Record<Preset, PartialDeep<Environment>> = {
  telecomParis: {
    theme: 'coursera-pt',
  },
};

export function getPresetNameByOrigin(origin: string): Preset | null {
  switch (origin) {
    case 'https://telecom-paris.france-ioi.org': return 'telecomParis';
    default: return null;
  }
}

