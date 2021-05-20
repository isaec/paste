#!/usr/bin/env bash

name="${PWD##*/}"
crashes=0
lastCrash=$EPOCHSECONDS

[ ! -d "../MS2Builder/" ] && echo "MS2Builder does not exist at the same level as your folder"
cd ../MS2Builder/ || exit 1

until node src/dev.js ../$name/ 8000; do
    # this code will be run on crash
    if ((lastCrash + 5 <= EPOCHSECONDS)); then
        crashes=1
    else
        ((++crashes))
    fi
    lastCrash=$EPOCHSECONDS
    if [[ $crashes -ge 5 ]]; then
        echo "MS2 crashed [${crashes}x] with exit code $?. It seems to be crashing a lot, check your syntax?" >&2
        read -r -n 1 -p "Press any key to respawn: "
        crashes=1
    else
        echo "MS2 crashed [${crashes}x] with exit code $?.  Respawning..." >&2
        sleep 1
    fi
done
