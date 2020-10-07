<template>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        
        
            <ul class="navbar-nav">
                <li class="nav-item ">
                    <a class="nav-link" href="/tatoo-artists">Tattoo Artists <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/tattoo-style">Tattoo Style</a>
                </li>

                <a>
                    <img src="../../Logo/Logo.png" width="50" height="50" class="d-inline-block align-top" href="/#" alt="">
                </a>

                <li class="nav-item">
                    <a class="nav-link" href="/tattoo-galerie">Tattoo Galerie</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tattoo Styles
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="/">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>

            </ul>
        
    </nav>
</template>


<script>import { routes } from '../router/routes'

    export default {
        data() {
            return {
                routes,
                collapsed: true
            }
        },
        methods: {
            toggleCollapsed: function (event) {
                this.collapsed = !this.collapsed
            }
        }
    }</script>

<style scoped>
    .slide-enter-active, .slide-leave-active {
        transition: max-width .35s
    }

    .slide-enter, .slide-leave-to {
        max-width: 0px;
    }

    .slide-enter-to, .slide-leave {
        max-width: 20em;
    }
    .navbar{
        width: 100%;


    }
    .navbar-nav{
        align-items:center;
    }

    .main-nav {
        width: 100%;
        align-content: center;
    }

    .container{
        align-items:center;
        width:100%;
    }




    .a:hover {
        color: blue;
    }




</style>
