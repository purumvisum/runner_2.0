<template>
    <v-btn class="ma-2" color="green" dark @click="addFileGroup">Add File Group
        <v-icon large right color="white">mdi-folder-plus</v-icon>
    </v-btn>
</template>

<script>
    export default {
        methods: {
            addFileGroup()  {
                console.log(this.$store)
            }
        }
    }
</script>
