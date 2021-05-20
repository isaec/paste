#!/usr/bin/env bash

name="${PWD##*/}"

cd ../MS2Builder/

until node src/dev.js ../$name/ 8000; do
    echo "MS2 crashed with exit code $?.  Respawning..." >&2
    sleep 1
done