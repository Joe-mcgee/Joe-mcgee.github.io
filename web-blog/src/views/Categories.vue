<template>
  <v-sheet
    min-height="70vh"
    rounded="lg">
    <Title text="Categories" :subtext="category.title" />
    <CategoryList
    @getPostsByCategory="getPostsByCategory"
    :categories="categories" />
    <PostList v-if="posts.length" :posts="posts" /> 
  </v-sheet>
</template>
<script>
import PostList from '@/components/PostList'
import CategoryList from '@/components/CategoryList'
import Title from '@/components/Title'
import * as ApiService from '@/shared/ApiService.js'
export default {
  components: {
    PostList,
    CategoryList,
    Title
  },
  props: {
  },
  data: () => ({
    loaded: false,
    categories: [],
    category: {},
    posts: [],
  }),
  async created() {
    if (this.$route.params.id) {
      this.category = await ApiService.getCategory(this.$route.params.id)
      this.posts = await ApiService.getPosts({'categories': this.$route.params.id})
    } else {
      this.categories = await ApiService.getCategories()
      this.posts = []
    }
  },
  methods: {
    async getPostsByCategory(id) {
      this.category = await ApiService.getCategory(id)
      this.posts =await ApiService.getPosts({'categories': id})

    },
  }
}
</script>
