<template>
  <!--Main Page of DailyCommute-->
  <div class="home">
    <DurationSelection v-on:durationChanged="durationChanged"></DurationSelection>
    <div v-if="duration">
      <Newslist v-bind:duration="duration" v-bind:articles="articles" v-bind:header="true"></Newslist>
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
    //Update the duration globally if duration changed event has been emitted
    durationChanged: function (duration) {
      this.duration = duration;
    }
  }
}
</script>

<style>

</style>
