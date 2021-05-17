<template lang="">
    <header>
        <div class="path">
            <div class="path-item" v-for="item in path" :key="item">                
                {{item}}
            </div>
        </div>
        <v-select class="user" :options="options" :value="options[0]" :searchable="false" :clearable="false" label="title" @option:selecting="selectOption($event.value)">
            <template v-slot:option="option">
                {{ option.title }}
            </template>
        </v-select>
    </header>
</template>
<script>
export default {

    props: {
        user: {
            type: Object,
            required: true
        },
        path: {
            type: Array,
            required: true
        }
    },
    
    data: function(){
        return {
            options: [
                {
                    value: 'user',
                    title: this.user.name
                },
                {
                    value: 'logout',
                    title: 'Logout'
                }
            ]
        }
    },

    methods: {
        selectOption: function(option){
            console.log(option);
        }
    }

}
</script>
<style lang="scss" scoped>
    header{
        display: flex;
        margin-left: 80px;
        height: 3em;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        border-bottom: 1px solid #c7c6c6;
        padding: 1em 3em;
    }

    .path{
        display: flex;
        height: 100%;
        align-items: center;
        margin-left: 10px;
    }

    .path-item{
        font-size: 13px;
        color: #252f48;
        display: flex;
        align-items: center;
        margin: 0 5px;
    }

    .path-item:not(:last-child)::after{
        content: '';
        display: inline-block;
        width: 10px;
        height: 20px;
        background: url('~@/assets/img/chevron.png') center center no-repeat;
        vertical-align: middle;
        margin-left: 15px;
    }

    .user{        
        min-width: 150px;
        margin-right: 10px;
    }

    .user::v-deep .vs__search::placeholder,
    .user::v-deep .vs__dropdown-toggle,
    .user::v-deep .vs__dropdown-menu {
        border: none;
    }
</style>