import { test } from 'qunit';
import moduleForAcceptance from 'mock-service-demo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | foo mock');

test('visiting /foo-mock', function(assert) {
  setFooMessage('bar');

  visit('/');

  andThen(function() {
    assert.equal(find('main').text(), 'bar');
  });
});
