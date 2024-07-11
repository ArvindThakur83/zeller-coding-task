import { Product } from './models/product';
import { PricingRule } from './models/pricing-rule';

export class Checkout {
  private pricingRules: PricingRule[];
  private items: Product[] = [];

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
  }

  scan(item: Product) {
    this.items.push(item);
  }

  total(): number {
    let totalPrice = 0;
    this.pricingRules.forEach(rule => {
      totalPrice += rule.apply(this.items);
    });
    return totalPrice;
  }
}
