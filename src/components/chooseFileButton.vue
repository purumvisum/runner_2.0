<template>
    <v-btn @click="handleClick()">Choose file</v-btn>
</template>

<script>

    import * as types from '../store/types';
    const electron = require('electron');
    const path = require('path');
    const fs = require('fs');

  export default {

      props: ['groupName'],
      data: () => ({
          // filePath: 'runnerFiles.json',
          // dataInFile: '',
      }),
      methods: {
          handleClick() {
              this.load();
          },
          async load() {
              const {dialog} = require('electron').remote;
              const choosenFile = await dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']});

              const files = Array.isArray(choosenFile) ? [...choosenFile.filePaths] : [choosenFile.filePaths];

              Array.isArray(choosenFile)
              console.log("this.documentsToOpen", choosenFile, this.groupName);
              this.$store.dispatch(types.ADD_FILE_GROUP, {
                  [this.groupName]: {files: files}
              })

              console.log(this.$store);

              // this.documentsToOpen.test = [
              //     ...this.documentsToOpen.test,
              //     ...choosenFile.filePaths,
              // ];

              // this.documentsToOpen.test = this.documentsToOpen.test.filter(onlyUnique);

              // console.log("this.documentsToOpen", this.documentsToOpen);
          },
          open() {
              const {shell} = require('electron');
              shell.openItem(this.documentsToOpen.test[0]);
          }
      }
  }
</script>
