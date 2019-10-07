<template>
  <v-app>
      <v-container>
          <v-row justify="space-around">
            <HelloWorld />
          </v-row>
      </v-container>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
//todo: reload page


// const { app, globalShortcut } = require('electron')
//
// app.on('ready', () => {
//   globalShortcut.register('F5+X', () => {
//     console.log('CommandOrControl+X is pressed')
//   })
//
// })

// const electron = require('electron');
// const globalShortcut = require('global-shortcut');
// console.log("electron.remote", electron.remote)
// const remoteFun = electron.remote;
// // {getCurrentWindow, globalShortcut}
// var reload = ()=>{
//   remoteFun.getCurrentWindow().reload()
// }

// remoteFun.globalShortcut.register('F5', ()=>{console.log(123)});
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),

};
</script>
