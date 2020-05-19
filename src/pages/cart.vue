<template>
    <div>
        <order-header></order-header>
        cart
        <NavFooter></NavFooter>
    </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
export default {
    name: 'cart',
    components:{
        OrderHeader,
        NavFooter
    }
}
</script>