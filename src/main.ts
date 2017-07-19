import environment from './environment';
import {I18N, TCustomAttribute} from 'aurelia-i18n';
import * as Backend from 'i18next-xhr-backend';

export function configure(aurelia) {
  aurelia.use
      .standardConfiguration()
      .feature('resources')
      .plugin('aurelia-i18n', (instance) => {
          let aliases = ['t', 'i18n'];
          // add aliases for 't' attribute
          TCustomAttribute.configureAliases(aliases);

          // register backend plugin
          instance.i18next.use(Backend);

          // adapt options to your needs (see http://i18next.com/docs/options/)
          // make sure to return the promise of the setup method, in order to guarantee proper loading
          return instance.setup({
              backend: {                                  // <-- configure backend settings
                  loadPath: './locales/{{lng}}/{{ns}}.json', // <-- XHR settings for where to get the files from
              },
              attributes: aliases,
              lng : 'en',
              fallbackLng : 'ru',
              debug : false,
              ns: ["translation", "nav"],
              defaultNS: "translation"
          });
      });


  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
