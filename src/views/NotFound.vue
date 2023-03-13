<template>
   <div class="container">
      <div class="context">
         <h1>404</h1>
    <h2>Ooops!?</h2>
    <p class="error-message"> This page seems to have evaporated... </p>
    <div class="button">
    <router-link to="/"><button class="link">Go Back</button></router-link>
   </div>
      </div>
      
   </div>
</template>

<script>
export default {};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@500&display=swap');

  *{
   padding: 0px;
   margin: 0px;
   box-sizing: border-box;
  }
.container{
   background-image:url(@/images/pawel-czerwinski-kyo00lYIkLQ-unsplash.webp) ;
   background-size: cover;
   /* height: 100vh; */
/* background-color: #DDA0DD; */
height: 100vh;
}
.context{
   padding-top: 2rem;
}
h1{
    text-align: center;
    padding: 3rem;
    color: white;
    font-family: 'Press Start 2P', cursive;
    font-size: 4rem;
}
h2{
   color: white;
   text-align: center;
    padding: 3rem;
    font-family: 'Press Start 2P', cursive;
    font-size: 3rem;
}
.error-message{
   text-align: center;
   font-family: 'Josefin Slab', serif;
   font-size: 2rem;
   padding-bottom: 3rem;
   color: white;

}
.button{

   display: flex;
   justify-content: center;
}
.link{
    
    padding: 0.4rem;
    background-color: white;
    border-radius: 0.5rem;
    border: none;
    border-bottom: 1px solid black;
}
.link:hover{
color: white;
background-color: #DDA0DD;
background-image: linear-gradient(225deg, rgb(231, 75, 184) 0%, rgb(115, 43, 155) 50%, rgb(57,31, 105) 100%);
transition:0.3s;
cursor: pointer;
}


@media (min-width: 300px) and (max-width: 768px) {
   h1{
      font-size: 2rem;
   }
   h2{
      font-size: 1.5rem;
   }
   .error-message{
      font-size: 1.5rem;
   }
}
</style>