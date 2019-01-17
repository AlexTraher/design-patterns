

// here TreeType is our flyweight
// it stores the shared state between many trees
class TreeType {
  constructor(name) {
    this.name = name;
  }

  getDescription() {
    return `I am a ${this.name} tree.`;
  }
}

class Tree {
  constructor(height, type) {
    this.height = height;
    this.type = type;
  }

  grow() {
    this.height++;
  }

  getDescription() {
    return `${this.type.getDescription()} I have a height of ${this.height}.`;
  }

  getHeight() {
    return this.height;
  }
}


class TreeFactory {

  constructor() {
    this.treeTypes = {};
  }

  getTreeType(name) {
    this.treeTypes[name] = this.treeTypes[name] || new TreeType(name);
    return this.treeTypes[name];
  }
}

class Forest {

  constructor(treeFactory) {
    this.treeFactory = treeFactory;
    this.trees = [];
  }

  plantTree(name, height) {
    const treeType = this.treeFactory.getTreeType(name);
    this.trees.push(new Tree(height, treeType));
  }

  describeForest() {
    return this.trees.map((tree) => tree.getDescription());
  }
}

module.exports = {
  TreeType,
  Tree,
  TreeFactory,
  Forest,
};