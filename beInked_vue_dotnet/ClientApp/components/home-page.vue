<template>
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img src="../../pics/slider_1_home.jpg" alt="Los Angeles">
                    <div class="carousel-caption">
                        <h3>Los Angeles</h3>
                        <button type="button" class="btn btn-dark">Learn more</button>

                    </div>
                </div>

                <div class="carousel-item">
                    <img src="../../pics/slider_2_home.jpg" alt="Los Angeles">
                    <div class="carousel-caption">

                        <h3>Los Angeles</h3>

                        <p>We had such a great time in LA!</p>
                    </div>
                </div>

                <div class="carousel-item ">
                    <img src="../../pics/slider_2_home.jpg" alt="Los Angeles">
                    <div class="carousel-caption">
                        <h3>Los Angeles</h3>
                        <p>We had such a great time in LA!</p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="infoHome">
                    <p>
                        Hier findest Du deine passenden Ideen und Tattoomotive für dich.
                        Lass dich inspirieren von den Tätowierern in deiner Umgebung und Deutschlandweit.
                        Finde für dich deinen Tattoostil und das richtige Tattoostudio.
                    </p>
                </div>



            </div>

            <div>
                <marquee behavior="scroll" direction="right" class="style_marquee">
                    <img src="../../Logo/Logo.png" width="200" height="200" alt="Natural" />
                    <img src="../../Logo/Logo.png" width="200" height="200" alt="Natural" />
                    <img src="../../Logo/Logo.png" width="200" height="200" alt="Natural" />
                    <img src="../../Logo/Logo.png" width="200" height="200" alt="Natural" />
                </marquee>
            </div>

            <div class="fullscreen_pic parallax"></div>

            <div class="container">
                <div class="tattooArtists">
                    <img src="../../Logo/Logo.png" />
                    <img src="../../Logo/Logo.png" />
                </div>

            </div>

            <div class="fullscreen_pic_2 parallax"></div>

            <div>
                <marquee behavior="scroll" direction="right">
                    <img src="../../Logo/Logo.png" width="200" height="200" alt="Natural" />
                    <img src="../../Logo/Logo.png" width="200" height="200" alt="Natural" />
                    <img src="../../Logo/Logo.png" width="200" height="200" alt="Natural" />
                    <img src="../../Logo/Logo.png" width="200" height="200" alt="Natural" />
                </marquee>
            </div>
            </div>
        </div>
</template>

<script>
export default {
  data () {
    return {}
    }

    }

    
</script>

<style>
    .mt-4{
        padding-top:200px;
    }

    .carousel-item img {
        width: 100%;
        height: 100%;
    }
    .infoHome{
        margin-top:50px;
        margin-bottom:100px;
    }

    .styleIcons {
        
        display: flex;
        justify-content: center;
        align-items: center;
    
    }

    .styleIcons img {
        width: 300px;
        height: 300px;
        margin-bottom:100px;
    }

.parallax { /* The image used */
            background-image: url("../../pics/tattoo-3741259_1920.jpg"); /* Set a specific height */
            min-height: 500px; /* Create the parallax scrolling effect */
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom:50px;
}


    .tattooArtists img{
        width: 300px;
        height: 300px;
        margin-top:50px;
        margin-bottom: 100px;
    }

    .style_marquee{
        margin-bottom:50px;
    }
</style>
