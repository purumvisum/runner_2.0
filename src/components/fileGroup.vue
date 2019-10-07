<template>
    <v-expansion-panel>
        <v-expansion-panel-header>{{title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
<!--            {{item.files[0]}}-->
            <v-container>
            <v-row justify="space-around">
                <v-col
                        v-for="(card,i) in item.files"
                        cols="12"
                        md="4"
                        sm="6"
                >
                    <v-sheet
                            class="pa-12"
                            color="grey lighten-3"
                    >
            <v-card >
                <v-card-title>{{card.title}}</v-card-title>
                <v-card-text>{{card.title}}</v-card-text>
<!--                <v-card-actions>-->
<!--                    <v-btn text>Click</v-btn>-->
<!--                </v-card-actions>-->
            </v-card>
                    </v-sheet>
                </v-col>
                <choose-file-button
                        :choosenDocs = "documentsToOpen"
                        :load="load"
                ></choose-file-button>
            </v-row>
            </v-container>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    // import FileGroup from "./fileGroup";
    import ChooseFileButton from "./chooseFileButton";
    import onlyUnique from '../utils/onlyUniqueArray';

    export default {
        components: {ChooseFileButton},
        // components: {FileGroup}
        data: () => ({
            single: true,
            documentsToOpen: {
                test: [],
                checked: [],
                test2: [],
            },
        }),
        props: ['title', 'key', 'item'],
        methods: {
            async load() {
                const { dialog } = require('electron').remote;
                const choosenFile = await dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] });
                console.log("this.documentsToOpen", choosenFile);

                this.documentsToOpen.test = [
                    ...this.documentsToOpen.test,
                    ...choosenFile.filePaths,
                ];

                this.documentsToOpen.test = this.documentsToOpen.test.filter(onlyUnique);

                console.log("this.documentsToOpen", this.documentsToOpen);
            },
            open() {
                const { shell } = require('electron');
                shell.openItem(this.documentsToOpen.test[0]);
            },
        }
        // data: () => ({
        //     elevations: [6, 12, 18]
        // })
    }
</script>

