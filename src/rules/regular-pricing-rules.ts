import { Product } from '../models/product';
import { PricingRule } from '../models/pricing-rule';

export class RegularPricingRule implements PricingRule {
  apply(items: Product[]): number {
    const regularItems = items.filter(item => item.sku !== 'atv' && item.sku !== 'ipd');
    return regularItems.reduce((total, item) => total += item.price, 0);
  }
}
