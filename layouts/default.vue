<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
  export default {
    components: {
    },
    head(){
      return {
        title: "Avivon - Vue Nuxt Business Consulting & Finance Template"
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>

<style lang='scss' href='~/static/sass/style.scss'>
</style>
