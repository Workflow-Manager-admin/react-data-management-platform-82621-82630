#!/bin/bash
cd /home/kavia/workspace/code-generation/react-data-management-platform-82621-82630/frontend_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

