<template>
    <div id="app" class="container-fluid">
            
            <div class="navbar-expand-lg navbar-light bg-light">
                <nav-menu params="route: route"></nav-menu>
            </div>
            <div class="container">
                <div class="col-sm-2"> </div>
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
