<template>
  <div class="contact">
    <div class="jumbotron">
      <h1 class="center">Contact Me!</h1>
      <h4 class="center">Have suggestions for DailyCommute? I'd love to hear!</h4>
    </div>
    <!--Submission Feedback-->
    <p class="lead text-warning">{{feedback}}</p>

    <div class="row">
      <!--First Name-->
      <div class="col-md-6">
        <div class="form-group">
          <label for="form_name">Firstname *</label>
          <input v-model="firstname" id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname" required="required">
        </div>
      </div>
      <!--Last Name-->
      <div class="col-md-6">
        <div class="form-group">
          <label for="form_lastname">Lastname *</label>
          <input v-model="lastname" id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname" required="required">
        </div>
      </div>
    </div>
    <div class="row">
      <!--Email-->
      <div class="col-md-6">
        <div class="form-group">
          <label for="form_email">Email *</label>
          <input v-model="email" id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email" required="required">
        </div>
      </div>
      <!--Phone-->
      <div class="col-md-6">
        <div class="form-group">
          <label for="form_phone">Phone</label>
          <input v-model="phone" id="form_phone" type="tel" name="phone" class="form-control" placeholder="Please enter your phone number">
        </div>
      </div>
    </div>
    <div class="row">
      <!--Message-->
      <div class="col-md-12">
        <div class="form-group">
          <label for="form_message">Message *</label>
          <textarea v-model="message" id="form_message" name="message" class="form-control" placeholder="Message for me" rows="4" required="required"></textarea>
        </div>
      </div>
      <!--Submit Button-->
      <div class="col-md-12">
        <input v-on:click.prevent="submitContactForm" type="submit" class="btn btn-warning btn-send" value="Send message">
      </div>
    </div>
    <div class="row">
      <!--Helper-->
      <div class="col-md-12">
        <p class="text-muted"><strong>*</strong> These fields are required.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'contact',
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
      feedback: ''
    }
  },
  methods: {
    //On submission, send form data to my mockbin via a POST request
    submitContactForm() {
      if (this.firstname == '' || this.lastname == '' || this.email == '' || this.message == '') {
        this.feedback = "All required fields must be filled out to submit the form."
        return;
      }
      var vm = this;
      axios.post('http://mockbin.org/bin/12beecce-82b9-4309-a4c9-5abc5f37f675',
        JSON.stringify({
          firstname: vm.firstname,
          lastname: vm.lastname,
          email: vm.email,
          phone: vm.phone,
          message: vm.message
        }))
        .then(function (response) {
          console.log(response);
          vm.feedback = "Thanks for contacting me!"
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>
