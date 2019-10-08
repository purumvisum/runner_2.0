<template>
    <div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Path</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in files">
                    <td>{{item.name}}</td>
                    <td>{{ item.filePaths }}</td>
                    <td>
                        <v-icon @click="removeFile(index)" medium right color="gray">mdi-trash-can</v-icon>
                    </td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
    export default {
        props: ['groupName', 'files'],
        methods: {
            removeFile (index)  {
                this.files.splice(index, 1);
            }
        }
    }
</script>
