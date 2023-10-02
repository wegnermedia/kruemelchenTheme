#! /bin/bash

ssh v3326.timmehosting.de -l c634467_stefanwegner "cd /web/live/shop; php bin/console theme:compile;  php bin/console cache:clear; php bin/console scheduled-task:run Shopware\\Core\\Framework\\Cache\\CacheClearer"