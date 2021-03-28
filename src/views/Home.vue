<template>
  <div class="home">
    <v-container
    fluid>
      <v-row
      no-gutters>
        <v-spacer></v-spacer>
        <v-col
        cols="8">
          <!-- <template v-if="list.size()">
            Nothing need to do
          </template> -->
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
              <v-card-actions>
                <v-btn
                @click="Done(index)">
                  Done
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
        cols="3">
          <v-card>
            <v-form
            ref="form"
            v-model="valid"
            >
              <v-text-field
                v-model="title"
                :rules="titleRules"
                label="Title"
              ></v-text-field>

              <v-textarea
                v-model="content"
                label="Content"
              ></v-textarea>

              <v-btn
                :disabled="!valid"
                color="success"
                @click="Submit"
              >
                Add
              </v-btn>
              <v-btn
                color="error"
                @click="Reset"
              >
                Reset
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data: () => ({
    valid: true,
    title: '',
    // titleRules: [
    //   (v) => !!v || 'Title is required',
    // ],
    content: '',
    total_todo: 0,
    list: [],
  }),
  methods: {
    // submit() {
    //   const todos = localStorage.getItem('list') || [];
    //   const newTodoItem = {
    //     id: todos.length + 1,
    //     title: this.title,
    //     content: this.content,
    //   };
    //   localStorage.setItem('list', [...todos, newTodoItem]);
    // },
    Submit() {
      this.list.push({
        id: this.list.length + 1,
        title: this.title,
        content: this.content,
        done: false,
      });
      this.title = '';
      this.content = '';
      localStorage.setItem('list', JSON.stringify(this.list));
    },
    Reset() {
      this.title = '';
      this.content = '';
    },
    Done(index) {
      // alert(event.target.value);
      this.list[index].done = true;
      localStorage.setItem('list', JSON.stringify(this.list));
    },
  },

  mounted() {
    if (localStorage.list) {
      this.list = JSON.parse(localStorage.getItem('list'));
    }
  },
};
</script>
