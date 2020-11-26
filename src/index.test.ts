import { SASCompany } from "./models/SASCompany";
import { AutoCompany } from "./models/AutoCompany";

test('SASCompany', () => {
  const c = new SASCompany(0, "MySAS");
  const income = 100000
  const tax = SASCompany.TAX_PERCENTAGE * income;
  expect(c.computeAnnualTax(income)).toBe(tax);
});

test('AutoCompany', () => {
  const c = new AutoCompany(0, "MyAutoCompany");
  const income = 100000
  const tax = AutoCompany.TAX_PERCENTAGE * income;
  expect(c.computeAnnualTax(income)).toBe(tax);
});

