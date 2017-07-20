/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
// we want font-awesome to load as soon as possible to show the fa-spinner
import '../static/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Aurelia } from 'aurelia-framework';
import {I18N, TCustomAttribute} from 'aurelia-i18n';
import Backend from 'i18next-xhr-backend';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

function loadLocales(url, options, callback, data) {
    try {
        let waitForLocale = require('../locales/'+url+'.json');
        waitForLocale((locale) => {
            callback(locale, {status: '200'});
        })
    } catch (e) {
        callback(null, {status: '404'});
    }
}

export async function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .feature(PLATFORM.moduleName('resources/index'))
        .plugin(PLATFORM.moduleName('aurelia-i18n'), (instance) => {
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
                    parse: (data) => data,
                    ajax: loadLocales,
                },
                attributes: aliases,
                lng: 'en',
                fallbackLng: 'ru',
                debug: false,
                ns: ["tr", "nav"],
                defaultNS: "tr"
            });
        })
        .plugin(PLATFORM.moduleName('aurelia-materialize-bridge'), b => b.useAll());

    // Uncomment the line below to enable animation.
    // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
    // if the css animator is enabled, add swap-order="after" to all router-view elements

    // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
    // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

    await aurelia.start();
    await aurelia.setRoot(PLATFORM.moduleName('app'));
}