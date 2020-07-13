# Alt-V Vue Notify

Vue-snotify is not mine. I just used a vue plugin in this resource.. 

## Installation

1 - Download the zip.  
2 - Create a new directory in your server resources and rename it to "vue-notifier". Extract all files into this directory.  
3 - Your folder structure has to be like this ;  

```js
==vue-notifier
===/html
=====index.html
=====snotify-material.css
=====vue.js
=====vue-snotify.js
===client.mjs
===index.mjs
===resource.cfg
```

4 - add "vue-notifier" into your server.cfg.  

## Usage

### Server -> Server (Notify to Specific Player)
```js
    //in your server file
    //@sendedPlayer : Player.id
    //@text : Notify Body,
    //@type : [success, warning, danger]
    alt.emit("notifyFromServer", sendedPlayer, text, type)

```

### Client -> Server -> Client (Notify to Self Player)
```js
    //in your client file
    //@text : Notify Body,
    //@type : [success, warning, danger]
    alt.emitServer("notifyFromClient", text, type)

```


## Credits

[vue-snotify](https://github.com/artemsky/vue-snotify) by [artemsky](https://github.com/artemsky)
