

# NgxCompass Component

[![MIT License][license-image]][license]
[![npm](https://img.shields.io/badge/stackblitz-online-orange.svg)](https://stackblitz.com/edit/stackblitz-starters-s3ru66?file=src%2Fmain.ts)

Compass Component, scallable angular component

<p>
  <img style="width:600px;height:218px; text-align: center;" src="https://rawcdn.githack.com/Levon770/ngx-compass/cacca9e71280564ac55a1801c63778f538422574/assets/example.gif">
</p>
___

## Installing

Assuming you have [NodeJS](http://nodejs.org/), [NPM](https://www.npmjs.com/) installed globally just open up a terminal, navigate to your projects root directory and then execute
```
npm install ngx-compass --save
```

## Usage

With Angular module
```
...
import {NgxCompassModule} from 'ngx-compass';

@NgModule({
  imports: [
      ...
      NgxCompassModule
  ],
})
```

Call component selector as

```
  <ngx-compass [rotate]="30"></ngx-compass>
```

or with all available inputs

```
  <ngx-compass 
    [rotate]="value" 
    [width]="330" 
    [mode]="'light'" 
    [angleUnit]="30" 
  >
  </ngx-compass>
```
 ### Options

| input     | default |                                           |
|-----------|---------|-------------------------------------------|
| rotate    | 0       | rotation angle                            |
| width     | 330     | compass container width                   |
| mode      | light   | "light", "dark" theme                     |
| angleUnit | 30      | this will define compass scale angle step |


### Example

See [Stackblitz example](https://stackblitz.com/edit/stackblitz-starters-s3ru66?file=src%2Fmain.ts)
## Issues

If you identify any errors in the library, or have an idea for an improvement, please open an [issue](https://github.com/Levon770/ngx-compass/issues).


[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: LICENSE
