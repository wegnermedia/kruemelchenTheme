#! /bin/bash

ssh v3326.timmehosting.de -l c634467_stefanwegner "cd /web/live/shop; php bin/console cache:clear"