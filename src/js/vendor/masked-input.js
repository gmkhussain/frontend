/*!
 * jQuery Masked Input Plugin v0.1.3
 *
 * Copyright (c) 2015 MCD Partners
 * Released under the MIT license
 */
(function($) {
  'use strict';

  // HELPER CLASS DEFINITION
  // ====================

  var InputObject = function(str) {
    this.value = str || '';
    this.ptr = -1;
    this.EOI = !this.hasNext();
  };

  InputObject.prototype.hasNext = function() {
    return (this.ptr < this.value.length - 1);
  };

  InputObject.prototype.nextMatch = function(regex) {
    while (++this.ptr < this.value.length) {
      if (!!this.value[this.ptr].match(regex)) {
        return this.value[this.ptr];
      }
    }
    return '';
  };

  InputObject.prototype.nextChar = function() {
    return this.nextMatch(/[A-Za-z]/);
  };

  InputObject.prototype.nextNumber = function() {
    return this.nextMatch(/[0-9]/);
  };

  InputObject.prototype.nextWild = function() {
    return this.nextMatch(/[A-Za-z0-9]/);
  };

  // MASKED INPUT CLASS DEFINITION
  // ====================

  var MaskedInput = function(element) {
    this.$element = $(element);
    this.pattern = String(this.$element.data('masked-input')) || '';
    this.inputLength = this.$element.val().length;
    this.allowKey = true;
    if (this.pattern !== '') {
      this.$element.attr('maxlength', this.pattern.length);
    }
  };

  MaskedInput.VERSION = '0.1.3';

  MaskedInput.prototype.peekNextToken = function(offset) {
    var len = (this.$element.val() || '').length;
    var ptr = len + (offset || 0);
    var nextToken = this.pattern[ptr];

    while ('X9*/-'.indexOf(nextToken) === -1 && ptr < this.pattern.length) {
      ptr++;
      nextToken = this.pattern[ptr];
    }

    return nextToken;
  };

  MaskedInput.prototype.format = function() {
    var input = new InputObject(this.$element.val()),
        result = '',
        i = 0,
        len = this.pattern.length,
        caretPos = this.getCaretPosition(),
        dir;

    // Empty or the current length == this.inputLength (before the key was added)
    if (input.value === '' || this.$element.val().length === this.inputLength) {
      return;
    }

    // If the current length is greater than the length before the key was added, we're adding a key,
    // otherwise we're removing something
    dir = (this.$element.val().length > this.inputLength) ? 'add' : 'remove';

    while (input.hasNext() && (i < len)) {
      switch (this.pattern[i]) {
        case 'X':
          result += input.nextChar();
          break;
        case '9':
          result += input.nextNumber();
          break;
        case '*':
          result += input.nextWild();
          break;
        default:
          result += this.pattern[i];
          if (caretPos !== null) {
            if (dir == 'add' && i == caretPos - 1) {
              caretPos++;
            }
          }
      }
      i++;
    }
    this.$element.val(result);
    this.moveCaret(caretPos);
  };

  MaskedInput.prototype.getCaretPosition = function() {
    var caretPos = 0,
        ctrl = this.$element[0];
    // IE Support
    if (document.selection) {
      ctrl.focus();
      var sel = document.selection.createRange();
      sel.moveStart('character', -ctrl.value.length);
      caretPos = sel.text.length;
    } else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
      caretPos = ctrl.selectionStart;
    }

    return (caretPos);
  };

  MaskedInput.prototype.moveCaret = function(caretPos) {
    var elem = this.$element[0];

    if (caretPos === null) {
      return;
    }

    if (elem !== null) {
      if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.move('character', caretPos);
        range.select();
      } else {
        if (elem.selectionStart) {
          elem.focus();
          elem.setSelectionRange(caretPos, caretPos);
        } else {
          elem.focus();
        }
      }
    }
  };

  MaskedInput.prototype.checkKeyAgainstNextToken = function(keyCode, shiftKey, offset) {
    switch (this.peekNextToken(offset)) {
      case 'X':
        return (keyCode < 65 || keyCode > 90);
      case '9':
        return ((shiftKey || (keyCode < 48 || keyCode > 57)) && (keyCode < 96 || keyCode > 105));
      case '/':
        if (keyCode === 191 || keyCode === 111) {
          return false;
        }
        return this.checkKeyAgainstNextToken(keyCode, shiftKey, 1);
      case '-':
        if (keyCode === 173 || keyCode === 109 || keyCode === 189) {
          return false;
        }
        return this.checkKeyAgainstNextToken(keyCode, shiftKey, 1);
      case '*':
        return ((shiftKey || keyCode < 48 || keyCode > 57) && (keyCode < 96 || keyCode > 105) && (keyCode < 65 || keyCode > 90));
      default:
        return true;
    }
  };

  MaskedInput.prototype.keydown = function(e) {
    // Store the length before they actual key is added
    this.inputLength = this.$element.val().length;

    if (e.ctrlKey || e.altKey || e.metaKey || e.keyCode < 32) {
      return;
    }

    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 || (e.keyCode == 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)) {
      return;
    }

    // Prevent the user from holding down the key and entering many in a row.
    if (!this.allowKey) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }

    // Allow the entry when pressed but ignore the repeats thereafter
    // Flag is reset on keyup.
    this.allowKey = false;

    if (this.checkKeyAgainstNextToken(e.keyCode, e.shiftKey, 0)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  };

  MaskedInput.prototype.keyup = function(e) {
    this.allowKey = true;
    this.format();
  };

  // MASKED INPUT PLUGIN DEFINITION
  // =====================

  function Plugin(option, args) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data('bs.maskedinput');
      var options = typeof option == 'object' && option;
      if (!data) {
        $this.data('bs.maskedinput', (data = new MaskedInput(this, options)));
      }
      if (typeof option == 'string') {
        data[option](args);
      }
    });
  }

  var old = $.fn.maskedinput;

  $.fn.maskedinput             = Plugin;
  $.fn.maskedinput.Constructor = MaskedInput;

  // MASKED INPUT NO CONFLICT
  // ===============

  $.fn.maskedinput.noConflict = function() {
    $.fn.maskedinput = old;
    return this;
  };

  // MASKED INPUT DATA-API
  // ============

  $(document).on('keydown.bs.maskedinput.data-api', '[data-masked-input]', function(e) {
    var $el = $(e.target);
    Plugin.call($el, 'keydown', e);
  });

  $(document).on('keyup.bs.maskedinput.data-api', '[data-masked-input]', function(e) {
    var $el = $(e.target);
    Plugin.call($el, 'keyup');
  });

  $(window).on('load.bs.maskedinput.data-api', function() {
    $('[data-masked-input]').each(function() {
      var $el = $(this);
      Plugin.call($el, $el.data());
    });
  });
})(jQuery);