<template lang="">
    <section>
        <LeftMenu :activePage="$router.currentRoute.name" />
        <div class="wrapper">
            <ProfileHeader :path="path" :user="user" />

            <div class="content">

                <div class="panel">
                    <tabs>
                        <tab name="Personal Information">
                            
                            <PersonalInfromation />

                        </tab>
                        <tab name="Account Information">
                            
                            <AccountInformation />

                        </tab>
                    </tabs>
                </div>

            </div>
        </div>
    </section>
</template>
<script>

import LeftMenu from '@/components/LeftMenu'
import ProfileHeader from '@/components/ProfileHeader'
import PersonalInfromation from '@/components/PersonalInfromation'
import AccountInformation from '@/components/AccountInformation'

export default {

    data: function(){
        return {
            user: {name: 'Mustafa Abdul'},
            path: ['Home', 'My Profile']
        }        
    },

    components: {
        LeftMenu,
        ProfileHeader,
        PersonalInfromation,
        AccountInformation
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
        padding-top: 60px;
        align-items: center;
    }

    .panel{
        background: white;
        padding: 50px 30px;
        box-sizing: border-box;
        width: 80%;

        display: flex;
        border-radius: 10px;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #fff;
        box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06);        
    }

    .tabs-component::v-deep .tabs-component-tabs{
        list-style: none;
        display: flex;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .tabs-component::v-deep .tabs-component-tab{
        width: 50%;
        padding-bottom: 15px;
        text-align: center;      
        border-bottom: 2px solid gainsboro; 

        a{
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
            color: gainsboro;
        }
    }

    .tabs-component::v-deep .tabs-component-tab.is-active{
        border-bottom: 2px solid #2a74db;

        a{
            color: #01134e;
        }
        
    }

    .tabs-component::v-deep .tabs-component-panel{
        background: white;
        padding-top: 50px;
    }

</style>