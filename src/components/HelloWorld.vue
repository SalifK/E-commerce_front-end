<template>
  <v-container>
    <h2 class="display-2 mb-4">Hot product showing</h2>

    <v-layout row wrap>
      <template v-for="(product, index) in products">
      <v-flex xs2 pa-1 :key="index">
      <v-hover >
        <v-card slot-scope="{hover}" class="mx-auto" color="green lighten-4" max-width="650" height="350">
          <v-img :src="product.src" :aspect-ratio="16/9">
            <v-expand-transition>
              <div v-if="hover" class="d-flex transition-fast-in-fast-out orange display-3 draken-2 v-card--reveal display3 black--text" style="height: 100%;">
                 ${{product.price}}
              </div>
            </v-expand-transition>
          </v-img>

          <v-card-text class="pt-4" style="position: relative;">
            <v-btn absolute color="orange" class="white--text" fab medium right top>
              <v-icon>
                shopping_cart
              </v-icon>
            </v-btn>
            <div class="font-weight-light grey--text title mb-2">
                {{product.category}}
            </div>
            <h3 class="display-1 font-weight-light orange--text mb-2">
                {{product.title}}
            </h3>
            <div class="font-weight-light mb-2">
                {{product.description}}
            </div>
          </v-card-text>
          
        </v-card>
      </v-hover>
    
    </v-flex>
    </template>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      products: [{
          price: '14,99',
          src: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000',
          category: 'For the perfect phone',
          title: 'Engine Electronic',
          description: 'Phone of quality, all guaranties required'
      },
      {
          price: '54,99',
          src: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000',
          category: 'For the perfect phone',
          title: 'Engine Electronic',
          description: 'Phone of quality, all guaranties required'
      },
      {
          price: '84,99',
          src: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000',
          category: 'For the perfect phone',
          title: 'Engine Electronic',
          description: 'Phone of quality, all guaranties required'
      },
      {
          price: '94,99',
          src: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000',
          category: 'For the perfect phone',
          title: 'Engine Electronic',
          description: 'Phone of quality, all guaranties required'
      },
      {
          price: '34,99',
          src: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000',
          category: 'For the perfect phone',
          title: 'Engine Electronic',
          description: 'Phone of quality, all guaranties required'
      },
      {
          price: '404,99',
          src: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000',
          category: 'For the perfect phone',
          title: 'Engine Electronic',
          description: 'Phone of quality, all guaranties required'
      }]
    }),
  }
</script>

<style scoped>
  .v-card--reveal{
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
  }
  .v-card h3.display-1{
    font-size: 24px i !important;
  }
</style>