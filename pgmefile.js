{
  "name": "Performance Gains Made Easy",
  "author": "Marco Kellershoff <mail@marco.kiwi>",
  "version": "3.0.0",
  "watchers": [
    {
      "id": "js",
      "author": "Marco Kellershoff <marco@aufem.co>",
      "filepath": "./src/js/app"
    },
    {
      "id": "sass",
      "author": "Yvonne Ahmad <yvonne.ahmad@gofeminin.de>",
      "filepath": "./src/sass"
    }
  ],
  "jobs": [
    {
      "id": "js",
      "author": "Marco Kellershoff <marco@aufem.co>",
      "comment": "Build generic app.js",
      "filepath": "./_tmp_app.js",
      "contents": [
        "./src/js/gofem_helper_modul_version.js",
        "./src/js/jquery-1.11.0.min.js",
        "./src/js/bind_polyfill.js",
        "./src/js/classlist_polyfill.js",
        "./src/js/animframe_polyfill.js",
        "./src/js/keyboard_input_manager.js",
        "./src/js/grid.js",
        "./src/js/tile.js",
        "./src/js/local_storage_manager.js",
        "./src/js/html_actuator.js",
        "./src/js/game_manager.js",
        "./src/js/application.js"
      ]
    },
    {
      "id": "js",
      "author": "Marco Kellershoff <marco@aufem.co>",
      "comment": "onmeda.de language and config",
      "filepath": "./dist/onmeda.de/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/de.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/onmeda.de.js",
        "./src/_initConfig_End.js"
      ]
    },
    {
      "id": "js",
      "author": "Marco Kellershoff <marco@aufem.co>",
      "comment": "bildderfrau.de language and config",
      "filepath": "./dist/bildderfrau.de/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/de.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/bildderfrau.de.js",
        "./src/_initConfig_End.js"
      ]
    },
    {
      "id": "js",
      "author": "Marco Kellershoff <marco@aufem.co>",
      "comment": "gofeminin.de language and config",
      "filepath": "./dist/gofeminin.de/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/de.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/gofeminin.de.js",
        "./src/_initConfig_End.js"
      ]
    },
    {
      "id": "files",
      "author": "Marco Kellershoff <marco@aufem.co>",
      "comment": "Copies shared files",
      "callbacks": [
        {
          "command": "cp",
          "args": "-pr ./src/share/generate_stripes.png ./src/share/index.html ./dist/onmeda.de/"
        }
      ]
    },
    {
      "id": "files",
      "author": "Marco Kellershoff <marco@aufem.co>",
      "comment": "Copies shared files",
      "callbacks": [
        {
          "command": "cp",
          "args": "-pr ./src/share/generate_stripes.png ./src/share/index.html ./dist/gofeminin.de/"
        }
      ]
    },
    {
      "id": "files",
      "author": "Marco Kellershoff <marco@aufem.co>",
      "comment": "Copies shared files",
      "callbacks": [
        {
          "command": "cp",
          "args": "-pr ./src/share/generate_stripes.png ./src/share/index.html ./dist/bildderfrau.de/"
        }
      ]
    },
    {
      "id": "sass",
      "author": "Marco Kellershoff <marco@aufem.co>",
      "comment": "Combine to one generic style",
      "filepath": "./_tmp_generic.scss",
      "contents": [
        "./src/style/helpers.scss",
        "./src/style/main.scss"
      ]
    },
    {
      "id": "sass",
      "author": "Marco Kellershoff <marco@aufem.co>",
      "comment": "Prepend gofeminin.de theme variable to scss file",
      "filepath": "./_tmp_portal.scss",
      "contents": [
        "./src/style/__theme-gofeminin.scss",
        "./_tmp_generic.scss"
      ],
      "callbacks": [
        {
          "command": "sass",
          "args": "-q ./_tmp_portal.scss:./dist/gofeminin.de/style/main.css"
        },
        {
          "comment": "Purging temp file",
          "command": "rm",
          "args": "./_tmp_portal.scss"
        }
      ]
    },
    {
      "id": "sass",
      "author": "Marco Kellershoff <marco@aufem.co>",
      "comment": "Prepend onmeda.de theme variable to scss file",
      "filepath": "./_tmp_portal.scss",
      "contents": [
        "./src/style/__theme-onmeda.scss",
        "./_tmp_generic.scss"
      ],
      "callbacks": [
        {
          "command": "sass",
          "args": "-q ./_tmp_portal.scss:./dist/onmeda.de/style/main.css"
        },
        {
          "comment": "Purging temp files",
          "command": "rm",
          "args": "./_tmp_portal.scss"
        }
      ]
    },
    {
      "id": "sass",
      "author": "Marco Kellershoff <marco@aufem.co>",
      "comment": "Prepend bildderfrau.de theme variable to scss file",
      "filepath": "./_tmp_portal.scss",
      "contents": [
        "./src/style/__theme-gofeminin.scss",
        "./_tmp_generic.scss"
      ],
      "callbacks": [
        {
          "command": "sass",
          "args": "-q ./_tmp_portal.scss:./dist/bildderfrau.de/style/main.css"
        },
        {
          "comment": "Purging temp files",
          "command": "rm",
          "args": "./_tmp_portal.scss"
        }
      ]
    },
    {
      "id": "purge",
      "watcherOnly": false,
      "author": "Marco Kellershoff <marco@aufem.co>",
      "comment": "cleaning up temp files..",
      "callbacks": [
        {
          "command": "rm",
          "args": "./_tmp_app.js ./_tmp_generic.scss"
        }
      ]
    }
  ]
}
