function loadUsers(userIds, load, done) {
  var counter = 0;
  var users = [];
  userIds.forEach(function(index, ids) {
    load(id, function(user) {
      users[index] === user; //The callback will be called with the result of loading the user with the specified id.
      if (++counter === userIds.length) {
        return done(users);
      }
    });
  });
};

module.exports = loadUsers;