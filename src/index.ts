import { Checkout } from './checkout';
import { Product } from './models/product';
import { AppleTVPricingRule } from './rules/apple-tv-pricing-rule';
import { SuperIPadPricingRule } from './rules/super-ipad-pricing-rule';
import { RegularPricingRule } from './rules/regular-pricing-rules';

// Define pricing rules
const pricingRules = [
  new AppleTVPricingRule(),
  new SuperIPadPricingRule(),
  new RegularPricingRule()
];

// Initialize checkout with pricing rules
const co = new Checkout(pricingRules);

// Simulate scanning items
co.scan({ sku: 'atv', name: 'Apple TV', price: 109.50 });
co.scan({ sku: 'atv', name: 'Apple TV', price: 109.50 });
co.scan({ sku: 'atv', name: 'Apple TV', price: 109.50 });
co.scan({ sku: 'vga', name: 'VGA adaptor', price: 30 });

// Output total price
console.log(`Total expected: $${co.total().toFixed(2)}`); // Total expected: $2718.95
