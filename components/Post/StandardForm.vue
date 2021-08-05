<template>
  <div>
    <v-row v-if="content.type == 'article'">
      <!-- title -->
      <v-col cols="12" lg="6">
        <v-text-field
          v-model.trim="postContent.title"
          label="Title"
        ></v-text-field>
      </v-col>
      <!-- date -->
      <v-col cols="12" lg="6">
        <v-date-picker v-model.trim="postContent.date" type="date">
        </v-date-picker>
      </v-col>
      <!-- excerpt -->
      <v-col cols="12">
        <v-textarea
          v-model.trim="postContent.excerpt"
          counter
          label="Excerpt"
          :value="postContent.excerpt"
          :rows="2"
        >
        </v-textarea>
      </v-col>
      <!-- editor -->
      <v-col cols="12">
        <h3 class="pb-1">Main content</h3>
        <UiEditor :content.sync="postContent.content"></UiEditor>
      </v-col>
    </v-row>

    <v-row v-if="content.type == 'service'">
      <!-- title -->
      <v-col cols="12" lg="6">
        <v-text-field
          v-model.trim="postContent.title"
          label="Title"
        ></v-text-field>
      </v-col>
      <!-- subtitle -->
      <v-col cols="12" lg="6">
        <v-text-field
          v-model.trim="postContent.subtitle"
          label="Subtitle"
        ></v-text-field>
      </v-col>
      <!-- excerpt -->
      <v-col cols="12">
        <v-textarea
          v-model.trim="postContent.excerpt"
          counter
          label="Excerpt"
          :value="postContent.excerpt"
          :rows="2"
        >
        </v-textarea>
      </v-col>
      <!-- editor -->
      <v-col cols="12">
        <h3 class="pb-1">Main content</h3>
        <UiEditor :content.sync="postContent.content"></UiEditor>
      </v-col>
    </v-row>

    <!-- <v-row v-if="content.type == 'partner'">
      <v-col cols="12">
        <v-text-field
          v-model.trim="postContent.track"
          label="Track"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model.trim="postContent.length"
          label="Length"
        ></v-text-field>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    postContent: {
      get() {
        return this.content
      },
      set(newVal) {
        this.$emit('update:content', newVal)
      },
    },
  },
}
</script>
