import Application from 'repro-ember-drag-drop-on-ember4-embroider-app/app';
import config from 'repro-ember-drag-drop-on-ember4-embroider-app/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
