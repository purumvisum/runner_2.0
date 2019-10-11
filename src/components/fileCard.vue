<template>
    <div :style="{ cursor: 'pointer', position: 'relative'}">
        <v-hover v-slot:default="{ hover }">
            <v-sheet
                @click="toggleFilesShow()"
                class="pa-12"
                :color="cardColor">
            <div :style="{ cursor: 'pointer',position: 'absolute', top: '10px', left: '10px' }">
                <v-icon v-if="card.checked" large color="#2a7d2e">mdi-check-bold</v-icon>
            </div>
                <v-card  :elevation="hover ? 12 : 2">
                    <v-card-title>{{card.name}}</v-card-title>
                    <v-card-text>{{card.filePaths}}</v-card-text>
                </v-card>

            </v-sheet>
        </v-hover>
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
        props: ['card', 'groupId'],
        methods: {
            toggleFilesShow() {
                this.$store.dispatch(types.TOGGLE_FILE_CHECKED,
                    {
                        groupId: this.groupId,
                        id: this.card.id
                    });
            }
        }
    }
</script>
