<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <div v-if="loading">
      <div id="preloader"><h1 class="flicker">Gathering today's articles...</h1></div>
    </div>
    <div v-else>
      <div class="container">
        <DurationSelection v-on:durationChanged="durationChanged"></DurationSelection>
        <Newslist v-bind:duration="duration" v-bind:articles="articles"></Newslist>
        <div v-if="articles">
          <p v-for="article in articles">{{article}}</p>
        </div>
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
      articleCounter: 0
    }
  },
  methods: {
    durationChanged: function (duration) {
      this.duration = duration;
    },
    getArticles: function () {
      var cnt = 0;
      for (var i=0; i<this.sources.length; i++) {
        this.$http.get('https://newsapi.org/v1/articles?source=' + this.sources[i] + '&apiKey=da7f4e792b194c64a762f0cb214bc3f4').then(response => {
          for (var j=0; j<10; j++) {
            this.articles.push(response.data.articles[j].url);
            console.log(this.articles);
            cnt++;
            if (cnt > 450) {
              //this.loading = false;
            }
          }
        });
      }
    }
  },
  created: function () {
    this.getArticles();
  }
}
</script>

<style>
body, html{
font-family: "Palanquin";
font-weight: normal;
font-style: normal;
}

h1{
font-family: "Merriweather";
font-weight: 900;
font-style: normal;
}

h2, h3, h4{
font-family: "Kadwa";
font-weight: normal;
font-style: normal;
}

@keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-o-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-moz-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
.flicker {
   -webkit-animation: flickerAnimation 2s infinite;
   -moz-animation: flickerAnimation 2s infinite;
   -o-animation: flickerAnimation 2s infinite;
    animation: flickerAnimation 2s infinite;
}

#app {
}
div#preloader {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  overflow: visible;
  background: #fff url('./assets/loading.gif') no-repeat center center;
}
#preloader h1 {
  text-align: center;
  padding-top: 100px;
}
</style>
