<template>
    <section class="column">
        <LoginHeader v-bind="{linkMessage: 'Already have an account?', linkLabel: 'Log in', linkUrl: 'sign-in'}" />

        <div class="flex-wrapper" v-if="!userDataReady">
          <form class="form" @submit.prevent="" >
            <h2>Sign up</h2>

            <div class="row">
              <p class="form-group">
                <input class="input" id="firstName" placeholder="First name" type="text" v-model.trim="firstName" @input="setFirstName($event.target.value)" />
              </p>
              <!-- <div class="error" v-if="!$v.firstName.required">Field is required</div> -->
              <p class="form-group">
                <input class="input" id="lastName" placeholder="Last name" type="text" v-model.trim="lastName" @input="setLastName($event.target.value)" />
              </p>
              <!-- <div class="error" v-if="!$v.lastName.required">Field is required</div> -->
            </div>

            <p class="form-group">
              <input class="input" id="userName" placeholder="User name" type="text" v-model.trim="userName" @input="setUserName($event.target.value)" />
            </p>
            <!-- <div class="error" v-if="!$v.userName.required">Field is required</div> -->
            <p class="form-group">
              <input class="input" id="email" placeholder="E-mail" type="email" v-model.trim="email" @input="setEmail($event.target.value)" />
            </p>
            <!-- <div class="error" v-if="!$v.email.required">Field is required</div> -->
            <div class="error" v-if="!$v.email.email">Email not valid</div>

            <button class="btn" type="submit" @click="setUserData" :disabled="!userDataValid">Get started</button>
          </form>
        </div>
        
        <div class="flex-wrapper" v-if="userDataReady">
          <form class="form" submit.prevent="">
            <h2 class="dark">Complete your account</h2>

            <p class="form-group no-margin">
                <input id="newPassword" placeholder="Create a passwrod" type="password" v-model.trim="newPassword" @input="setNewPassword($event.target.value)" />
            </p>
            <PasswordStrongIndicator :password="newPassword" />
            <!-- <div class="error" v-if="!$v.newPassword.required">Field is required</div> -->
            <div class="error" v-if="!$v.newPassword.minLength">Password must be at least 6 characters long</div>

            <p class="form-group">
                <input id="confirmPassword" placeholder="Confirm password" type="password" v-model.trim="confirmPassword" @input="setConfirmPassword($event.target.value)" />
            </p>
            <!-- <div class="error" v-if="!$v.confirmPassword.required">Field is required</div> -->
            <div class="error" v-if="!$v.confirmPassword.minLength">Password must be at least 6 characters long</div>
            <div class="error" v-if="isMismatch">Passwords mismatch</div>

            <p class="form-group">
                <input id="agreeTerms" type="checkbox" v-model.trim="agreeTerms" @change="setAgreeTerms($event.target.checked)" />
                <label for="agreeTerms">I agree to the MyFixer.com <a href="#" target="_blank">Terms of Service</a></label>
            </p>
            <div class="error" v-if="!$v.agreeTerms.required">Field is required</div>

            <p class="form-group">
                <input id="agreePolicy" type="checkbox" v-model.trim="agreePolicy" @change="setAgreePolicy($event.target.checked)" />
                <label for="agreePolicy">I agree to the MyFixer.com <a href="#" target="_blank">Privacy Policy</a></label>
            </p>
            <div class="error" v-if="!$v.agreePolicy.required">Field is required</div>

            <img class="recapcha" src="@/assets/img/recaptcha.png" />

            <button class="btn" type="submit" @click="createUser" :disabled="!isValid">Done!</button>
          </form>    
        </div>
        
    </section>
</template>

<script>

import { required, minLength, email } from 'vuelidate/lib/validators'
import LoginHeader from '@/components/LoginHeader'
import PasswordStrongIndicator from '@/components/PasswordStrongIndicator'

export default {
  components: {
      LoginHeader,
      PasswordStrongIndicator
  },

  data: function () {
        return {
            userDataReady: false,      
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            newPassword: '',
            confirmPassword: '',
            agreeTerms: false,
            agreePolicy: false
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
      userDataValid: function(){
          return !this.$v.firstName.$invalid &&
            !this.$v.lastName.$invalid &&
            !this.$v.userName.$invalid &&
            !this.$v.email.$invalid;
      },
      isValid: function(){
          return !this.$v.$invalid && this.isEqual
      }
  },
  
  validations: {
    email: {
        email,
        required
    },
    firstName: {
        required  
    },
    lastName: {
        required  
    },
    userName: {
        required
    },
    newPassword: {
        required,
        minLength: minLength(6)
    },
    confirmPassword: {
        required,
        minLength: minLength(6)
    },
    agreeTerms: {
        checked(val) {
            return val;
        },
        required
    },
    agreePolicy: {
        checked(val) {
            return val;
        },
        required
    }
  },

  methods: {
      createUser() {
        console.log(this);
        // TODO create user request        
        this.$router.replace({
            name: 'email-sent',
            params: {
                messageDescription: 'Please check your email to activate your account'
            }            
        });

      },

      setUserData() {
        this.userDataReady = true;

        console.log(this.email, this.password);
      },

      setFirstName(value) {
        this.firstName = value
        this.$v.firstName.$touch()
      },

      setLastName(value) {
        this.lastName = value
        this.$v.lastName.$touch()
      },

      setUserName(value) {
        this.userName = value
        this.$v.userName.$touch()
      },

      setEmail(value) {
        this.email = value
        this.$v.email.$touch()
      },

      setNewPassword(value) {
        this.newPassword = value
        this.$v.newPassword.$touch()
      },

      setConfirmPassword(value) {
        this.confirmPassword = value
        this.$v.confirmPassword.$touch()
      },

      setAgreeTerms(value) {
        this.agreeTerms = value
        this.$v.agreeTerms.$touch()
      },

      setAgreePolicy(value) {
        console.log(value);
        this.agreePolicy = value
        this.$v.agreePolicy.$touch()
      },
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

.row{
  display: flex;
  justify-content: space-between;

  .form-group{
    width: 48%;
  }
}

.form-group {  
  display: flex;
  align-items: center;
  border: 1px solid #fff;

  label{
    margin-left: 10px;
    font-size: 18px;

    a{
      color: #002396;
      font-weight: bold;
      text-decoration: none;
    }
  }
}

.no-margin{
  margin-bottom: 0;
}

.recapcha{
    width: 180px;
    margin: 20px 0;
}

.error{
  color: red;
  font-size: 0.8em;
  text-align: right;
}
h2 {  
  @include title;  
  margin-top: 0;
  margin-bottom: 20px;

  .dark{
    color: #002396;
  }
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
  margin-top: 25px;
  align-self: flex-end;
  @include button;
}

</style>