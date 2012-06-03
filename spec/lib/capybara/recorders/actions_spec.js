// Generated by CoffeeScript 1.3.1
(function() {

  jasmine.getFixtures().fixturesPath = 'fixtures/capybara/recorders';

  describe('Capybara actions recorder', function() {
    var callback, recorder;
    recorder = null;
    callback = null;
    beforeEach(function() {
      loadFixtures('actions_spec.html');
      callback = jasmine.createSpy('afterCaptureCallback');
      recorder = new Capybara.Recorders.Actions({
        afterCapture: callback
      });
      return recorder.start();
    });
    describe('#start', function() {
      it('should attach a callback with options for file inputs on change', function() {
        $('#input-file').trigger('change');
        return expect(callback).toHaveBeenCalledWith({
          type: 'action',
          name: 'attachFile',
          locator: 'input-file',
          scope: null,
          options: {
            file: ''
          }
        });
      });
      it('should attach a callback with options for checkbox inputs on check', function() {
        $('#input-checkbox').trigger('click');
        return expect(callback).toHaveBeenCalledWith({
          type: 'action',
          name: 'check',
          locator: 'input-checkbox',
          scope: null,
          options: {}
        });
      });
      it('should attach a callback with options for checkbox inputs on uncheck', function() {
        $('#input-checkbox').trigger('click').trigger('click');
        return expect(callback).toHaveBeenCalledWith({
          type: 'action',
          name: 'uncheck',
          locator: 'input-checkbox',
          scope: null,
          options: {}
        });
      });
      it('should attach a callback with options for radio inputs on click', function() {
        $('#input-radio').trigger('click');
        return expect(callback).toHaveBeenCalledWith({
          type: 'action',
          name: 'choose',
          locator: 'input-radio',
          scope: null,
          options: {}
        });
      });
      it('should attach a callback with options for submit button inputs on click', function() {
        $('#input-submit').trigger('click');
        return expect(callback).toHaveBeenCalledWith({
          type: 'action',
          name: 'clickButton',
          locator: 'input-submit',
          scope: null,
          options: {}
        });
      });
      it('should attach a callback with options for reset button inputs on click', function() {
        $('#input-reset').trigger('click');
        return expect(callback).toHaveBeenCalledWith({
          type: 'action',
          name: 'clickButton',
          locator: 'input-reset',
          scope: null,
          options: {}
        });
      });
      return it('should attach a callback with options for button button inputs on click', function() {
        $('#input-button').trigger('click');
        return expect(callback).toHaveBeenCalledWith({
          type: 'action',
          name: 'clickButton',
          locator: 'input-button',
          scope: null,
          options: {}
        });
      });
    });
    return describe('#stop', function() {
      beforeEach(function() {
        return recorder.stop();
      });
      it('should detach the callback for file inputs on change', function() {
        $('#input-file').trigger('change');
        return expect(callback).not.toHaveBeenCalled();
      });
      it('should detach a callback with options for checkbox inputs on check', function() {
        $('#input-checkbox').trigger('click');
        return expect(callback).not.toHaveBeenCalled();
      });
      it('should detach the callback for checkbox inputs on uncheck', function() {
        $('#input-checkbox').trigger('click').trigger('click');
        return expect(callback).not.toHaveBeenCalled();
      });
      it('should detach the callback for radio inputs on click', function() {
        $('#input-radio').trigger('click');
        return expect(callback).not.toHaveBeenCalled();
      });
      it('should detach the callback for submit button inputs on click', function() {
        $('#input-submit').trigger('click');
        return expect(callback).not.toHaveBeenCalled();
      });
      it('should detach the callback for reset button inputs on click', function() {
        $('#input-reset').trigger('click');
        return expect(callback).not.toHaveBeenCalled();
      });
      return it('should detach the callback for button button inputs on click', function() {
        $('#input-button').trigger('click');
        return expect(callback).not.toHaveBeenCalled();
      });
    });
  });

}).call(this);