import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cookpedia.app',
  appName: 'Cookpedia-v2.0',
  webDir: 'dist',
  server: {
    // Gunakan http agar tidak terkena mixed-content block saat fetch ke API lokal
    androidScheme: 'http',
    cleartext: true
  }
};

export default config;
