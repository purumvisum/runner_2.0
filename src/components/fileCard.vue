<template>
    <div :style="{ cursor: 'pointer', position: 'relative'}">
    <v-sheet
            @click="toggleFilesShow()"
            class="pa-12"
            :color="cardColor">
        <div :style="{ cursor: 'pointer',position: 'absolute', top: '10px', left: '10px' }">
            <v-icon v-if="card.checked" large color="#2a7d2e">mdi-check-bold</v-icon>
        </div>
        <v-card >
            <v-card-title>{{card.name}}</v-card-title>
            <v-card-text>{{card.filePaths}}</v-card-text>
        </v-card>
    </v-sheet>
    </div>
</template>

<script>
    import * as types from '../store/types';

    export default {
        computed:{
            cardColor () {
               return  this.card.checked ?  'green lighten-3' :  'grey lighten-3';
            }
        },
        props: ['card', 'groupTitle'],
        methods: {
            toggleFilesShow() {
                this.$store.dispatch(types.TOGGLE_FILE_CHECKED,
                    {
                        title: this.groupTitle,
                        id: this.card.id
                    });
            }
        }
    }
</script>
