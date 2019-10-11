<template>
    <v-expansion-panel>
        <v-expansion-panel-header>
            <v-toolbar flat>
                <v-toolbar-title>{{groupTitle}}
                </v-toolbar-title>

                <div class="flex-grow-1"></div>
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" @click.stop="toggleDialog(true)" icon>
                            <v-icon>mdi-file-document-edit-outline</v-icon>
                        </v-btn>
                    </template>
                    <span>Edit Group</span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                    <v-btn v-on="on" @click.stop="removeCurrentGroup"  icon>
                        <v-icon>mdi-trash-can</v-icon>
                    </v-btn>
                    </template>
                    <span>Remove Group</span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" @click='openAllFiles' :style="{ marginRight:'0'}" icon>
                            <v-badge color='green'>
                                    <v-icon>mdi-file-search-outline</v-icon>
                                    <template v-slot:badge>{{groupFiles.length}}</template>
                            </v-badge>
                        </v-btn>
                    </template>
                    <span>Open All Files</span>
                </v-tooltip>
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
                <v-btn
                        width='100%'
                        x-large
                        v-if='checkedFiles.length'
                        @click="open()">
                    <v-icon :style="{ marginRight: '10px', color:'green'}">
                        mdi-file-search-outline
                    </v-icon>
                    <span>Open <span :style="{color:'green'}">{{checkedFiles.length}}</span> files</span>
                </v-btn>
                <v-alert
                        v-if='!checkedFiles.length'
                        text
                        outlined
                        color='green'
                >
                    Please, pick some files to open
                </v-alert>
            </v-container>
        </v-expansion-panel-content>
        <edit-group-dialog
                :dialog="dialog"
                :groupId = 'groupId'
                :closeDialog="toggleDialog"
                :groupTitle = 'groupTitle'
                :groupFiles = 'groupFiles'
        ></edit-group-dialog>
    </v-expansion-panel>
</template>

<script>
    import EditGroupDialog from "./editGroupDialig";
    import ChooseFileButton from "./chooseFileButton";
    import FileCard from "./fileCard";
    const { shell } = require('electron');

    export default {
        components: {ChooseFileButton, FileCard, EditGroupDialog},
        props: ['groupId','item', 'removeGroup'],
        data: () => ({
            dialog: false
        }),
        computed:{
            groupTitle() {
              return this.$store.state.fileGroups.groups[this.groupId].name
            },
            groupFiles() {
              return this.$store.state.fileGroups.groups[this.groupId].files
            },
            checkedFiles() {
                return this.$store.state.fileGroups.groups[this.groupId].files.filter((file) => {
                  return file.checked
                })
            }
        },
        methods: {
            open() {
                this.checkedFiles.forEach((file) => {
                    shell.openItem(file.filePaths);
                 })
            },
            openAllFiles() {
                this.groupFiles.forEach((file) => {
                    shell.openItem(file.filePaths);
                })
            },
            removeCurrentGroup() {
               this.removeGroup(this.groupId)
            },
            toggleDialog(open) {
                this.dialog=open;
            }
        }
    }
</script>

