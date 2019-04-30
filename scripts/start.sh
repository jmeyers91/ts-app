#!/bin/bash

if [ $NODE_ENV = "production" ]; then
  node dist/entries/start.js
else
  ts-node-dev src/entries/start.ts
fi
