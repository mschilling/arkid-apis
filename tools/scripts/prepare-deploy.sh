#!/usr/bin/env bash

APP_FOLDER_NAME=gespot-zwolle-api

SCRIPT_FOLDER="`cd "$( dirname "${BASH_SOURCE[0]}" )";pwd`"
ROOT_FOLDER_PROJECT="`cd "${SCRIPT_FOLDER}/../../";pwd`"

APP_DIST_FOLDER=$ROOT_FOLDER_PROJECT/dist/apps/$APP_FOLDER_NAME
GCP_CONFIG_FOLDER=$ROOT_FOLDER_PROJECT/apps/$APP_FOLDER_NAME/server

DIST_FOLDER=$ROOT_FOLDER_PROJECT/dist/apps/$APP_FOLDER_NAME

# copy Dockerfile
#cp -rf $GCP_CONFIG_FOLDER/Dockerfile $DIST_FOLDER

# copy package files
#cp -rf $ROOT_FOLDER_PROJECT/package* $DIST_FOLDER

echo SCRIPT_FOLDER=$SCRIPT_FOLDER
echo ROOT_FOLDER_PROJECT=$ROOT_FOLDER_PROJECT
echo APP_DIST_FOLDER=$APP_DIST_FOLDER
echo GCP_CONFIG_FOLDER=$APP_DIST_FOLDER

echo All files to deploy the api to production are copied to: $DIST_FOLDER


