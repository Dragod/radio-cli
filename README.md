# Radio-cli
### Listen your favourite Web Radio from CLI, on Windows 10.

### *** Requisite, please read this note: ***
> Dependencies: [Mpv player](https://mpv.io/installation) witch is free and Open Source.
The radio-cli package won't work without mpv player.
---
***How it works***

- ```choco install mpv```,
 Install MPV player, make sure to add an environment variable, usually if you install through choco it does that on it's own. Now you should be able to run mvp player from anywehere in the terminal.

- Install radio-cli:  ```npm i radio-cli```

- Create a new js file called ```radio.js``` (or whatever you want to call it) inside you project folder then import radio-cli:
```js
    let radio = require('radio-cli');
```

- Save ```radio.js``` and type on the terminal ```node radio --cc```
---

## With Npx

```npx radio-cli --radioName```

---
***Default Web Radio flags***

- Radio 105 Network ```--cc```
- Rtl 102.5 ```--rtl```
- Virgin Radio ```--virgin```
- Radio Italia ```--italia```
- Radio Subasio ```--subasio```
- Radio Montercarlo 2 ```--mc2```
- Rai Radio 1```--rai1```
- Rai Radio 2 ```--rai2```
- Rai Radio 3 ```--rai3```
- Radio Dimensione Suono ```--rds```
- Radio M2o ```--m2o```
- Radio Kiss Kiss ```--kiss```
- Radio Sport ```--sport```
- Radio 70-80-90 ```--r789```
- Radio Latte e Miele ```--latte```
- Radio Arancia Network ```--arancia```

Example: ```node radio --arancia``` will start streaming web Radio from Arancia Network.