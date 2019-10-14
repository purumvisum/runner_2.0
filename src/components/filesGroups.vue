<template>
    <v-expansion-panels>
        <file-group
                v-for="(group, groupId) in fileGroupsFiltered"
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
        data: () => ({
            fileGroupsFiltered: {}
        }),
        components: {FileGroup},
        props: ['filterTitle'],
        watch: {
            fileGroups: {
                immediate: true,
                handler (){
                    this.getFilteredGroups();
                }
            },
            filterTitle: {
                immediate: true,
                handler (){
                    this.getFilteredGroups();
                }
            }
        },
        computed: {
            fileGroups () {
                return this.$store.state.fileGroups.groups
            }
        },
        methods: {
            removeGroup(groupId) {
                this.$store.dispatch(types.DELETE_FILE_GROUP, {id: groupId})
            },
            getFilteredGroups() {
                if (this.filterTitle.length) {
                    this.fileGroupsFiltered = {};
                    Object.keys(this.$store.state.fileGroups.groups).forEach((key, index) => {
                        if (this.$store.state.fileGroups.groups[key].name.toLowerCase().includes(this.filterTitle.toLowerCase())) {
                            this.fileGroupsFiltered = {
                                ...this.fileGroupsFiltered,
                                ...{[key]: this.$store.state.fileGroups.groups[key]}
                            }
                        }
                    })
                } else {
                    this.fileGroupsFiltered ={...this.$store.state.fileGroups.groups}
                }
            }
        }
    }
</script>


