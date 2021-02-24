import { Configuration } from 'webpack';
import * as ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';
import * as _ from 'lodash';

export default async (
  config: Configuration,
  options,
  targetOptions
): Promise<Configuration> => {
  // console.log('config:', config);

  config.optimization = _.assign(config.optimization, { runtimeChunk: false });

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'micro_remote2_wc',
      filename: 'remoteEntry.js',
      exposes: {
        './web-components': './apps/micro-remote2-wc/src/bootstrap.ts',
      },
    }),
  );

  return config;
};
