<template>
    <div class="container">
        <h1>Github Repository List</h1>
        <div v-if="!repos">
           <div class="loader"> <div class="loadingio-spinner-spinner-3f5hoxenmf2"><div class="ldio-7wuj7li5mfc">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div></div>
        </div>
        <div class="repository" v-else>
            <div class="repos" v-for="repo in pagination" :key="repo.id">
                <div class="repo">
                    <p class="repo-name"> {{ repo.name }} </p>

                   <div> <img class="repo-image" src="@/images/yancy-min-842ofHC6MaI-unsplash.webp" > </div>

                    <router-link :to="`/repoDetails/${repo.name}`"><button class="link">View more</button></router-link>

                    <!-- <router-link :to="`/books/${book.id}`"></router-link> -->
                </div>
            </div>

        </div> 
        <div class="pagination"> 
            <button class="pagination-buttons" @click="previous" >Prev</button> <button class="pagination-buttons" @click="next">Next</button>
            
        </div>
                
    </div>
</template>

<script>
import axios from "axios"



export default {

    data() {
        return {
            repos: null,
            pageNumber: 1,
            postPerPage: 6,

        };
    },

    created: function () {
        axios.get("https://api.github.com/users/Ibom99/repos").then((response) => {
            this.repos = response.data;
        })
            .catch(error => {
                console.log(error)
            });

    },
    computed: {
        pagination() {
            const indexOfLastPost = this.pageNumber * this.postPerPage
            const indexOfFirstPost = indexOfLastPost - this.postPerPage


            return this.repos.slice(indexOfFirstPost, indexOfLastPost)
        },
        totalPage(){
            return this.repos.length / this.postPerPage
        }
    },
    methods: {
        next(){
           if (this.pageNumber <= this.totalPage) {
            this.pageNumber++
           }
        },
        previous(){
            if (this.pageNumber > 1 ){
                this.pageNumber--
            }
        }
    }



}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    width: 70vw;
    height: 100vh;
    background-color: white;
}

h1 {
    text-align: center;
    padding: 2rem 1.5rem 1.5rem 0rem;
    font-family: 'Press Start 2P', cursive;
}

.repository {
    /* padding-top: 20rem; */
    text-align: center;
    /* padding-left: 1.2rem; */
    padding: 1.1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr ;
    gap: 2rem;
    /* row-gap: 1rem;
    column-gap: 1rem; */
    margin: 0 auto;
    /* margin-top: 4rem; */
}

.repos {
   
    /* border: 1px solid rgb(115, 43, 155) ; */
    width: 17rem;
    height: fit-content;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: #DDA0DD 0px 6px 12px -2px, #DDA0DD 0px 3px 7px -3px;
}

.repo-name {
    padding: 0.5rem;
    font-family: 'Josefin Slab', serif;
    text-transform: capitalize;
    font-weight: bolder;
}
.repo-image{
    width: 70%;
    height: auto;  
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
}

.link {
    padding: 0.5rem;
    background-color: white;
    border-radius: 0.5rem;
    border: none;
    border-bottom: 1px solid black;
}

.link:hover {
    color: white;
    background-color: #DDA0DD;
    background-image: linear-gradient(225deg, rgb(231, 75, 184) 0%, rgb(115, 43, 155) 50%, rgb(57, 31, 105) 100%);
    transition: 0.3s;
    cursor: pointer;
}
.pagination{
        display: flex;
        justify-content: center;
        gap: 1rem;
        /* padding: 0.2rem; */
    }
    .pagination-buttons{
        font-family: 'Press Start 2P', cursive;
        padding: 0.4rem;
        background-color: white;
        /* background-color: #DDA0DD; */
    border-radius: 0.5rem;
    border: none;
    border-bottom: 1px solid black;
    }
    .pagination-buttons:hover{
        color: white;
        background: linear-gradient(105.2deg, rgb(255, 78, 78) 11.2%, rgb(253, 176, 71) 117.9%);
    transition: 0.3s;
    cursor: pointer;
    }

    .loader{
    display: flex;
    justify-content: center;
}

@keyframes ldio-7wuj7li5mfc {
  0% { opacity: 1 }
  100% { opacity: 0 }
}
.ldio-7wuj7li5mfc div {
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-7wuj7li5mfc linear 1s infinite;
  background: #74007a;
  width: 12px;
  height: 24px;
  border-radius: 6px / 12px;
  transform-origin: 6px 52px;
}.ldio-7wuj7li5mfc div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.9166666666666666s;
  background: #74007a;
}.ldio-7wuj7li5mfc div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -0.8333333333333334s;
  background: #74007a;
}.ldio-7wuj7li5mfc div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.75s;
  background: #74007a;
}.ldio-7wuj7li5mfc div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.6666666666666666s;
  background: #74007a;
}.ldio-7wuj7li5mfc div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.5833333333333334s;
  background: #74007a;
}.ldio-7wuj7li5mfc div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.5s;
  background: #74007a;
}.ldio-7wuj7li5mfc div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.4166666666666667s;
  background: #74007a;
}.ldio-7wuj7li5mfc div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.3333333333333333s;
  background: #74007a;
}.ldio-7wuj7li5mfc div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.25s;
  background: #74007a;
}.ldio-7wuj7li5mfc div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.16666666666666666s;
  background: #74007a;
}.ldio-7wuj7li5mfc div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.08333333333333333s;
  background: #74007a;
}.ldio-7wuj7li5mfc div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
  background: #74007a;
}
.loadingio-spinner-spinner-3f5hoxenmf2 {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
}
.ldio-7wuj7li5mfc {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-7wuj7li5mfc div { box-sizing: content-box; }
/* generated by https://loading.io/ */


@media (min-width: 300px) and (max-width: 768px) {
    .container {
        width: 100vw;
    }

    .repository {
        display: grid;
        grid-template-columns: 1fr;
        /* grid-template-rows: 1fr 1fr; */
        width: 20rem;
        margin: 0 auto;
    }

    h1 {
        font-size: 1rem;
        margin-top: 1rem;
    }

    .pagination{
      padding-bottom: 2.8rem;
    }
}</style>