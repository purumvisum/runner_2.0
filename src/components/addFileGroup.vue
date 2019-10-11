<template>
    <v-container fluid>
    <v-row
            align="center"
            justify="center">
        <v-tooltip right>
            <template v-slot:activator="{ on }">
                <v-btn
                        @click="toggleDialog(true)"
                        class="mx-2"
                        fab dark
                        v-on="on"
                        color="green">
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
            </template>
            <span>Add File's Group</span>
        </v-tooltip>
    </v-row>
    <v-row>
        <v-col align-self="center">
            <add-group-dialog
                    :dialog="dialog"
                    :closeDialog="toggleDialog"
            ></add-group-dialog>
        </v-col>
    </v-row>
    </v-container>
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
