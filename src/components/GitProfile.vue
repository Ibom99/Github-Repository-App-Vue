<template>
    <div class="container">
        <div class="content">
            <div class="img">
                <img :src=" profile.avatar_url" > 
            </div>
        <h1> {{ profile.name }}</h1>
        <p class="location"> {{ profile.location }}</p>
        <p class="bio"> {{ profile.bio }}</p>

        <div class="follows">
            <div class="followers"><b>{{ profile.followers }}</b> <br>followers</div>
        <div class="following"><b>{{ profile.following }}</b>  <br>following</div>

        </div>
       
        <a :href="profile.html_url" target="_blank"><button>My Github Profile </button></a>

    </div>
    </div>
</template>

<script>
import axios from "axios"



export default {
    data() {
        return {
            profile:" ",
        };
    },
    
    created: function() {
         axios.get("https://api.github.com/users/Ibom99").then((response) => {
            this.profile = response.data;  
        })
        .catch(error => {console.log(error)
        });
        
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Quicksand&display=swap');

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
.container {
    background-color: #DDA0DD;
background-image: linear-gradient(225deg, rgb(231, 75, 184) 0%, rgb(115, 43, 155) 50%, rgb(57,31, 105) 100%);

    height: 100vh;
    width: 30vw;
}
.content{
    padding: 1rem;
    text-align: center;
    color: white;
    font-family: 'Quicksand', sans-serif;
}
.img{
   display: flex;
   justify-content: center;
}
img{
    border-radius: 12rem;
    padding: 10px;
    width: 80%;
    height: auto;
    border: 2px solid white;
    
}
h1{
    margin: 1.2rem;
    letter-spacing: 0.3rem;
}
.location{
    margin-bottom: 1rem;
}
.bio{
    margin-bottom: 1rem;
}

.follows{
    justify-content: center;
    display:flex;
    flex-direction: row;
    margin-bottom: 2rem;
}
.followers{
/* border: 1px solid blue; */
padding: 0.6rem  1.2rem 0.6rem 1.2rem;
background-color: white;
color: rgb(115, 43, 155) ;
border-top-left-radius: 0.5rem;
border-bottom-left-radius: 0.5rem;
font-weight: bolder;
}
.following{
/* border: 1px solid blue; */
padding: 0.6rem 1.2rem 0.6rem 1.2rem;
background-color: white;
color: rgb(231, 75, 184);
font-weight: bolder;
border-top-right-radius: 0.5rem;
border-bottom-right-radius: 0.5rem;
}
b{
    font-size: 1.2rem;
}

button {
    padding: 0.8rem ;
    border-radius: 1rem;  
    background-color: white;
    border: none;
}
button:hover{
    background: linear-gradient(105.2deg, rgb(255, 78, 78) 11.2%, rgb(253, 176, 71) 117.9%);
    color: white;
    font-weight: bolder;
    cursor: pointer;
    transition: 0.3s;
}
a{
    text-decoration: none;
    color: black;
}

@media (min-width: 300px) and (max-width: 768px){
    .container{
        width: 100vw;
        height: 60vh;
    }
    .content{
        font-size: 0.8rem;
    }
    img{
    
    width: 35%;
    height: auto;
    
}
.followers{
    padding: 0.3rem 0.6rem 0.3rem 0.6rem;
}
.following{
    padding: 0.3rem 0.6rem 0.3rem 0.6rem;
}

}
</style>