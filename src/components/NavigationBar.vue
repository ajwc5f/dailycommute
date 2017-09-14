<template>
  <div class="navigationbar">
    <nav class="navbar sticky-top navbar-toggleable-md navbar-inverse navbar-custom">
      <!--Collapse button for mobile-->
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--Brand-->
      <a class="navbar-brand logo" href="#">DailyCommute</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-md-0">
          <!--Daily Minute-->
          <li class="nav-item">
            <router-link to="/dailyminute" class="nav-link" >Daily Minute</router-link>
          </li>
          <!--Pocket-->
          <li class="nav-item">
            <router-link to="/pocket" class="nav-link" >Pocket</router-link>
          </li>
          <!--About-->
          <li class="nav-item">
            <router-link to="/about" class="nav-link" >About</router-link>
          </li>
          <!--Contact-->
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" >Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigationbar',
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style>
.navbar-custom {
    background-color: #041733;
    background-color: #000;
}
.navbar-brand {
  font-family: "Merriweather";
  font-weight: 900;
  font-style: normal;
}
.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
    color: #fff;
}
.nav-link {
  font-family: "Merriweather Sans";
  font-weight: 300;
  font-style: normal;
}
.navbar-custom .navbar-nav .nav-link {
    color: #fff;
}
.navbar-custom .nav-item.active .nav-link,
.navbar-custom .nav-item:hover .nav-link {
    color: #F0AD4E;
}
</style>
