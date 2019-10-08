<template>
    <v-btn @click="handleClick()">Choose file</v-btn>
</template>

<script>
    const electron = require('electron');
    const path = require('path');
    const fs = require('fs');

  export default {

      props: ['groupName', 'addFiles'],
      methods: {
          handleClick() {
              this.load();
          },
          async load() {
              const {dialog} = require('electron').remote;
              const choosenFile = await dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']});
              const files = [...choosenFile.filePaths];

              const mapedFiles = files.map((file) => {
                  return {
                      name: file.split('/').pop(),
                      filePaths: file
                  }
              });

              this.addFiles(mapedFiles)
          }
      }
  }
</script>
