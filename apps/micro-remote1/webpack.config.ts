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
      name: 'micro_remote1',
      filename: 'remoteEntry.js',
      exposes: {
        './Second': './apps/micro-remote1/src/app/second/second.module.ts',
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
    new ModuleFederationPlugin({
      name: 'micro_remote2',
      filename: 'remoteEntry2.js',
      exposes: {
        './Component': './apps/micro-remote1/src/app/second/second/second.component.ts',
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    })
  );

  return config;
};
