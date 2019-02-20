

class CustomerToParty  {
  constructor(party) {
    this._party = party;
  }
  accept(visitor) {
   return visitor.visitParty(this);
  }
}

class CustomerToHome {
  constructor(home) {
    this._home = home;
  }
  accept(visitor) {
    return visitor.visitHome(this);
  }
}

// The Taxi here represents the visitor
class Taxi {
  visitParty(customer) {
    return `Taking customer to ${customer._party} (party)`;
  }

  visitHome(customer) {
    return `Taking customer to ${customer._home} (home)`;
  }
}

module.exports = {
  CustomerToParty,
  CustomerToHome,
  Taxi,
}

