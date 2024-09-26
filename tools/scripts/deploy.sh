#!/usr/bin/env bash

APP_FOLDER_NAME=gespot-zwolle-api
PROJECT_ID=gespot-zwolle-test
IMAGE_NAME=gespot-zwolle-api

SCRIPT_FOLDER="`cd "$( dirname "${BASH_SOURCE[0]}" )";pwd`"
ROOT_FOLDER_PROJECT="`cd "${SCRIPT_FOLDER}/../../";pwd`"
APP_DIST_FOLDER=$ROOT_FOLDER_PROJECT/dist/apps/$APP_FOLDER_NAME

# echo 'Step 0 - Prepare environment'
# gcloud config set project $PROJECT_ID

echo 'Step 1 - Build container'
echo 'docker build -t gcr.io/$PROJECT_ID/$IMAGE_NAME $APP_DIST_FOLDER'
docker build -t gcr.io/$PROJECT_ID/$IMAGE_NAME $APP_DIST_FOLDER

echo 'Step 2 - Push container'
docker push gcr.io/$PROJECT_ID/$IMAGE_NAME

echo 'Step 3 - Deploy container'
gcloud run deploy $IMAGE_NAME --project=$PROJECT_ID --image gcr.io/$PROJECT_ID/$IMAGE_NAME --platform managed --region=us-central1 --allow-unauthenticated

echo SCRIPT_FOLDER=$SCRIPT_FOLDER
echo ROOT_FOLDER_PROJECT=$ROOT_FOLDER_PROJECT
echo APP_DIST_FOLDER=$APP_DIST_FOLDER
echo GCP_CONFIG_FOLDER=$APP_DIST_FOLDER
