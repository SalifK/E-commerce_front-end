<style >
/** logos gifts anll all */
.w3layouts_mail_grid {
    padding: 0 1em;
}
.w3layouts_mail_grid_left1{
	float: left;
    width: 70px;
    height: 70px;
    text-align: center;
}
.w3layouts_mail_grid_left1 i{
	font-size: 1.3em;
    color: #fff;
    line-height: 3.2em;
}
.w3layouts_mail_grid_left2{
	float:right;
	width:70%;
	text-align: left;
}
.w3layouts_mail_grid_left2 h3{
    font-size: 0.9em;
    color: #51da2f;
    margin: 0em 0 0.5em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
}
.w3layouts_mail_grid_left2 a{
	text-decoration:none;
	color: #545454;
	font-size:14px;
}
.w3layouts_mail_grid_left2 a:hover{
	color:#212121;
}
.w3layouts_mail_grid_left2 p{
color: #545454;
    font-size: 0.9em;
    line-height: 1.8em;
}
.w3layouts_mail_grid_left2 h3 {
       font-size: 0.8em;
	}
.w3layouts_mail_grid_left {
		width: 50%;
		float: left;
	}
/** logos gifts anll all */

</style>
<template>
  <v-container>
    <div id="schedule-bottom">
		<div id="col-md-9 agileinfo_schedule_bottom_left">
		
				<div id="w3ls_schedule_bottom_right_grid">
					<h3> WELCOME TO <span>shopping-Electro</span> </h3>
				<p> We guarantee you good quality with a good price</p>
				
				<div id="clearfix"> </div>

				</div>
			</div>
	
	</div>
    <h2 id="display-2 mb-4">Hot product showing</h2>

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
            <v-btn absolute color="#51da2f" class="white--text" fab medium right top>
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
    <!-- gifts and all -->
    <div class="coupons">
      <div class="coupons-grids text-center">
        <div class="w3layouts_mail_grid">
          <div class="col-md-3 w3layouts_mail_grid_left">
            <div class="w3layouts_mail_grid_left1 hvr-radial-out">
                <i class="fa fa-truck" aria-hidden="true"></i>
            </div>
            <div class="w3layouts_mail_grid_left2">
              <h3>LIVRAISON GRATUITE</h3>
            </div>
          </div>
        </div>
        <div class="w3layouts_mail_grid">
          <div class="col-md-3 w3layouts_mail_grid_left">
            <div class="w3layouts_mail_grid_left1 hvr-radial-out">
                <i class="fa fa-headphones" aria-hidden="true"></i>
            </div>
            <div class="w3layouts_mail_grid_left2">
              <h3>Support 24/7</h3>
            </div>
          </div>
        </div>
        <div class="w3layouts_mail_grid">
          <div class="col-md-3 w3layouts_mail_grid_left">
            <div class="w3layouts_mail_grid_left1 hvr-radial-out">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <div class="w3layouts_mail_grid_left2">
              <h3>Garantie de remboursement</h3>
            </div>
          </div>
        </div>
        <div class="w3layouts_mail_grid">
          <div class="col-md-3 w3layouts_mail_grid_left">
            <div class="w3layouts_mail_grid_left1 hvr-radial-out">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <div class="w3layouts_mail_grid_left2">
              <h3>Garantie de remboursement</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- gifts and all -->
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