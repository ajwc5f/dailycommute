<template>
  <div class="newslist">

      <ul class="list-unstyled">
        <li class="media" v-for="article, key in articles" v-if="article.word_count < duration">
          <div class="media-body">
            <!--<img class="lead-image" v-bind:src="article.lead_image_url">-->
            <h5 class="mt-0"><a v-bind:href="article.url" target="_blank" class="text-black">{{article.title}}</a></h5>
            <h6 v-if="article.author" class="text-muted">by {{article.author}} <a v-bind:href="article.url" target="_blank" class="text-muted">({{article.domain}})</a></h6>
            <h6 v-else class="text-muted">by <a v-bind:href="article.url" target="_blank" class="text-muted">{{article.domain}}</a></h6>
            <!--<p>{{article.excerpt}}</p>-->
          </div>
          <div class="d-block align-self-center ml-1">
            <!--<a v-bind:href="article.url" target="_blank">-->
              <button type="button" class="btn btn-outline-danger read-time" data-toggle="modal" :data-target="'#myModal' + key">Read</br>{{Math.round(article.word_count/200)}} min</button>
            <!--</a>-->
            <div class="modal fade bd-example-modal-lg" :id="'myModal' + key" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title"></h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <img class="lead-image" v-bind:src="article.lead_image_url">
                  <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">{{article.title}}</h3>
                  </div>
                  <div class="modal-body">
                    <h5 v-if="article.author" class="text-muted">by {{article.author}} <a v-bind:href="article.url" target="_blank" class="text-muted">({{article.domain}})</a></h5>
                    <h5 v-else class="text-muted">by <a v-bind:href="article.url" target="_blank" class="text-muted">{{article.domain}}</a></h5>
                    <hr/>
                    <div class="content" v-html="article.content"></div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-outline-warning read-time">Save</br><i class="fa fa-chevron-down" aria-hidden="true"></i></button>
          </div>
        </li>
      </ul>

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
      /*shuffle(this.articles);*/
      this.articles.sort(function(a,b) {
        return b.word_count - a.word_count;
      })
    }
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
<style>
  .lead-image {
    width: 100%;
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

  .content > img {
    width: 100px;
  }

  img {
    width: 100%;
  }
</style>
