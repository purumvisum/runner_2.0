<template>
    <v-expansion-panels>
        <file-group
                v-for="(group, groupId) in fileGroups"
                :item="group"
                :groupId="groupId"
                :removeGroup="removeGroup"
        ></file-group>
    </v-expansion-panels>
</template>

<script>
    import FileGroup from "./fileGroup";
    import * as types from '../store/types';
    export default {
        components: {FileGroup},
        computed: {
            fileGroups() {
                return this.$store.state.fileGroups.groups
            }
        },
        methods: {
            removeGroup(groupId) {
                this.$store.dispatch(types.DELETE_FILE_GROUP, {id: groupId})
            }
        }
    }
</script>


