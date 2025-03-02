import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {

  console.log('LOAD FILE');
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
