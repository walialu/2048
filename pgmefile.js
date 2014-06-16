{
  "name": "Performance Gains Made Easy",
  "version": "3.2.1",
  "watchers": [
    {
      "id": "js",
      "filepath": "./src/js/app"
    },
    {
      "id": "sass",
      "filepath": "./src/sass"
    }
  ],
  "jobs": [
    {
      "id": "js",
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
      "id": "sass",
      "comment": "Combine to one generic style",
      "filepath": "./_tmp_generic.scss",
      "contents": [
        "./src/style/helpers.scss",
        "./src/style/main.scss"
      ]
    },
    {
      "id": "js",
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
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-r ./src/share/* ./dist/onmeda.de/"
        }
      ]
    },
    {
      "id": "js",
      "filepath": "./_tmp_portal.scss",
      "contents": [
        "./src/style/__theme-bdf.scss",
        "./_tmp_generic.scss"
      ],
      "callbacks": [
        {
          "command": "sass",
          "args": "-q ./_tmp_portal.scss:./dist/bildderfrau.de/style/main.css"
        },
        {
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-r ./src/share/* ./dist/bildderfrau.de/"
        }
      ]
    },
    {
      "id": "js",
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
      "id": "js",
      "comment": "alfemminile.com language and config",
      "filepath": "./dist/alfemminile.com/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/it.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/alfemminile.com.js",
        "./src/_initConfig_End.js"
      ]
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
          "args": "-q ./_tmp_portal.scss:./dist/alfemminile.com/style/main.css"
        },
        {
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-r ./src/share/* ./dist/alfemminile.com/"
        }
      ]
    },
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
          "args": "-r ./src/share/* ./dist/aufeminin.com/"
        }
      ]
    },
    {
      "id": "js",
      "comment": "enfeminino.com language and config",
      "filepath": "./dist/enfeminino.com/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/es.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/enfeminino.com.js",
        "./src/_initConfig_End.js"
      ]
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
          "args": "-q ./_tmp_portal.scss:./dist/enfeminino.com/style/main.css"
        },
        {
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-r ./src/share/* ./dist/enfeminino.com/"
        }
      ]
    },
    {
      "id": "js",
      "comment": "ofeminin.pl language and config",
      "filepath": "./dist/ofeminin.pl/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/pl.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/ofeminin.pl.js",
        "./src/_initConfig_End.js"
      ]
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
          "args": "-q ./_tmp_portal.scss:./dist/ofeminin.pl/style/main.css"
        },
        {
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-r ./src/share/* ./dist/ofeminin.pl/"
        }
      ]
    },
    {
      "id": "js",
      "comment": "sofeminine.co.uk language and config",
      "filepath": "./dist/sofeminine.co.uk/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/en.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/sofeminine.co.uk.js",
        "./src/_initConfig_End.js"
      ]
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
          "args": "-q ./_tmp_portal.scss:./dist/sofeminine.co.uk/style/main.css"
        },
        {
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-r ./src/share/* ./dist/sofeminine.co.uk/"
        }
      ]
    },
    {
      "id": "js",
      "comment": "taofemenino.com.br language and config",
      "filepath": "./dist/taofemenino.com.br/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/pt.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/taofemenino.com.br.js",
        "./src/_initConfig_End.js"
      ]
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
          "args": "-q ./_tmp_portal.scss:./dist/taofemenino.com.br/style/main.css"
        },
        {
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-r ./src/share/* ./dist/taofemenino.com.br/"
        }
      ]
    },
    {
      "id": "js",
      "comment": "wewomen.be language and config",
      "filepath": "./dist/wewomen.be/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/nl.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/wewomen.be.js",
        "./src/_initConfig_End.js"
      ]
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
          "args": "-q ./_tmp_portal.scss:./dist/wewomen.be/style/main.css"
        },
        {
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-r ./src/share/* ./dist/wewomen.be/"
        }
      ]
    },
    {
      "id": "js",
      "comment": "wewomen.ca language and config",
      "filepath": "./dist/wewomen.ca/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/ca.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/wewomen.ca.js",
        "./src/_initConfig_End.js"
      ]
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
          "args": "-q ./_tmp_portal.scss:./dist/wewomen.ca/style/main.css"
        },
        {
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-r ./src/share/* ./dist/wewomen.ca/"
        }
      ]
    },
    {
      "id": "js",
      "comment": "wewomen.us language and config",
      "filepath": "./dist/wewomen.us/js/app.js",
      "contents": [
        "./_tmp_app.js",
        "./src/_initLanguage_Start.js",
        "./src/text/us.js",
        "./src/_initLanguage_End.js",
        "./src/_initConfig_Start.js",
        "./src/config/wewomen.us.js",
        "./src/_initConfig_End.js"
      ]
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
          "args": "-q ./_tmp_portal.scss:./dist/wewomen.us/style/main.css"
        },
        {
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-r ./src/share/* ./dist/wewomen.us/"
        }
      ]
    },
    {
      "id": "js",
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
          "comment": "Copies shared files",
          "command": "cp",
          "args": "-r ./src/share/* ./dist/gofeminin.de/"
        }
      ]
    },
    {
      "id": "purge",
      "watcherOnly": false,
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
