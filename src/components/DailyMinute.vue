<template>
    <div class="dailyminute">
      <div class="jumbotron">
        <h1 class="center">This is your daily minute.</h1>
        <h4 class="center">For when you want to read a lot of articles, fast!</h4>
      </div>
      <!--Get newslist with articles having duration less than 1.5 minutes, with no 'Today's picks...' header-->
      <Newslist v-bind:duration="300" v-bind:articles="articles" v-bind:header="false"></Newslist>
    </div>
</template>

<script>
import Newslist from './Newslist'

export default {
  name: 'dailyminute',
  props: ['articles'],
  components: {
    Newslist
  }
}
</script>

<style>
</style>
