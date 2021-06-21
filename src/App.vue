
<template>
  <v-app>

    <NavigationTop />
    
  
      
      
    
    

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer />

  </v-app>
  
</template>

<script>



import Footer from './components/shared/footer';
import NavigationTop from './components/shared/navigation-top';



export default {
  name: 'App',

  components: {
    
    Footer,
    NavigationTop,

  },

  data: () => ({
   drawer: false,
   items:[{
     icon: 'perm_identity',
     href: '#',
     title:'Account'
   }],
  
  }),
};

       
</script>

