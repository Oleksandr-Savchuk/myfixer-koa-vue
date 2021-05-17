<template lang="">
    <div class="wrapper">
        
        <div class="controls" v-if="!isMapMode">
            
            <p class="switch" @click="setMapMode()">SHOW MAP</p>

            <div class="sort-by">
                <img src="@/assets/img/pages/search/asc.png" />

                <input id="byPrice" type="radio" name="sort" value="byPrice" checked="checked" />
                <label for="byPrice">by price</label>

                <input id="byRating" type="radio" name="sort" value="byRating" />
                <label for="byRating">by rating</label>                            
            </div>
        </div>

        <div class="controls" v-if="isMapMode">
            <p class="switch" @click="setResultMode()">SHOW RESULTS</p>
        </div>

        <div v-if="!isMapMode" class="user-list">
            <UserCard v-bind:userData="user" v-for="user in searchResult" :key="user.id" />
        </div>

        <div v-if="isMapMode" class="map">
            <GmapMap
                    :center="{lat: 0.4418121, lng: 30.2909543}"
                    :zoom="7"
                    map-type-id="terrain"
                    class="google-map"
                >
            </GmapMap>
        </div>

    </div>
</template>
<script>

import UserCard from '@/components/UserCard'

export default {
    components: {
        UserCard
    },

    data: function(){
        return {
            isMapMode: false, 

            searchResult: [
                {
                    id: 1,
                    name: "Richard Thompson",
                    location: "Vancouver, Canada",
                    stack: "Python, Django, Sketch",
                    rate: "1,200"
                },
                {
                    id: 2,
                    name: "Richard Thompson",
                    location: "Vancouver, Canada",
                    stack: "Python, Django, Sketch",
                    rate: "1,200"
                },
                {
                    id: 3,
                    name: "Richard Thompson",
                    location: "Vancouver, Canada",
                    stack: "Python, Django, Sketch",
                    rate: "1,200"
                },
                {
                    id: 4,
                    name: "Richard Thompson",
                    location: "Vancouver, Canada",
                    stack: "Python, Django, Sketch",
                    rate: "1,200"
                },
                {
                    id: 5,
                    name: "Richard Thompson",
                    location: "Vancouver, Canada",
                    stack: "Python, Django, Sketch",
                    rate: "1,200"
                },
                {
                    id: 6,
                    name: "Richard Thompson",
                    location: "Vancouver, Canada",
                    stack: "Python, Django, Sketch",
                    rate: "1,200"
                },
                {
                    id: 7,
                    name: "Richard Thompson",
                    location: "Vancouver, Canada",
                    stack: "Python, Django, Sketch",
                    rate: "1,200"
                }
            ]
        }
    },

    methods: {
        setMapMode: function(){
            this.isMapMode = true;
        },

        setResultMode: function(){
            this.isMapMode = false;
        }
    },
}
</script>
<style lang="scss" scoped>

.controls{
    padding-left: 50px;
}

.switch{
    color: #252f48;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
}

.sort-by{
    display: flex;
    align-items: center;
}

input[type="radio"] {
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #f0f1f3;
  box-shadow: 0px 1px 7px rgba(204, 202, 212, 0.58);
  padding: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 5px;
  outline: none;
}

input[type="radio"]:checked {
  background: radial-gradient(
    circle at center,
    #0ad69c 0%,
    #0ad69c 30%,
    transparent 31%,
    transparent 100%
  ) ;
}

#byPrice{
    margin-left: 20px;
}

#byRating{
    margin-left: 30px;
}
    
.wrapper{
    display: flex;
    flex-direction: column;
}

.controls{
    display: flex;
    justify-content: space-between;
}

.user-list{
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 400px;
    padding: 20px 0 20px 50px;
}

.map{
    display: flex;
    flex-grow: 1;
    padding-left: 50px;
}


.google-map{
    display: flex;
    flex-grow: 1;
}

</style>