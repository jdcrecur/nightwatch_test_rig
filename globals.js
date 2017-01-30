var cliArgs = require( 'jdc-node-cliarg-reader' ).readAll(),
    _ = require('lodash'),
    mode = (!cliArgs['--mode']) ? 'default': cliArgs['--mode'];

try {
    var global_settings = require( './config/settings_global.js' );
    if(mode != 'default') {
        global_settings = _.merge( global_settings, require( './config/settings_' + mode + '.js' ) );
    }
} catch ( e ) {
    console.log( e );
    console.log( 'EXITING THE TEST RIG!' );
    process.exit();
}

module.exports = global_settings;