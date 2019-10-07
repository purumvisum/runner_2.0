<template>
    <v-btn @click="handleClick()">Choose file</v-btn>
</template>

<script>
  const electron = require('electron');
  const path = require('path');
  const fs = require('fs');

  export default {

    props: ['load', 'choosenDocs'],
    data: () => ({
      filePath: 'runnerFiles.json',
      dataInFile: '',
    }),
    methods: {
      handleClick() {
        this.load();
        this.writeFilesIntheSystem();
        console.log('test');
      },
      writeFilesIntheSystem() {
        // const userDataPath = (electron.app || electron.remote.app).getPath('userData');
        // We'll use the `configName` property to set the file name and path.join to bring it all together as a string
        // this.filePath = path.join('electron', 'runnerFiles.json');
        // console.log('path', pathToFile);

        // wrong file reading
        this.dataInFile = this.parseDataFile(this.filePath);

        console.log('this.dataInFile', this.dataInFile);

        const dataToSave = {
          ...JSON.parse(this.dataInFile),
          ...this.choosenDocs,
        };

        console.log('dataToSave', dataToSave);
        // this.filePath = 'runnerFiles.json';
        // this.writeFileSyncRecursive(this.filePath, 'test', 'utf-8');
        // let content = 'test2';


        const myJSON = `'${JSON.stringify(dataToSave)}'`;
        // console.log('myJSON',myJSON)
        // console.log('choosenDocs',this.choosenDocs, myJSON);
        this.writefile(this.filePath, myJSON);


        console.log('this.filePath', this.filePath, this.dataInFile);
      },
      parseDataFile(filePath) {
        try {
          return JSON.parse(fs.readFileSync(filePath));
        } catch (error) {
          return null;
        }
      },
      writefile(filePath, content) {
        try {
          fs.writeFileSync(filePath, content, 'utf-8');
        } catch (e) {
          alert('Failed to save the file !');
        }
      },
    },

  };
</script>
