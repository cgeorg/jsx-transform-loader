# Webpack loader for JSX-transform

## Usage

```js
{..., loader: 'jsx-webpack-loader'}
```

## Supported options
* Specify the element constructor by providing `?jsx=...` in your loader config.  For instance, `?jsx=React.createElement` or `?jsx=h`.
* To [ignore doc block](https://github.com/alexmingoia/jsx-transform#docblock), use `?ignoreDocblock` in your loader config. In this case you must also specify the `?jsx` option.
* Specify `?docblockUnknownTags` to have unknown tag names treated as tags rather than function names.
* Specify `?tagMethods` to have unknown tag names treated as tags rather than function names.

## Troubleshooting
* It doesn't work with ES6/babel-loader
** Make babel-loader run first, and tell it not to run the React JSX transform:
```js
loaders: [
  {test: /\.js/, exclude: /node_modules/, loader: "jsx-webpack-loader"},
  {test: /\.js/, exclude: /node_modules/, loader: "babel-loader?blacklist=react"}
]
```

## Credits
Thanks to Alex Mingoia for [jsx-transform](https://github.com/alexmingoia/jsx-transform) and Pete Hunt for [jsx-loader](https://github.com/petehunt/jsx-loader)
