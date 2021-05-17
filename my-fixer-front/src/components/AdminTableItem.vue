<template lang="">
    <div class="row">
        <div class="col">
            {{user.firstName}}
        </div>    
        <div class="col">
            {{user.lastName}}
        </div>  
        <div class="col">
            {{user.country}}
        </div>  
        <div class="col">
            {{user.status}}
        </div> 
        <div class="col">
            <v-select class="select" :options="user.levels" v-model="user.level" :searchable="false" :clearable="false" label="title"></v-select>
        </div>
        <div class="col">
            {{user.email}}
        </div>       
        <div class="col">
            <button class="delete-btn">✕</button>
        </div>         
    </div>
</template>
<script>
export default {

    props: {
        user: {
            type: Object,
            required: true
        }
    }

}
</script>
<style lang="scss" scoped>
    .row{
        display: flex;
        width: 100%;
    }    

    .col{
        display: flex;
        flex-direction: column;
    }

    .select{
        width: 60%;
    }

    ::v-deep .vs__dropdown-toggle{
        border: none;
    }

    .delete-btn{
        -webkit-appearance: none;
        -moz-appearance: none;
        border: none;
        background: none;
        color: gray;
    }
</style>