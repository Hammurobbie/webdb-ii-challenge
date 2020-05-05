exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: 9292838292,
          make: 23,
          model: "honda",
          mileage: 100000,
          transmission: "manual",
          title: "salvaged"
        }
      ]);
    });
};
