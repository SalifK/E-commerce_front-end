<template>
    <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-title>
          <v-list-title-content>
            <v-list-title-title>
              Menu
            </v-list-title-title>
          </v-list-title-content>
        </v-list-title>

        <v-divider></v-divider>

        <template v-for="(item, index) in items">
          <v-list-title :key="index" :href="item.href">
            <v-list-title-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-title-action>
            <v-list-title-action>
              <v-list-title-title v-html="item.title"></v-list-title-title>
            </v-list-title-action>
          </v-list-title>
        </template>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark >
      <v-btn flat  href="/index">
          Home
        </v-btn>
        <v-btn flat href="/about" >
          About
        </v-btn>
        <v-btn flat href="/produit">
          Products
        </v-btn>
        <v-btn flat href="/contact" >
          Contact
        </v-btn>
      <v-toolbar-title > <a href="/" style=" background-color: #51da2f; color: white; padding: 14px 25px; position:fixed; z-index: 100;top:50%;left:50%;margin:-32px 0 0 -15px;width:200px;height:65px;display: inline-block;">Shopping-Electro</a> </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="/login" >
          Login
        </v-btn>
        <v-btn flat href="/Signin" >
          Sign in
        </v-btn>
      <v-toolbar-item>
        <v-btn flat href="http://localhost:8080/basket">
          <v-badge left color="green" >
            <span slot="badge">5</span>
            <v-icon  >shopping_cart</v-icon> Basket
          </v-badge>
        </v-btn>
      </v-toolbar-item>
      
    </v-toolbar>
    </div>
</template>
<script>
    export default{
        data:() =>({
             drawer: null,
            items:[{
                icon: 'perm_identity',
                href: '#',
                title:'Account'
            }]
        })
    }   
</script>