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
    
    
  
  <!--  product-->
   <div class="banner-bootom-w3-agileits">
       <div class="container">
           <div class="col-md-4 single-right-left ">
               <div class="grid images_3_of_2">
                   <div class="flexslider">
                       <ul class="slides">
                        
                           <div class="thumb-image"> <img src="@/assets/iphone.png" data-imagezoom="true" width="400" class="img-responsive">
                           </div>
                         
                       </ul>
                       <div class="clearfix"></div>
                   </div>
               </div>
           </div>
           <div class="col-md-8 single-right-left simpleCart_shelfItem">
               <!-- If we have promotion in this product -->
                    <h4 style="color: #e71f30;font-size: 2em;font-weight: 800;">offre spéciale 50  %   valable jusqu'à  22/06/2021 </h4><br>
					<h3>Iphone 12 pro max</h3>
					<p><span class="item_price">Prix : 2000 DT</span> <del>4000 DT</del></p>
           <!-- If we have promotion in this product -->
           <!--  product 
                   <h3>iphone</h3>
					<p><span class="item_price">Prix : 200 DT</span> </p>
            product -->
           </div>
           <div class="clearfix"> </div>
           <a href="/basket">
           <input 
           style="ont-size: 13px;color: #fff;background: #2fdab8;text-decoration: none;position: relative;border: none;border-radius: 0;width: 40%;text-transform: uppercase;padding: .5em 0;outline: none;letter-spacing: 1px;font-weight: 600;"
            type="submit"  class="button"   value="ADD to basket" name="submit" />
           </a>
           <div class="responsive_tabs_agileits">
               <div id="horizontalTab">
                   <ul class="resp-tabs-list">
                           <li style="color:red;">Description</li>			
					</ul>
                    <div class="resp-tabs-container">
                        <div class="tab1">
                            <div class="single_page_agile_its_w3ls">
                                <h6>Iphone 12 pro max</h6>
                                <h>iPhone 12 Pro Max 128gb Pacific Blue - Blue is Apple's flagship of 2020, the lightest and thinnest 5g in the world. It has a 6.7-inch display with a resolution of 2778 × 1284 pixels and Super Retina XDR screen.	</h>
                            </div>
                        </div>
                    </div>
				</div>
            </div>		
       </div>
   </div>
   <!--  product-->

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
// Easy Responsive Tabs Plugin

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

