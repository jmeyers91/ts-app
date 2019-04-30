#!/bin/bash

if [[ $NODE_ENV = "production" ]]; then
  node dist/entries/migrate.js
else
  if [[ $NODE_ENV = "development" ]]; then
    ts-node src/entries/migrate.ts
  fi
  NODE_ENV=test ts-node src/entries/migrate.ts # run test migrations
fi
