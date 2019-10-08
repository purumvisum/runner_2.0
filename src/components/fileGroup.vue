<template>
    <v-expansion-panel>
        <v-expansion-panel-header>{{title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
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
            </v-card>
                    </v-sheet>
                </v-col>
                <choose-file-button
                ></choose-file-button>
            </v-row>
            </v-container>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    import ChooseFileButton from "./chooseFileButton";

    export default {
        components: {ChooseFileButton},
        data: () => ({}),
        props: ['title', 'key', 'item']
    }
</script>

