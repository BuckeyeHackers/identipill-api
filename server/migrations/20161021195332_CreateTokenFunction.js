const fs = require('fs');
const path = require('path');

const upFilePath = path.join(__dirname, '/sql/20161021195332_CreateTokenFunction_up.sql');
const downFilePath = path.join(__dirname, '/sql/20161021195332_CreateTokenFunction_down.sql');

exports.up = (knex, Promise) => {
  const data = fs.readFileSync(upFilePath, { encoding: 'utf-8' });

  return Promise.all([
    knex.schema.raw(data),
  ]);
};

exports.down = (knex, Promise) => {
  const data = fs.readFileSync(downFilePath, { encoding: 'utf-8' });

  return Promise.all([
    knex.schema.raw(data),
  ]);
};
