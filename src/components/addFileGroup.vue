<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" class="ma-2" color="green" dark>Add File Group
                    <v-icon large right color="white">mdi-folder-plus</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Add Group</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Group Name*" required v-model="groupName"></v-text-field>
                            </v-col>

                        </v-row>
                    </v-container>

                <choose-file-button
                        :addFiles = "addFiles"
                        :groupName = "groupName">
                </choose-file-button>
                <files-list
                        :files = "files"
                        :groupName = "groupName"></files-list>
                </v-card-text>
                <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="saveFilesToTheStore">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import * as types from '../store/types';
    import FilesList from "./filesList";
    import ChooseFileButton from "./chooseFileButton";
    export default {
        components: {ChooseFileButton, FilesList},
        data: () => ({
            dialog: false,
            groupName: '',
            files: []
        }),
        methods: {
            addFiles(files) {
                this.files = [
                    ...this.files,
                    ...files
                ];
            },
            saveFilesToTheStore() {
                this.dialog = false;
                const groupToSave = {
                    [this.groupName]: {
                        files: this.files
                    }
                };

                this.$store.dispatch(types.ADD_FILE_GROUP, groupToSave);
                this.groupName = '';
                this.files=[];
                // console.log("fgsdfgsfgsdfg",this.$store.state.fileGroups.groups[...])
                // cons
            }
        }
    }
</script>
