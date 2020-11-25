import { AutoCompany } from "./models/AutoCompany"
import { Company } from "./models/Company";
import { SASCompany } from "./models/SASCompany";

console.log("hello world")

const c: Company = new SASCompany(15421214, "MyCompany");

const tax = c.computeAnnualTax(10);

console.log(tax)