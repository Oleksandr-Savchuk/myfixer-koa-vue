<template lang="">
    <div class="filter-panel">
        <p class="form-group">
            <label >Location</label>
            
            <v-select class="location" :options="locations" v-model="location" :searchable="false" :clearable="false" label="title">                               
            </v-select>
        </p>

        <p class="form-group">
            <label >Search</label>
            
            <input type="text" v-model="search" />
        </p>

        <p class="form-group">
            <label >Category</label>
            
            <v-select class="category" :options="categories" v-model="category" :searchable="false" :clearable="false" label="title">                               
            </v-select>
        </p>

        <p class="form-group">
            <label >Service</label>
            
            <v-select class="service" :options="services" v-model="service" :searchable="false" :clearable="false" label="title">                               
            </v-select>
        </p>

        <p class="form-group">
            <label >Period</label>
            
            <date-picker v-model="time" type="date" @input="log" :range="datePickerOption.range" :format="datePickerOption.format"></date-picker>
        </p>

        <button class="btn">Search</button>
        
    </div>
</template>
<script>
export default {
    
    data: function(){
        return {
            locations: [
                {title: "Kiev"},
                {title: "Moscow"},
                {title: "Rome"},
                {title: "New York"},
            ],

            categories: [
                {title: "Bronze"},
                {title: "Silver"},
                {title: "Gold"},
            ],

            services: [
                {title: "Service 1"},
                {title: "Service 2"},
                {title: "Service 3"},
                {title: "Service 4"},
                {title: "Service 5"},
            ],

            datePickerOption: {
                range: true,
                format: "DD/MM/YY"
            },

            service: null,
            category: null,
            search: null,
            location: null,
            time: null
        }
    },

    methods: {
        log: function(){
            console.log(this.time);
        }
    }
    
}
</script>
<style lang="scss" scoped>

    @import '../scss/mixins/_input.scss';
    @import '../scss/mixins/_button.scss';
    
    .filter-panel{
        min-width: 200px;
        padding-right: 50px;
        padding-bottom: 10px;
        border-right: 1px solid #ebebeb;
    }

    label{
        display: block;
        text-transform: uppercase;
        height: 1em;
        font-size: 0.9em;
        color: #262948;
        margin-bottom: 10px;
    }

    .form-group{
        padding: 0;
        margin: 10px 0;
    }

    ::v-deep .vs__dropdown-toggle{
        height: 40px;
        box-sizing: border-box;
        padding-left: 10px;
        background: #fcfcfc;
        border: 2px solid #f2f2f2;
    }

 
    .mx-datepicker::v-deep input, input{
        width: 100%;
        box-sizing: border-box;
        @include input;
    }

    .btn {    
        @include button;
        width: 100%;
        margin-top: 20px;
    }

    .mx-datepicker-range{
        width: 100%;
    }

</style>