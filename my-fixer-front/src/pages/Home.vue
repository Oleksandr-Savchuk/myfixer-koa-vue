<template>
    <section>
        <h1>Pages</h1>

        <router-link to="sign-in">Sign In</router-link>
        <br/>
        <router-link to="password-reset">Password Reset</router-link>        
        <br/>
        <router-link to="sign-up">Sign Up</router-link>
        <br/>
        <router-link to="profile">Profile</router-link>
        <br/>
        <router-link to="search">Search</router-link>
        <br/>
        <router-link to="admin-zone">AdminZone</router-link>
    </section>   
</template>

<style lang="scss" scoped>
    section{
        flex-direction: column;
        align-items: center;
    }
</style>