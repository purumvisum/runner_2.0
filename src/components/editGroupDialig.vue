<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>

            <v-card-title>
                <span class="headline">{{header}}</span>
                <div class="flex-grow-1"></div>
                <v-tooltip left>
                    <template v-slot:activator="{ on }">
                        <v-btn  v-on="on" icon darken-1 @click="closeDialog(false)">
                            <v-icon >mdi-close</v-icon>
                        </v-btn>
                    </template>
                    <span>Close</span>
                </v-tooltip>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Group Name*" color='green' required v-model="groupName"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <choose-file-button
                        :addFiles = "addFiles"
                        :groupName = "groupName">
                </choose-file-button>
                <files-list
                        :files = "files"
                ></files-list>
            </v-card-text>
            <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-tooltip left>
                    <template v-slot:activator="{ on }">
                    <v-btn
                            :style="{ margin: '10px'}"
                            @click="saveFilesToTheStore"
                            class="mx-2"
                            fab dark
                            v-on="on"
                            color="green">
                        <v-icon dark>mdi-content-save-edit-outline</v-icon>
                    </v-btn>
                    </template>
                    <span>Save all changes</span>
                </v-tooltip>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>


<script>
    import * as types from '../store/types';
    import FilesList from "./filesList";
    import ChooseFileButton from "./chooseFileButton";
    import uuid from "../utils/uuid";
    import appStorage from "../utils/StoreState";

    export default {
        props: ['dialog', 'closeDialog', 'groupFiles', 'groupTitle', 'groupId'],
        components: {ChooseFileButton, FilesList},
        data: () => ({
            groupName: '',
            files: []
        }),
        computed: {
            header() {
                return this.groupId ? 'Edit Group' : 'Add Group'
            }
        },
        watch: {
            groupFiles: {
                immediate: true,
                handler () {
                    if (this.groupFiles.length) {
                        this.files = this.groupFiles;
                    }
                    if (this.groupTitle.length) {
                        this.groupName = this.groupTitle;
                    }
                }
            }
        },

        methods: {
            addFiles(newFiles) {
                    this.files = [
                        ...this.files,
                        ...newFiles
                    ];
            },
            saveFilesToTheStore() {
                let groupToSave;
                 if (!this.groupId) {
                    groupToSave = {
                        [uuid()]: {
                            name: this.groupName,
                            files: this.files
                        }
                    };
                } else {
                     groupToSave = {
                         [this.groupId]: {
                             name: this.groupName,
                             files: this.files
                         }
                     };
                 }
                this.closeDialog(false);
                this.$store.dispatch(types.ADD_FILE_GROUP, groupToSave);
                this.groupName = '';
                this.files=[];
                appStorage.set('fileGroups', this.$store.state.fileGroups);
            }
        }
    }
</script>



