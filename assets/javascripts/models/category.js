export default class Category {
  constructor(id, name, ozCapacity) {
    this.id         = id;
    this.name       = name;
    this.ozCapacity = ozCapacity;
  }

  static buildFromJson(categoryJson) {
    return new Category(
      categoryJson['id'],
      categoryJson['name'],
      categoryJson['oz_capacity']
    )
  }
}
