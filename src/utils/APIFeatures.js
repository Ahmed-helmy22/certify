class ApiFeatures {
  constructor(query, querystr) {
    this.query = query;
    this.querystr = querystr;
  }

  filter() {
    const queriedObj = { ...this.querystr };
    const excludedQueries = ['page', 'limit', 'fields', 'sort'];
    excludedQueries.forEach((el) => {
      delete queriedObj[el];
    });
    let queried = JSON.stringify(queriedObj);
    queried = queried.replace(
      /\b(lt|lte|gt|gte)\b/g,
      (matched) => `$${matched}`
    );
    this.query = this.query.find(JSON.parse(queried));
    return this;
  }

  sort() {
    if (this.querystr.sort) {
      const sorted = this.querystr.sort.split(',').join(' ');
      this.query = this.query.sort(sorted);
    } else {
      this.query.sort('-createdAt');
    }
    return this;
  }

  limit() {
    if (this.querystr.fields) {
      const selected = this.querystr.fields.split(',').join(' ');
      this.query = this.query.select(selected);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  paginate() {
    const limit = this.querystr.limit * 1 || 10;
    const page = this.querystr.page * 1 || 1;
    const skiped = limit * (page - 1);
    this.query = this.query.skip(skiped).limit(limit);
    return this;
  }
}
export default ApiFeatures;
