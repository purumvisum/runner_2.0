<template>
  <v-container  height="100%">
    <v-layout
      text-center
      wrap
    >
      <add-file-group></add-file-group>
<!--      <div class="text-center">-->
<!--        <choose-file-button-->
<!--                :choosenDocs = "documentsToOpen"-->
<!--                :load="load"-->
<!--        ></choose-file-button>-->
<!--      </div>-->
      <files-groups></files-groups>
    </v-layout>
  </v-container>
</template>

<script>
import ChooseFileButton from "./chooseFileButton";
import FilesGroups from "./filesGroups";
import AddFileGroup from "./addFileGroup";
// import onlyUnique from '../utils/onlyUniqueArray';

export default {
  components: {ChooseFileButton, FilesGroups, AddFileGroup},
  // data: () => ({
  //   single: true,
  //   documentsToOpen: {
  //     test: [],
  //     checked: [],
  //     test2: [],
  //   },
  // }),
  // methods: {
  //   async load() {
  //     const { dialog } = require('electron').remote;
  //     const choosenFile = await dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] });
  //     console.log("this.documentsToOpen", choosenFile);
  //
  //     this.documentsToOpen.test = [
  //       ...this.documentsToOpen.test,
  //       ...choosenFile.filePaths,
  //     ];
  //
  //     this.documentsToOpen.test = this.documentsToOpen.test.filter(onlyUnique);
  //
  //     console.log("this.documentsToOpen", this.documentsToOpen);
  //   },
  //   open() {
  //     const { shell } = require('electron');
  //     shell.openItem(this.documentsToOpen.test[0]);
  //   },
  // }
};
</script>
