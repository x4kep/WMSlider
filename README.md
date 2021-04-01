<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->
[![mdify](https://i.imgur.com/VS4ClCY.png)](#)
# Traffic Slider
 [![Support me on Patreon][badge_patreon]][patreon]
 [![PayPal][badge_paypal_donate]][paypal-donations] 
 [![Version](https://img.shields.io/npm/v/mdify.svg)](https://www.npmjs.com/package/mdify) 

<a href="https://www.buymeacoffee.com/x4kep" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>

# About WMSlider
Cilj ovog zadatka je kreirati preglednu I jednostavnu stranu sa konfigurabilnim, animiranim Slider elementom sa naglaskom na UX i
fluidnost interfejsa, posebno na mobilnim uredjajima.
Više informacija pronaći ćeš u nastavku. Srećno!

Potrebno je da slider radi na sledeći način:
* Slider može da sadrži proizvoljni broj item-a u redu
* Slider može da sadrži proizvoljni broj redova (rešenje treba da radi sa različitim brojem slika i redova)
* Animacija s leva na desno, bez prekida, defaultna vrednost ( ili s desna na levo, ako je tako naznačeno kroz data-attribute u
html-u)
* Svaki red u slider-u je animiran razlicitom brzinom ( brzina u milisekundama, dostupna u html-u kao data-attribute )
* Hover na slider usporava animaciju celog reda
* Hover na item slider-a dodaje overlay preko itema i button (videti u dizajnu)
* Custom logika slider ( pozeljno vanilla JS, dozvoljeno je koristiti jQuery )
* Custom animacija ( dozvoljeno je koristiti library po izboru )
* Nije dozvoljeno koristiti gotova slider rešenja (slick, jQuery slider...)
* Struktura i organizacija koda takva da omoguci lakse prebacivanje na druge projekte

## :pencil2: Example ( Design ) 
* https://www.apple.com/apple-tv-plus/
[![mdify](https://i.imgur.com/yOhn3T3.png)](#)
[![Example](https://i.imgur.com/ic61TT5.gif)](#)
![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

## :cloud: Installation

```sh
# Download code
npm install --save trafficslider

# Run app
npm start
```
## :clipboard: Example

```js
console.log('TBD');
```
## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

## :memo: Documentation

### `stringify(metadata, content, [options])`
Stringify metadata and content.

#### Params

- **Object** `metadata`: The metadata object.
- **String** `content`: The markdown content.
- **Object** `[options]`: An object containing the following fields:
 - `start` (String): The start delimiter of the metadata (default: `---`).
 - `end` (String): The end delimiter of the metadata (default: `---`).
 - `yamlOptions` (Object): Custom js-yaml options.

#### Return
- **String** The markdown content prefixed by the stringified metadata.

### `parse(input, [options])`
Parses the markdown input and the metadata.

#### Params

- **String** `input`: The markdown code. If it contains metadata, it will be parsed.
- **Object** `[options]`: An object containing the following fields:
 - `start` (String): The metadata prefix (default: `---`).
 - `end` (RegExp): The metadata end.
 - `html` (Boolean): If `true`, the markdown code will be parsed into HTML (default: `true`).
 - `converterOptions` (Object): The converter options passed to [`showdown`](https://github.com/showdownjs/showdown).

#### Return
- **ParseResult**

### `writeFile(path, metadata, content, [options], [cb])`
Writes the generated content into a file.

#### Params

- **String** `path`: The file path.
- **Object** `metadata`: The metadata object.
- **String** `content`: The markdown content.
- **Object** `[options]`: The stringify options.
- **Function** `[cb]`: The callback function.

### `parseFile(path, [options], [cb])`
Parses a markdown file.

#### Params

- **String** `path`: The file path.
- **Object** `[options]`: The parser options.
- **Function** `[cb]`: The callback function.

#### Return
- **ParseResult** Only **if `cb` was omitted**.

An object containing the following fields:

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - `bloggify-markdown-adapter`

## :scroll: License

[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
