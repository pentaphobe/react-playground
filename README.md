# Getting setup

## Installation

Should just be a matter of `yarn`

## Running

`yarn start`




# Progress

## Features

(Constantly re-prioritised, ever growing)

- [ ] Better naming for taxonomy!
- [ ] Balance between styled-components theming and proposed architecture
- [ ] Input element example
    - [ ] Base theme
    - [ ] Simple theme
    - [ ] "Material" theme
- [ ] Test assumptions re. how we sync items
- [ ] Establish core table of useful core variables for themes
    - [ ] As close to design language as possible
    - [ ] Assume consistent rhythms, but allow for ad-hoc
- [ ] How do we safely isolate versions?
- [ ] Base set of use cases for component composition
    - [ ] conditional rendering (obviously)
    - [ ] functionality vs. anim vs. theme(s) vs. structural overrides
- [ ] prop-type examples for props vs. children
- [x] HMR Webpack setup with decent module pathing
- [ ] CSS & SASS loader
    - [ ] Opinionated guide for stylesheet vs. style include and avoiding collisions
- [x] Well-defined interface for nested container rendering and prop inheritance


# Taxonomy

## Problem statement

- [ ] Maximise shared code
- [ ] Progressive enhancement (not in the normal sense)
    - [ ] Distinguish between:
        - [ ] UI business logic (eg. validation, model updates on events)
        - [ ] UI interface logic (eg. triggering animations - disposable)


# Changelog

## 20170518 - 0.0.1 Initial setup from a few articles

Following / Referencing:

- https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel
- http://matthewlehner.net/react-hot-module-replacement-with-webpack/
- https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
- https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
- https://github.com/erikras/react-redux-universal-hot-example





# Actions (dear Diary...):

- `yarn init`
- `yarn add webpack webpack-dev-server path --dev`
- `yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev`
- created `.babelrc` and `webpack.config.js`
- `yarn add html-webpack-plugin --dev`
- added "start" script to `package.json`
- `yarn add react react-dom`
- quick review to set up path resolving in webpack (so components can be separate to client and/or storybook)
- added `Section.jsx` to test path resolution (works! 🍻)
    + can do `import Section from 'components/Section'` now, instead of `import Section from '../components/Section.jsx'`
- `yarn add babel-preset-react-hmre --dev`
- `yarn add react-hot-loader@next --dev`
- Errors abound.  Removed `--hot` from the `webpack-dev-server` script in `package.json`
    + presence of this option _and_ `hot:true` in `webpack.config.js` results in the module name string being doubled up.   Genius.
- Oh dear.  Seem to have gotten HMR working, modules are reloading without the page reloading
    + **BUT** they aren't actually changing.  Suspect this is to do with my path resolving tricks
- Fixed HMR code in index.js per Pat's recommendation, and added rudimentary timer to confirm updates were leaving state intact.

