#!/bin/bash

dropdb ts_app 2> /dev/null
dropdb ts_app_test 2> /dev/null

echo 'Creating databases'
createdb ts_app
createdb ts_app_test
echo 'done'

./scripts/migrate.sh
./scripts/seed.sh
