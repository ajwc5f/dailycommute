<template>
  <div class="pocket">
    <div class="jumbotron">
      <h1 class="center">My Pocket</h1>
      <h4 class="center">Here are the articles you have added to your pocket.</h4>
    </div>
    <!--Saved Articles list-->
    <div v-if="savedArticles">
      <ul class="list-unstyled">
        <li v-for="article in savedArticles">
          <!--If article has been deleted in an articlemedia component, then refresh articles-->
          <ArticleMedia v-bind:article="article" v-bind:inpocket="true" v-on:savedArticlesChanged="refreshSavedArticles"></ArticleMedia>
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="lead">You currently have no articles in your pocket.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ArticleMedia from './ArticleMedia';

export default {
  name: 'pocket',
  components: {
    ArticleMedia
  },
  data () {
    return {
      savedArticles: []
    }
  },
  methods: {
    //Get all saved articles via Pocket API GET request
    getSavedArticles() {
      var pocket = axios.create({
        headers: {'Content-Type': 'application/json'},
      });
      const vm = this;
      vm.savedArticles=[];
      pocket.get('https://cors-anywhere.herokuapp.com/https://getpocket.com/v3/get?consumer_key=70593-4c5638940d4204abe9fd2655&access_token=aeef0797-e5b1-060f-127c-cf105b')
        .then(function (response) {
          var instance = axios.create({
            baseURL: 'https://mercury.postlight.com',
            headers: {'Content-Type': 'application/json', 'x-api-key': 'hBYuD6O5r55D770EVSlmy2dgHH4pH4CYfZAmvGJz'}
          });
          for(var key in response.data.list) {
            console.log(key);
            instance.get('/parser?url=' + response.data.list[key].given_url)
              .then(function (response) {
                console.log(response);
                vm.savedArticles.push(response.data);
              })
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //refresh articles
    refreshSavedArticles() {
      this.getSavedArticles();
      console.log("refreshed");
    }
  },
  //when component is mounted, get all saved articles
  mounted: function () {
    this.getSavedArticles();
  }
}

</script>

<style>

</style>
