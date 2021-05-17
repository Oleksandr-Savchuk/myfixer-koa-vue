<template>
    <div>
        <header>
            <img src="@/assets/img/logo.png"/>

            <div class="link">
                {{linkMessage}}

                <router-link class="url" :to="linkUrl">
                    {{linkLabel}}
                </router-link>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    props: {
        linkMessage: {
            type: String,
            required: true
        },
        linkLabel: {
            type: String,
            required: true
        },
        linkUrl: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    
header{
    display: flex;    
    width: 100%;
    margin: 1em 0;
    height: 3em;
    padding: 0px 10%;
    box-sizing: border-box;
    justify-content: space-between;

    img{
        height: 90%;
    }

    .link{
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        text-align: right;
        color: #222428;
    }

    .url{
        color: #2a74db;
        text-decoration: none;
        font-weight: bold;
        white-space: nowrap;
    }
}

</style>