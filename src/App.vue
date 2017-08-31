<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <div class="container">
      <DurationSelection v-on:durationChanged="durationChanged"></DurationSelection>
      <p v-if="loading">Loading...</p>
      <div v-else>
       <p v-for="article in articles">{{article}}</p>
     </div>
      <Newslist v-bind:duration="duration" v-bind:articles="articles"></Newslist>
       <div v-if="articles">
        <p v-for="article in articles">{{article}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import Newslist from './components/Newslist'
import DurationSelection from './components/DurationSelection'

export default {
  name: 'app',
  components: {
    NavigationBar,
    Newslist,
    DurationSelection
  },
  data () {
    return {
      loading: true,
      duration: "",
      sources: ["ars-technica", "associated-press", "bbc-news", "bbc-sport",
                "bloomberg", "breitbart-news", "business-insider", "buzzfeed",
                "cnbc", "cnn", "daily-mail", "engadget", "entertainment-weekly",
                "espn", "financial-times", "fortune", "fox-sports", "google-news",
                "hacker-news", "ign", "independent", "mashable", "metro", "mirror",
                "mtv-news", "national-geographic", "new-scientist", "newsweek",
                "new-york-magazine", "nfl-news", "polygon", "recode", "reddit-r-all",
                "reuters", "techcrunch", "techradar", "the-economist", "the-hindu",
                "the-huffington-post", "the-lad-bible", "the-new-york-times",
                "the-next-web", "the-sport-bible", "the-telegraph", "the-verge",
                "the-wall-street-journal", "the-washington-post", "time",
                "usa-today"],
      articles: [],
    }
  },
  methods: {
    durationChanged: function (duration) {
      this.duration = duration;
    },
    getArticles: function () {
      for (var i=0; i<this.sources.length; i++) {
        this.$http.get('https://newsapi.org/v1/articles?source=' + this.sources[i] + '&apiKey=da7f4e792b194c64a762f0cb214bc3f4').then(response => {
          for (var j=0; j<10; j++) {
            this.articles.push(response.data.articles[j].url);
            console.log(this.articles);
          }
        });
      }
    }
  },
  created: function () {
    this.getArticles().then(this.loading = false);
  }
}
</script>

<style>
#app {
}
</style>
