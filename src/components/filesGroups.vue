<template>
    <v-expansion-panels>
        <file-group
                v-for="(group, groupId) in fileGroups"
                :key="i"
                :item="group"
                :groupId="groupId"
        ></file-group>
    </v-expansion-panels>
</template>

<script>
    import FileGroup from "./fileGroup";
    export default {
        components: {FileGroup},
        props: ["fileGroups"]
    }
</script>


