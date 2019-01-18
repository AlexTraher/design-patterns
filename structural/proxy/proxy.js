


class Database {
  getExpensiveQuery(query) {
    return {
      result: `result of ${query}`,
      msg: `got using db`,
    }
  }
}

// A common use case for proxies is for caching
class DatabaseProxy {
  

  constructor(database) {
    this.database = database;
    this.cachedQueries = {};

  }

  getExpensiveQuery(query) {
    if (this.cachedQueries[query]) {
      return this.cachedQueries[query];
    }

    const dbResult = this.database.getExpensiveQuery(query);

    this.cachedQueries[query] = {
      result: dbResult.result,
      msg: 'got using cache',
    };

    return dbResult;
  }
}

module.exports = {
  DatabaseProxy,
  Database,
}