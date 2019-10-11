<template>
    <v-btn
            width='100%'
            x-large
            @click="handleClick()">
        <v-icon :style="{ marginRight: '10px', color:'green'}">
            mdi-file-plus-outline
        </v-icon>
        Choose files
    </v-btn>
</template>

<script>
    const electron = require('electron');
    const path = require('path');
    const fs = require('fs');

    import uuid from "../utils/uuid";

  export default {

      props: ['addFiles'],
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
