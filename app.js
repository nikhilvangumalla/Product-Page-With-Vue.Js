let app = new Vue({
  el: '#app',
  data: {
    productName: 'Amer Lorn Chair',
    image: './images/Amer Lorn Chair.webp',
    inStock: true,
    details: [
      '100% Mango Wood',
      'Assembly - No',
      'Size - 62cm x 72cm x 82cm',
      'Weight - 12.1 Kg'
    ],
    varients: [
      {
        varientId: 10627504,
        varinetColor: 'Dark Grey'
      },
      {
        varientId: 10627505,
        varinetColor: 'Light Grey'
      }
    ]
  }
});
