<template lang="">
<section>
        <LeftMenu :activePage="$router.currentRoute.name" />
        <div class="wrapper">
            <ProfileHeader :path="path" :user="user" />

            <div class="content">

                <div class="panel">
                    
                    <SearchFilter />

                    <SearchResults />

                </div>

            </div>
        </div>
    </section>

</template>
<script>
import LeftMenu from '@/components/LeftMenu'
import ProfileHeader from '@/components/ProfileHeader'
import SearchFilter from '@/components/SearchFilter'
import SearchResults from '@/components/SearchResults'

export default {
    data: function(){
        return {
            user: {name: 'Mustafa Abdul'},
            path: ['Home', 'Search', 'Results']
        }        
    },

    components: {
        LeftMenu,
        ProfileHeader,
        SearchFilter,
        SearchResults
    }
}
</script>
<style lang="scss" scoped>

    .wrapper{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .content{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        background: white;
        justify-content: center;
        align-items: center;
    }

    .panel{
        background: white;
        padding: 50px;
        box-sizing: border-box;
        width: 80%;

        display: flex;
        border-radius: 10px;
        border: 1px solid #fff;
        box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06);        
    }
    
</style>