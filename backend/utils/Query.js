class Query {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  Search() {
    const Name = this.queryStr.name
      ? { name: { $regex: this.queryStr.name, $options: "i" } }
      : {};

    this.query = this.query.find({ ...Name });

    return this;
  }
}

module.exports = Query;
