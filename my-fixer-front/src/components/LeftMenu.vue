<template lang="">
    <div class="left-menu" >
        <div class="menu-logo">
            <img src="@/assets/img/menu/menu-logo.png" />
        </div>
        <ul v-if="!isAdminMode">
            <li v-for="page in pages" :key="page.name" :class="{'active': page.name === activePage}" @click="navigate(page.name)">
                <img :src="page.img" />      
            </li>
        </ul>

        <ul v-if="isAdminMode">
            <li v-for="page in adminPages" :key="page.name" :class="{'active': page.name === activePage}">
                <img :src="page.img" />                
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        isAdminMode: {
            type: Boolean
        },
        activePage: {
            required: true
        }
    },

    data: function () {
        return {
            pages: [                
                { name: 'search', img: require('@/assets/img/menu/search.png') },
                { name: 'profile', img: require('@/assets/img/menu/profile.png') },
                { name: 'email', img: require('@/assets/img/menu/mail.png') },
                { name: 'calendar', img: require('@/assets/img/menu/calendar.png') }
            ],

            adminPages: [                
                { name: 'admin-zone', img: require('@/assets/img/menu/users.png')}
            ]

        }
    },

    methods: {
        navigate: function(name){
            if(['profile', 'search'].indexOf(name) !== -1) {
                this.$router.replace({
                    name: name           
                });
            }            
        }
    }
}
</script>
<style lang="scss" scoped>

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
        margin-top: 30px;
    }

    .menu-logo {
        height: 60px;
        min-height: 60px;
    }

    .menu-logo img {
        width: 30px;
        height: 30px;
    }

    .left-menu li {
        padding: 15px 20px;
        margin: 10px 0;
        text-align: center;
        position: relative;
    }

    .left-menu li img {
        width: 20px;
        opacity: 0.5;
    }

    .left-menu li.active img {
        opacity: 1;
    }

    .left-menu li.active:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background: #0ad69c;
    }

    .left-menu {
        position: fixed;
        left: 0;
        top: 0;
        width: 80px;
        height: 100%;
        background: #01134e;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>