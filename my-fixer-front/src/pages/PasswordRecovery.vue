<template>
    <section class="column">
        <LoginHeader v-bind="{linkMessage: 'Back to', linkLabel: 'Sign In', linkUrl: 'sign-in'}" />

        <div class="flex-wrapper">
            <form class="form" @submit.prevent="submit">

                <h2>
                    Enter your e-mail to reset your password
                </h2>

                <p class="form-group">
                    <input id="email" type="email" placeholder="E-mail" v-model.trim="email" @input="setEmail($event.target.value)" />
                </p>
                <!-- <div class="error" v-if="!$v.email.required">Field is required</div> -->
                <div class="error" v-if="!$v.email.email">Email not valid</div>

                <button class="btn" type="submit" :disabled="$v.$invalid">Send</button>
            </form>
        </div>
    </section>
</template>


<script>

import { required, email } from 'vuelidate/lib/validators'
import LoginHeader from '@/components/LoginHeader'

export default {
  components: {
      LoginHeader
  },

  data: function () {
        return {
            email: ''
        }
  },
  
  validations: {
    email: {
        email,
        required
    }
  },

  methods: {
      submit() {
        console.log(this, this.email, this.$v);      
        this.$router.replace({
            name: 'email-sent',
            params: {
                messageDescription: 'Please check your email to reset your password'
            }            
        });
      },

      setEmail(value) {
        this.email = value
        this.$v.email.$touch()
      }
  },
}

</script>

<style lang="scss" scoped>
@import '../scss/mixins/_title.scss';
@import '../scss/mixins/_input.scss';
@import '../scss/mixins/_button.scss';
@import '../scss/mixins/_form.scss';
@import '../scss/mixins/_flex_wrapper.scss';

.flex-wrapper{
    @include flex-wrapper;
}

.form {
    @include form;
}

.form-group {  
    border: 1px solid #fff;
}

.error{
    color: red;
    font-size: 0.8em;
    text-align: right;
}

h2 {  
    @include title;  
    padding-right: 80px;
}

.content__inputs-block {
    display: flex;
    flex-direction: column;
}

input {
    @include input;
}

.btn {
    margin-top: 25px;
    align-self: flex-end;
    @include button;
}

</style>