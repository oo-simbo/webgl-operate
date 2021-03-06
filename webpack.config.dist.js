

module.exports = (env, options) => {

    const config = require('./webpack.config');

    config.cache = false;
    config.output.path = __dirname + '/dist';
    config.entry = {
        'webgl-operate.js': ['polyfill.ts', 'webgl-operate.ts'],
        'webgl-operate.slim.js': ['polyfill.ts', 'webgl-operate.slim.ts'],
    };

    config.module.rules[0].use.options.compilerOptions.noUnusedLocals = true;
    config.module.rules[0].use.options.compilerOptions.declaration = false;
    config.module.rules[0].use.options.compilerOptions.removeComments = true;

    // config.output.library = 'gloperate';
    // config.output.libraryTarget = 'umd';

    // DISABLE_ASSERTIONS: JSON.stringify(options.mode === 'development'),
    config.plugins[0].definitions.DISABLE_ASSERTIONS
        = JSON.stringify(false);
    // Log verbosity levels: debug = 3, info = 2, warn = 1, error = 0
    config.plugins[0].definitions.LOG_VERBOSITY_THRESHOLD
        = JSON.stringify(options.mode === 'development' ? 3 : 2);

    return config;
};
