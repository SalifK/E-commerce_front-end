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
    <h2 class="display-2 mb-4">Basket</h2>

    <v-list two-line>
      <template v-for="(product, index) in products">
        <v-list-tile :key="product.product_id" avatar>
          <v-list-tile-avatar>
            <img src="@/assets/iphone.png" width="100">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="product.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="product.sub_title"></v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile>
            {{product.price}}$
          </v-list-tile>

          <v-list-tile-action>
            <v-text-field label="Quantity" reverse :value="product.qty"></v-text-field>
          </v-list-tile-action>

          <v-list-tile>
            {{product.price * product.qty}}$
          </v-list-tile>

          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="#51da2f lighten-1">delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider v-if="index + 1 < products.length" :key="index"></v-divider>
      </template>
    </v-list>

    <v-container>
      <v-btn color="#51da2f" larger style="float: right;" href="/index">Make order</v-btn>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      products: [{
        product_id: 'kitchen-1',
       
        
        title: 'Iphone 12 pro max',
        
        price: 2000 ,
        qty: 1
      },]
    })
  }
</script>

