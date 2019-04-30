#!/bin/bash

if [ $NODE_ENV = "production" ]; then
  node dist/entries/migrate.js
else
  ts-node src/entries/migrate.ts
  NODE_ENV=test ts-node src/entries/migrate.ts # run test migrations
fi
