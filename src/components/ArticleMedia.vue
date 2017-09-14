<template>
  <div class="articlemedia">
    <div class="media">
    <!--Show article headline, author, and original domain-->
    <div class="media-body">
      <!--Link article headline to the modal with same id as article-->
      <h5 class="mt-0"><a v-bind:href="article.url" data-toggle="modal" :data-target="'#myModal' + article.id" target="_blank" class="text-black">{{article.title}}</a></h5>
      <h6 v-if="article.author" class="text-muted">by {{article.author}} <a v-bind:href="article.url" target="_blank" class="text-muted">({{article.domain}})</a></h6>
      <h6 v-else class="text-muted">by <a v-bind:href="article.url" target="_blank" class="text-muted">{{article.domain}}</a></h6>
    </div>

    <!--Show all buttons: Read, Pocket, Facebook, Twitter-->
    <div class="d-block align-self-center ml-1">
      <!--Link read button to the modal with same id as article-->
      <button type="button" class="btn btn-outline-warning media-button" data-toggle="modal" :data-target="'#myModal' + article.id">Read</br>{{Math.round(article.word_count/200)}} min</button>
      <!--Show pocket button if we are not on pocket page-->
      <span v-if="!inpocket">
        <button type="button" v-on:click.prevent="addToPocket" class="btn btn-outline-danger media-button" v-html="pocketBtn"></button>
      </span>
      <span v-else-if="inpocket">
        <button type="button" v-on:click.prevent="removeFromPocket" class="btn btn-outline-secondary media-button" v-html="removeBtn"></button>
      </span>
      <!--Facebook share button-->
      <a class="fbLink" v-bind:href="facebookShareUrl" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" target="_blank">
        <button type="button" v-on:click.prevent="facebookShared" class="btn btn-outline-primary media-button" v-html="facebookBtn"></button>
      </a>
      <!--Twitter share button-->
      <a class="twitter-share-button twitLink" v-bind:href="twitterShareUrl" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
        <button type="button" v-on:click.prevent="twitterShared" class="btn btn-outline-info media-button" v-html="twitterBtn"></button>
      </a>
    </div>
    <!--Create the article's modal-->
    <div class="modal fade bd-modal-lg" :id="'myModal' + article.id" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <!--Close button top-->
            <h3 class="modal-title"></h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!--Lead image and headline-->
          <img class="lead-image" v-bind:src="article.lead_image_url">
          <div class="modal-header">
            <h3 class="modal-title">{{article.title}}</h3>
          </div>
          <!--Article author and content-->
          <div class="modal-body">
            <h5 v-if="article.author" class="text-muted">by {{article.author}} <a v-bind:href="article.url" target="_blank" class="text-muted">({{article.domain}})</a></h5>
            <h5 v-else class="text-muted">by <a v-bind:href="article.url" target="_blank" class="text-muted">{{article.domain}}</a></h5>
            <hr/>
            <div class="content" v-html="article.content"></div>
          </div>
          <!--Bottom close button-->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'articlemedia',
  props: ['article', 'inpocket'],
  data () {
    return {
      facebookShareUrl: '',
      twitterShareUrl: '',
      pocketBtn: 'Pocket<br/><i class="fa fa-chevron-down" aria-hidden="true"></i>',
      removeBtn: 'Remove<br/><i class="fa fa-times" aria-hidden="true"></i>',
      facebookBtn: '<i class="fa fa-facebook fa-2x" aria-hidden="true"></i>',
      twitterBtn: '<i class="fa fa-twitter fa-2x" aria-hidden="true"></i>'
    }
  },
  //On creation encode the url for the share buttons
  created: function () {
    var encoded = encodeURIComponent(this.article.url);
    this.facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encoded;
    this.twitterShareUrl = 'https://twitter.com/intent/tweet?url=' + encoded;
  },
  methods: {
    //If shared change the content of the facebook button
    facebookShared() {
      this.facebookBtn = 'Shared<br/><i class="fa fa-check-circle" aria-hidden="true"></i>';
    },
    //If shared change content of twitter button
    twitterShared() {
      this.twitterBtn = 'Shared<br/><i class="fa fa-check-circle" aria-hidden="true"></i>';
    },
    //Use Pocket API POST request to add the article to my pocket
    addToPocket() {
      //consumer_key = 70593-4c5638940d4204abe9fd2655
      //access_token = aeef0797-e5b1-060f-127c-cf105b
      var pocket = axios.create({
        headers: {'Content-Type': 'application/json; charset=UTF-8',
                  'X-Accept': 'application/json'},
        crossdomain: true
      });
      const vm = this;
      pocket.post('https://cors-anywhere.herokuapp.com/https://getpocket.com/v3/add', {
        url: vm.article.url,
        title: vm.article.title,
        consumer_key: '70593-4c5638940d4204abe9fd2655',
        access_token: 'aeef0797-e5b1-060f-127c-cf105b'
      })
        .then(function (response) {
          //Has been added to pocket successfully
          console.log(response);
          vm.pocketBtn = 'Added<br/><i class="fa fa-check-circle" aria-hidden="true"></i>';
          vm.isPocketDisabled = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //Use Pocket API GET request to remove the article from my pocket
    removeFromPocket() {
      const vm = this;
      var pocket = axios.create({
        headers: {'Content-Type': 'application/json'},
      });
      pocket.get('https://cors-anywhere.herokuapp.com/https://getpocket.com/v3/get?consumer_key=70593-4c5638940d4204abe9fd2655&access_token=aeef0797-e5b1-060f-127c-cf105b&search=' + vm.article.url)
        .then(function (response) {
          //get the item id and store in key
          for(var key in response.data.list) {
            console.log(key);
            var pocket = axios.create({
              headers: {'Content-Type': 'application/json'},
            });
            var actions = [{"action" : "delete","item_id" : key}];
            pocket.get('https://cors-anywhere.herokuapp.com/https://getpocket.com/v3/send?actions=' + JSON.stringify(actions) + '&access_token=aeef0797-e5b1-060f-127c-cf105b&consumer_key=70593-4c5638940d4204abe9fd2655')
              .then(function (response) {
                console.log(response);
                //emit 'true' that the article has been deleted and that the saved articles list will have changed
                vm.$emit('savedArticlesChanged', response.data.action_results[0]);
              })
              .catch(function (error) {
                console.log(error);
              })
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
.lead-image {
  width: 100%;
  padding-bottom: 10px;
}
.media-button {
  width: 70px;
  height: 70px;
  padding: 5px;
  margin: 0px 5px 20px 5px;
}
.media-list {
  padding: 0px;
}
.text-black {
  color: black;
}
.modal-body content img {//Needs attention
  width: 100px;
}
.fbLink {
  color: #0275d8;
}
.fbLink:hover a {
  color: #fff;
}
.twitLink {
  color: #5bc0de;
}
.twitLink:hover a {
  color: #fff;
}
.large-i {
  font-size: 25px;
}
</style>
