<template>
    <div class="container">
        <div class="flex-container">
        <div class="github">
            <GitProfile />
        </div>
        
        <div class="details">
            <h1>
            Repository Details
        </h1>
        
        <p class="title">{{ this.$route.params.id }}</p>
        <div class="button">
        <router-link to="/"><button class="link">Back to Repo List</button></router-link>
    </div>
        <!-- <p>{{ this.$route.params.details }}</p> -->
       
        <!-- <p>URL: {{ repos.id }}</p> -->
        <!-- <p>{{ repo.id }}</p> -->
    </div>
</div>
    </div>

</template>

<script>
// import axios from "axios"
import GitProfile from "@/components/GitProfile.vue";


// results = response?.data


export default {
components: { GitProfile },
    
    name: 'RepoDetails',
    // data(){
    //   repos : []
    // },
    // computed: {
    //  repo() {
    //     return this.$route.params
    //  },
    //  filtered(){
    //     return this.repos.filter(repo => repo.id = this.$route.params )

    //  }
    // } ,
    // created: function() {
    //      axios.get(`https://api.github.com/users/Ibom99/repos/${this.$route.params.name}`).then((response) => {
    //         this.repos = response.data;  
    //     })
    //     .catch(error => {console.log(error)
    //     });
    //     console.log(this.repos)
    // }
}

</script>
<!-- `https://api.github.com/users/Ibom99/repos/${this.$route.params.name}` -->

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@500&display=swap');

 
.flex-container{
    display: flex;
    flex-direction: row;
}
.details{
    /* padding: 1rem; */
    background-color: white;
    width: 70vw;
}
h1{
    text-align: center;
    padding: 1rem;
    font-family: 'Press Start 2P', cursive;
}
.title{
    padding: 1rem;
    font-family: 'Josefin Slab', serif;
    text-transform: capitalize;
    font-weight: bolder; 
    font-size: 2rem;
    text-align: center;
    border-radius: 0.5rem;
    width: 40rem;
    margin: 0 auto;
    margin-bottom:2rem ;
    /* border: 1px solid black; */
    box-shadow: #DDA0DD 0px 6px 12px -2px, #DDA0DD 0px 3px 7px -3px;

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
.button{
    text-align: center;
}

@media (min-width: 300px) and (max-width: 768px){
   
    .flex-container{
        flex-direction: column;
    }
    .details{
    height: 50vh;
    width: 100vw;
}
h1{
    font-size: 1rem;
  }
.title{
    font-size: 1rem;
width: 15rem;
margin: 0 auto;
}

button{
    margin-top: 2rem;
}
}
</style>