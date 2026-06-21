export const RESTAURANT = {
  name: "Roma Italian Restaurant",
  shortName: 'Roma',
  tagline: 'Veni. Vidi. Gustavi.',
  subtitle: 'Authentic Italian Cuisine in Clarksville',
  website: 'https://romaclarksville.com',
  websiteAlt: 'https://romaitalianclarksville.com',
  phone: '+19318022011',
  phoneDisplay: '(931) 802-2011',
  address: {
    street: '3402 Cainlo Dr Ste 500',
    city: 'Clarksville',
    state: 'TN',
    zip: '37042',
    full: '3402 Cainlo Dr Ste 500, Clarksville, TN 37042',
  },
  mapsUrl: 'https://maps.app.goo.gl/AvMuRTqKHMLkhiYHA',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.5!2d-87.3296024!3d36.6271845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886527dd526f89af%3A0x91c0c6d9707c12dd!2sRoma%20Italian%20Restaurant!5e0!3m2!1sen!2sus!4v1750000000000!5m2!1sen!2sus',
  orderUrl:
    'https://order.online/store/-45760402/?pickup=true&hideModal=true',
  social: {
    facebook: 'https://www.facebook.com/p/ROMA-Ristorante-61573487791116/',
    instagram: 'https://www.instagram.com/romaclarksville/',
  },
  hours: {
    summary: 'Open Daily: 11 AM – 9 PM',
    lunch: 'Weekday Lunch: Mon–Fri 11 AM – 3 PM',
    schedule: [
      { days: 'Sunday', hours: '11 AM – 9 PM' },
      { days: 'Monday', hours: '11 AM – 9 PM' },
      { days: 'Tuesday', hours: '11 AM – 9 PM' },
      { days: 'Wednesday', hours: '11 AM – 9 PM' },
      { days: 'Thursday', hours: '11 AM – 9 PM' },
      { days: 'Friday', hours: '11 AM – 9 PM' },
      { days: 'Saturday', hours: '11 AM – 9 PM' },
    ],
  },
  rating: {
    value: 4.9,
    count: 472,
    mapsUrl: 'https://maps.app.goo.gl/AvMuRTqKHMLkhiYHA',
  },
  reviews: [
    {
      author: 'Adam Morgan-Green',
      rating: 5,
      text: 'Wonderful food and service. Friendly, fast, attentive service. Could tell the food was made with care. Loved our experience and will definitely be back. You will love it!',
    },
    {
      author: 'Judith Hamilton',
      rating: 5,
      text: 'This place does not disappoint! From the quaint atmosphere to the service, and the best part THE FOOD! Plentiful portions with leftovers for another meal. Weekday lunch is priced better than fast food and much more satisfying.',
    },
    {
      author: 'Andrea Malee',
      rating: 4,
      text: 'My 1st time at Roma and it will not be my last! I pulled up to the restaurant and immediately felt like it was a homey place, very comfortable. Upon entering I was greeted warmly and the whole experience felt like dining with family.',
    },
  ],
  geo: {
    latitude: 36.6271845,
    longitude: -87.3296024,
  },
} as const;
