<template>
  <div class="history">
    <v-container
    fluid>
      <v-row>
        <v-col
        cols="12">
          <v-footer
          color="secondary"
          dark>
            <v-col class="text-center">
              Finished
            </v-col>
          </v-footer>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <template v-for="(item, index) in list">
            <v-card
            :key="index"
            v-if="item.done==true"
            shaped>
              <v-card-title>
                {{item.title}}
              </v-card-title>
              <v-card-text v-if="!!item.content">
                {{item.content}}
              </v-card-text>
              <!-- <v-card-actions>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="primary"
                >
                  <v-icon dark>
                    mdi-minus
                  </v-icon>
                </v-btn>
              </v-card-actions> -->
            </v-card>
          </template>
        </v-col>
      </v-row>
      <v-row>
        <v-col
        cols="12">
          <v-footer
          color="secondary"
          dark>
            <v-col class="text-center">
              Not Finished
            </v-col>
          </v-footer>
        </v-col>
      </v-row>
      <template v-for="(item, index) in list">
        <v-card
        :key="index"
        v-if="item.done==false"
        shaped>
          <v-card-title>
            {{item.title}}
          </v-card-title>
          <v-card-text v-if="!!item.content">
            {{item.content}}
          </v-card-text>
        </v-card>
      </template>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'History',
  data: () => ({
    list: [],
  }),
  mounted() {
    if (localStorage.list) {
      this.list = JSON.parse(localStorage.getItem('list'));
    }
  },
};
</script>
