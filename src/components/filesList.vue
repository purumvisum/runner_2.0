<template>
    <div v-if="files.length">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Path</th>
                    <th class="text-left"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in files">
                    <td>{{item.name}}</td>
                    <td>{{ item.filePaths }}</td>
                    <td>
                        <v-btn @click="removeFile(index)"  icon>
                            <v-icon>mdi-trash-can</v-icon>
                        </v-btn>
                    </td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
    export default {
        props: ['files'],
        methods: {
            removeFile (index)  {
                this.files.splice(index, 1);
            }
        }
    }
</script>
