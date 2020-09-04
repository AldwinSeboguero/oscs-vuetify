<template> 
    <v-pagination
      v-model="currentPage"
      :length="lastPage" 
      :total-visible="7"
    ></v-pagination> 
</template>
<script>
export default {
    computed:{
        currentPage: {
            get(){
                return this.$store.state.studentPage.current_page;
            }
        },
        lastPage: {
            get(){
                return this.$store.state.studentPage.last_page;
            }
        }
    }
}
</script>