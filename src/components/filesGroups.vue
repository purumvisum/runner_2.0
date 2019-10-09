<template>
    <v-expansion-panels>
        <file-group
                v-for="(group, groupTitle) in fileGroups"
                :key="i"
                :item="group"
                :title="groupTitle"
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


