<template>
  <div class="durationselection">
    <div>
      <div class="jumbotron">
        <h1 class="center">How long is your commute today?</h1>
        <!--Duarion Selection form, on selection run durarionChanged-->
        <select class="form-control" v-on:change="durationChanged">
          <option value="">Please select your commute duration...</option>
          <option v-for="duration in durations" v-bind:value="duration.words">{{duration.text}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'durationselection',
  data () {
    return {
      durations: [
        {
          text: "Less than 5 minutes",
          words: "1000",
        },
        {
          text: "5 to 10 minutes",
          words: "2000",
        },
        {
          text: "10 to 15 minutes",
          words: "3000",
        },
        {
          text: "15 to 20 minutes",
          words: "4000",
        },
        {
          text: "20 to 25 minutes",
          words: "5000",
        },
        {
          text: "25 to 30 minutes",
          words: "6000",
        },
        {
          text: "More than 30 minutes",
          words: "100000",
        }
      ],
      duration: ''
    }
  },
  methods: {
    //If duration changed, dynamically find which duration selected and emit it.
    durationChanged: function(e) {
      for (var i=0; i<this.durations.length; i++) {
        if (this.durations[i].words == e.target.value) {
          this.duration = this.durations[i];
          console.log(this.duration.words);
        }
      }
      this.$emit('durationChanged', e.target.value);
    }
  }
}
</script>

<style>
</style>
