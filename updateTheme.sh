#!/bin/bash

# Change to your Shopware 6 project directory
# shellcheck disable=SC2164
cd /httpdocs/stage

# Run the cache clearing command
php bin/console cache:clear

# Get the current timestamp in a desired format (e.g., YYYYMMDD_HHMMSS)
timestamp=$(date +"%Y%m%d_%H%M%S")

# Define the directory where you want to create the file
output_directory="/httpdocs/stage/testlog"

# Create the filename with the timestamp
filename="${timestamp}_output.txt"

# Create or write to the file
touch "${output_directory}/${filename}"

# Add your script logic here
# For example, you can echo some content to the file
echo "This is the content of the file generated at ${timestamp}" >> "${output_directory}/${filename}"

# Add more commands or actions as needed

# Exit the script
exit 0