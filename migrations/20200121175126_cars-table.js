exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .text("VIN", 128)
      .unique()
      .notNullable();
    tbl.text("make", 128).notNullable();
    tbl.integer("model", 15).notNullable();
    tbl.integer("mileage", 15).notNullable();
    tbl.text("transmission", 15);
    tbl.text("title", 15);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
