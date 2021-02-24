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
      name: 'micro_host',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './apps/micro-host/src/app/app.component.ts',
      },
      remotes: {
        remote1: 'micro_remote1@http://localhost:4201/remoteEntry.js',
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    })
  );

  return config;
};
