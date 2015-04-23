import Category from './category'

export default class Product {
  constructor(id, quantity, category) {
    this.id       = id;
    this.quantity = quantity;
    this.category = category;
  }

  static buildFromJson(productJson) {
    return new Product(
      productJson['id'],
      productJson['quantity'],
      Product.buildCategoryFromJson(productJson['category'])
    )
  }

  static buildCategoryFromJson(categoryJson) {
    return Category.buildFromJson(categoryJson)
  }
}
