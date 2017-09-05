<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <div v-if="loading">
      <div id="preloader"><h1 class="flicker">Gathering today's articles...</h1></div>
    </div>
    <div v-else>
      <div class="container">
        <DurationSelection v-on:durationChanged="durationChanged"></DurationSelection>
        <div v-if="duration">
          <Newslist v-bind:duration="duration" v-bind:articles="articles"></Newslist>
        </div>
        <!--<div v-if="articles">
          <p v-for="article in articles">{{article.title}}</p>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
                "new-york-magazine", "nfl-news", "polygon", "recode",
                "reuters", "techcrunch", "techradar", "the-economist", "the-hindu",
                "the-huffington-post", "the-lad-bible", "the-new-york-times",
                "the-next-web", "the-sport-bible", "the-telegraph", "the-verge",
                "the-wall-street-journal", "the-washington-post", "time",
                "usa-today"],
      urls: [],
      articles: [],
      articleCounter: 0
    }
  },
  methods: {
    durationChanged: function (duration) {
      this.duration = duration;
    },
    getSourceUrls: function (source) {
      const vm = this;
      var urls = [];
      axios.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=da7f4e792b194c64a762f0cb214bc3f4')
        .then(function (response) {
          //console.log(response);
          for (var i=0; i<10; i++) {
            //console.log(response.data.articles[i].url);
            if (response.data.articles[i] != null) {
              var url = response.data.articles[i].url;
              //console.log(url);
              vm.urls.push(url);
              //console.log(vm.urls);
            }
          }
          return urls;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getUrls: function (sources) {
      var num_sources = sources.length;
      for (var i=0; i<num_sources; i++) {
        this.getSourceUrls(sources[i]);
      }
    },
    getArticle: function (url) {
      var instance = axios.create({
        baseURL: 'https://mercury.postlight.com',
        headers: {'Content-Type': 'application/json', 'x-api-key': 'hBYuD6O5r55D770EVSlmy2dgHH4pH4CYfZAmvGJz'}
      });
      instance.get('/parser?url=' + url)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    stopLoading: function () {
      this.loading = false;
    }
  },
  created: function () {
    var newsapi_base = 'https://newsapi.org/v1';
    var newsapi_key = 'da7f4e792b194c64a762f0cb214bc3f4';
    var num_sources = this.sources.length;
    const vm = this;
    for (var i=0; i<num_sources; i++) {
      axios.get(newsapi_base + '/articles?source=' + vm.sources[i] + '&apiKey=' + newsapi_key)
        .then((response) => {
          var instance = axios.create({
            baseURL: 'https://mercury.postlight.com',
            headers: {'Content-Type': 'application/json', 'x-api-key': 'hBYuD6O5r55D770EVSlmy2dgHH4pH4CYfZAmvGJz'}
          });
          //var curr_articles = [];
          var num_articles = response.data.articles.length;
          for (var j=0; j<num_articles; j++) {
            instance.get('/parser?url=' + response.data.articles[j].url)
              .then(function (response) {
                vm.articles.push(response.data);
                ++vm.articleCounter;
                if (vm.articleCounter > 400) {
                  /*setTimeout(vm.stopLoading(), 4000);*/
                  vm.loading = false;
                }
              })
          }
      });
    }

  }
}
</script>

<style>
body, html {
font-family: "Palanquin";
font-weight: normal;
font-style: normal;
}

h1{
font-family: "Merriweather";
font-weight: 900;
font-style: normal;
}

h2, h3, h4 {
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
