Package.describe({
  name: 'pierreeric:rxbufferdownload',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Reactive binary downloader',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/PEM--/rxbufferdownload.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  // Required packages
  api.use([
    // Package from MDG
    'coffeescript',
    'reactive-var',
    // Community packages
    'mquandalle:bower@1.4.1'
  ]);
  // Imported files
  api.addFiles([
    'rxBufferDownload.coffee',
    'bower.json'
  ], 'client');
});
