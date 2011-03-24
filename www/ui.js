mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root5311 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node809 = $("<span>");
  root5311.append(node809);
  var condSubs260 = new mobl.CompSubscription();
  subs__.addSub(condSubs260);
  var oldValue260;
  var renderCond260 = function() {
    var value468 = value.get();
    if(oldValue260 === value468) return;
    oldValue260 = value468;
    var subs__ = condSubs260;
    subs__.unsubscribe();
    node809.empty();
    if(value468) {
      var nodes4175 = $("<span>");
      node809.append(nodes4175);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl288();
      }));
      
      function renderControl288() {
        subs__.addSub((elements)(function(elements, callback) {
          var root5312 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5312); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4175;
          nodes4175 = node.contents();
          oldNodes.replaceWith(nodes4175);
        }));
      }
      renderControl288();
      
      
    } else {
      
      var tmp10479 = mobl.ref(null);
      
      
      var tmp10478 = mobl.ref(null);
      
      
      var tmp10477 = mobl.ref(null);
      
      var nodes4176 = $("<span>");
      node809.append(nodes4176);
      subs__.addSub((mobl.block)(style, tmp10477, tmp10478, tmp10479, function(_, callback) {
        var root5313 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp10469 = mobl.ref(null);
        
        
        var tmp10468 = mobl.ref(null);
        
        var nodes4177 = $("<span>");
        root5313.append(nodes4177);
        subs__.addSub((mobl.label)(loadingMessage, tmp10468, tmp10469, function(_, callback) {
          var root5314 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5314); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4177;
          nodes4177 = node.contents();
          oldNodes.replaceWith(nodes4177);
        }));
        
        var tmp10471 = mobl.ref("middle");
        
        
        var tmp10470 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp10476 = mobl.ref(null);
        
        
        var tmp10475 = mobl.ref(null);
        
        
        var tmp10474 = mobl.ref(null);
        
        
        var tmp10473 = mobl.ref(null);
        
        
        var tmp10472 = mobl.ref(null);
        
        var nodes4178 = $("<span>");
        root5313.append(nodes4178);
        subs__.addSub((ui.image)(tmp10470, tmp10472, tmp10473, tmp10474, tmp10475, tmp10471, tmp10476, function(_, callback) {
          var root5315 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5315); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4178;
          nodes4178 = node.contents();
          oldNodes.replaceWith(nodes4178);
        }));
        callback(root5313); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4176;
        nodes4176 = node.contents();
        oldNodes.replaceWith(nodes4176);
      }));
      
      
    }
  };
  renderCond260();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond260();
  }));
  
  callback(root5311); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root5316 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node810 = $("<div>");
  
  var ref680 = mobl.ref(ui.headerStyle);
  if(ref680.get() !== null) {
    node810.attr('class', ref680.get());
    subs__.addSub(ref680.addEventListener('change', function(_, ref, val) {
      node810.attr('class', val);
    }));
    
  }
  subs__.addSub(ref680.rebind());
  
  var val389 = onclick.get();
  if(val389 !== null) {
    subs__.addSub(mobl.domBind(node810, 'tap', val389));
  }
  
  
  var node811 = $("<div>");
  
  var ref679 = mobl.ref(ui.headerContainerStyle);
  if(ref679.get() !== null) {
    node811.attr('class', ref679.get());
    subs__.addSub(ref679.addEventListener('change', function(_, ref, val) {
      node811.attr('class', val);
    }));
    
  }
  subs__.addSub(ref679.rebind());
  
  
  var node812 = $("<div>");
  
  var ref677 = text;
  node812.text(""+ref677.get());
  var ignore135 = false;
  subs__.addSub(ref677.addEventListener('change', function(_, ref, val) {
    if(ignore135) return;
    node812.text(""+val);
  }));
  subs__.addSub(ref677.rebind());
  
  
  var ref678 = mobl.ref(ui.headerTextStyle);
  if(ref678.get() !== null) {
    node812.attr('class', ref678.get());
    subs__.addSub(ref678.addEventListener('change', function(_, ref, val) {
      node812.attr('class', val);
    }));
    
  }
  subs__.addSub(ref678.rebind());
  
  node811.append(node812);
  node810.append(node811);
  var nodes4179 = $("<span>");
  node810.append(nodes4179);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl289();
  }));
  
  function renderControl289() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5317 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5317); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4179;
      nodes4179 = node.contents();
      oldNodes.replaceWith(nodes4179);
    }));
  }
  renderControl289();
  root5316.append(node810);
  callback(root5316); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5318 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref681 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref681.get() !== null) {
    sp.attr('class', ref681.get());
    subs__.addSub(ref681.addEventListener('change', function(_, ref, val) {
      sp.attr('class', val);
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(style.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    
  }
  subs__.addSub(ref681.rebind());
  
  var val390 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val390 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val390));
  }
  
  var val391 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val391 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val391));
  }
  
  var val392 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after117(result__) {
                    var tmp10551 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after117);if(result__ !== undefined) after117(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val392 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val392));
  }
  
  var val393 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val393 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val393));
  }
  
  var ref682 = text;
  sp.text(""+ref682.get());
  var ignore136 = false;
  subs__.addSub(ref682.addEventListener('change', function(_, ref, val) {
    if(ignore136) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref682.rebind());
  
  
  root5318.append(sp);
  callback(root5318); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5319 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4180 = $("<span>");
  root5319.append(nodes4180);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root5320 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5320); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4180;
    nodes4180 = node.contents();
    oldNodes.replaceWith(nodes4180);
  }));
  callback(root5319); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5321 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4181 = $("<span>");
  root5321.append(nodes4181);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root5322 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5322); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4181;
    nodes4181 = node.contents();
    oldNodes.replaceWith(nodes4181);
  }));
  callback(root5321); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root5323 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node813 = $("<ul>");
  
  var ref683 = mobl.ref(ui.groupStyle);
  if(ref683.get() !== null) {
    node813.attr('class', ref683.get());
    subs__.addSub(ref683.addEventListener('change', function(_, ref, val) {
      node813.attr('class', val);
    }));
    
  }
  subs__.addSub(ref683.rebind());
  
  var nodes4182 = $("<span>");
  node813.append(nodes4182);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl290();
  }));
  
  function renderControl290() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5324 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5324); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4182;
      nodes4182 = node.contents();
      oldNodes.replaceWith(nodes4182);
    }));
  }
  renderControl290();
  root5323.append(node813);
  callback(root5323); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root5325 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node814 = $("<img>");
  
  var ref684 = url;
  if(ref684.get() !== null) {
    node814.attr('src', ref684.get());
    subs__.addSub(ref684.addEventListener('change', function(_, ref, val) {
      node814.attr('src', val);
    }));
    
  }
  subs__.addSub(ref684.rebind());
  
  var ref685 = width;
  if(ref685.get() !== null) {
    node814.attr('width', ref685.get());
    subs__.addSub(ref685.addEventListener('change', function(_, ref, val) {
      node814.attr('width', val);
    }));
    
  }
  subs__.addSub(ref685.rebind());
  
  var ref686 = height;
  if(ref686.get() !== null) {
    node814.attr('height', ref686.get());
    subs__.addSub(ref686.addEventListener('change', function(_, ref, val) {
      node814.attr('height', val);
    }));
    
  }
  subs__.addSub(ref686.rebind());
  
  var ref687 = style;
  if(ref687.get() !== null) {
    node814.attr('class', ref687.get());
    subs__.addSub(ref687.addEventListener('change', function(_, ref, val) {
      node814.attr('class', val);
    }));
    
  }
  subs__.addSub(ref687.rebind());
  
  var val394 = onclick.get();
  if(val394 !== null) {
    subs__.addSub(mobl.domBind(node814, 'tap', val394));
  }
  
  var ref688 = valign;
  if(ref688.get() !== null) {
    node814.attr('valign', ref688.get());
    subs__.addSub(ref688.addEventListener('change', function(_, ref, val) {
      node814.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref688.rebind());
  
  var ref689 = align;
  if(ref689.get() !== null) {
    node814.attr('align', ref689.get());
    subs__.addSub(ref689.addEventListener('change', function(_, ref, val) {
      node814.attr('align', val);
    }));
    
  }
  subs__.addSub(ref689.rebind());
  
  root5325.append(node814);
  callback(root5325); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root5326 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref690 = mobl.ref(ui.itemStyle);
  if(ref690.get() !== null) {
    el.attr('class', ref690.get());
    subs__.addSub(ref690.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref690.rebind());
  
  var ref691 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref691.get() !== null) {
    el.attr('class', ref691.get());
    subs__.addSub(ref691.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(ui.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref691.rebind());
  
  var val395 = onswipe.get();
  if(val395 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val395));
  }
  
  var val396 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp10552 = result__;
                                           function after118(result__) {
                                             var tmp10553 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after118);if(result__ !== undefined) after118(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp10554 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val396 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val396));
  }
  
  var nodes4183 = $("<span>");
  el.append(nodes4183);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl291();
  }));
  
  function renderControl291() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5327 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5327); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4183;
      nodes4183 = node.contents();
      oldNodes.replaceWith(nodes4183);
    }));
  }
  renderControl291();
  root5326.append(el);
  callback(root5326); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root5328 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node815 = $("<input>");
  node815.attr('type', "checkbox");
  
  var ref693 = b;
  node815.attr('checked', !!ref693.get());
  subs__.addSub(ref693.addEventListener('change', function(_, ref, val) {
    if(ref === ref693) node815.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node815, 'change', function() {
    b.set(!!node815.attr('checked'));
  }));
  
  var val398 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val398 !== null) {
    subs__.addSub(mobl.domBind(node815, 'tap', val398));
  }
  
  var val399 = onchange.get();
  if(val399 !== null) {
    subs__.addSub(mobl.domBind(node815, 'change', val399));
  }
  
  root5328.append(node815);
  
  root5328.append(" ");
  
  var node816 = $("<span>");
  
  var ref692 = label;
  node816.text(""+ref692.get());
  var ignore137 = false;
  subs__.addSub(ref692.addEventListener('change', function(_, ref, val) {
    if(ignore137) return;
    node816.text(""+val);
  }));
  subs__.addSub(ref692.rebind());
  
  
  var val397 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after119(result__) {
                    var tmp10555 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after119);if(result__ !== undefined) after119(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val397 !== null) {
    subs__.addSub(mobl.domBind(node816, 'tap', val397));
  }
  
  root5328.append(node816);
  callback(root5328); return subs__;
  
  
  return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';
ui.textFieldInvalidStyle = 'ui__textFieldInvalidStyle';
ui.textFieldLabelStyle = 'ui__textFieldLabelStyle';
ui.validationMessageStyle = 'ui__validationMessageStyle';
ui.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


ui.textField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5329 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node817 = $("<span>");
  root5329.append(node817);
  var condSubs261 = new mobl.CompSubscription();
  subs__.addSub(condSubs261);
  var oldValue261;
  var renderCond261 = function() {
    var value469 = label.get();
    if(oldValue261 === value469) return;
    oldValue261 = value469;
    var subs__ = condSubs261;
    subs__.unsubscribe();
    node817.empty();
    if(value469) {
      
      var tmp10480 = mobl.ref(null);
      
      var nodes4184 = $("<span>");
      node817.append(nodes4184);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp10480, function(_, callback) {
        var root5330 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5330); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4184;
        nodes4184 = node.contents();
        oldNodes.replaceWith(nodes4184);
      }));
      
      
    } else {
      
    }
  };
  renderCond261();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond261();
  }));
  
  
  var node818 = $("<span>");
  root5329.append(node818);
  var condSubs262 = new mobl.CompSubscription();
  subs__.addSub(condSubs262);
  var oldValue262;
  var renderCond262 = function() {
    var value470 = validator.get();
    if(oldValue262 === value470) return;
    oldValue262 = value470;
    var subs__ = condSubs262;
    subs__.unsubscribe();
    node818.empty();
    if(value470) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after123(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp10556 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node819 = $("<input>");
        node819.attr('type', "text");
        
        var ref694 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref694.get() !== null) {
          node819.attr('class', ref694.get());
          subs__.addSub(ref694.addEventListener('change', function(_, ref, val) {
            node819.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node819.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node819.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node819.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref694.rebind());
        
        var ref695 = placeholder;
        if(ref695.get() !== null) {
          node819.attr('placeholder', ref695.get());
          subs__.addSub(ref695.addEventListener('change', function(_, ref, val) {
            node819.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref695.rebind());
        
        var ref696 = temp;
        node819.val(""+ref696.get());
        var ignore138 = false;
        subs__.addSub(ref696.addEventListener('change', function(_, ref, val) {
          if(ignore138) return;
          node819.val(""+val);
        }));
        subs__.addSub(ref696.rebind());
        
        subs__.addSub(mobl.domBind(node819, 'keyup change', function() {
          ignore138 = true;
          temp.set(mobl.stringTomobl__String(node819.val()));
          ignore138 = false;
        }));
        
        
        var val400 = onchange.get();
        if(val400 !== null) {
          subs__.addSub(mobl.domBind(node819, 'change', val400));
        }
        
        var val401 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after120(result__) {
                          var tmp10557 = result__;
                          function after121(result__) {
                            var tmp10558 = result__;
                            var result__ = tmp10558;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after121);if(result__ !== undefined) after121(result__);
                        }
                        var result__ = onkeyup.get()(event, after120);if(result__ !== undefined) after120(result__);
                      } else {
                        {
                          function after122(result__) {
                            var tmp10558 = result__;
                            var result__ = tmp10558;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after122);if(result__ !== undefined) after122(result__);
                        }
                      }
                    };
        if(val401 !== null) {
          subs__.addSub(mobl.domBind(node819, 'keyup', val401));
        }
        
        var val402 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val402 !== null) {
          subs__.addSub(mobl.domBind(node819, 'blur', val402));
        }
        
        node818.append(node819);
        
        var tmp10481 = mobl.ref(null);
        
        var nodes4185 = $("<span>");
        node818.append(nodes4185);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp10481, function(_, callback) {
          var root5331 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5331); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4185;
          nodes4185 = node.contents();
          oldNodes.replaceWith(nodes4185);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after123);if(result__ !== undefined) after123(result__);
    } else {
      
      var node820 = $("<input>");
      node820.attr('type', "text");
      
      var ref697 = style;
      if(ref697.get() !== null) {
        node820.attr('class', ref697.get());
        subs__.addSub(ref697.addEventListener('change', function(_, ref, val) {
          node820.attr('class', val);
        }));
        
      }
      subs__.addSub(ref697.rebind());
      
      var ref698 = placeholder;
      if(ref698.get() !== null) {
        node820.attr('placeholder', ref698.get());
        subs__.addSub(ref698.addEventListener('change', function(_, ref, val) {
          node820.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref698.rebind());
      
      var ref699 = s;
      node820.val(""+ref699.get());
      var ignore139 = false;
      subs__.addSub(ref699.addEventListener('change', function(_, ref, val) {
        if(ignore139) return;
        node820.val(""+val);
      }));
      subs__.addSub(ref699.rebind());
      
      subs__.addSub(mobl.domBind(node820, 'keyup change', function() {
        ignore139 = true;
        s.set(mobl.stringTomobl__String(node820.val()));
        ignore139 = false;
      }));
      
      
      var val403 = onchange.get();
      if(val403 !== null) {
        subs__.addSub(mobl.domBind(node820, 'change', val403));
      }
      
      var val404 = onkeyup.get();
      if(val404 !== null) {
        subs__.addSub(mobl.domBind(node820, 'keyup', val404));
      }
      
      var val405 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val405 !== null) {
        subs__.addSub(mobl.domBind(node820, 'blur', val405));
      }
      
      node818.append(node820);
      
      
    }
  };
  renderCond262();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond262();
  }));
  
  callback(root5329); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5332 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4186 = $("<span>");
  root5332.append(nodes4186);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5333 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5333); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4186;
    nodes4186 = node.contents();
    oldNodes.replaceWith(nodes4186);
  }));
  callback(root5332); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5334 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after124(result__) {
      var tmp10559 = result__;
      var result__ = tmp10559;
      var m = result__;
      var result__ = !m;
      if(result__) {
        var result__ = n2;
        n.set(result__);
        var result__ = m;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = m;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    var result__ = validator.get()(n2, after124);if(result__ !== undefined) after124(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes4187 = $("<span>");
  root5334.append(nodes4187);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5335 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5335); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4187;
    nodes4187 = node.contents();
    oldNodes.replaceWith(nodes4187);
  }));
  callback(root5334); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root5336 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node821 = $("<span>");
  root5336.append(node821);
  var condSubs263 = new mobl.CompSubscription();
  subs__.addSub(condSubs263);
  var oldValue263;
  var renderCond263 = function() {
    var value471 = label.get();
    if(oldValue263 === value471) return;
    oldValue263 = value471;
    var subs__ = condSubs263;
    subs__.unsubscribe();
    node821.empty();
    if(value471) {
      
      var node822 = $("<span>");
      node822.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref703 = label;
      node822.text(""+ref703.get());
      var ignore141 = false;
      subs__.addSub(ref703.addEventListener('change', function(_, ref, val) {
        if(ignore141) return;
        node822.text(""+val);
      }));
      subs__.addSub(ref703.rebind());
      
      
      node821.append(node822);
      
      var node823 = $("<span>");
      node823.attr('style', "float: left");
      
      
      var node824 = $("<input>");
      node824.attr('type', "password");
      
      var ref700 = style;
      if(ref700.get() !== null) {
        node824.attr('class', ref700.get());
        subs__.addSub(ref700.addEventListener('change', function(_, ref, val) {
          node824.attr('class', val);
        }));
        
      }
      subs__.addSub(ref700.rebind());
      
      var ref701 = placeholder;
      if(ref701.get() !== null) {
        node824.attr('placeholder', ref701.get());
        subs__.addSub(ref701.addEventListener('change', function(_, ref, val) {
          node824.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref701.rebind());
      
      var ref702 = s;
      node824.val(""+ref702.get());
      var ignore140 = false;
      subs__.addSub(ref702.addEventListener('change', function(_, ref, val) {
        if(ignore140) return;
        node824.val(""+val);
      }));
      subs__.addSub(ref702.rebind());
      
      subs__.addSub(mobl.domBind(node824, 'keyup change', function() {
        ignore140 = true;
        s.set(mobl.stringTomobl__String(node824.val()));
        ignore140 = false;
      }));
      
      
      var val406 = onchange.get();
      if(val406 !== null) {
        subs__.addSub(mobl.domBind(node824, 'change', val406));
      }
      
      var val407 = onkeyup.get();
      if(val407 !== null) {
        subs__.addSub(mobl.domBind(node824, 'keyup', val407));
      }
      
      var val408 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val408 !== null) {
        subs__.addSub(mobl.domBind(node824, 'blur', val408));
      }
      
      node823.append(node824);
      node821.append(node823);
      
      
      
      
    } else {
      
      var node825 = $("<input>");
      node825.attr('type', "password");
      
      var ref704 = style;
      if(ref704.get() !== null) {
        node825.attr('class', ref704.get());
        subs__.addSub(ref704.addEventListener('change', function(_, ref, val) {
          node825.attr('class', val);
        }));
        
      }
      subs__.addSub(ref704.rebind());
      
      var ref705 = placeholder;
      if(ref705.get() !== null) {
        node825.attr('placeholder', ref705.get());
        subs__.addSub(ref705.addEventListener('change', function(_, ref, val) {
          node825.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref705.rebind());
      
      var ref706 = s;
      node825.val(""+ref706.get());
      var ignore142 = false;
      subs__.addSub(ref706.addEventListener('change', function(_, ref, val) {
        if(ignore142) return;
        node825.val(""+val);
      }));
      subs__.addSub(ref706.rebind());
      
      subs__.addSub(mobl.domBind(node825, 'keyup change', function() {
        ignore142 = true;
        s.set(mobl.stringTomobl__String(node825.val()));
        ignore142 = false;
      }));
      
      
      var val409 = onchange.get();
      if(val409 !== null) {
        subs__.addSub(mobl.domBind(node825, 'change', val409));
      }
      
      var val410 = onkeyup.get();
      if(val410 !== null) {
        subs__.addSub(mobl.domBind(node825, 'keyup', val410));
      }
      
      var val411 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val411 !== null) {
        subs__.addSub(mobl.domBind(node825, 'blur', val411));
      }
      
      node821.append(node825);
      
      
    }
  };
  renderCond263();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond263();
  }));
  
  callback(root5336); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root5337 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref711 = style;
  if(ref711.get() !== null) {
    sel.attr('class', ref711.get());
    subs__.addSub(ref711.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref711.rebind());
  
  var val412 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after125(result__) {
                    var tmp10561 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after125);if(result__ !== undefined) after125(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val412 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val412));
  }
  
  
  var node826 = mobl.loadingSpan();
  sel.append(node826);
  var list161;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList161 = function() {
    var subs__ = listSubs__;
    list161 = options.get();
    list161.list(function(results475) {
      node826.empty();
      for(var i161 = 0; i161 < results475.length; i161++) {
        (function() {
          var iternode161 = $("<span>");
          node826.append(iternode161);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results475), i161), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results475), i161), "_2");
          
          var node827 = $("<option>");
          
          var ref707 = optionDescription;
          node827.text(""+ref707.get());
          var ignore143 = false;
          subs__.addSub(ref707.addEventListener('change', function(_, ref, val) {
            if(ignore143) return;
            node827.text(""+val);
          }));
          subs__.addSub(ref707.rebind());
          
          
          var ref708 = optionStyle;
          if(ref708.get() !== null) {
            node827.attr('class', ref708.get());
            subs__.addSub(ref708.addEventListener('change', function(_, ref, val) {
              node827.attr('class', val);
            }));
            
          }
          subs__.addSub(ref708.rebind());
          
          var ref709 = optionValue;
          if(ref709.get() !== null) {
            node827.attr('value', ref709.get());
            subs__.addSub(ref709.addEventListener('change', function(_, ref, val) {
              node827.attr('value', val);
            }));
            
          }
          subs__.addSub(ref709.rebind());
          
          var ref710 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref710.get() !== null) {
            node827.attr('selected', ref710.get());
            subs__.addSub(ref710.addEventListener('change', function(_, ref, val) {
              node827.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node827.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node827.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref710.rebind());
          
          iternode161.append(node827);
          
          var oldNodes = iternode161;
          iternode161 = iternode161.contents();
          oldNodes.replaceWith(iternode161);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list161.addEventListener('change', function() { listSubs__.unsubscribe(); renderList161(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList161(true); }));
    });
  };
  renderList161();
  
  root5337.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root5337); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root5338 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp10490 = mobl.ref(null);
  
  
  var tmp10489 = mobl.ref(null);
  
  
  var tmp10488 = mobl.ref(null);
  
  var nodes4188 = $("<span>");
  root5338.append(nodes4188);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp10488, tmp10489, tmp10490, function(_, callback) {
    var root5339 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node828 = mobl.loadingSpan();
    root5339.append(node828);
    var list162;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList162 = function() {
      var subs__ = listSubs__;
      list162 = tabs.get();
      list162.list(function(results476) {
        node828.empty();
        for(var i162 = 0; i162 < results476.length; i162++) {
          (function() {
            var iternode162 = $("<span>");
            node828.append(iternode162);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results476), i162), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results476), i162), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results476), i162), "_3");
            
            var tmp10485 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp10485.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp10485.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp10485.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp10485.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp10484 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp10487 = mobl.ref(null);
            
            
            var tmp10486 = mobl.ref(null);
            
            var nodes4189 = $("<span>");
            iternode162.append(nodes4189);
            subs__.addSub((mobl.span)(tmp10485, tmp10486, tmp10484, tmp10487, function(_, callback) {
              var root5340 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp10483 = mobl.ref(null);
              
              
              var tmp10482 = mobl.ref(null);
              
              var nodes4190 = $("<span>");
              root5340.append(nodes4190);
              subs__.addSub((mobl.label)(tabName, tmp10482, tmp10483, function(_, callback) {
                var root5341 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5341); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4190;
                nodes4190 = node.contents();
                oldNodes.replaceWith(nodes4190);
              }));
              callback(root5340); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4189;
              nodes4189 = node.contents();
              oldNodes.replaceWith(nodes4189);
            }));
            
            var oldNodes = iternode162;
            iternode162 = iternode162.contents();
            oldNodes.replaceWith(iternode162);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list162.addEventListener('change', function() { listSubs__.unsubscribe(); renderList162(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList162(true); }));
      });
    };
    renderList162();
    
    callback(root5339); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4188;
    nodes4188 = node.contents();
    oldNodes.replaceWith(nodes4188);
  }));
  
  var node829 = mobl.loadingSpan();
  root5338.append(node829);
  var list163;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList163 = function() {
    var subs__ = listSubs__;
    list163 = tabs.get();
    list163.list(function(results477) {
      node829.empty();
      for(var i163 = 0; i163 < results477.length; i163++) {
        (function() {
          var iternode163 = $("<span>");
          node829.append(iternode163);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results477), i163), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results477), i163), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results477), i163), "_3");
          
          var tmp10491 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp10491.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp10491.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp10491.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp10491.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp10494 = mobl.ref(null);
          
          
          var tmp10493 = mobl.ref(null);
          
          
          var tmp10492 = mobl.ref(null);
          
          var nodes4191 = $("<span>");
          iternode163.append(nodes4191);
          subs__.addSub((mobl.block)(tmp10491, tmp10492, tmp10493, tmp10494, function(_, callback) {
            var root5342 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes4192 = $("<span>");
            root5342.append(nodes4192);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root5343 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4193 = $("<span>");
              root5343.append(nodes4193);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl292();
              }));
              
              function renderControl292() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root5344 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5344); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4193;
                  nodes4193 = node.contents();
                  oldNodes.replaceWith(nodes4193);
                }));
              }
              renderControl292();
              callback(root5343); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4192;
              nodes4192 = node.contents();
              oldNodes.replaceWith(nodes4192);
            }));
            callback(root5342); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes4191;
            nodes4191 = node.contents();
            oldNodes.replaceWith(nodes4191);
          }));
          
          var oldNodes = iternode163;
          iternode163 = iternode163.contents();
          oldNodes.replaceWith(iternode163);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list163.addEventListener('change', function() { listSubs__.unsubscribe(); renderList163(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList163(true); }));
    });
  };
  renderList163();
  
  callback(root5338); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root5345 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node830 = $("<div>");
  
  var ref715 = mobl.ref(ui.searchboxStyle);
  if(ref715.get() !== null) {
    node830.attr('class', ref715.get());
    subs__.addSub(ref715.addEventListener('change', function(_, ref, val) {
      node830.attr('class', val);
    }));
    
  }
  subs__.addSub(ref715.rebind());
  
  
  var node831 = $("<input>");
  node831.attr('type', "search");
  
  var ref712 = mobl.ref(ui.searchBoxInputStyle);
  if(ref712.get() !== null) {
    node831.attr('class', ref712.get());
    subs__.addSub(ref712.addEventListener('change', function(_, ref, val) {
      node831.attr('class', val);
    }));
    
  }
  subs__.addSub(ref712.rebind());
  
  var ref713 = placeholder;
  if(ref713.get() !== null) {
    node831.attr('placeholder', ref713.get());
    subs__.addSub(ref713.addEventListener('change', function(_, ref, val) {
      node831.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref713.rebind());
  
  var ref714 = s;
  node831.val(""+ref714.get());
  var ignore144 = false;
  subs__.addSub(ref714.addEventListener('change', function(_, ref, val) {
    if(ignore144) return;
    node831.val(""+val);
  }));
  subs__.addSub(ref714.rebind());
  
  subs__.addSub(mobl.domBind(node831, 'keyup change', function() {
    ignore144 = true;
    s.set(mobl.stringTomobl__String(node831.val()));
    ignore144 = false;
  }));
  
  
  var val413 = onsearch.get();
  if(val413 !== null) {
    subs__.addSub(mobl.domBind(node831, 'change', val413));
  }
  
  var val414 = onkeyup.get();
  if(val414 !== null) {
    subs__.addSub(mobl.domBind(node831, 'keyup', val414));
  }
  node831.attr('autocorrect', false);
  node831.attr('autocapitalize', false);
  node831.attr('autocomplete', false);
  
  node830.append(node831);
  root5345.append(node830);
  callback(root5345); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root5346 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref716 = mobl.ref(ui.contextMenuStyle);
  if(ref716.get() !== null) {
    menu.attr('class', ref716.get());
    subs__.addSub(ref716.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref716.rebind());
  
  var nodes4194 = $("<span>");
  menu.append(nodes4194);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl293();
  }));
  
  function renderControl293() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5347 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5347); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4194;
      nodes4194 = node.contents();
      oldNodes.replaceWith(nodes4194);
    }));
  }
  renderControl293();
  root5346.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val415 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp10564 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val415 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val415));
  }
  
  root5346.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root5346); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root5348 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp10550 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp10550.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node832 = $("<span>");
  root5348.append(node832);
  var condSubs264 = new mobl.CompSubscription();
  subs__.addSub(condSubs264);
  var oldValue264;
  var renderCond264 = function() {
    var value472 = tmp10550.get();
    if(oldValue264 === value472) return;
    oldValue264 = value472;
    var subs__ = condSubs264;
    subs__.unsubscribe();
    node832.empty();
    if(value472) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node833 = $("<div>");
        node833.attr('width', "100%");
        
        
        var node834 = $("<div>");
        node834.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes4197 = $("<span>");
        node834.append(nodes4197);
        subs__.addSub((ui.group)(function(_, callback) {
          var root5351 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node837 = mobl.loadingSpan();
          root5351.append(node837);
          var list164;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList164 = function() {
            var subs__ = listSubs__;
            list164 = items.get();
            list164.list(function(results478) {
              node837.empty();
              for(var i164 = 0; i164 < results478.length; i164++) {
                (function() {
                  var iternode164 = $("<span>");
                  node837.append(iternode164);
                  var it;
                  it = mobl.ref(mobl.ref(results478), i164);
                  
                  var tmp10508 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp10508.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp10508.set(it.get() == current.get());
                  }));
                  
                  
                  var node838 = $("<span>");
                  iternode164.append(node838);
                  var condSubs266 = new mobl.CompSubscription();
                  subs__.addSub(condSubs266);
                  var oldValue266;
                  var renderCond266 = function() {
                    var value474 = tmp10508.get();
                    if(oldValue266 === value474) return;
                    oldValue266 = value474;
                    var subs__ = condSubs266;
                    subs__.unsubscribe();
                    node838.empty();
                    if(value474) {
                      
                      var tmp10504 = mobl.ref(false);
                      
                      
                      var tmp10503 = mobl.ref(null);
                      
                      
                      var tmp10502 = mobl.ref(null);
                      
                      var nodes4198 = $("<span>");
                      node838.append(nodes4198);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp10502, tmp10503, tmp10504, function(_, callback) {
                        var root5352 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4199 = $("<span>");
                        root5352.append(nodes4199);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl295();
                        }));
                        
                        function renderControl295() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root5353 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root5353); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4199;
                            nodes4199 = node.contents();
                            oldNodes.replaceWith(nodes4199);
                          }));
                        }
                        renderControl295();
                        callback(root5352); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4198;
                        nodes4198 = node.contents();
                        oldNodes.replaceWith(nodes4198);
                      }));
                      
                      
                    } else {
                      
                      var tmp10506 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp10505 = mobl.ref(true);
                      
                      
                      var tmp10507 = mobl.ref(null);
                      
                      var nodes4200 = $("<span>");
                      node838.append(nodes4200);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10506, tmp10507, tmp10505, function(_, callback) {
                        var root5354 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4201 = $("<span>");
                        root5354.append(nodes4201);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl296();
                        }));
                        
                        function renderControl296() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root5355 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root5355); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4201;
                            nodes4201 = node.contents();
                            oldNodes.replaceWith(nodes4201);
                          }));
                        }
                        renderControl296();
                        callback(root5354); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4200;
                        nodes4200 = node.contents();
                        oldNodes.replaceWith(nodes4200);
                      }));
                      
                      
                    }
                  };
                  renderCond266();
                  subs__.addSub(tmp10508.addEventListener('change', function() {
                    renderCond266();
                  }));
                  
                  
                  var oldNodes = iternode164;
                  iternode164 = iternode164.contents();
                  oldNodes.replaceWith(iternode164);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list164.addEventListener('change', function() { listSubs__.unsubscribe(); renderList164(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList164(true); }));
            });
          };
          renderList164();
          
          callback(root5351); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4197;
          nodes4197 = node.contents();
          oldNodes.replaceWith(nodes4197);
        }));
        node833.append(node834);
        
        var node835 = $("<div>");
        node835.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node836 = $("<span>");
        node835.append(node836);
        var condSubs265 = new mobl.CompSubscription();
        subs__.addSub(condSubs265);
        var oldValue265;
        var renderCond265 = function() {
          var value473 = current.get();
          if(oldValue265 === value473) return;
          oldValue265 = value473;
          var subs__ = condSubs265;
          subs__.unsubscribe();
          node836.empty();
          if(value473) {
            var nodes4195 = $("<span>");
            node836.append(nodes4195);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl294();
            }));
            
            function renderControl294() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root5349 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5349); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4195;
                nodes4195 = node.contents();
                oldNodes.replaceWith(nodes4195);
              }));
            }
            renderControl294();
            
            
          } else {
            
            var tmp10509 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp10511 = mobl.ref(null);
            
            
            var tmp10510 = mobl.ref(null);
            
            var nodes4196 = $("<span>");
            node836.append(nodes4196);
            subs__.addSub((mobl.label)(tmp10509, tmp10510, tmp10511, function(_, callback) {
              var root5350 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5350); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4196;
              nodes4196 = node.contents();
              oldNodes.replaceWith(nodes4196);
            }));
            
            
          }
        };
        renderCond265();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond265();
        }));
        
        node833.append(node835);
        node832.append(node833);
        
        
        
        
        
        
      });
    } else {
      var nodes4202 = $("<span>");
      node832.append(nodes4202);
      subs__.addSub((ui.group)(function(_, callback) {
        var root5356 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node839 = mobl.loadingSpan();
        root5356.append(node839);
        var list165;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList165 = function() {
          var subs__ = listSubs__;
          list165 = items.get();
          list165.list(function(results479) {
            node839.empty();
            for(var i165 = 0; i165 < results479.length; i165++) {
              (function() {
                var iternode165 = $("<span>");
                node839.append(iternode165);
                var it;
                it = mobl.ref(mobl.ref(results479), i165);
                
                var tmp10495 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp10565 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp10497 = mobl.ref(false);
                
                
                var tmp10496 = mobl.ref(null);
                
                var nodes4203 = $("<span>");
                iternode165.append(nodes4203);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10495, tmp10496, tmp10497, function(_, callback) {
                  var root5357 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4204 = $("<span>");
                  root5357.append(nodes4204);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl297();
                  }));
                  
                  function renderControl297() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root5358 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5358); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4204;
                      nodes4204 = node.contents();
                      oldNodes.replaceWith(nodes4204);
                    }));
                  }
                  renderControl297();
                  callback(root5357); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4203;
                  nodes4203 = node.contents();
                  oldNodes.replaceWith(nodes4203);
                }));
                
                var oldNodes = iternode165;
                iternode165 = iternode165.contents();
                oldNodes.replaceWith(iternode165);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list165.addEventListener('change', function() { listSubs__.unsubscribe(); renderList165(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList165(true); }));
          });
        };
        renderList165();
        
        callback(root5356); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4202;
        nodes4202 = node.contents();
        oldNodes.replaceWith(nodes4202);
      }));
      
      
    }
  };
  renderCond264();
  subs__.addSub(tmp10550.addEventListener('change', function() {
    renderCond264();
  }));
  
  callback(root5348); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root5359 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp10500 = mobl.ref("Detail");
  
  
  var tmp10501 = mobl.ref(null);
  
  var nodes4205 = $("<span>");
  root5359.append(nodes4205);
  subs__.addSub((ui.header)(tmp10500, tmp10501, function(_, callback) {
    var root5360 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp10499 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp10498 = mobl.ref("Back");
    
    var nodes4206 = $("<span>");
    root5360.append(nodes4206);
    subs__.addSub((ui.backButton)(tmp10498, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10499, function(_, callback) {
      var root5361 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5361); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4206;
      nodes4206 = node.contents();
      oldNodes.replaceWith(nodes4206);
    }));
    callback(root5360); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4205;
    nodes4205 = node.contents();
    oldNodes.replaceWith(nodes4205);
  }));
  var nodes4207 = $("<span>");
  root5359.append(nodes4207);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl298();
  }));
  
  function renderControl298() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root5362 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5362); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4207;
      nodes4207 = node.contents();
      oldNodes.replaceWith(nodes4207);
    }));
  }
  renderControl298();
  callback(root5359); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root5363 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes4208 = $("<span>");
  root5363.append(nodes4208);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5364 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node840 = mobl.loadingSpan();
    root5364.append(node840);
    var list166;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList166 = function() {
      var subs__ = listSubs__;
      list166 = coll.get();
      list166.list(function(results480) {
        node840.empty();
        for(var i166 = 0; i166 < results480.length; i166++) {
          (function() {
            var iternode166 = $("<span>");
            node840.append(iternode166);
            var it;
            it = mobl.ref(mobl.ref(results480), i166);
            
            var tmp10518 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp10518.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp10518.set(it.get() == selected.get());
            }));
            
            
            var node841 = $("<span>");
            iternode166.append(node841);
            var condSubs267 = new mobl.CompSubscription();
            subs__.addSub(condSubs267);
            var oldValue267;
            var renderCond267 = function() {
              var value475 = tmp10518.get();
              if(oldValue267 === value475) return;
              oldValue267 = value475;
              var subs__ = condSubs267;
              subs__.unsubscribe();
              node841.empty();
              if(value475) {
                
                var tmp10514 = mobl.ref(false);
                
                
                var tmp10513 = mobl.ref(null);
                
                
                var tmp10512 = mobl.ref(null);
                
                var nodes4209 = $("<span>");
                node841.append(nodes4209);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10512, tmp10513, tmp10514, function(_, callback) {
                  var root5365 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4210 = $("<span>");
                  root5365.append(nodes4210);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl299();
                  }));
                  
                  function renderControl299() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root5366 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5366); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4210;
                      nodes4210 = node.contents();
                      oldNodes.replaceWith(nodes4210);
                    }));
                  }
                  renderControl299();
                  callback(root5365); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4209;
                  nodes4209 = node.contents();
                  oldNodes.replaceWith(nodes4209);
                }));
                
                
              } else {
                
                var tmp10516 = mobl.ref(true);
                
                
                var tmp10515 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp10517 = mobl.ref(null);
                
                var nodes4211 = $("<span>");
                node841.append(nodes4211);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10515, tmp10517, tmp10516, function(_, callback) {
                  var root5367 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4212 = $("<span>");
                  root5367.append(nodes4212);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl300();
                  }));
                  
                  function renderControl300() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root5368 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5368); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4212;
                      nodes4212 = node.contents();
                      oldNodes.replaceWith(nodes4212);
                    }));
                  }
                  renderControl300();
                  callback(root5367); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4211;
                  nodes4211 = node.contents();
                  oldNodes.replaceWith(nodes4211);
                }));
                
                
              }
            };
            renderCond267();
            subs__.addSub(tmp10518.addEventListener('change', function() {
              renderCond267();
            }));
            
            
            var oldNodes = iternode166;
            iternode166 = iternode166.contents();
            oldNodes.replaceWith(iternode166);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list166.addEventListener('change', function() { listSubs__.unsubscribe(); renderList166(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList166(true); }));
      });
    };
    renderList166();
    
    callback(root5364); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4208;
    nodes4208 = node.contents();
    oldNodes.replaceWith(nodes4208);
  }));
  callback(root5363); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root5369 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes4213 = $("<span>");
    root5369.append(nodes4213);
    subs__.addSub((ui.group)(function(_, callback) {
      var root5370 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10522 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp10522.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp10522.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp10522.set(coll.get().limit(n.get()));
      }));
      
      
      var node842 = mobl.loadingSpan();
      root5370.append(node842);
      var list167;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList167 = function() {
        var subs__ = listSubs__;
        list167 = tmp10522.get();
        list167.list(function(results481) {
          node842.empty();
          for(var i167 = 0; i167 < results481.length; i167++) {
            (function() {
              var iternode167 = $("<span>");
              node842.append(iternode167);
              var it;
              it = mobl.ref(mobl.ref(results481), i167);
              
              var tmp10519 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp10521 = mobl.ref(false);
              
              
              var tmp10520 = mobl.ref(null);
              
              var nodes4214 = $("<span>");
              iternode167.append(nodes4214);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10519, tmp10520, tmp10521, function(_, callback) {
                var root5371 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4215 = $("<span>");
                root5371.append(nodes4215);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl301();
                }));
                
                function renderControl301() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root5372 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5372); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4215;
                    nodes4215 = node.contents();
                    oldNodes.replaceWith(nodes4215);
                  }));
                }
                renderControl301();
                callback(root5371); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4214;
                nodes4214 = node.contents();
                oldNodes.replaceWith(nodes4214);
              }));
              
              var oldNodes = iternode167;
              iternode167 = iternode167.contents();
              oldNodes.replaceWith(iternode167);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list167.addEventListener('change', function() { listSubs__.unsubscribe(); renderList167(true); }));
          subs__.addSub(tmp10522.addEventListener('change', function() { listSubs__.unsubscribe(); renderList167(true); }));
        });
      };
      renderList167();
      
      
      var tmp10525 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp10525.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp10525.set(n.get() < total.get());
      }));
      
      
      var node843 = $("<span>");
      root5370.append(node843);
      var condSubs268 = new mobl.CompSubscription();
      subs__.addSub(condSubs268);
      var oldValue268;
      var renderCond268 = function() {
        var value476 = tmp10525.get();
        if(oldValue268 === value476) return;
        oldValue268 = value476;
        var subs__ = condSubs268;
        subs__.unsubscribe();
        node843.empty();
        if(value476) {
          
          var node844 = $("<li>");
          
          var ref717 = mobl.ref(ui.loadMoreStyle);
          if(ref717.get() !== null) {
            node844.attr('class', ref717.get());
            subs__.addSub(ref717.addEventListener('change', function(_, ref, val) {
              node844.attr('class', val);
            }));
            
          }
          subs__.addSub(ref717.rebind());
          
          var val416 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val416 !== null) {
            subs__.addSub(mobl.domBind(node844, 'tap', val416));
          }
          
          
          var tmp10524 = mobl.ref(null);
          
          
          var tmp10523 = mobl.ref(null);
          
          var nodes4216 = $("<span>");
          node844.append(nodes4216);
          subs__.addSub((mobl.label)(moreLabel, tmp10523, tmp10524, function(_, callback) {
            var root5373 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5373); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4216;
            nodes4216 = node.contents();
            oldNodes.replaceWith(nodes4216);
          }));
          node843.append(node844);
          
          
          
        } else {
          
        }
      };
      renderCond268();
      subs__.addSub(tmp10525.addEventListener('change', function() {
        renderCond268();
      }));
      
      callback(root5370); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4213;
      nodes4213 = node.contents();
      oldNodes.replaceWith(nodes4213);
    }));
    callback(root5369); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root5374 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4217 = $("<span>");
  root5374.append(nodes4217);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5375 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node845 = mobl.loadingSpan();
    root5375.append(node845);
    var list168;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList168 = function() {
      var subs__ = listSubs__;
      list168 = items.get();
      list168.list(function(results482) {
        node845.empty();
        for(var i168 = 0; i168 < results482.length; i168++) {
          (function() {
            var iternode168 = $("<span>");
            node845.append(iternode168);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results482), i168), "_1");it = mobl.ref(mobl.ref(mobl.ref(results482), i168), "_2");
            
            var tmp10529 = mobl.ref(false);
            
            
            var tmp10528 = mobl.ref(null);
            
            
            var tmp10527 = mobl.ref(null);
            
            var nodes4218 = $("<span>");
            iternode168.append(nodes4218);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10527, tmp10528, tmp10529, function(_, callback) {
              var root5376 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp10526 = mobl.ref(null);
              
              var nodes4219 = $("<span>");
              root5376.append(nodes4219);
              subs__.addSub((ui.checkBox)(checked, it, tmp10526, function(_, callback) {
                var root5377 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5377); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4219;
                nodes4219 = node.contents();
                oldNodes.replaceWith(nodes4219);
              }));
              callback(root5376); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4218;
              nodes4218 = node.contents();
              oldNodes.replaceWith(nodes4218);
            }));
            
            var oldNodes = iternode168;
            iternode168 = iternode168.contents();
            oldNodes.replaceWith(iternode168);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list168.addEventListener('change', function() { listSubs__.unsubscribe(); renderList168(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList168(true); }));
      });
    };
    renderList168();
    
    callback(root5375); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4217;
    nodes4217 = node.contents();
    oldNodes.replaceWith(nodes4217);
  }));
  callback(root5374); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root5378 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll385) {
    coll385 = coll385.reverse();
    function processOne67() {
      var it;
      it = coll385.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll385.length > 0) processOne67(); else rest67();
      
    }
    function rest67() {
      
      var tmp10533 = mobl.ref(null);
      
      var nodes4220 = $("<span>");
      root5378.append(nodes4220);
      subs__.addSub((ui.header)(title, tmp10533, function(_, callback) {
        var root5379 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp10530 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp10531 = mobl.ref(mobl._("Back", []));
        
        var nodes4221 = $("<span>");
        root5379.append(nodes4221);
        subs__.addSub((ui.backButton)(tmp10531, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10530, function(_, callback) {
          var root5380 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5380); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4221;
          nodes4221 = node.contents();
          oldNodes.replaceWith(nodes4221);
        }));
        
        var tmp10532 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll384) {
                               coll384 = coll384.reverse();
                               function processOne66() {
                                 var checked;var it;
                                 var tmp10567 = coll384.pop();
                                 checked = tmp10567._1;it = tmp10567._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll384.length > 0) processOne66(); else rest66();
                                   
                                 } else {
                                   {
                                     
                                     if(coll384.length > 0) processOne66(); else rest66();
                                     
                                   }
                                 }
                               }
                               function rest66() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll384.length > 0) processOne66(); else rest66();
                             });
                             
                           });
        
        var nodes4222 = $("<span>");
        root5379.append(nodes4222);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp10532, function(_, callback) {
          var root5381 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5381); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4222;
          nodes4222 = node.contents();
          oldNodes.replaceWith(nodes4222);
        }));
        callback(root5379); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4220;
        nodes4220 = node.contents();
        oldNodes.replaceWith(nodes4220);
      }));
      var nodes4223 = $("<span>");
      root5378.append(nodes4223);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root5382 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5382); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4223;
        nodes4223 = node.contents();
        oldNodes.replaceWith(nodes4223);
      }));
      callback(root5378); return subs__;
      
      
    }
    if(coll385.length > 0) processOne67(); else rest67();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root5383 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp10535 = mobl.ref(null);
  
  
  var tmp10534 = mobl.ref(null);
  
  var nodes4224 = $("<span>");
  root5383.append(nodes4224);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp10534, tmp10535, function(_, callback) {
    var root5384 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5384); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4224;
    nodes4224 = node.contents();
    oldNodes.replaceWith(nodes4224);
  }));
  
  var tmp10536 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp10536.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp10536.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp10536.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp10536.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp10536.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes4225 = $("<span>");
  root5383.append(nodes4225);
  subs__.addSub((ui.masterDetail)(tmp10536, masterItem, detailItem, function(_, callback) {
    var root5385 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5385); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4225;
    nodes4225 = node.contents();
    oldNodes.replaceWith(nodes4225);
  }));
  callback(root5383); return subs__;
  
  
  return subs__;
};
ui.progressStyle = 'ui__progressStyle';
ui.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
  mobl.$("body").prepend(loading);
};

ui.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(ui));ui.accordionStyle = 'ui__accordionStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.inActiveSectionStyle = 'ui__inActiveSectionStyle';
ui.activeSectionStyle = 'ui__activeSectionStyle';

ui.accordion = function(sections, elements, callback) {
  var root5386 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp10549 = mobl.ref(null);
  
  
  var tmp10548 = mobl.ref(null);
  
  
  var tmp10547 = mobl.ref(null);
  
  var nodes4226 = $("<span>");
  root5386.append(nodes4226);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp10547, tmp10548, tmp10549, function(_, callback) {
    var root5387 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node846 = mobl.loadingSpan();
    root5387.append(node846);
    var list169;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList169 = function() {
      var subs__ = listSubs__;
      list169 = sections.get();
      list169.list(function(results483) {
        node846.empty();
        for(var i169 = 0; i169 < results483.length; i169++) {
          (function() {
            var iternode169 = $("<span>");
            node846.append(iternode169);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results483), i169), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results483), i169), "_2");
            
            var tmp10540 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp10540.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp10540.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp10540.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp10540.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp10539 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp10542 = mobl.ref(null);
            
            
            var tmp10541 = mobl.ref(null);
            
            var nodes4227 = $("<span>");
            iternode169.append(nodes4227);
            subs__.addSub((mobl.span)(tmp10540, tmp10541, tmp10539, tmp10542, function(_, callback) {
              var root5388 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp10538 = mobl.ref(null);
              
              
              var tmp10537 = mobl.ref(null);
              
              var nodes4228 = $("<span>");
              root5388.append(nodes4228);
              subs__.addSub((mobl.label)(sectionName, tmp10537, tmp10538, function(_, callback) {
                var root5389 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5389); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4228;
                nodes4228 = node.contents();
                oldNodes.replaceWith(nodes4228);
              }));
              callback(root5388); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4227;
              nodes4227 = node.contents();
              oldNodes.replaceWith(nodes4227);
            }));
            
            var tmp10543 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp10543.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp10543.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp10543.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp10543.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp10546 = mobl.ref(null);
            
            
            var tmp10545 = mobl.ref(null);
            
            
            var tmp10544 = mobl.ref(null);
            
            var nodes4229 = $("<span>");
            iternode169.append(nodes4229);
            subs__.addSub((mobl.block)(tmp10543, tmp10544, tmp10545, tmp10546, function(_, callback) {
              var root5390 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4230 = $("<span>");
              root5390.append(nodes4230);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl302();
              }));
              
              function renderControl302() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root5391 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5391); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4230;
                  nodes4230 = node.contents();
                  oldNodes.replaceWith(nodes4230);
                }));
              }
              renderControl302();
              callback(root5390); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4229;
              nodes4229 = node.contents();
              oldNodes.replaceWith(nodes4229);
            }));
            
            var oldNodes = iternode169;
            iternode169 = iternode169.contents();
            oldNodes.replaceWith(iternode169);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list169.addEventListener('change', function() { listSubs__.unsubscribe(); renderList169(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList169(true); }));
      });
    };
    renderList169();
    
    callback(root5387); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4226;
    nodes4226 = node.contents();
    oldNodes.replaceWith(nodes4226);
  }));
  callback(root5386); return subs__;
  
  return subs__;
};
ui.tableStyle = 'ui__tableStyle';
ui.tdStyle = 'ui__tdStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';

ui.table = function(elements, callback) {
  var root5392 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node847 = $("<table>");
  
  var ref718 = mobl.ref(ui.tableStyle);
  if(ref718.get() !== null) {
    node847.attr('class', ref718.get());
    subs__.addSub(ref718.addEventListener('change', function(_, ref, val) {
      node847.attr('class', val);
    }));
    
  }
  subs__.addSub(ref718.rebind());
  
  var nodes4231 = $("<span>");
  node847.append(nodes4231);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl303();
  }));
  
  function renderControl303() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5393 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5393); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4231;
      nodes4231 = node.contents();
      oldNodes.replaceWith(nodes4231);
    }));
  }
  renderControl303();
  root5392.append(node847);
  callback(root5392); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root5394 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node848 = $("<tr>");
  
  var ref719 = mobl.ref(ui.trStyle);
  if(ref719.get() !== null) {
    node848.attr('class', ref719.get());
    subs__.addSub(ref719.addEventListener('change', function(_, ref, val) {
      node848.attr('class', val);
    }));
    
  }
  subs__.addSub(ref719.rebind());
  
  var nodes4232 = $("<span>");
  node848.append(nodes4232);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl304();
  }));
  
  function renderControl304() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5395 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5395); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4232;
      nodes4232 = node.contents();
      oldNodes.replaceWith(nodes4232);
    }));
  }
  renderControl304();
  root5394.append(node848);
  callback(root5394); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root5396 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node849 = $("<td>");
  
  var ref720 = width;
  if(ref720.get() !== null) {
    node849.attr('width', ref720.get());
    subs__.addSub(ref720.addEventListener('change', function(_, ref, val) {
      node849.attr('width', val);
    }));
    
  }
  subs__.addSub(ref720.rebind());
  
  var ref721 = mobl.ref(ui.tdStyle);
  if(ref721.get() !== null) {
    node849.attr('class', ref721.get());
    subs__.addSub(ref721.addEventListener('change', function(_, ref, val) {
      node849.attr('class', val);
    }));
    
  }
  subs__.addSub(ref721.rebind());
  
  var nodes4233 = $("<span>");
  node849.append(nodes4233);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl305();
  }));
  
  function renderControl305() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5397 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5397); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4233;
      nodes4233 = node.contents();
      oldNodes.replaceWith(nodes4233);
    }));
  }
  renderControl305();
  root5396.append(node849);
  callback(root5396); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root5398 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node850 = $("<td>");
  
  var ref722 = width;
  if(ref722.get() !== null) {
    node850.attr('width', ref722.get());
    subs__.addSub(ref722.addEventListener('change', function(_, ref, val) {
      node850.attr('width', val);
    }));
    
  }
  subs__.addSub(ref722.rebind());
  
  var ref723 = mobl.ref(ui.tdStyle);
  if(ref723.get() !== null) {
    node850.attr('class', ref723.get());
    subs__.addSub(ref723.addEventListener('change', function(_, ref, val) {
      node850.attr('class', val);
    }));
    
  }
  subs__.addSub(ref723.rebind());
  
  var nodes4234 = $("<span>");
  node850.append(nodes4234);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl306();
  }));
  
  function renderControl306() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5399 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5399); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4234;
      nodes4234 = node.contents();
      oldNodes.replaceWith(nodes4234);
    }));
  }
  renderControl306();
  root5398.append(node850);
  callback(root5398); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root5400 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node851 = $("<td>");
  
  var ref724 = width;
  if(ref724.get() !== null) {
    node851.attr('width', ref724.get());
    subs__.addSub(ref724.addEventListener('change', function(_, ref, val) {
      node851.attr('width', val);
    }));
    
  }
  subs__.addSub(ref724.rebind());
  
  var ref725 = mobl.ref(ui.tdStyle);
  if(ref725.get() !== null) {
    node851.attr('class', ref725.get());
    subs__.addSub(ref725.addEventListener('change', function(_, ref, val) {
      node851.attr('class', val);
    }));
    
  }
  subs__.addSub(ref725.rebind());
  
  
  var node852 = $("<strong>");
  
  var nodes4235 = $("<span>");
  node852.append(nodes4235);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl307();
  }));
  
  function renderControl307() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5401 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5401); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4235;
      nodes4235 = node.contents();
      oldNodes.replaceWith(nodes4235);
    }));
  }
  renderControl307();
  node851.append(node852);
  root5400.append(node851);
  callback(root5400); return subs__;
  
  
  
  return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
}(ui));