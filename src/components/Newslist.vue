<template>
  <div class="newslist">
    <div class="container">

      <!--<ul class="media-list">
        <li class="media" v-for="article in articles">
          <a v-bind:href="article.url" target="_blank">
            <img class="media-object" v-bind:src="article.urlToImage">
          </a>
          <div class="media-body">
            <h4 class="media-heading"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h4>
            <h5><i>by {{article.author}}</i></h5>
            <p>{{article.description}}</p>
          </div>
        </li>
      </ul>-->

    </div>
  </div>
</template>

<script>
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
    updateSource: function (duration) {
    }
  },
  created: function () {
    this.updateSource(this.duration);
  },
  watch: {
    duration: function (val) {
      this.updateSource(val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .media-object {
    width: 128px;
    padding: 10px;
    padding-top: 0px;
  }
  .media {
    border-top: 1px solid lightgray;
    padding-top: 20px;
  }
  .media-list {
    padding: 0px;
  }
</style>
