#!/usr/bin/env bash

name="${PWD##*/}"

cd ../MS2Builder/
node src/dev.js ../$name/ 8000