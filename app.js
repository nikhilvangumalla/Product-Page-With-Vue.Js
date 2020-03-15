Vue.component('Product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
      default() {
        return false;
      }
    },
    cart: {
      type: Array,
      required: true
    }
  },
  template: `
        <div class="product">
        <div class="product__image">
          <img :src="image" :alt="productName" />
        </div>
        <div class="product__info">
          <h1>{{productName}}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else class="lineThrough">Out of Stock</p>
          <p>Shipping: {{shipping}}</p>
          <h3>Features</h3>
          <ul>
            <li v-for="detail in details">{{detail}}</li>
          </ul>
          <div
            v-for="(varient, index) in varients"
            :key="varient.id"
            class="cursorPointer colorRound"
            :style="{backgroundColor: varient.color}"
            @mouseover="updateProduct(index)"
          ></div>
          <br />
          <button
            class="btn cursorPointer"
            v-on:click='addToCart'
            :disabled="!inStock"
            :class="{disableButton: !inStock}"
          >
            Add to Cart
          </button>
          <button
            class="btn cursorPointer"
            @click="removeFromCart"
            :disabled="!cartLength"
            :class="{disableButton: !cartLength}"
          >
            Remove from Cart
          </button>
        </div>
      </div>`,
  data() {
    return {
      selectedVarient: 0,
      details: [
        '100% Mango Wood',
        'Assembly - No',
        'Size - 62cm x 72cm x 82cm',
        'Weight - 12.1 Kg'
      ],
      varients: [
        {
          id: 10627504,
          color: 'darkgrey',
          image: './images/Amer Thea Chair.webp',
          name: 'Amer Thea Chair',
          quantity: 10
        },
        {
          id: 10627505,
          color: '#e7daca',
          image: './images/Amer Lorn Chair.webp',
          name: 'Amer Lorn Chair',
          quantity: 0
        }
      ]
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.varients[this.selectedVarient].id);
    },
    removeFromCart: function() {
      this.$emit('remove-from-cart', this.varients[this.selectedVarient].id);
    },
    updateProduct(index) {
      this.selectedVarient = index;
    }
  },
  computed: {
    productName() {
      return this.varients[this.selectedVarient].name;
    },
    image() {
      return this.varients[this.selectedVarient].image;
    },
    inStock() {
      return this.varients[this.selectedVarient].quantity;
    },
    shipping() {
      return this.premium ? 'Free' : 'RS 50';
    },
    cartLength() {
      return this.cart.length > 0 ? true : false;
    }
  }
});

let app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeFromCartGlobal(id) {
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    }
  }
});
