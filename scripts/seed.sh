#!/bin/bash

if [[ $NODE_ENV = "production" ]]; then
  node dist/entries/seed.js
else
  ts-node src/entries/seed.ts
  NODE_ENV=test ts-node src/entries/seed.ts # run test migrations
fi
