#!/bin/bash

if [ $NODE_ENV = "production" ]; then
  node dist/entries/rollback.js
else
  ts-node src/entries/rollback.ts
fi
