<template>
  <div class="home">
    <DurationSelection v-on:durationChanged="durationChanged"></DurationSelection>
    <div v-if="duration">
      <Newslist v-bind:duration="duration" v-bind:articles="articles"></Newslist>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Newslist from './Newslist'
import DurationSelection from './DurationSelection'

export default {
  name: 'home',
  props: ['articles'],
  components: {
    Newslist,
    DurationSelection
  },
  data () {
    return {
      duration: ""
    }
  },
  methods: {
    durationChanged: function (duration) {
      this.duration = duration;
    },
  },
  created: function () {
  }
}
</script>


<style>

</style>
