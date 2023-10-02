#!/bin/bash

# Change to your Shopware 6 project directory
# shellcheck disable=SC2164
cd /httpdocs/stage

# Run the cache clearing command
php bin/console cache:clear