<template>
    <div v-if="files.length">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th width='30%' class="text-left">Name</th>
                    <th class="text-left">Path</th>
                    <th class="text-left"></th>
                </tr>
                </thead>
                <tbody>

                <template v-for="(item, index) in files">
                    <File
                        :key=item.id
                        :removeFile = removeFile
                        :changeName = changeName
                        :index = index
                        :item='item'>
                    </File>
                </template>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
    import File from "./fileInList";
    export default {
        props: ['files'],
        components: {File},
        methods: {
            removeFile (index)  {
                this.files.splice(index, 1);
            },
            changeName (name, index) {
                this.files[index].name = name;
            }
        }
    }
</script>
