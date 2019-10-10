<template>
    <v-expansion-panel>
        <v-expansion-panel-header>
            <v-toolbar flat>
                <v-toolbar-title>{{groupTitle}}</v-toolbar-title>

                <div class="flex-grow-1"></div>
                <v-btn @click="toggleDialog(true)" icon>
                    <v-icon>mdi-file-document-edit-outline</v-icon>
                </v-btn>
                <edit-group-dialog
                        :dialog="dialog"
                        :groupId = 'groupId'
                        :closeDialog="toggleDialog"
                        :groupTitle = 'groupTitle'
                        :groupFiles = 'groupFiles'
                ></edit-group-dialog>
            </v-toolbar>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-container>
                <v-row  align="start"
                        justify="start">
                    <v-col
                            v-for="(card,i) in item.files"
                            cols="12"
                            md="4"
                            sm="6">
                        <file-card :groupId = 'groupId' :card = 'card' ></file-card>
                    </v-col>
                </v-row>
                <v-btn @click="open()">Open checked files</v-btn>
            </v-container>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    import EditGroupDialog from "./editGroupDialig";
    import ChooseFileButton from "./chooseFileButton";
    import FileCard from "./fileCard";
    const { shell } = require('electron')

    export default {
        components: {ChooseFileButton, FileCard, EditGroupDialog},
        props: ['groupId', 'key', 'item'],
        data: () => ({
            dialog: false
        }),
        computed:{
            groupTitle() {
              return this.$store.state.fileGroups.groups[this.groupId].name
            },
            groupFiles() {
              return this.$store.state.fileGroups.groups[this.groupId].files
            }
        },
        methods: {
            open() {
                this.$store.state.fileGroups.groups[this.groupId].files.forEach((file) => {
                    if (file.checked) {
                        shell.openItem(file.filePaths);
                    }
                 })
            },
            toggleDialog(open) {
                this.dialog=open;
            }
        }
    }
</script>

