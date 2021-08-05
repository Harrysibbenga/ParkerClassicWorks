<template>
  <v-container fluid class="p-0 pt-5">
    <v-row>
      <v-col>
        <v-simple-table class="table">
          <thead>
            <tr v-if="type == 'circuit'">
              <th scope="col">Track</th>
              <th scope="col">Created</th>
              <th scope="col">Updated</th>
              <th scope="col">Action</th>
            </tr>
            <tr v-if="type == 'post' || type == '' || type == 'partner'">
              <th v-if="type == 'post' || type == ''" scope="col">Title</th>
              <th v-else scope="col">Name</th>
              <th v-if="type == 'post' || type == ''" scope="col">Date</th>
              <th scope="col">Created</th>
              <th scope="col">Updated</th>
              <th v-if="type == 'partner'" scope="col">Order</th>
              <th scope="col">Action</th>
            </tr>
            <tr v-if="type == 'calendar'">
              <th scope="col">Track</th>
              <th scope="col">Dates</th>
              <th scope="col">Rounds</th>
              <th scope="col">Created</th>
              <th scope="col">Updated</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-if="type == 'circuit'">
            <tr v-for="(post, index) in paginatedData" :key="index">
              <th scope="row">{{ post.track }}</th>
              <td>{{ post.createdOn | formatCreation }}</td>
              <td v-if="post.lastUpdateOn != null">
                {{ post.lastUpdateOn | formatCreation }}
              </td>
              <td v-else>-- -- --</td>
              <td>
                <v-btn class="mx-1 primary" @click.native="editPost(post)">
                  <v-icon>mdi-circle-edit-outline</v-icon>
                </v-btn>
                <v-btn class="mx-1 error" @click.native="deletePost(post)">
                  <v-icon>mdi-delete-circle-outline</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
          <tbody v-if="type == 'post' || type == '' || type == 'partner'">
            <tr v-for="(post, index) in paginatedData" :key="index">
              <th scope="row">
                {{ post.title }}
              </th>
              <td v-if="type == 'post' || type == ''">
                {{ post.date | formatDate }}
              </td>
              <td>{{ post.createdOn | formatCreation }}</td>
              <td v-if="post.lastUpdateOn != null">
                {{ post.lastUpdateOn | formatCreation }}
              </td>
              <td v-else>-- -- --</td>
              <td>
                {{ post.order }}
                <v-btn class="mx-1" @click.native="increment(post)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-btn class="mx-1" @click.native="decrement(post)">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="mx-1 primary" @click.native="editPost(post)">
                  <v-icon>mdi-circle-edit-outline</v-icon>
                </v-btn>
                <v-btn class="mx-1 error" @click.native="deletePost(post)">
                  <v-icon>mdi-delete-circle-outline</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
          <tbody v-if="type == 'calendar'">
            <tr v-for="(post, index) in paginatedData" :key="index">
              <th scope="row">
                {{ post.track.track }}
              </th>
              <td>
                <ul>
                  <li>From: {{ post.dateFrom | formatDate }}</li>
                  <li>To: {{ post.dateTo | formatDate }}</li>
                </ul>
              </td>
              <td>
                {{ post.rounds }}
              </td>
              <td>{{ post.createdOn | formatCreation }}</td>
              <td v-if="post.lastUpdateOn != null">
                {{ post.lastUpdateOn | formatCreation }}
              </td>
              <td v-else>-- -- --</td>
              <td>
                <v-btn class="mx-1 primary" @click.native="editPost(post)">
                  <v-icon>mdi-circle-edit-outline</v-icon>
                </v-btn>
                <v-btn class="mx-1 error" @click.native="deletePost(post)">
                  <v-icon>mdi-delete-circle-outline</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn
          :class="{ 'd-none': pageNumber == 0 }"
          class="primary"
          @click.native="prevPage"
        >
          <v-icon> mdi-chevron-double-left</v-icon>
        </v-btn>
        {{ pageNumber + 1 }} of {{ pageCount }}
        <v-btn
          :class="{ 'd-none': pageNumber >= pageCount - 1 }"
          class="primary"
          @click.native="nextPage"
        >
          <v-icon> mdi-chevron-double-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { filter } from '@/mixins/filter'
import { pagination } from '@/mixins/pagination'
import _ from 'lodash'

export default {
  mixins: [filter, pagination],
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    edit: {
      type: Boolean,
      default: false,
    },
    delete: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      required: false,
      default: 15,
    },
  },
  computed: {
    pageCount() {
      const l = this.posts.length
      const s = this.size
      return Math.ceil(l / s)
    },
    paginatedData() {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.posts.slice(start, end)
    },
    type() {
      return this.paginatedData.length > 0 ? this.paginatedData[0].type : ''
    },
  },
  methods: {
    editPost(post) {
      const copy = _.cloneDeep(post)
      this.$emit('update:edit', true)
      this.$emit('update:post', copy)
    },
    deletePost(post) {
      this.$emit('update:delete', true)
      this.$emit('update:post', post)
    },
    increment(post) {
      this.$store.dispatch('partners/moveDown', post.id)
    },
    decrement(post) {
      this.$store.dispatch('partners/moveUp', post.id)
    },
  },
}
</script>
