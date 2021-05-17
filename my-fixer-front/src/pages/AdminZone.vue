<template lang="">
<section>
        <LeftMenu :activePage="$router.currentRoute.name" :isAdminMode="true" />
        <div class="wrapper">
            <ProfileHeader :path="path" :user="user" />

            <div class="content">

                <div class="panel">
                   
                   <div class="search-wrapper">
                        <img class="search-icon" src="@/assets/img/pages/admin-zone/search.webp" />
                        <input class="search" placeholder="Type here to search" type="text" />
                   </div>
                    <div class="table">
                        <div class="table-header">
                            <div class="col">First Name</div>
                            <div class="col">Last Name</div>
                            <div class="col">Country</div>
                            <div class="col">Status</div>
                            <div class="col">Level</div>
                            <div class="col">E-mail</div>
                            <div class="col"></div>
                        </div>

                        <div class="table-body">
                            <AdminTableItem :user="user" v-for="user in users" :key="user.id" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>
<script>
import LeftMenu from '@/components/LeftMenu'
import ProfileHeader from '@/components/ProfileHeader'
import AdminTableItem from '@/components/AdminTableItem'

export default {
    components: {
        LeftMenu,
        ProfileHeader,
        AdminTableItem
    },

    data: function(){
        return {
            user: {name: 'Mustafa Abdul'},
            path: ['Home', 'Manage Users'],

            users: [
                {
                    id: 1,
                    firstName: 'Richard',
                    lastName: 'Richard',
                    country: 'Ukraine',
                    status: 'Requested',
                    levels: ['Bronze', 'Silver', 'Gold'],
                    level: 'Silver',
                    email: 'test@mail.com'
                },
                {
                    id: 2,
                    firstName: 'Faruk',
                    lastName: 'Zunal',
                    country: 'Ukraine',
                    status: 'Requested',
                    levels: ['Bronze', 'Silver', 'Gold'],
                    level: 'Gold',
                    email: 'test1@mail.com'
                } ,
                {
                    id: 3,
                    firstName: 'Michael',
                    lastName: 'Logan',
                    country: 'Ukraine',
                    status: 'Requested',
                    levels: ['Bronze', 'Silver', 'Gold'],
                    level: 'Bronze',
                    email: 'test2@mail.com'
                },
                {
                    id: 4,
                    firstName: 'Richard',
                    lastName: 'Richard',
                    country: 'Ukraine',
                    status: 'Requested',
                    levels: ['Bronze', 'Silver', 'Gold'],
                    level: 'Silver',
                    email: 'test@mail.com'
                },
                {
                    id: 5,
                    firstName: 'Faruk',
                    lastName: 'Zunal',
                    country: 'Ukraine',
                    status: 'Requested',
                    levels: ['Bronze', 'Silver', 'Gold'],
                    level: 'Gold',
                    email: 'test1@mail.com'
                } ,
                {
                    id: 6,
                    firstName: 'Michael',
                    lastName: 'Logan',
                    country: 'Ukraine',
                    status: 'Requested',
                    levels: ['Bronze', 'Silver', 'Gold'],
                    level: 'Bronze',
                    email: 'test2@mail.com'
                }              
            ]
        }        
    },

}
</script>

<style lang="scss" scoped>

    .search-wrapper{
        input{
            -moz-appearance: none;
            -webkit-appearance: none;
            border: none;
            outline: none;

            &::placeholder{
                color: gainsboro;
            }
        }
    }

    .search-icon{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

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
        padding: 30px;
        box-sizing: border-box;
        width: 80%;
        background: #fff;
        box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06);
    }


    .search-wrapper{
        display: flex;
        justify-content: flex-end;
        margin: 10px 0;

        .search{
            width: 150px;
        }
    }

    .table{
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }

    .table-header,
    .table-body{
        display: flex;
        flex-grow: 1;
        box-sizing: border-box;
    }

    .table-body{
        flex-direction: column;
    }

    ::v-deep .col{
        box-sizing: border-box;
    }

    ::v-deep .col:nth-of-type(1){
        width: 15%;
        padding-left: 30px;
    }
    ::v-deep .col:nth-of-type(2){
        width: 15%;
    }
    ::v-deep .col:nth-of-type(3){
        width: 15%;
    }
    ::v-deep .col:nth-of-type(4){
        width: 15%;
    }
    ::v-deep .col:nth-of-type(5){
        width: 15%;
    }
    ::v-deep .col:nth-of-type(6){
        width: 20%;
    }
    ::v-deep .col:nth-of-type(7){
        width: 5%;
    }

    ::v-deep .row{
        padding: 10px 0;
        border-bottom: 1px solid #dae4f2;
        align-items: center;        
    }
    
    ::v-deep .vs__search{
        display: none;
    }

    ::v-deep .vs--single.vs--open .vs__selected {
        position: relative;
    }

    .table {
        font-size: 12px;
        color: #000000;
        background: #ffffff;
        border: 1px solid #dae4f2;
        box-sizing: border-box;
        box-shadow: -2px 9px 8px rgba(23, 31, 76, 0.03);
        border-radius: 4px;
    }

    
    .table-header {
        background: #f5f7fa;
        color: #01134e;
    }

    .table-header .col {
        font-weight: bold;
        text-transform: uppercase;
        padding-top: 15px;
        padding-bottom: 15px;
    }


</style>