<template>
    <section class="column">
        <LoginHeader v-bind="{linkMessage: 'Do not have an account?', linkLabel: 'Sign Up', linkUrl: 'sign-up'}" />

        <div class="flex-wrapper">
          <form class="form" @submit.prevent="submit">
              <h2>Sign in</h2>

              <p class="form-group">
                  <input id="email" placeholder="E-mail" type="email" v-model.trim="email" @input="setEmail($event.target.value)" />
              </p>
              <!-- <div class="error" v-if="!$v.email.required">Field is required</div> -->
              <div class="error" v-if="!$v.email.email">Email not valid</div>
              <p class="form-group">
                  <input id="password" placeholder="Password" type="password" v-model.trim="password" @input="setPassword($event.target.value)" />
              </p>
              <!-- <div class="error" v-if="!$v.password.required">Field is required</div> -->
              <div class="error" v-if="!$v.password.minLength">Password must be at least 6 characters long</div>

              <div class="forgot-password">
                <router-link to="password-recovery" >Forgot password?</router-link>
              </div>

              <button class="btn"  type="submit" :disabled="$v.$invalid">Submit</button>
          </form>
        </div>

    </section>
</template>

<script>

import { required, minLength, email } from 'vuelidate/lib/validators'
import LoginHeader from '@/components/LoginHeader'

export default {
  components: {
      LoginHeader
  },

  data: function () {
        return {
            email: '',
            password: '',
        }
  },
  
  validations: {
    email: {
        email,
        required
    },
    password: {
        required,
        minLength: minLength(6)
    }
  },

  methods: {
      submit() {
        console.log(this.email, this.password);
      },

      setEmail(value) {
        this.email = value
        this.$v.email.$touch()
      },

      setPassword(value) {
        this.password = value
        this.$v.password.$touch()
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
}
.content__inputs-block {
  display: flex;
  flex-direction: column;
}
input {
  @include input;
}
.forgot-password {
  display: flex;
  justify-content: flex-end;
  margin: 15px 0;
  a {
    color: #222428;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
}

.btn {
  align-self: flex-end;
  @include button;
}

</style>