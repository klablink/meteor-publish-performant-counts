Package.describe({
  name: 'natestrauser:publish-performant-counts',
  version: '0.1.2',
  // Brief, one-line summary of the package.
  summary: 'Publish counts of large collections efficently',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nate-strauser/meteor-publish-performant-counts',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'ecmascript',
    'mongo'
  ], ['client', 'server']);

  api.addFiles('lib/server.js', 'server');
  api.addFiles('lib/client.js', 'client');
  api.export(['Counter']);
});
