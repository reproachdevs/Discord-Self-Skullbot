@echo off

type nul > Response.txt

python Console.py
node Index.js >> Response.txt 2>&1