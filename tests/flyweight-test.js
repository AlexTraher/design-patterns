const { describe, it } = require('mocha');
const assert = require('assert');
const { TreeType, Tree, TreeFactory, Forest } = require('../structural/flyweight/flyweight');

describe('Flyweight example', function() {
  it('should describe a forest of trees', function() {
    const forest = new Forest(new TreeFactory());

    forest.plantTree('oak', 22);
    forest.plantTree('birch', 5);

    assert.deepEqual(forest.describeForest(),[
      'I am a oak tree. I have a height of 22.',
      'I am a birch tree. I have a height of 5.',
    ]);
  });

  it('should describe a single tree', function() {
    const treeFactory = new TreeFactory();
    const treeType = treeFactory.getTreeType('oak');
    const tree = new Tree(10, treeType);

    assert.equal(tree.getDescription(), 'I am a oak tree. I have a height of 10.');
  });

  it('should describe a tree type', function() {
    const treeFactory = new TreeFactory();
    const treeType = treeFactory.getTreeType('birch');

    assert.equal(treeType.getDescription(), 'I am a birch tree.');
  });

  it('should let a tree grow', function() {
    const treeFactory = new TreeFactory();
    const treeType = treeFactory.getTreeType('oak');
    const tree = new Tree(10, treeType);

    assert.equal(tree.getHeight(), 10);

    tree.grow();

    assert.equal(tree.getHeight(), 11);
  });

  it('should provide the same TreeType instance to multiple trees of the same type', function() {
    const treeFactory = new TreeFactory();
    const treeTypeOne = treeFactory.getTreeType('oak');
    const treeTypeTwo = treeFactory.getTreeType('oak');

    // our flyweight here will be shared amongst all trees that are 'oak'
    assert.ok(treeTypeOne == treeTypeTwo);
  });

});