function getDependencies(tree, dependencies) {
  var dependencies = dependencies || [];
  var obj = tree.dependencies || {};
  if(!tree.dependencies) return [];

  Object.keys(obj).forEach(function(key) {
    var dependency = key + "@" + obj[key].version;

    if(dependencies.indexOf(dependency) < 0) {
      dependencies.push(dependency);
    }

    getDependencies(obj[key], dependencies);
  });

  return dependencies.sort();
}

module.exports = getDependencies

