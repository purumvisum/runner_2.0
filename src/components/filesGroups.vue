<template>
    <v-expansion-panels>
        <file-group
                v-for="(item,i) in fileGroups"
                :key="i"
                :item="item"
                :title="i"
        ></file-group>
    </v-expansion-panels>
</template>

<script>
    import FileGroup from "./fileGroup";
    export default {
        components: {FileGroup}
    }
</script>


