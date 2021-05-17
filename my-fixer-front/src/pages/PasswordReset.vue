<template>
    <section class="column">
        <LoginHeader v-bind="{linkMessage: 'Do not have an account?', linkLabel: 'Sign Up', linkUrl: 'sign-up'}" />

        <div class="flex-wrapper">
            <form class="form" @submit.prevent="submit">
                <h2>Reset your password</h2>

                <p class="form-group">
                    <input id="newPassword" placeholder="New password" type="password" v-model.trim="newPassword" @input="setNewPassword($event.target.value)" />
                </p>
                <!-- <div class="error" v-if="!$v.newPassword.required">Field is required</div> -->
                <div class="error" v-if="!$v.newPassword.minLength">Password must be at least 6 characters long</div>

                <p class="form-group">
                    <input id="confirmPassword" placeholder="Confirm password" type="password" v-model.trim="confirmPassword" @input="setConfirmPassword($event.target.value)" />
                </p>
                <!-- <div class="error" v-if="!$v.confirmPassword.required">Field is required</div> -->
                <div class="error" v-if="!$v.confirmPassword.minLength">Password must be at least 6 characters long</div>
                <div class="error" v-if="isMismatch">Passwords mismatch</div>

                <button class="btn" type="submit" :disabled="!isValid">Reset</button>
            </form>
        </div>

    </section>
</template>


<script>

import { required, minLength } from 'vuelidate/lib/validators'
import LoginHeader from '@/components/LoginHeader'

export default {
  components: {
      LoginHeader
  },

  data: function () {
        return {
            newPassword: '',
            confirmPassword: '',
        }
  },
  
  validations: {
    newPassword: {
        required,
        minLength: minLength(6)
    },
    confirmPassword: {
        required,
        minLength: minLength(6)
    }
  },

  methods: {
      submit() {
        console.log(this.newPassword, this.confirmPassword);

        this.$router.replace({
            name: 'sign-in'            
        });
      },

      setNewPassword(value) {
        this.newPassword = value
        this.$v.newPassword.$touch()
      },

      setConfirmPassword(value) {
        this.confirmPassword = value
        this.$v.confirmPassword.$touch()
      }
  },

  computed: {
      isMismatch: function(){
          return this.newPassword && this.confirmPassword && 
            this.$v.newPassword.minLength && this.$v.confirmPassword.minLength &&
            !this.isEqual
      },
      isEqual: function(){
        return this.newPassword === this.confirmPassword
      },
      isValid: function(){
          return !this.$v.$invalid && this.isEqual
      }
  }
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

.btn {
    margin-top: 25px;
    align-self: flex-end;
    @include button;
}

</style>