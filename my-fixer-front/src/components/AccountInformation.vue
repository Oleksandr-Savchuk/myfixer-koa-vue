<template lang="">
    <div class="ai-wrapper">
        <div class="info">
            <div class="col">
                <p class="form-group">
                    <label >username</label>
                    <input id="userName" placeholder="User name" type="text" v-model="userName" />
                </p>
            </div>
            <div class="col">
                <p class="form-group">
                    <label >e-mail</label>
                    <input id="email" placeholder="Email" type="email" v-model="email" />
                </p>

                <button class="change-password">
                    change password
                    <img src="@/assets/img/pages/profile/chevron.png" />
                </button>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    data: function(){
        return {
            userName: '',
            email: ''
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../scss/mixins/_input.scss';


   .ai-wrapper{
        display: flex;   
        flex-grow: 1; 
        flex-direction: column;
    }

    .col{
        display: flex;    
        width: 35%;
        flex-direction: column;    
    }

    label{
        display: block;
        text-transform: uppercase;
        height: 1em;
        font-size: 0.9em;
        color: #262948;
        margin-bottom: 10px;
    }

    .info{
        display: flex;
        flex-grow: 1;
    }

    .form-group{
        padding: 0;
        margin: 10px;
    }

    input{
        width: 100%;
        box-sizing: border-box;
        @include input;
    }

    .change-password{
        margin-top: 20px;
        -moz-appearance: none;
        -webkit-appearance: none;
        display: flex;
        align-self: flex-end;
        background: none;
        border: none;
        font-weight: bold;
        color: #222428;
        text-transform: uppercase;        
        align-items: center;
        font-size: 0.8em;

        img{
            margin-left: 5px;
        }
    }
    
</style>