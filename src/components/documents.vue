<template>
  <v-container height="100%">
    <v-layout
      text-center
      wrap
    >
      <add-file-group></add-file-group>
      <files-groups :fileGroups = "fileGroups"></files-groups>
    </v-layout>
  </v-container>
</template>

<script>
import ChooseFileButton from "./chooseFileButton";
import FilesGroups from "./filesGroups";
import AddFileGroup from "./addFileGroup";

export default {
  components: {ChooseFileButton, FilesGroups, AddFileGroup},
  computed: {
    fileGroups() {
      return this.$store.state.fileGroups.groups
    }
  }
};
</script>
