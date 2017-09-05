<template>
  <div class="newslist">
    <!--<div class="container">-->

      <ul class="list-unstyled">
        <li class="media" v-for="article in articles" v-if="article.word_count < duration">
          <!--<p class="d-flex align-self-end mr-3">{{article.word_count/200}} min read</p>-->
          <div class="media-body">
            <!--<img class="lead-image" v-bind:src="article.lead_image_url">-->
            <h5 class="mt-0"><a v-bind:href="article.url" target="_blank" class="text-black">{{article.title}}</a></h5>
            <h6 v-if="article.author" class="text-muted">by {{article.author}} <a v-bind:href="article.url" target="_blank" class="text-muted">({{article.domain}})</a></h6>
            <h6 class="text-muted" v-else>by <a v-bind:href="article.url" target="_blank" class="text-muted">{{article.domain}}</a></h6>
            <!--<p>{{article.excerpt}}</p>-->
          </div>
          <div class="d-block align-self-center ml-1">
            <a v-bind:href="article.url" target="_blank">
              <button type="button" class="btn btn-outline-danger read-time">Read</br>{{Math.round(article.word_count/200)}} min</button>
            </a>
              <button type="button" class="btn btn-outline-warning read-time">Pocket</br><i class="fa fa-chevron-down" aria-hidden="true"></i>
</button>
          </div>
        </li>
      </ul>

    <!--</div>-->
  </div>
</template>

<script>
import shuffle from 'shuffle-array';

export default {
  name: 'newslist',
  props: ['duration', 'articles'],
  data () {
    return {
      sources: [],
      articles: []
    }
  },
  methods: {
    updateList: function (duration) {
      shuffle(this.articles);
    }
    /*underDuration: function (article) {
      if (article.word_count >= this.duration) {
        return true;
      }
      else {
        return false;
      }
    }
    */
  },
  created: function () {
    this.updateList(this.duration);
  },
  watch: {
    duration: function (val) {
      this.updateList(val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lead-image {
    width: 100%;
    height: 200px;
    padding-bottom: 10px;
  }
  .read-time {
    width: 70px;
    height: 70px;
    padding: 5px;
    margin: 0px 5px 20px 5px;
  }
  .media {
    border-top: 1px solid lightgray;
    padding-top: 20px;
  }
  .media-list {
    padding: 0px;
  }

  .text-black {
    color: black;
  }
</style>
