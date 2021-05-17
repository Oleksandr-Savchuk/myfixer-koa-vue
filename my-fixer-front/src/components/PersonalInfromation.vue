<template lang="">
    <div class="pi-wrapper">

        <div class="avatar">
            <img src="@/assets/img/pages/profile/avatar.png" alt="avatar" />
            <button class="change-photo">
                <img src="@/assets/img/pages/profile/edit.png" alt="edit" />
                Change photo
            </button>
        </div>    
        <div class="info">
            <div class="col">
                <p class="form-group">
                    <label >first name</label>
                    <input id="firstName" placeholder="First Name" type="text" v-model="firstName" />
                </p>
                
                <p class="form-group">
                    <label >title</label>
                    <input id="title" placeholder="First Name" type="text" v-model="title" />
                </p>
                
                <p class="form-group">
                    <label >country</label>
                    
                    <v-select class="countries" :options="countries"  v-model="country" :searchable="false" :clearable="false" label="title">
                        <template v-slot:option="option">
                            {{ option.title }}
                        </template>
                    </v-select>
                </p>

            </div>
            <div class="col">
                <p class="form-group">
                    <label >last name</label>
                    <input id="lastName" placeholder="Last Name" type="text" v-model="lastName" />
                </p>
                
                <div class="form-group">
                    <label >mobile phone</label>

                    <div class="phone-wrapper">
                        <v-select class="flags" :options="flags" v-model="flag" :searchable="false" :clearable="false" label="title">
                            <template #option="option">
                                <flag :iso="option.iso" /> {{option.title}}
                            </template>

                            <template #selected-option-container="{option}">
                                <div class="vs__selected">
                                    <flag :iso="option.iso" />
                                </div>                                
                            </template>
                            
                        </v-select>

                        <input id="mobilePhone" placeholder="Mobile Phone" type="tel" v-model="mobilePhone" />
                    </div>
                </div>

                 <p class="form-group">
                    <label >company</label>
                    <input id="company" placeholder="Company" type="text" v-model="company" />
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
    data: function(){
        return {
            firstName: '',
            title: '',
            country: '',
            lastName: '',
            mobilePhone: '',
            flag: {iso: 'it', title: "Italy"},
            company: '',

            countries: [
                {title: 'Ukraine'},
                {title: 'Russia'},
                {title: 'Kazakhzstan'},
            ],

            flags: [
                {iso: 'it', title: "Italy"},
                {iso: 'gb', title: "Great Britain"},
                {iso: 'ua', title: "Ukraine"},
                {iso: 'ru', title: "Russia"},
                {iso: 'us', title: "United States"},
            ]
        }
    }

}
</script>
<style lang="scss" scoped>
    @import '../scss/mixins/_input.scss';

    .pi-wrapper{
        display: flex;   
        flex-grow: 1; 
    }

    .change-photo{
        -moz-appearance: none;
        -webkit-appearance: none;
        background: none;
        border: none;
    }

    .col{
        display: flex;    
        flex-direction: column;    
        width: 45%;
    }

    label{
        display: block;
        text-transform: uppercase;
        height: 1em;
        font-size: 0.9em;
        color: #262948;
        margin-bottom: 10px;
    }

    .avatar{
        display: flex;
        flex-direction: column;
        margin-right: 30px;
    }

    .info{
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
    }

    .form-group{
        padding: 0;
        margin: 10px;
    }

    ::v-deep .vs__dropdown-toggle{
        height: 40px;
        box-sizing: border-box;
        padding-left: 10px;
        background: #fcfcfc;
        border: 2px solid #f2f2f2;
    }

 
    input{
        width: 100%;
        box-sizing: border-box;
        @include input;
    }

    .phone-wrapper{
        display: flex;
        justify-content: space-between;

        ::v-deep .vs__search{
            display: none;
        }

        ::v-deep .vs__selected{
            position: absolute;
            top: 0.4em;
            left: 0.1em;
        }

        .flags{
            width: 100px;
        }

        .flag-icon{
            margin-right: 10px;
        }

        input{
            margin-left: 15px;
            flex-grow: 1;
        }
    }


</style>