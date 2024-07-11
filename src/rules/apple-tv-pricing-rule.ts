import { Product } from '../models/product';
import { PricingRule } from '../models/pricing-rule';

export class AppleTVPricingRule implements PricingRule {
  apply(items: Product[]): number {
    const atvItems = items.filter(item => item.sku === 'atv');
    const regularPrice = atvItems[0]?.price || 0;
    const discountQuantity = Math.floor(atvItems.length / 3);
    const remainingQuantity = atvItems.length % 3;
    return discountQuantity * 2 * regularPrice + remainingQuantity * regularPrice;
  }
}
