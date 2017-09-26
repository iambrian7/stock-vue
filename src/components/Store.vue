<template>
<div class="store">
{{msg}}
<div id="store-cart" @click="showmodal = !showmodal">Cart <span v-if="cartCount" id="count">({{cartCount}})</span> </div>

    <div class="store-title">Items for Sale</div>
    <div class="store-item-containter">
        <div class="store-item" v-for="item in products">
            <img :src="item.img">
            {{item.info}} <button v-bind:data-id='item.id' @click='addToCart'>Add to Cart</button>
        </div>
    </div>
    <app-cart :active='showmodal' :myproducts='products' @close="closemodal"></app-cart>
    <!-- <div v-for="picture in pictures">
        <img src="http://lorempixel.com/1920/1920?1" v-img="picture">
    </div> -->
</div>
</template>

<script>
import Cart from '@/components/Cart'
export default {
  name: 'store',
  components: {"app-cart": Cart},
  data () {
    return {
        showmodal: false,
      msg: 'Store component',
      cartCount: 0,
      cartActive: false,
      products: [
       {id:0,name: "Snowflake", price: 100, qty: 1, purchased: false,img: "./static/img/little_cat.jpg",
        info: "The finest thing available for you"},
       {id:1,name: "Xmas", price: 145, qty: 1, purchased: false,img: "./static/img/little_cat.jpg",
        info: "The finest thing available for you"},
       {id:2,name: "Easter", price: 21.5, qty: 1, purchased: false,img: "./static/img/little_cat.jpg",
        info: "The finest thing available for you"}
     ],
      items: [
        {
        img: "./static/img/little_cat.jpg",
        info: "The finest thing available for you"
        },
         {
        img: "./static/img/little_cat.jpg",
        info: "The finest thing available for you"
        },
         {
        img: "./static/img/little_cat.jpg",
        info: "The finest thing available for you"
        },
      ],
    }
  },
  methods: {
      addToCart(e){
         // debugger
          this.cartCount++;
          var id =  e.target.dataset.id*1;
          console.log("add to : " + id)
          console.log("adding to product: " + this.products[id].name)
          this.products[id].purchased++;
      },
      closemodal: function(){
          console.log("closing modal................")
          this.showmodal = false;
      }
  },
  created() {
    this.msg = 'Example property update.'
    console.log('propertyComputed will update, as this.property is now reactive.')
  },
  updated: function(){
      console.log("updated Store.vue")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.store-item-list {
    display: flex;
    flex-direction: column;
}
.store-item {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    align-content: center;
    align-items: flex-start;
    border-bottom: 1px solid black;
    padding: 10px;
}
.store-item img {
    width: 200px;

}
#store-cart {
    position: absolute;
    top: 6%;
    left: 80%;
    width: 100px;
    height: 30px;
    background: red;
    border-radius: 5px;
}
</style>

