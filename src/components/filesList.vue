<template>
    <div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Calories</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in fileGroups" :key="index">
                    <td>{{item}}</td>
<!--                    <td>{{ item.calories }}</td>-->
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>

    import * as types from '../store/types';
    // const electron = require('electron');
    // const path = require('path');
    // const fs = require('fs');

    export default {
        props: ['groupName'],
        computed: {
            fileGroups () {
                console.log('this.$store', this.$store.state)
                return this.$store.state.fileGroups[this.groupName]
            }
        }

    }
</script>
