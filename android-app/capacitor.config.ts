import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.souki.marketplace',
  appName: 'SOUKI',
  webDir: 'www',
  android: { appendUserAgent: ' SOUKIAndroidApp/2' },
  server: {
    url: 'https://salah1m.github.io/souki-marketplace/',
    cleartext: false
  }
};

export default config;
