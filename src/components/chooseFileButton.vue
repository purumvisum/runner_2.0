<template>
    <v-btn @click="handleClick()">Choose file</v-btn>
</template>

<script>
    import uuid from "../utils/uuid";
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
                      id: uuid(),
                      name: file.split('/').pop(),
                      filePaths: file,
                      checked: true
                  }
              });

              this.addFiles(mapedFiles)
          }
      }
  }
</script>
