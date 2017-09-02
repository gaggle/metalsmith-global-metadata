# metalsmith-global-metadata
Add metadata to the Metalsmith pipeline.

This adds metadata globally to Metalsmith, 
if you're looking to add metadata to individual files 
you can use the excellent [metalsmith-metadata] plugin.

## Installation
```sh
$ npm install https://github.com/gaggle/metalsmith-global-metadata.git
```

## Usage
Pass data you want to add to global metadata:
```js
const metadata = require("metalsmith-global-metadata");

metalsmith.use(metadata({
  data: {foo: "bar"},
  pkg: require("./package.json"),
}));
```

[metalsmith-metadata]: https://www.npmjs.com/package/metalsmith-metadata
