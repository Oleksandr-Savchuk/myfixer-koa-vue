<template lang="">
    <div class="user-card">
        <img class="avatar" src="@/assets/img/pages/search/person.png" />

        <div class="details">
            <div class="name">
                {{userData.name}}
                <img class="gold" src="@/assets/img/pages/search/gold.png" />
            </div>
            <div class="location">
                <img class="pin" src="@/assets/img/pages/search/pin.png" /> 
                {{userData.location}}
            </div>
            <div class="stack">
                <b>Stack:</b>
                {{userData.stack}}
                <span class="more">More</span>
            </div>
            <div class="rate">
                <b>Base Daily Rate:</b>   
                $ {{userData.rate}} USD
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        userData: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .user-card{
        width: 300px;
        padding: 15px;
        display: flex;
        font-size: 0.8em;
        margin: 10px;
        background: #ffffff;
        border: 1px solid rgba(232, 232, 232, 0.33172);
        box-sizing: border-box;
        box-shadow: -2px 9px 30px rgb(23 31 76 / 6%);
        border-radius: 2px;
    }

    .avatar{
        width: 80px;
        height: 80px;
        margin-right: 10px;
    }

    .name{
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #01134e;
        font-weight: bold;
    }

    .details{
        display: flex;
        flex-grow: 1;
        flex-direction: column;

        & > div{
            margin-bottom: 5px;
        }

        b{
          color: #01134e;  
        }
    }

    .more{
        color: #3c6fff;
    }

</style>