# kalong

Kirby, twig and fractal—married into something nice.

## Introduction

Kalong is a collection/combination of different tools, to help you
get started creating your own frontend styleguide, with easy reusable
components. It is based on [Fractal](https://fractal.build) and a
collection of custom npm-tasks to get you started fast.

## Installation

Kalong is intended to be cloned, configured and setup as the core of
your project, so instead of npm-installing this, you should rather clone
this project:

```bash
git clone https://github.com/webgefrickel/kalong.git ./newproject
```

After successfully cloning kalong, run `npm install` in the folder you
cloned it into to install all needed dependencies.

## Setting everything up

Open the file `kalong.config.js`, change the title of to match your
project and bump the version-number, if you want to. If you have a local
server running (like Apache or nginx), you should create a subdomain and
point this vhost to the `public`-folder of the just created project. This
step is optional, but highly recommended.

## Start coding

Open up a terminal and run `npm start` and the development-server will
fire up, and you can start creating new components, templates and
whatever you want.

## Where should I put my stuff?

Have a look at the folder `src`, there you will find a fully working
basic setup. 

## Create a build

You have a new release of your styleguide ready? First, bump up the 
version number in `kalong.config.js`. Then run `npm run build` to
create a production-ready version of the styleguide, with minified
JavaScript and CSS and everything you need.

## Collaboration

Feel free to open issues and send me pull requests.

## Maintainers

Steffen Rademacker [@webgefrickel](http://twitter.com/webgefrickel)

## License

kalong is published under the [MIT License](LICENSE.md)
