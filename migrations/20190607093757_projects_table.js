
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name', 255)
                .notNullable()
                .unique();
            
            tbl.text('description');

            tbl.boolean('finished')
                .defaultTo(false);
            
            tbl.timestamps(true, true);
        })
        .createTable('actions', tbl => {
            tbl.increments();

            tbl.text('action_description');

            tbl.text('action_notes');

            tbl.boolean('finished')
                .defaultTo(false);
            
            tbl.timestamps(true, true);
            
            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('actions')
        .dropTableIfExists('projects');
};
