<template>
  <div class="durationselection">
    <div>
      <div class="jumbotron">
        <!--<h4>Select News Source</h4>
        <select class="form-control" v-on:change="sourceChanged">
          <option value="">Please select news source...</option>
          <option v-for="source in sources" v-bind:value="source.id">{{source.name}}</option>
        </select>-->
        <h4>How long is your commute today?</h4>
        <select class="form-control" v-on:change="durationChanged">
          <option value="">Please select your commute duration...</option>
          <option v-for="duration in durations" v-bind:value="duration.words">{{duration.text}}</option>
        </select>
        <div v-if="duration">
          <!--<h6>{{duration.response}}</h6>-->
        </div>
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
          response: "I wish I had your commute! It is way shorter the national average!"
        },
        {
          text: "5 to 10 minutes",
          words: "2000",
          response: "I wish I had your commute! It is way shorter the national average!"
        },
        {
          text: "10 to 15 minutes",
          words: "3000",
          response: "That's not too long! It's shoter than the national average!"
        },
        {
          text: "15 to 20 minutes",
          words: "4000",
          response: "That's not too long! It's shoter than the national average!"
        },
        {
          text: "20 to 25 minutes",
          words: "5000",
          response: "You've got the national average commute time!"
        },
        {
          text: "25 to 30 minutes",
          words: "6000",
          response: "You've got the national average commute time!"
        },
        {
          text: "More than 30 minutes",
          words: "100000",
          response: "I hope you are comfy... Your commute time is over twice the national average!"
        }
      ],
      duration: ''
    }
  },
  methods: {
    durationChanged: function(e) {
      for (var i=0; i<this.durations.length; i++) {
        if (this.durations[i].words == e.target.value) {
          this.duration = this.durations[i];
          console.log(this.duration.words);
        }
      }
      this.$emit('durationChanged', e.target.value);
    }
  },
  created: function () {
    /*this.$http.get('https://newsapi.org/v1/sources?language=en').then(response => {
      this.sources = response.data.sources;
      console.log(this.sources);
    });*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
