
# Vue Node Demo
	
Vue Node Demo is an project that build by the newest View framework Vue2.0 and the hot node.JS
framework Ecpress . About Vue , we use vue-router module to build a SPA application . As for
Express , we use express to build a server fast . And the same time , RESTFUL API Design is 
used .

***

1. # Technology stack
	
	Vue + Vue-Router + Vuex + Karma + ES6 + Webpack + Node + Express

1.1 ## Vue 
	
Vue2.0 upgrades much amazing feature , like more excellent virtual-dom 、 bidirectional 
data transmission between father component and son component and so on .  

1.2 ## Vue-Router

Vue-Router helps build a SPA quickly . 

1.3 ## Vuex 

Vuex is a perfect state manager , your could build applicational state of different components
with it . In Vuex , ***mutations*** 、***getters***、***actions*** 、***modules*** would 
handle with ***state*** . 

1.3.1 ### Mutations
***Mutations*** are the synchronous trigger of states in vuex's store . 

1.3.2 ### Actions
***Actions*** are the async trigger of states in vuex's store .

1.3.3 ### Getters

1.3.4 ### Modules
***Modules*** are the smaller unit to manage your Vuex states .


1.4 ## Karma 

1.4.1 ### Phantom.js

1.4.2 ### Run Test

```bash
karma start
```

```bash
karma run
```

1.5 ## Node Express 

In my server module , I use a hot node.JS's framework ***[Express](https://github.com/liuding-Jason/express)*** . In this repository , express-router would be used to build the routes , ***ejs*** would be the template engine . 

2. # Build Guide

2.1 ## Client Build
```bash
git clone https://github.com/liuding-Jason/Vue-Router-Demo.git
cd Vue-Router-Demo && npm install 
npm run dev
```

2.2 ## Server Build
To let your client has a access to getting datas from this server , you should add your host to whitelist . To parse your params in a ***POST*** request , ***body-parser*** would be used . 

	Note : To test 

```bash
cd ./server && npm install 
node index.js
```

***

3. # Zhihu

My ZhiHu Home Page ***[柳丁Jason Chen](https://www.zhihu.com/people/liu-ding-jasonchen)*** 

## Lincense
(MIT)
