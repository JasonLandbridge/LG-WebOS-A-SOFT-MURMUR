#! /bin/bash

for f in ./**/*.mp4;
do
    echo "Starting conversion of: $f"
    ffmpeg -i $f -q:a 0 -map a "${f/.mp4/.mp3}"
done
