<template>
  <v-app>
      <v-container>
          <v-row justify="space-around">
            <DocumentsToOpen/>
          </v-row>
      </v-container>
  </v-app>
</template>

<script>
import DocumentsToOpen from './components/documents';

export default {
  name: 'App',
  components: {
      DocumentsToOpen,
  },
  data: () => ({
    //
  }),

};
</script>
