<template>
    <div id="app">
            <div class="navbar-expand-lg navbar-light bg-light">
                <nav-menu params="route: route"></nav-menu>
            </div>
            <div class="">
                
                <router-view></router-view>
            </div>
        </div>
    
</template>

<script>
    import NavMenu from './nav-menu'

    export default {
      components: {
        'nav-menu': NavMenu
      },

      data () {
        return {}
      }
    }
</script>

<style>
</style>
