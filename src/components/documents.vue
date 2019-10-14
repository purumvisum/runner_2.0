<template>
    <v-container height="100%">
        <v-layout text-center wrap>
            <add-file-group></add-file-group>
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <div class="mx-auto" v-on="on" :style="{
                        position: 'absolute',
                        width: '42%',
                        top: '40px'
                    }">
                        <v-text-field
                                v-model='filterTitle'
                                color='green'
                                hide-details
                                prepend-icon="mdi-magnify"
                                single-line>

                        </v-text-field>
                    </div>
                </template>
                <span>Search by Title</span>
            </v-tooltip>
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
