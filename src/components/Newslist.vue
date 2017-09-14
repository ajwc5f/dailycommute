<template>
  <div class="newslist">
    <!--Show header if header property is set-->
    <div v-if="header">
      <!--Less than 5 min header-->
      <div v-if="duration == 1000">
        <h3>Today's picks for a <span class="time"> less than {{duration/200}} min</span> commute.</h3>
      </div>
      <!--More than 30 min header-->
      <div v-else-if="duration == 100000">
        <h3>Today's picks for a <span class="time">more than 30 min</span> commute.</h3>
      </div>
      <!--All other headers-->
      <div v-else>
        <h3>Today's picks for a <span class="time">{{duration/200 - 5}} to {{duration/200}} min</span> commute.</h3>
      </div>
    </div>
    <!--Articles List-->
    <ul class="list-unstyled">
      <li v-for="article in articles" v-if="article.word_count < duration">
        <ArticleMedia v-bind:article="article"></ArticleMedia>
      </li>
    </ul>
  </div>
</template>

<script>
import shuffle from 'shuffle-array';
import ArticleMedia from './ArticleMedia'

export default {
  name: 'newslist',
  props: ['duration', 'articles', 'header'],
  components: {
    ArticleMedia
  },
  methods: {
    //Sort articles based on word count (or read time)
    sortList: function () {
      this.articles.sort(function(a,b) {
        return b.word_count - a.word_count;
      });
    }
  },
  //sort the list upon component creation
  created: function () {
    this.sortList();
  },
  //watch duration property and sort list on any change
  watch: {
    duration: function () {
      this.sortList();
    }
  }
}
</script>

<style>
.media {
  border-top: 1px solid lightgray;
  padding-top: 20px;
}
.time {
  color: #F0AD4E;
}
</style>
