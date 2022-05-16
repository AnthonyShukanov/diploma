#!/bin/bash

# Sometimes the Cypress executable can end before the tests are reported
# This function prevents the Docker container to close before this pushing of
# reports is complete.

# Get secrets (cypress.json)

waitall() {
    echo "Sending results to Report Portal"
    for pid in "$@"; do
        name=$(ps -p $pid -o comm=)
        if [ $? -eq 0 ]; then
            echo "Waiting ..."
            while ps -p $pid >/dev/null; do sleep 1; done
        else
            echo "Cypress testing done"
        fi
    done
}

npx cypress run

# Wait for Cypress to finish sending the results to reportPortal
waitall $(pidof Cypress)

echo "Test completed and report sent"
