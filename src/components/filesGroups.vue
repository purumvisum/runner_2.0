<template>
    <v-expansion-panels>
        <file-group
                v-for="(item,i) in fileGroups"
                :key="i"
                :item="item"
                :title="i"
        ></file-group>
<!--        <v-expansion-panel-->
<!--                v-for="(item,i) in 5"-->
<!--                :key="i"-->
<!--        >-->
<!--            <v-expansion-panel-header>Item</v-expansion-panel-header>-->
<!--            <v-expansion-panel-content>-->
<!--                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.-->
<!--            </v-expansion-panel-content>-->
<!--        </v-expansion-panel>-->
    </v-expansion-panels>
</template>

<script>
    import FileGroup from "./fileGroup";
    export default {
        components: {FileGroup},
        data: () => ({
            fileGroups: {
                    'english' : {
                    files: [
                        {
                            title: "test1",
                            checked: true
                        }, {
                            title:"test2",
                            checked: false
                        },
                        {
                            title:"test3",
                            checked: false
                        }
                    ]
                },'dutch' : {
                    files: [
                        {
                            title: "test1",
                            checked: false
                        }, {
                            title:"test2",
                            checked: true
                        },
                        {
                            title:"test2",
                            checked: false
                        }
                    ]
                }
            },
            title: 'test'
        }),
    }
</script>


