# 2048
This 2048 game is a fork from
Gabriele Cirulli's
[GitHub Repository](https://github.com/gabrielecirulli/2048/).

We are utilizing [PGME](http://apps.marco.kiwi/pgme/) to automate the
build-process and make it more robust and easy to change.

This fork was originally made without the capabilities of PGME in mind and
so the rewrite of this app does not use all of it's power.
(E.g.: We use a delay (setTimeout) to init this app,
otherwise we would have had to rewrite way more stuff..)

## Distributions
The `dist` folder contains all files for each platform.
All necessary information is stored in two files, one JavaScript- and one CSS
file.

There is _NOT one_ JavaScript file for all portals.
Each portal has it's own JavaScript- and CSS file.

## Adding a new platform
* Create a folder in the `dist` directory (best named after the portal)
* Create a config file in `src/config/`
    * It should conform to the name of the portal folder in the dist directory
    * You should copy, edit and rename an existing configuration file
    * The values should be self-explanatory
* Create a new language file in `src/text` or use an existing one
    * It should conform either to the 2-letter country code,
      or to something like `en-netmums.com.js` e.g. if you want to have a
      separate language file for netmums.com
* Edit the buildfile which defaults to `pgmefile.js`

## Editing the buildfile (pgmefile.js)
The buildfile is just a JSON (JavaScript Object Notation) file.
It consists of X jobs. Each job defines something that has to happen when a
build is triggered.

### Define a job for a specific app.js
Because everything is combined in one JavaScript- and one CSS file,
_you need to create two jobs for the new platform_.

    {
      "id": "js",
      "comment": "aufeminin.com language and config",
      "filepath": "./dist/aufeminin.com/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/fr.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/aufeminin.com.js",
        "./src/_initConfig_End.js"
      ],
    },
    {
      "id": "js",
      "filepath": "./_tmp_portal.scss",
      "contents": [
        "./src/style/__theme-gofeminin.scss",
        "./_tmp_generic.scss"
      ],
      "callbacks": [
        {
          "command": "sass",
          "args": "-q ./_tmp_portal.scss:./dist/aufeminin.com/style/main.css"
        },
        {
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-pr ./src/share/* ./dist/aufeminin.com/"
        }
      ]
    }

There are two jobs which define how to *compile* a new distribution.
Don't get scared; it's pretty easy, once you get used to it.

The first job tells PGME to take the generic `_tmp_app.js` (which consists of
all shared functions and libraries) and prepend it to all the other platform
specific stuff. It's pretty much like templating.

    {
      "id": "js",
      "comment": "aufeminin.com language and config",
      "filepath": "./dist/aufeminin.com/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/fr.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/aufeminin.com.js",
        "./src/_initConfig_End.js"
      ]
    }

The `src/_initLanguage_Start.js` is just a template which needs to be included
before the _language definition file_ `src/text/fr.js`.

Edit the language by changing the value of 'src/text/fr.js' to a language of
your choice.

You also need to change the value of `src/config/aufeminin.com.js` to the
matching config file you created earlier.

The second job does a shitload of stuff for us, but even this is dead simple.
Let's jump right into it.

    {
      "id": "js",
      "filepath": "./_tmp_portal.scss",
      "contents": [
        "./src/style/__theme-gofeminin.scss",
        "./_tmp_generic.scss"
      ],
      "callbacks": [
        {
          "command": "sass",
          "args": "-q ./_tmp_portal.scss:./dist/aufeminin.com/style/main.css"
        },
        {
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-pr ./src/share/* ./dist/aufeminin.com/"
        }
      ]
    }

It says, take the `src/style/__theme-gofeminin.scss` SASS file and prepend it
to the generic `_tmp_generic.scss` SASS file
(which has been created earlier, automatically).

This is just so the first _callback_ of this job has the right theme variable
available and can compile the temporary SASS file `_tmp_portal.scss` to a CSS
file in `dist/aufeminin.com/style/main.css`

The second _callback_ just copies all files from our shared directory to the
newly created distribution (portal) directory (`dist/aufeminin.com/`)

* Edit the theme variable
    * Probably you need to create a new theme-variable file for that, which
      should also go into `src/style/__theme-nameOfNewPortal.scss`
* Currently there is only one SASS file which posssibly needs to be edited too,
  if you happen to create a new look for a new portal.

The SASS file was just marginally edited by me and could also be split up into
several files, e.g. one for each theme/platform.

## Compile
Once you edited the `pgmefile.js`, you should compile with

    pgme -n

If you happen to see any errors, you are screwed and need either RTFM or kindly
request assistance by your friendly IT-Staff.
