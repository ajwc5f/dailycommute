<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <div class="container">
      <!--If app is just opened, load all articles before anything-->
      <div v-if="loading">
        <div id="preloader"><h1 class="flicker">Gathering today's articles...</h1></div>
      </div>
      <div v-else>
        <!--Show router view for components, and pass articles for components that need it-->
        <router-view v-bind="articlesAsProps"></router-view>
      </div>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import axios from 'axios';
import NavigationBar from './components/NavigationBar'
import BottomBar from './components/BottomBar'

export default {
  name: 'app',
  components: {
    NavigationBar,
    BottomBar
  },
  data () {
    return {
      loading: true,
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
      articleCounter: 0,
      cur_source: ''
    }
  },
  methods: {
    stopLoading: function () {
      this.loading = false;
    }
  },
  //On component creation, get all articles
  created: function () {
    var newsapi_base = 'https://newsapi.org/v1';
    var newsapi_key = 'da7f4e792b194c64a762f0cb214bc3f4';
    var num_sources = this.sources.length;
    const vm = this;
    for (var i=0; i<num_sources; i++) {
      //First get article urls from NewsAPI
      axios.get(newsapi_base + '/articles?source=' + vm.sources[i] + '&apiKey=' + newsapi_key)
        .then((response) => {
          var instance = axios.create({
            baseURL: 'https://mercury.postlight.com',
            headers: {'Content-Type': 'application/json', 'x-api-key': 'hBYuD6O5r55D770EVSlmy2dgHH4pH4CYfZAmvGJz'}
          });

          vm.cur_source = response.data.source;
          var num_articles = response.data.articles.length;

          //For each url gotten from NewsAPI
          for (var j=0; j<num_articles; j++) {
            //Get article contents from mercury parser API
            instance.get('/parser?url=' + response.data.articles[j].url)
              .then(function (response) {
                var temp_article = response.data;
                //assign the article an id based on the article counter
                temp_article.id = vm.articleCounter;
                vm.articles.push(temp_article);
                ++vm.articleCounter;
                //If majority of articles have loaded, then stop loading screen
                if (vm.articleCounter > 415) {
                  vm.stopLoading();
                }
              })
          }
      });
    }

  },
  computed: {
    //Pass the articles gathered to components that need them
    articlesAsProps() {
      if (this.$route.name === 'home' || this.$route.name === 'dailyminute') {
        return { articles: this.articles }
      }
    }
  }
}
</script>

<style>
#app {
}
body, html{
  font-family: "Rasa";
  font-weight: normal;
  font-style: normal;
}
h1{
  font-family: "Merriweather";
  font-weight: 900;
  font-style: normal;
  padding-bottom: 10px;
}
h2, h3, h4{
  font-family: "Merriweather Sans";
  font-weight: 300;
  font-style: normal;
}
h1, h2, h3, h4 {
  color: #041733;
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
.center {
  margin: 0 auto;
  text-align: center;
}
</style>
