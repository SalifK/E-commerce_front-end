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
      <v-icon @click="drawer = !drawer"> fas fa-list </v-icon>
      <v-toolbar-title> <a href="/">Shopping-Electro</a> </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-item>
        <v-btn flat>
          Products
        </v-btn>

        <v-btn flat>
          <v-badge left color="green">
            <span slot="badge">5</span>
            <v-icon>shopping_cart</v-icon> Basket
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