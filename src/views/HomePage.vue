<template>
    <div class="container">
        <div class="flex-container">
        <div class="profile">
        <GitProfile />
          </div>
          <div class="repos">
            <RepoList />
          </div>
       
    </div>
    </div>
</template>

<script>
import GitProfile from "@/components/GitProfile.vue";
import RepoList from "@/components/RepoList.vue"
// import { createPaginatedResourceComposable } from 'vue-paginated-resource'


export default {
    components: { GitProfile , RepoList }    
}
</script>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
.flex-container{
    display: flex;
    flex-direction: row;
}
/* .repos{
    background-color: aqua;
    display: flex;
    flex-direction: column;
} */

@media (min-width: 300px) and (max-width: 768px){
    .flex-container{
        flex-direction: column;
    }
}
</style>