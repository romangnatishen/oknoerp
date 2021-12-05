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
        title: "Axioma | OknoERP"
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
