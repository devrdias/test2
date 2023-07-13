#!/bin/bash

check_node_version () {
  NODE_VERSION=$(node -v)

  if [ $NODE_VERSION = "v18.12.1" ]
  then
    echo "✅ node.js version check pass" 
    exit 0
  else
    echo "🟥 please use correct version of node.js - v18.12.1. your node version is $NODE_VERSION"
    exit 1
  fi
}

check_node_version
