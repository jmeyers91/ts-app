#!/bin/bash

if [[ $NODE_ENV = "production" ]]; then
  node dist/entries/seed.js
else
  if [[ $NODE_ENV = "development" ]]; then
    ts-node src/entries/seed.ts
  fi
  NODE_ENV=test ts-node src/entries/seed.ts # run test migrations
fi
