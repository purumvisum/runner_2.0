<template>
    <v-container height="100%">
        <v-layout text-center wrap>
            <v-text-field
                    placeholder='Search by group name'
                    v-model='filterTitle'
                    color='green'
                    hide-details
                    prepend-icon="mdi-magnify"
                    single-line>
            </v-text-field>
            <add-file-group></add-file-group>
            <files-groups
                :filterTitle = 'filterTitle'
            ></files-groups>
        </v-layout>
    </v-container>
</template>

<script>
import ChooseFileButton from "./chooseFileButton";
import FilesGroups from "./filesGroups";
import AddFileGroup from "./addFileGroup";

export default {
    components: {ChooseFileButton, FilesGroups, AddFileGroup},
    data: () => ({
        filterTitle: ''
    })
};
</script>
