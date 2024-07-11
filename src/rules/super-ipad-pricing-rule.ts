import { Product } from '../models/product';
import { PricingRule } from '../models/pricing-rule';

export class SuperIPadPricingRule implements PricingRule {
  apply(items: Product[]): number {
    const ipdItems = items.filter(item => item.sku === 'ipd');
    const regularPrice = ipdItems[0]?.price || 0;
    const discountPrice = 499.99;
    if (ipdItems.length > 4) {
      return ipdItems.length * discountPrice;
    } else {
      return ipdItems.length * regularPrice;
    }
  }
}
