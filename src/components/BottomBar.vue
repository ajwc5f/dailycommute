<template>
  <div class="bottombar">
    <div v-if="showBar">
      <nav class="navbar fixed-bottom navbar-light bg-faded">
        <a class="navbar-brand" v-on:click="topFunction">Back to Top</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottombar',
  data () {
    return {
      showBar: false
    }
  },
  methods: {
    //Send the page back to the top
    topFunction () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  //Setup what happens when scrolling occurs
  created: function () {
    const vm = this;
    window.onscroll = function() {scrollFunction()};

    //If we have scrolled more than 20 pixels from the top show bottom bar
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        vm.showBar = true;
      } else {
        vm.showBar = false;
      }
    }
  }
}
</script>

<style>
.navbar-brand:hover {
  cursor: pointer;
}
</style>
