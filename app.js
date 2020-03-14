let app = new Vue({
  el: '#app',
  data: {
    selectedVarient: 0,
    details: [
      '100% Mango Wood',
      'Assembly - No',
      'Size - 62cm x 72cm x 82cm',
      'Weight - 12.1 Kg'
    ],
    varients: [
      {
        id: 10627505,
        color: 'darkgrey',
        image: './images/Amer Thea Chair.webp',
        name: 'Amer Thea Chair',
        quantity: 10
      },
      {
        id: 10627504,
        color: '#e7daca',
        image: './images/Amer Lorn Chair.webp',
        name: 'Amer Lorn Chair',
        quantity: 0
      }
    ],
    cart: 0
  },
  methods: {
    removeFromCart: function() {
      if (this.cart == 0) {
        this.cart = 0;
      } else {
        this.cart -= 1;
      }
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
    }
  }
});
