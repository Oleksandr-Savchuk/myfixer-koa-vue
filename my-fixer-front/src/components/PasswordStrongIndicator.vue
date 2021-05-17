<template lang="">
    <div class="password-strong-indicator" :class="status">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
    </div>
</template>
<script>
const BAD_STATUS = "bad";
const NORMAL_STATUS = "normal";
const GREAT_STATUS = "great";

export default {
    props: {
        password: {
            required: true,
            type: String
        }
    },

    computed: {
        status: function(){
            console.log(this.password);
            if(!this.password.length){
                return "";
            }
            if(this.password.length < 6){
                return BAD_STATUS;
            }
            if(this.password.length < 8){
                return NORMAL_STATUS;
            }             
            if(this.password.length < 10){
                return GREAT_STATUS;
            } 

            return "";
        }
    }
}
</script>
<style lang="scss" scoped>

.password-strong-indicator{
    margin: 10px 0;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 5px;
    justify-content: space-between;
}

.col{
    width: 30%;
    height: 6px;
    border-radius: 1px;
    background: #ebeff3;
}
    
.bad .col:nth-of-type(1) {
    background: #ff6359;
}

.normal{
    .col:nth-of-type(1),
    .col:nth-of-type(2){
        background: #ffb966;
    }
} 

.great .col {
  background: #38ecac;
}

</style>