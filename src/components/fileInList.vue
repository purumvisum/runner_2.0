<template>
    <tr>
        <td>
            <v-text-field
                label='File name'
                v-model='fileName'
                @change="changeFileName"
            ></v-text-field>
        </td>
        <td> <div class='file-path-styles'>{{ item.filePaths }} </div></td>
        <td>
            <v-btn @click="removeFile(index)"  icon>
                <v-icon>mdi-trash-can</v-icon>
            </v-btn>
        </td>
    </tr>
</template>

<style scoped>
    .file-path-styles {
        max-width: 70%;
        word-break: break-all;
        padding: 10px;
    }
</style>

<script>
    export default {
        props: ['item', 'index', 'removeFile', 'changeName'],
        data: () => ({
            fileName: ''
        }),
        mounted() {
            this.fileName = this.item.name;
        },
        methods: {
            changeFileName ()  {
                this.changeName(this.fileName, this.index)
            }
        }
    }
</script>
