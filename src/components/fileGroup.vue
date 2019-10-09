<template>
    <v-expansion-panel>
        <v-expansion-panel-header>{{title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-container>
            <v-row justify="space-around">
<!--                <div :style="{ cursor: 'pointer' }">dfgsdfgsdg</div>-->
                <v-col
                        v-for="(card,i) in item.files"
                        cols="12"
                        md="4"
                        sm="6"
                >
                    <file-card :groupTitle = 'title' :card = 'card' ></file-card>
<!--                    <v-sheet class="pa-12" :color="cardColor">-->
<!--&lt;!&ndash;                        <v-checkbox></v-checkbox>&ndash;&gt;-->
<!--                        {{card}}-->
<!--                        <v-card >-->
<!--                            <v-card-title>{{card.name}}</v-card-title>-->
<!--                            <v-card-text>{{card.filePaths}}</v-card-text>-->
<!--                        </v-card>-->
<!--                    </v-sheet>-->
                </v-col>
<!--                <choose-file-button-->
<!--                ></choose-file-button>-->
            </v-row>
                <v-btn @click="open()">Open checked files</v-btn>
            </v-container>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    import ChooseFileButton from "./chooseFileButton";
    import FileCard from "./fileCard";
    const { shell } = require('electron')

    export default {
        components: {ChooseFileButton, FileCard},
        props: ['title', 'key', 'item'],
        methods: {
            open() {
                this.$store.state.fileGroups.groups[this.title].files.forEach((file) => {

                    shell.openItem(file.filePaths);
                    console.log('file.filePaths', file.filePaths)
                    // show in folder
                    shell.showItemInFolder('/Users/divanovich/Documents/files/sample.pdf');
                })
            },
        }
    }
</script>

