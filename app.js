let app = new Vue({
  el: '#app',
  data: {
    productName: 'Amer Thea Chair',
    image: './images/Amer Thea Chair.webp',
    inStock: true,
    details: [
      '100% Mango Wood',
      'Assembly - No',
      'Size - 62cm x 72cm x 82cm',
      'Weight - 12.1 Kg'
    ],
    varients: [
      {
        varientId: 10627505,
        varientColor: 'darkgrey',
        varientImage: './images/Amer Thea Chair.webp',
        varientName: 'Amer Thea Chair'
      },
      {
        varientId: 10627504,
        varientColor: '#e7daca',
        varientImage: './images/Amer Lorn Chair.webp',
        varientName: 'Amer Lorn Chair'
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
    updateProduct(varientName, varientImage) {
      this.productName = varientName;
      this.image = varientImage;
    }
  }
});
