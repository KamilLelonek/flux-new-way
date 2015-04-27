import Delivery from './delivery'
import Product  from './product'
import Company  from './company'
import Customer from './customer'

export default class OfferRequest {
  constructor(id, delivery, products, company, customer) {
    this.id       = id;
    this.delivery = delivery;
    this.products = products;
    this.company  = company;
    this.customer = customer;
  }

  static buildFromJson(offerRequestJson) {
    return new OfferRequest(
      offerRequestJson['id'],
      OfferRequest.buildDeliveryFromJson(offerRequestJson['delivery']),
      OfferRequest.buildProductsFromJson(offerRequestJson['products']),
      OfferRequest.buildCompanyFromJson(offerRequestJson),
      OfferRequest.buildCustomerFromJson(offerRequestJson)
    )
  }

  static buildDeliveryFromJson(deliveryJson) {
    return Delivery.buildFromJson(deliveryJson)
  }

  static buildProductsFromJson(productsJson) {
    return productsJson.map(product => OfferRequest.buildProductFromJson(product))
  }

  static buildProductFromJson(productJson) {
    return Product.buildFromJson(productJson)
  }

  static buildCompanyFromJson(companyJson) {
    return Company.buildFromJson(companyJson)
  }

  static buildCustomerFromJson(customerJson) {
    return Customer.buildFromJson(customerJson)
  }
}
