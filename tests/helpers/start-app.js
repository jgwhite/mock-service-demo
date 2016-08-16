import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';
import './set-foo-message';
import { register } from 'ember-owner-test-utils/test-support/register';

export default function startApp(attrs) {
  let application;
  let fooService = Ember.Object.create({
    message: 'baz'
  });

  let attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    application.fooService = fooService;
    register({ application }, 'service:foo', {
      create: () => fooService,
      isServiceFactory: true
    });
  });

  return application;
}
