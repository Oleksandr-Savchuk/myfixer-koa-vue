<template>
    <section class="column">
        <LoginHeader v-bind="{linkMessage: 'Back to', linkLabel: 'Sign In', linkUrl: 'sign-in'}" />

        
        <div class="message">
            
            <img class="email-image" src="@/assets/img/email/Group.png" />        
            
            <h2>You are almost ready to go!</h2>
            <p>{{$route.params.messageDescription}}</p>

        </div>

    </section>
</template>

<script>
import LoginHeader from '@/components/LoginHeader'

export default {
    components: {
        LoginHeader
    },    
}
</script>

<style lang="scss" scoped>
section{
    height: 750px;
    background: url('~@/assets/img/email/Ellipse-3.png') center center no-repeat,
        url('~@/assets/img/email/Ellipse-2.png') center center no-repeat,
        url('~@/assets/img/email/Ellipse-1.png') center center no-repeat,
        url('~@/assets/img/email/Ellipse.png') center center no-repeat;
    background-color: #f9fafc;
}

h2{
    color: #2a74db;
    font-size: 50px; 
    margin: 20px 0;
}

p{
    font-size: 24px;    
}

.message{
    text-align: center;
    width: 100%;
    margin-top: 160px;
}
</style>