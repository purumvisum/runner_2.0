<template>
    <v-row justify="center">
        <v-btn @click="toggleDialog(true)" class="ma-2" color="green" dark>Add File Group
            <v-icon large right color="white">mdi-folder-plus</v-icon>
        </v-btn>
        <add-group-dialog
                :dialog="dialog"
                :closeDialog="toggleDialog"
        ></add-group-dialog>
    </v-row>
</template>

<script>
    import AddGroupDialog from "./editGroupDialig";
    export default {
        components: {AddGroupDialog},
        data: () => ({
            dialog: false
        }),
        methods: {
            toggleDialog(open) {
                this.dialog=open;
            }
        }
    }
</script>
