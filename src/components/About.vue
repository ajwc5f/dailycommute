<template>
  <div class="about">
    <div class="jumbotron">
      <h1 class="center">DailyCommute</h1>
      <h4 class="center">Giving daily article suggestions, tailored to the duration of your commute. </h4>
    </div>
    <div class="row">
      <div class="col-lg-4 center">
        <i class="fa fa-exclamation-triangle fa-4x" aria-hidden="true"></i>
        <h3>Problem...</h3>
        <p>In the US alone, there are over 140 million workers commuting every workday. While commuting, I've noticed that I often don't finish reading an article in time of arrival, which breaks the momentum and means that I probably won't go back to read the rest of it.</p>
      </div>
      <div class="col-lg-4 center">
        <i class="fa fa-lightbulb-o fa-4x" aria-hidden="true"></i>
        <h3>Idea</h3>
        <p>What if the articles you read on your commutes would be tailored specifically to the duration of your commute? Allowing you the time you need to actually finish reading the article in full.</p>
      </div>
      <div class="col-lg-4 center">
        <i class="fa fa-thumbs-o-up fa-4x" aria-hidden="true"></i>
        <h3>Solution</h3>
        <p>DailyCommute asks for your commute duration and suggests articles for you that are short enough for you to finish reading on your commute.</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
i {
  padding: 10px;
  color: #F0AD4E;
}
.col-lg-4 {
  background-color: #ECEEEF;
}
</style>
