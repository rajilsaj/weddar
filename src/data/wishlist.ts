import { WishlistItem } from '../types';
import { images } from '../constants/images';

export const wishlist: WishlistItem[] = [
  {
    id: '1',
    name: 'Breville Dinnerware Set',
    description: 'Complete dinnerware set from Crate and Barrel',
    imageUrl: images.wishlist.dinnerware,
    price: 'NGN 45,000',
  },
  {
    id: '2',
    name: 'Bakeware Set',
    description: 'Professional baking essentials',
    imageUrl: images.wishlist.bakeware,
    price: 'NGN 32,000',
  },
  {
    id: '3',
    name: 'Copper Skillet',
    description: 'Premium non-stick cookware',
    imageUrl: images.wishlist.skillet,
    price: 'NGN 28,000',
  },
  {
    id: '4',
    name: 'Kitchen Cookware Set',
    description: 'Essential pots and pans collection',
    imageUrl: images.wishlist.cookware,
    price: 'NGN 55,000',
  },
  {
    id: '5',
    name: 'Premium Glassware',
    description: 'Elegant glass set for entertaining',
    imageUrl: images.wishlist.glassware,
    price: 'NGN 22,000',
  },
  {
    id: '6',
    name: 'Kitchen Utensils Set',
    description: 'Complete cooking tools collection',
    imageUrl: images.wishlist.utensils,
    price: 'NGN 18,000',
  },
  {
    id: '7',
    name: 'Small Appliances',
    description: 'Modern kitchen gadgets',
    imageUrl: images.wishlist.appliances,
    price: 'NGN 65,000',
  },
  {
    id: '8',
    name: 'Gift from Crate and Barrel',
    description: 'Any item from our registry',
    imageUrl: images.wishlist.kitchenware,
    price: 'Any amount',
  },
];
