<template>
  <div id="preloader"><h1 class="flicker">Gathering today's articles...</h1></div>
</template>

<script></script>

<style>
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
  background: #fff url('../assets/loading.gif') no-repeat center center;
}
#preloader h1 {
  text-align: center;
  padding-top: 75px;
}
<style>
