<script setup>
// Mengambil 10 postingan terbaru dari Blogger
const blogId = '7396489296454851041'
const apiKey = 'AIzaSyBfKdxXY0thHtAST8QML8oLETmnHw2cGwI'
const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`

const { data: blogData, error } = await useFetch(url)
</script>

<template>
  <div style="padding: 20px; font-family: sans-serif;">
    <h1>Blog Saya</h1>
    
    <div v-if="error" style="color: red;">
      Gagal memuat artikel: {{ error.message }}
    </div>

    <div v-else-if="blogData && blogData.items">
      <div v-for="post in blogData.items" :key="post.id" style="margin-bottom: 40px; border-bottom: 1px solid #ccc; padding-bottom: 20px;">
        <h2 style="color: #333;">{{ post.title }}</h2>
        <div v-html="post.content"></div> 
      </div>
    </div>

    <div v-else>
      Tidak ada artikel ditemukan atau blog Anda masih kosong/draft.
    </div>
  </div>
</template>