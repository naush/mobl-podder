mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root4292 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node605 = $("<span>");
  root4292.append(node605);
  var condSubs213 = new mobl.CompSubscription();
  subs__.addSub(condSubs213);
  var oldValue213;
  var renderCond213 = function() {
    var value389 = value.get();
    if(oldValue213 === value389) return;
    oldValue213 = value389;
    var subs__ = condSubs213;
    subs__.unsubscribe();
    node605.empty();
    if(value389) {
      var nodes3362 = $("<span>");
      node605.append(nodes3362);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl220();
      }));
      
      function renderControl220() {
        subs__.addSub((elements)(function(elements, callback) {
          var root4293 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4293); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3362;
          nodes3362 = node.contents();
          oldNodes.replaceWith(nodes3362);
        }));
      }
      renderControl220();
      
      
    } else {
      
      var tmp8326 = mobl.ref(null);
      
      
      var tmp8325 = mobl.ref(null);
      
      
      var tmp8324 = mobl.ref(null);
      
      var nodes3363 = $("<span>");
      node605.append(nodes3363);
      subs__.addSub((mobl.block)(style, tmp8324, tmp8325, tmp8326, function(_, callback) {
        var root4294 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp8316 = mobl.ref(null);
        
        
        var tmp8315 = mobl.ref(null);
        
        var nodes3364 = $("<span>");
        root4294.append(nodes3364);
        subs__.addSub((mobl.label)(loadingMessage, tmp8315, tmp8316, function(_, callback) {
          var root4295 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4295); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3364;
          nodes3364 = node.contents();
          oldNodes.replaceWith(nodes3364);
        }));
        
        var tmp8318 = mobl.ref("middle");
        
        
        var tmp8317 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp8323 = mobl.ref(null);
        
        
        var tmp8322 = mobl.ref(null);
        
        
        var tmp8321 = mobl.ref(null);
        
        
        var tmp8320 = mobl.ref(null);
        
        
        var tmp8319 = mobl.ref(null);
        
        var nodes3365 = $("<span>");
        root4294.append(nodes3365);
        subs__.addSub((ui.image)(tmp8317, tmp8319, tmp8320, tmp8321, tmp8322, tmp8318, tmp8323, function(_, callback) {
          var root4296 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4296); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3365;
          nodes3365 = node.contents();
          oldNodes.replaceWith(nodes3365);
        }));
        callback(root4294); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3363;
        nodes3363 = node.contents();
        oldNodes.replaceWith(nodes3363);
      }));
      
      
    }
  };
  renderCond213();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond213();
  }));
  
  callback(root4292); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root4297 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node606 = $("<div>");
  
  var ref517 = mobl.ref(ui.headerStyle);
  if(ref517.get() !== null) {
    node606.attr('class', ref517.get());
    subs__.addSub(ref517.addEventListener('change', function(_, ref, val) {
      node606.attr('class', val);
    }));
    
  }
  subs__.addSub(ref517.rebind());
  
  var val295 = onclick.get();
  if(val295 !== null) {
    subs__.addSub(mobl.domBind(node606, 'tap', val295));
  }
  
  
  var node607 = $("<div>");
  
  var ref516 = mobl.ref(ui.headerContainerStyle);
  if(ref516.get() !== null) {
    node607.attr('class', ref516.get());
    subs__.addSub(ref516.addEventListener('change', function(_, ref, val) {
      node607.attr('class', val);
    }));
    
  }
  subs__.addSub(ref516.rebind());
  
  
  var node608 = $("<div>");
  
  var ref514 = text;
  node608.text(""+ref514.get());
  var ignore103 = false;
  subs__.addSub(ref514.addEventListener('change', function(_, ref, val) {
    if(ignore103) return;
    node608.text(""+val);
  }));
  subs__.addSub(ref514.rebind());
  
  
  var ref515 = mobl.ref(ui.headerTextStyle);
  if(ref515.get() !== null) {
    node608.attr('class', ref515.get());
    subs__.addSub(ref515.addEventListener('change', function(_, ref, val) {
      node608.attr('class', val);
    }));
    
  }
  subs__.addSub(ref515.rebind());
  
  node607.append(node608);
  node606.append(node607);
  var nodes3366 = $("<span>");
  node606.append(nodes3366);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl221();
  }));
  
  function renderControl221() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4298 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4298); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3366;
      nodes3366 = node.contents();
      oldNodes.replaceWith(nodes3366);
    }));
  }
  renderControl221();
  root4297.append(node606);
  callback(root4297); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4299 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref518 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref518.get() !== null) {
    sp.attr('class', ref518.get());
    subs__.addSub(ref518.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref518.rebind());
  
  var val296 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val296 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val296));
  }
  
  var val297 = function(event, callback) {
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
  if(val297 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val297));
  }
  
  var val298 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after90(result__) {
                    var tmp8398 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after90);if(result__ !== undefined) after90(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val298 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val298));
  }
  
  var val299 = function(event, callback) {
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
  if(val299 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val299));
  }
  
  var ref519 = text;
  sp.text(""+ref519.get());
  var ignore104 = false;
  subs__.addSub(ref519.addEventListener('change', function(_, ref, val) {
    if(ignore104) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref519.rebind());
  
  
  root4299.append(sp);
  callback(root4299); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4300 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3367 = $("<span>");
  root4300.append(nodes3367);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root4301 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4301); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3367;
    nodes3367 = node.contents();
    oldNodes.replaceWith(nodes3367);
  }));
  callback(root4300); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4302 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3368 = $("<span>");
  root4302.append(nodes3368);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root4303 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4303); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3368;
    nodes3368 = node.contents();
    oldNodes.replaceWith(nodes3368);
  }));
  callback(root4302); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root4304 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node609 = $("<ul>");
  
  var ref520 = mobl.ref(ui.groupStyle);
  if(ref520.get() !== null) {
    node609.attr('class', ref520.get());
    subs__.addSub(ref520.addEventListener('change', function(_, ref, val) {
      node609.attr('class', val);
    }));
    
  }
  subs__.addSub(ref520.rebind());
  
  var nodes3369 = $("<span>");
  node609.append(nodes3369);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl222();
  }));
  
  function renderControl222() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4305 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4305); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3369;
      nodes3369 = node.contents();
      oldNodes.replaceWith(nodes3369);
    }));
  }
  renderControl222();
  root4304.append(node609);
  callback(root4304); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root4306 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node610 = $("<img>");
  
  var ref521 = url;
  if(ref521.get() !== null) {
    node610.attr('src', ref521.get());
    subs__.addSub(ref521.addEventListener('change', function(_, ref, val) {
      node610.attr('src', val);
    }));
    
  }
  subs__.addSub(ref521.rebind());
  
  var ref522 = width;
  if(ref522.get() !== null) {
    node610.attr('width', ref522.get());
    subs__.addSub(ref522.addEventListener('change', function(_, ref, val) {
      node610.attr('width', val);
    }));
    
  }
  subs__.addSub(ref522.rebind());
  
  var ref523 = height;
  if(ref523.get() !== null) {
    node610.attr('height', ref523.get());
    subs__.addSub(ref523.addEventListener('change', function(_, ref, val) {
      node610.attr('height', val);
    }));
    
  }
  subs__.addSub(ref523.rebind());
  
  var ref524 = style;
  if(ref524.get() !== null) {
    node610.attr('class', ref524.get());
    subs__.addSub(ref524.addEventListener('change', function(_, ref, val) {
      node610.attr('class', val);
    }));
    
  }
  subs__.addSub(ref524.rebind());
  
  var val300 = onclick.get();
  if(val300 !== null) {
    subs__.addSub(mobl.domBind(node610, 'tap', val300));
  }
  
  var ref525 = valign;
  if(ref525.get() !== null) {
    node610.attr('valign', ref525.get());
    subs__.addSub(ref525.addEventListener('change', function(_, ref, val) {
      node610.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref525.rebind());
  
  var ref526 = align;
  if(ref526.get() !== null) {
    node610.attr('align', ref526.get());
    subs__.addSub(ref526.addEventListener('change', function(_, ref, val) {
      node610.attr('align', val);
    }));
    
  }
  subs__.addSub(ref526.rebind());
  
  root4306.append(node610);
  callback(root4306); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root4307 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref527 = mobl.ref(ui.itemStyle);
  if(ref527.get() !== null) {
    el.attr('class', ref527.get());
    subs__.addSub(ref527.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref527.rebind());
  
  var ref528 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref528.get() !== null) {
    el.attr('class', ref528.get());
    subs__.addSub(ref528.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref528.rebind());
  
  var val301 = onswipe.get();
  if(val301 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val301));
  }
  
  var val302 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp8399 = result__;
                                           function after91(result__) {
                                             var tmp8400 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after91);if(result__ !== undefined) after91(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp8401 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val302 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val302));
  }
  
  var nodes3370 = $("<span>");
  el.append(nodes3370);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl223();
  }));
  
  function renderControl223() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4308 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4308); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3370;
      nodes3370 = node.contents();
      oldNodes.replaceWith(nodes3370);
    }));
  }
  renderControl223();
  root4307.append(el);
  callback(root4307); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root4309 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node611 = $("<input>");
  node611.attr('type', "checkbox");
  
  var ref530 = b;
  node611.attr('checked', !!ref530.get());
  subs__.addSub(ref530.addEventListener('change', function(_, ref, val) {
    if(ref === ref530) node611.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node611, 'change', function() {
    b.set(!!node611.attr('checked'));
  }));
  
  var val304 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val304 !== null) {
    subs__.addSub(mobl.domBind(node611, 'tap', val304));
  }
  
  var val305 = onchange.get();
  if(val305 !== null) {
    subs__.addSub(mobl.domBind(node611, 'change', val305));
  }
  
  root4309.append(node611);
  
  root4309.append(" ");
  
  var node612 = $("<span>");
  
  var ref529 = label;
  node612.text(""+ref529.get());
  var ignore105 = false;
  subs__.addSub(ref529.addEventListener('change', function(_, ref, val) {
    if(ignore105) return;
    node612.text(""+val);
  }));
  subs__.addSub(ref529.rebind());
  
  
  var val303 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after92(result__) {
                    var tmp8402 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after92);if(result__ !== undefined) after92(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val303 !== null) {
    subs__.addSub(mobl.domBind(node612, 'tap', val303));
  }
  
  root4309.append(node612);
  callback(root4309); return subs__;
  
  
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
  var root4310 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node613 = $("<span>");
  root4310.append(node613);
  var condSubs214 = new mobl.CompSubscription();
  subs__.addSub(condSubs214);
  var oldValue214;
  var renderCond214 = function() {
    var value390 = label.get();
    if(oldValue214 === value390) return;
    oldValue214 = value390;
    var subs__ = condSubs214;
    subs__.unsubscribe();
    node613.empty();
    if(value390) {
      
      var tmp8327 = mobl.ref(null);
      
      var nodes3371 = $("<span>");
      node613.append(nodes3371);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp8327, function(_, callback) {
        var root4311 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4311); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3371;
        nodes3371 = node.contents();
        oldNodes.replaceWith(nodes3371);
      }));
      
      
    } else {
      
    }
  };
  renderCond214();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond214();
  }));
  
  
  var node614 = $("<span>");
  root4310.append(node614);
  var condSubs215 = new mobl.CompSubscription();
  subs__.addSub(condSubs215);
  var oldValue215;
  var renderCond215 = function() {
    var value391 = validator.get();
    if(oldValue215 === value391) return;
    oldValue215 = value391;
    var subs__ = condSubs215;
    subs__.unsubscribe();
    node614.empty();
    if(value391) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after96(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp8403 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node615 = $("<input>");
        node615.attr('type', "text");
        
        var ref531 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref531.get() !== null) {
          node615.attr('class', ref531.get());
          subs__.addSub(ref531.addEventListener('change', function(_, ref, val) {
            node615.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node615.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node615.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node615.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref531.rebind());
        
        var ref532 = placeholder;
        if(ref532.get() !== null) {
          node615.attr('placeholder', ref532.get());
          subs__.addSub(ref532.addEventListener('change', function(_, ref, val) {
            node615.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref532.rebind());
        
        var ref533 = temp;
        node615.val(""+ref533.get());
        var ignore106 = false;
        subs__.addSub(ref533.addEventListener('change', function(_, ref, val) {
          if(ignore106) return;
          node615.val(""+val);
        }));
        subs__.addSub(ref533.rebind());
        
        subs__.addSub(mobl.domBind(node615, 'keyup change', function() {
          ignore106 = true;
          temp.set(mobl.stringTomobl__String(node615.val()));
          ignore106 = false;
        }));
        
        
        var val306 = onchange.get();
        if(val306 !== null) {
          subs__.addSub(mobl.domBind(node615, 'change', val306));
        }
        
        var val307 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after93(result__) {
                          var tmp8404 = result__;
                          function after94(result__) {
                            var tmp8405 = result__;
                            var result__ = tmp8405;
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
                          var result__ = validator.get()(temp.get(), after94);if(result__ !== undefined) after94(result__);
                        }
                        var result__ = onkeyup.get()(event, after93);if(result__ !== undefined) after93(result__);
                      } else {
                        {
                          function after95(result__) {
                            var tmp8405 = result__;
                            var result__ = tmp8405;
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
                          var result__ = validator.get()(temp.get(), after95);if(result__ !== undefined) after95(result__);
                        }
                      }
                    };
        if(val307 !== null) {
          subs__.addSub(mobl.domBind(node615, 'keyup', val307));
        }
        
        var val308 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val308 !== null) {
          subs__.addSub(mobl.domBind(node615, 'blur', val308));
        }
        
        node614.append(node615);
        
        var tmp8328 = mobl.ref(null);
        
        var nodes3372 = $("<span>");
        node614.append(nodes3372);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp8328, function(_, callback) {
          var root4312 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4312); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3372;
          nodes3372 = node.contents();
          oldNodes.replaceWith(nodes3372);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after96);if(result__ !== undefined) after96(result__);
    } else {
      
      var node616 = $("<input>");
      node616.attr('type', "text");
      
      var ref534 = style;
      if(ref534.get() !== null) {
        node616.attr('class', ref534.get());
        subs__.addSub(ref534.addEventListener('change', function(_, ref, val) {
          node616.attr('class', val);
        }));
        
      }
      subs__.addSub(ref534.rebind());
      
      var ref535 = placeholder;
      if(ref535.get() !== null) {
        node616.attr('placeholder', ref535.get());
        subs__.addSub(ref535.addEventListener('change', function(_, ref, val) {
          node616.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref535.rebind());
      
      var ref536 = s;
      node616.val(""+ref536.get());
      var ignore107 = false;
      subs__.addSub(ref536.addEventListener('change', function(_, ref, val) {
        if(ignore107) return;
        node616.val(""+val);
      }));
      subs__.addSub(ref536.rebind());
      
      subs__.addSub(mobl.domBind(node616, 'keyup change', function() {
        ignore107 = true;
        s.set(mobl.stringTomobl__String(node616.val()));
        ignore107 = false;
      }));
      
      
      var val309 = onchange.get();
      if(val309 !== null) {
        subs__.addSub(mobl.domBind(node616, 'change', val309));
      }
      
      var val310 = onkeyup.get();
      if(val310 !== null) {
        subs__.addSub(mobl.domBind(node616, 'keyup', val310));
      }
      
      var val311 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val311 !== null) {
        subs__.addSub(mobl.domBind(node616, 'blur', val311));
      }
      
      node614.append(node616);
      
      
    }
  };
  renderCond215();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond215();
  }));
  
  callback(root4310); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4313 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3373 = $("<span>");
  root4313.append(nodes3373);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root4314 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4314); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3373;
    nodes3373 = node.contents();
    oldNodes.replaceWith(nodes3373);
  }));
  callback(root4313); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4315 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after97(result__) {
      var tmp8406 = result__;
      var result__ = tmp8406;
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
    var result__ = validator.get()(n2, after97);if(result__ !== undefined) after97(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes3374 = $("<span>");
  root4315.append(nodes3374);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root4316 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4316); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3374;
    nodes3374 = node.contents();
    oldNodes.replaceWith(nodes3374);
  }));
  callback(root4315); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root4317 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node617 = $("<span>");
  root4317.append(node617);
  var condSubs216 = new mobl.CompSubscription();
  subs__.addSub(condSubs216);
  var oldValue216;
  var renderCond216 = function() {
    var value392 = label.get();
    if(oldValue216 === value392) return;
    oldValue216 = value392;
    var subs__ = condSubs216;
    subs__.unsubscribe();
    node617.empty();
    if(value392) {
      
      var node618 = $("<span>");
      node618.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref540 = label;
      node618.text(""+ref540.get());
      var ignore109 = false;
      subs__.addSub(ref540.addEventListener('change', function(_, ref, val) {
        if(ignore109) return;
        node618.text(""+val);
      }));
      subs__.addSub(ref540.rebind());
      
      
      node617.append(node618);
      
      var node619 = $("<span>");
      node619.attr('style', "float: left");
      
      
      var node620 = $("<input>");
      node620.attr('type', "password");
      
      var ref537 = style;
      if(ref537.get() !== null) {
        node620.attr('class', ref537.get());
        subs__.addSub(ref537.addEventListener('change', function(_, ref, val) {
          node620.attr('class', val);
        }));
        
      }
      subs__.addSub(ref537.rebind());
      
      var ref538 = placeholder;
      if(ref538.get() !== null) {
        node620.attr('placeholder', ref538.get());
        subs__.addSub(ref538.addEventListener('change', function(_, ref, val) {
          node620.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref538.rebind());
      
      var ref539 = s;
      node620.val(""+ref539.get());
      var ignore108 = false;
      subs__.addSub(ref539.addEventListener('change', function(_, ref, val) {
        if(ignore108) return;
        node620.val(""+val);
      }));
      subs__.addSub(ref539.rebind());
      
      subs__.addSub(mobl.domBind(node620, 'keyup change', function() {
        ignore108 = true;
        s.set(mobl.stringTomobl__String(node620.val()));
        ignore108 = false;
      }));
      
      
      var val312 = onchange.get();
      if(val312 !== null) {
        subs__.addSub(mobl.domBind(node620, 'change', val312));
      }
      
      var val313 = onkeyup.get();
      if(val313 !== null) {
        subs__.addSub(mobl.domBind(node620, 'keyup', val313));
      }
      
      var val314 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val314 !== null) {
        subs__.addSub(mobl.domBind(node620, 'blur', val314));
      }
      
      node619.append(node620);
      node617.append(node619);
      
      
      
      
    } else {
      
      var node621 = $("<input>");
      node621.attr('type', "password");
      
      var ref541 = style;
      if(ref541.get() !== null) {
        node621.attr('class', ref541.get());
        subs__.addSub(ref541.addEventListener('change', function(_, ref, val) {
          node621.attr('class', val);
        }));
        
      }
      subs__.addSub(ref541.rebind());
      
      var ref542 = placeholder;
      if(ref542.get() !== null) {
        node621.attr('placeholder', ref542.get());
        subs__.addSub(ref542.addEventListener('change', function(_, ref, val) {
          node621.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref542.rebind());
      
      var ref543 = s;
      node621.val(""+ref543.get());
      var ignore110 = false;
      subs__.addSub(ref543.addEventListener('change', function(_, ref, val) {
        if(ignore110) return;
        node621.val(""+val);
      }));
      subs__.addSub(ref543.rebind());
      
      subs__.addSub(mobl.domBind(node621, 'keyup change', function() {
        ignore110 = true;
        s.set(mobl.stringTomobl__String(node621.val()));
        ignore110 = false;
      }));
      
      
      var val315 = onchange.get();
      if(val315 !== null) {
        subs__.addSub(mobl.domBind(node621, 'change', val315));
      }
      
      var val316 = onkeyup.get();
      if(val316 !== null) {
        subs__.addSub(mobl.domBind(node621, 'keyup', val316));
      }
      
      var val317 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val317 !== null) {
        subs__.addSub(mobl.domBind(node621, 'blur', val317));
      }
      
      node617.append(node621);
      
      
    }
  };
  renderCond216();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond216();
  }));
  
  callback(root4317); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root4318 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref548 = style;
  if(ref548.get() !== null) {
    sel.attr('class', ref548.get());
    subs__.addSub(ref548.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref548.rebind());
  
  var val318 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after98(result__) {
                    var tmp8408 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after98);if(result__ !== undefined) after98(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val318 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val318));
  }
  
  
  var node622 = mobl.loadingSpan();
  sel.append(node622);
  var list114;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList114 = function() {
    var subs__ = listSubs__;
    list114 = options.get();
    list114.list(function(results122) {
      node622.empty();
      for(var i114 = 0; i114 < results122.length; i114++) {
        (function() {
          var iternode114 = $("<span>");
          node622.append(iternode114);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results122), i114), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results122), i114), "_2");
          
          var node623 = $("<option>");
          
          var ref544 = optionDescription;
          node623.text(""+ref544.get());
          var ignore111 = false;
          subs__.addSub(ref544.addEventListener('change', function(_, ref, val) {
            if(ignore111) return;
            node623.text(""+val);
          }));
          subs__.addSub(ref544.rebind());
          
          
          var ref545 = optionStyle;
          if(ref545.get() !== null) {
            node623.attr('class', ref545.get());
            subs__.addSub(ref545.addEventListener('change', function(_, ref, val) {
              node623.attr('class', val);
            }));
            
          }
          subs__.addSub(ref545.rebind());
          
          var ref546 = optionValue;
          if(ref546.get() !== null) {
            node623.attr('value', ref546.get());
            subs__.addSub(ref546.addEventListener('change', function(_, ref, val) {
              node623.attr('value', val);
            }));
            
          }
          subs__.addSub(ref546.rebind());
          
          var ref547 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref547.get() !== null) {
            node623.attr('selected', ref547.get());
            subs__.addSub(ref547.addEventListener('change', function(_, ref, val) {
              node623.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node623.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node623.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref547.rebind());
          
          iternode114.append(node623);
          
          var oldNodes = iternode114;
          iternode114 = iternode114.contents();
          oldNodes.replaceWith(iternode114);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list114.addEventListener('change', function() { listSubs__.unsubscribe(); renderList114(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList114(true); }));
    });
  };
  renderList114();
  
  root4318.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root4318); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root4319 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp8337 = mobl.ref(null);
  
  
  var tmp8336 = mobl.ref(null);
  
  
  var tmp8335 = mobl.ref(null);
  
  var nodes3375 = $("<span>");
  root4319.append(nodes3375);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp8335, tmp8336, tmp8337, function(_, callback) {
    var root4320 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node624 = mobl.loadingSpan();
    root4320.append(node624);
    var list115;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList115 = function() {
      var subs__ = listSubs__;
      list115 = tabs.get();
      list115.list(function(results123) {
        node624.empty();
        for(var i115 = 0; i115 < results123.length; i115++) {
          (function() {
            var iternode115 = $("<span>");
            node624.append(iternode115);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results123), i115), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results123), i115), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results123), i115), "_3");
            
            var tmp8332 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp8332.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp8332.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp8332.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp8332.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp8331 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp8334 = mobl.ref(null);
            
            
            var tmp8333 = mobl.ref(null);
            
            var nodes3376 = $("<span>");
            iternode115.append(nodes3376);
            subs__.addSub((mobl.span)(tmp8332, tmp8333, tmp8331, tmp8334, function(_, callback) {
              var root4321 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp8330 = mobl.ref(null);
              
              
              var tmp8329 = mobl.ref(null);
              
              var nodes3377 = $("<span>");
              root4321.append(nodes3377);
              subs__.addSub((mobl.label)(tabName, tmp8329, tmp8330, function(_, callback) {
                var root4322 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4322); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3377;
                nodes3377 = node.contents();
                oldNodes.replaceWith(nodes3377);
              }));
              callback(root4321); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3376;
              nodes3376 = node.contents();
              oldNodes.replaceWith(nodes3376);
            }));
            
            var oldNodes = iternode115;
            iternode115 = iternode115.contents();
            oldNodes.replaceWith(iternode115);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list115.addEventListener('change', function() { listSubs__.unsubscribe(); renderList115(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList115(true); }));
      });
    };
    renderList115();
    
    callback(root4320); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3375;
    nodes3375 = node.contents();
    oldNodes.replaceWith(nodes3375);
  }));
  
  var node625 = mobl.loadingSpan();
  root4319.append(node625);
  var list116;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList116 = function() {
    var subs__ = listSubs__;
    list116 = tabs.get();
    list116.list(function(results124) {
      node625.empty();
      for(var i116 = 0; i116 < results124.length; i116++) {
        (function() {
          var iternode116 = $("<span>");
          node625.append(iternode116);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results124), i116), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results124), i116), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results124), i116), "_3");
          
          var tmp8338 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp8338.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp8338.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp8338.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp8338.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp8341 = mobl.ref(null);
          
          
          var tmp8340 = mobl.ref(null);
          
          
          var tmp8339 = mobl.ref(null);
          
          var nodes3378 = $("<span>");
          iternode116.append(nodes3378);
          subs__.addSub((mobl.block)(tmp8338, tmp8339, tmp8340, tmp8341, function(_, callback) {
            var root4323 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes3379 = $("<span>");
            root4323.append(nodes3379);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root4324 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3380 = $("<span>");
              root4324.append(nodes3380);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl224();
              }));
              
              function renderControl224() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root4325 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root4325); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3380;
                  nodes3380 = node.contents();
                  oldNodes.replaceWith(nodes3380);
                }));
              }
              renderControl224();
              callback(root4324); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3379;
              nodes3379 = node.contents();
              oldNodes.replaceWith(nodes3379);
            }));
            callback(root4323); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3378;
            nodes3378 = node.contents();
            oldNodes.replaceWith(nodes3378);
          }));
          
          var oldNodes = iternode116;
          iternode116 = iternode116.contents();
          oldNodes.replaceWith(iternode116);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list116.addEventListener('change', function() { listSubs__.unsubscribe(); renderList116(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList116(true); }));
    });
  };
  renderList116();
  
  callback(root4319); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root4326 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node626 = $("<div>");
  
  var ref552 = mobl.ref(ui.searchboxStyle);
  if(ref552.get() !== null) {
    node626.attr('class', ref552.get());
    subs__.addSub(ref552.addEventListener('change', function(_, ref, val) {
      node626.attr('class', val);
    }));
    
  }
  subs__.addSub(ref552.rebind());
  
  
  var node627 = $("<input>");
  node627.attr('type', "search");
  
  var ref549 = mobl.ref(ui.searchBoxInputStyle);
  if(ref549.get() !== null) {
    node627.attr('class', ref549.get());
    subs__.addSub(ref549.addEventListener('change', function(_, ref, val) {
      node627.attr('class', val);
    }));
    
  }
  subs__.addSub(ref549.rebind());
  
  var ref550 = placeholder;
  if(ref550.get() !== null) {
    node627.attr('placeholder', ref550.get());
    subs__.addSub(ref550.addEventListener('change', function(_, ref, val) {
      node627.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref550.rebind());
  
  var ref551 = s;
  node627.val(""+ref551.get());
  var ignore112 = false;
  subs__.addSub(ref551.addEventListener('change', function(_, ref, val) {
    if(ignore112) return;
    node627.val(""+val);
  }));
  subs__.addSub(ref551.rebind());
  
  subs__.addSub(mobl.domBind(node627, 'keyup change', function() {
    ignore112 = true;
    s.set(mobl.stringTomobl__String(node627.val()));
    ignore112 = false;
  }));
  
  
  var val319 = onsearch.get();
  if(val319 !== null) {
    subs__.addSub(mobl.domBind(node627, 'change', val319));
  }
  
  var val320 = onkeyup.get();
  if(val320 !== null) {
    subs__.addSub(mobl.domBind(node627, 'keyup', val320));
  }
  node627.attr('autocorrect', false);
  node627.attr('autocapitalize', false);
  node627.attr('autocomplete', false);
  
  node626.append(node627);
  root4326.append(node626);
  callback(root4326); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root4327 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref553 = mobl.ref(ui.contextMenuStyle);
  if(ref553.get() !== null) {
    menu.attr('class', ref553.get());
    subs__.addSub(ref553.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref553.rebind());
  
  var nodes3381 = $("<span>");
  menu.append(nodes3381);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl225();
  }));
  
  function renderControl225() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4328 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4328); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3381;
      nodes3381 = node.contents();
      oldNodes.replaceWith(nodes3381);
    }));
  }
  renderControl225();
  root4327.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val321 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp8411 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val321 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val321));
  }
  
  root4327.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root4327); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root4329 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8397 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp8397.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node628 = $("<span>");
  root4329.append(node628);
  var condSubs217 = new mobl.CompSubscription();
  subs__.addSub(condSubs217);
  var oldValue217;
  var renderCond217 = function() {
    var value393 = tmp8397.get();
    if(oldValue217 === value393) return;
    oldValue217 = value393;
    var subs__ = condSubs217;
    subs__.unsubscribe();
    node628.empty();
    if(value393) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node629 = $("<div>");
        node629.attr('width', "100%");
        
        
        var node630 = $("<div>");
        node630.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes3384 = $("<span>");
        node630.append(nodes3384);
        subs__.addSub((ui.group)(function(_, callback) {
          var root4332 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node633 = mobl.loadingSpan();
          root4332.append(node633);
          var list117;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList117 = function() {
            var subs__ = listSubs__;
            list117 = items.get();
            list117.list(function(results125) {
              node633.empty();
              for(var i117 = 0; i117 < results125.length; i117++) {
                (function() {
                  var iternode117 = $("<span>");
                  node633.append(iternode117);
                  var it;
                  it = mobl.ref(mobl.ref(results125), i117);
                  
                  var tmp8355 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp8355.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp8355.set(it.get() == current.get());
                  }));
                  
                  
                  var node634 = $("<span>");
                  iternode117.append(node634);
                  var condSubs219 = new mobl.CompSubscription();
                  subs__.addSub(condSubs219);
                  var oldValue219;
                  var renderCond219 = function() {
                    var value395 = tmp8355.get();
                    if(oldValue219 === value395) return;
                    oldValue219 = value395;
                    var subs__ = condSubs219;
                    subs__.unsubscribe();
                    node634.empty();
                    if(value395) {
                      
                      var tmp8351 = mobl.ref(false);
                      
                      
                      var tmp8350 = mobl.ref(null);
                      
                      
                      var tmp8349 = mobl.ref(null);
                      
                      var nodes3385 = $("<span>");
                      node634.append(nodes3385);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp8349, tmp8350, tmp8351, function(_, callback) {
                        var root4333 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes3386 = $("<span>");
                        root4333.append(nodes3386);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl227();
                        }));
                        
                        function renderControl227() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root4334 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root4334); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes3386;
                            nodes3386 = node.contents();
                            oldNodes.replaceWith(nodes3386);
                          }));
                        }
                        renderControl227();
                        callback(root4333); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3385;
                        nodes3385 = node.contents();
                        oldNodes.replaceWith(nodes3385);
                      }));
                      
                      
                    } else {
                      
                      var tmp8353 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp8352 = mobl.ref(true);
                      
                      
                      var tmp8354 = mobl.ref(null);
                      
                      var nodes3387 = $("<span>");
                      node634.append(nodes3387);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8353, tmp8354, tmp8352, function(_, callback) {
                        var root4335 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes3388 = $("<span>");
                        root4335.append(nodes3388);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl228();
                        }));
                        
                        function renderControl228() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root4336 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root4336); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes3388;
                            nodes3388 = node.contents();
                            oldNodes.replaceWith(nodes3388);
                          }));
                        }
                        renderControl228();
                        callback(root4335); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3387;
                        nodes3387 = node.contents();
                        oldNodes.replaceWith(nodes3387);
                      }));
                      
                      
                    }
                  };
                  renderCond219();
                  subs__.addSub(tmp8355.addEventListener('change', function() {
                    renderCond219();
                  }));
                  
                  
                  var oldNodes = iternode117;
                  iternode117 = iternode117.contents();
                  oldNodes.replaceWith(iternode117);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list117.addEventListener('change', function() { listSubs__.unsubscribe(); renderList117(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList117(true); }));
            });
          };
          renderList117();
          
          callback(root4332); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3384;
          nodes3384 = node.contents();
          oldNodes.replaceWith(nodes3384);
        }));
        node629.append(node630);
        
        var node631 = $("<div>");
        node631.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node632 = $("<span>");
        node631.append(node632);
        var condSubs218 = new mobl.CompSubscription();
        subs__.addSub(condSubs218);
        var oldValue218;
        var renderCond218 = function() {
          var value394 = current.get();
          if(oldValue218 === value394) return;
          oldValue218 = value394;
          var subs__ = condSubs218;
          subs__.unsubscribe();
          node632.empty();
          if(value394) {
            var nodes3382 = $("<span>");
            node632.append(nodes3382);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl226();
            }));
            
            function renderControl226() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root4330 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4330); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3382;
                nodes3382 = node.contents();
                oldNodes.replaceWith(nodes3382);
              }));
            }
            renderControl226();
            
            
          } else {
            
            var tmp8356 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp8358 = mobl.ref(null);
            
            
            var tmp8357 = mobl.ref(null);
            
            var nodes3383 = $("<span>");
            node632.append(nodes3383);
            subs__.addSub((mobl.label)(tmp8356, tmp8357, tmp8358, function(_, callback) {
              var root4331 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4331); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3383;
              nodes3383 = node.contents();
              oldNodes.replaceWith(nodes3383);
            }));
            
            
          }
        };
        renderCond218();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond218();
        }));
        
        node629.append(node631);
        node628.append(node629);
        
        
        
        
        
        
      });
    } else {
      var nodes3389 = $("<span>");
      node628.append(nodes3389);
      subs__.addSub((ui.group)(function(_, callback) {
        var root4337 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node635 = mobl.loadingSpan();
        root4337.append(node635);
        var list118;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList118 = function() {
          var subs__ = listSubs__;
          list118 = items.get();
          list118.list(function(results126) {
            node635.empty();
            for(var i118 = 0; i118 < results126.length; i118++) {
              (function() {
                var iternode118 = $("<span>");
                node635.append(iternode118);
                var it;
                it = mobl.ref(mobl.ref(results126), i118);
                
                var tmp8342 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp8412 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp8344 = mobl.ref(false);
                
                
                var tmp8343 = mobl.ref(null);
                
                var nodes3390 = $("<span>");
                iternode118.append(nodes3390);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8342, tmp8343, tmp8344, function(_, callback) {
                  var root4338 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3391 = $("<span>");
                  root4338.append(nodes3391);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl229();
                  }));
                  
                  function renderControl229() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root4339 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4339); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3391;
                      nodes3391 = node.contents();
                      oldNodes.replaceWith(nodes3391);
                    }));
                  }
                  renderControl229();
                  callback(root4338); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3390;
                  nodes3390 = node.contents();
                  oldNodes.replaceWith(nodes3390);
                }));
                
                var oldNodes = iternode118;
                iternode118 = iternode118.contents();
                oldNodes.replaceWith(iternode118);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list118.addEventListener('change', function() { listSubs__.unsubscribe(); renderList118(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList118(true); }));
          });
        };
        renderList118();
        
        callback(root4337); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3389;
        nodes3389 = node.contents();
        oldNodes.replaceWith(nodes3389);
      }));
      
      
    }
  };
  renderCond217();
  subs__.addSub(tmp8397.addEventListener('change', function() {
    renderCond217();
  }));
  
  callback(root4329); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root4340 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8347 = mobl.ref("Detail");
  
  
  var tmp8348 = mobl.ref(null);
  
  var nodes3392 = $("<span>");
  root4340.append(nodes3392);
  subs__.addSub((ui.header)(tmp8347, tmp8348, function(_, callback) {
    var root4341 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8346 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp8345 = mobl.ref("Back");
    
    var nodes3393 = $("<span>");
    root4341.append(nodes3393);
    subs__.addSub((ui.backButton)(tmp8345, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8346, function(_, callback) {
      var root4342 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4342); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3393;
      nodes3393 = node.contents();
      oldNodes.replaceWith(nodes3393);
    }));
    callback(root4341); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3392;
    nodes3392 = node.contents();
    oldNodes.replaceWith(nodes3392);
  }));
  var nodes3394 = $("<span>");
  root4340.append(nodes3394);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl230();
  }));
  
  function renderControl230() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root4343 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4343); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3394;
      nodes3394 = node.contents();
      oldNodes.replaceWith(nodes3394);
    }));
  }
  renderControl230();
  callback(root4340); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root4344 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes3395 = $("<span>");
  root4344.append(nodes3395);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4345 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node636 = mobl.loadingSpan();
    root4345.append(node636);
    var list119;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList119 = function() {
      var subs__ = listSubs__;
      list119 = coll.get();
      list119.list(function(results127) {
        node636.empty();
        for(var i119 = 0; i119 < results127.length; i119++) {
          (function() {
            var iternode119 = $("<span>");
            node636.append(iternode119);
            var it;
            it = mobl.ref(mobl.ref(results127), i119);
            
            var tmp8365 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp8365.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp8365.set(it.get() == selected.get());
            }));
            
            
            var node637 = $("<span>");
            iternode119.append(node637);
            var condSubs220 = new mobl.CompSubscription();
            subs__.addSub(condSubs220);
            var oldValue220;
            var renderCond220 = function() {
              var value396 = tmp8365.get();
              if(oldValue220 === value396) return;
              oldValue220 = value396;
              var subs__ = condSubs220;
              subs__.unsubscribe();
              node637.empty();
              if(value396) {
                
                var tmp8361 = mobl.ref(false);
                
                
                var tmp8360 = mobl.ref(null);
                
                
                var tmp8359 = mobl.ref(null);
                
                var nodes3396 = $("<span>");
                node637.append(nodes3396);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8359, tmp8360, tmp8361, function(_, callback) {
                  var root4346 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3397 = $("<span>");
                  root4346.append(nodes3397);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl231();
                  }));
                  
                  function renderControl231() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root4347 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4347); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3397;
                      nodes3397 = node.contents();
                      oldNodes.replaceWith(nodes3397);
                    }));
                  }
                  renderControl231();
                  callback(root4346); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3396;
                  nodes3396 = node.contents();
                  oldNodes.replaceWith(nodes3396);
                }));
                
                
              } else {
                
                var tmp8363 = mobl.ref(true);
                
                
                var tmp8362 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp8364 = mobl.ref(null);
                
                var nodes3398 = $("<span>");
                node637.append(nodes3398);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8362, tmp8364, tmp8363, function(_, callback) {
                  var root4348 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3399 = $("<span>");
                  root4348.append(nodes3399);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl232();
                  }));
                  
                  function renderControl232() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root4349 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4349); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3399;
                      nodes3399 = node.contents();
                      oldNodes.replaceWith(nodes3399);
                    }));
                  }
                  renderControl232();
                  callback(root4348); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3398;
                  nodes3398 = node.contents();
                  oldNodes.replaceWith(nodes3398);
                }));
                
                
              }
            };
            renderCond220();
            subs__.addSub(tmp8365.addEventListener('change', function() {
              renderCond220();
            }));
            
            
            var oldNodes = iternode119;
            iternode119 = iternode119.contents();
            oldNodes.replaceWith(iternode119);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list119.addEventListener('change', function() { listSubs__.unsubscribe(); renderList119(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList119(true); }));
      });
    };
    renderList119();
    
    callback(root4345); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3395;
    nodes3395 = node.contents();
    oldNodes.replaceWith(nodes3395);
  }));
  callback(root4344); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root4350 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes3400 = $("<span>");
    root4350.append(nodes3400);
    subs__.addSub((ui.group)(function(_, callback) {
      var root4351 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8369 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp8369.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp8369.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp8369.set(coll.get().limit(n.get()));
      }));
      
      
      var node638 = mobl.loadingSpan();
      root4351.append(node638);
      var list120;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList120 = function() {
        var subs__ = listSubs__;
        list120 = tmp8369.get();
        list120.list(function(results128) {
          node638.empty();
          for(var i120 = 0; i120 < results128.length; i120++) {
            (function() {
              var iternode120 = $("<span>");
              node638.append(iternode120);
              var it;
              it = mobl.ref(mobl.ref(results128), i120);
              
              var tmp8366 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp8368 = mobl.ref(false);
              
              
              var tmp8367 = mobl.ref(null);
              
              var nodes3401 = $("<span>");
              iternode120.append(nodes3401);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8366, tmp8367, tmp8368, function(_, callback) {
                var root4352 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3402 = $("<span>");
                root4352.append(nodes3402);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl233();
                }));
                
                function renderControl233() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root4353 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root4353); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3402;
                    nodes3402 = node.contents();
                    oldNodes.replaceWith(nodes3402);
                  }));
                }
                renderControl233();
                callback(root4352); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3401;
                nodes3401 = node.contents();
                oldNodes.replaceWith(nodes3401);
              }));
              
              var oldNodes = iternode120;
              iternode120 = iternode120.contents();
              oldNodes.replaceWith(iternode120);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list120.addEventListener('change', function() { listSubs__.unsubscribe(); renderList120(true); }));
          subs__.addSub(tmp8369.addEventListener('change', function() { listSubs__.unsubscribe(); renderList120(true); }));
        });
      };
      renderList120();
      
      
      var tmp8372 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp8372.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp8372.set(n.get() < total.get());
      }));
      
      
      var node639 = $("<span>");
      root4351.append(node639);
      var condSubs221 = new mobl.CompSubscription();
      subs__.addSub(condSubs221);
      var oldValue221;
      var renderCond221 = function() {
        var value397 = tmp8372.get();
        if(oldValue221 === value397) return;
        oldValue221 = value397;
        var subs__ = condSubs221;
        subs__.unsubscribe();
        node639.empty();
        if(value397) {
          
          var node640 = $("<li>");
          
          var ref554 = mobl.ref(ui.loadMoreStyle);
          if(ref554.get() !== null) {
            node640.attr('class', ref554.get());
            subs__.addSub(ref554.addEventListener('change', function(_, ref, val) {
              node640.attr('class', val);
            }));
            
          }
          subs__.addSub(ref554.rebind());
          
          var val322 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val322 !== null) {
            subs__.addSub(mobl.domBind(node640, 'tap', val322));
          }
          
          
          var tmp8371 = mobl.ref(null);
          
          
          var tmp8370 = mobl.ref(null);
          
          var nodes3403 = $("<span>");
          node640.append(nodes3403);
          subs__.addSub((mobl.label)(moreLabel, tmp8370, tmp8371, function(_, callback) {
            var root4354 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4354); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3403;
            nodes3403 = node.contents();
            oldNodes.replaceWith(nodes3403);
          }));
          node639.append(node640);
          
          
          
        } else {
          
        }
      };
      renderCond221();
      subs__.addSub(tmp8372.addEventListener('change', function() {
        renderCond221();
      }));
      
      callback(root4351); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3400;
      nodes3400 = node.contents();
      oldNodes.replaceWith(nodes3400);
    }));
    callback(root4350); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root4355 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3404 = $("<span>");
  root4355.append(nodes3404);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4356 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node641 = mobl.loadingSpan();
    root4356.append(node641);
    var list121;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList121 = function() {
      var subs__ = listSubs__;
      list121 = items.get();
      list121.list(function(results129) {
        node641.empty();
        for(var i121 = 0; i121 < results129.length; i121++) {
          (function() {
            var iternode121 = $("<span>");
            node641.append(iternode121);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results129), i121), "_1");it = mobl.ref(mobl.ref(mobl.ref(results129), i121), "_2");
            
            var tmp8376 = mobl.ref(false);
            
            
            var tmp8375 = mobl.ref(null);
            
            
            var tmp8374 = mobl.ref(null);
            
            var nodes3405 = $("<span>");
            iternode121.append(nodes3405);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8374, tmp8375, tmp8376, function(_, callback) {
              var root4357 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp8373 = mobl.ref(null);
              
              var nodes3406 = $("<span>");
              root4357.append(nodes3406);
              subs__.addSub((ui.checkBox)(checked, it, tmp8373, function(_, callback) {
                var root4358 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4358); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3406;
                nodes3406 = node.contents();
                oldNodes.replaceWith(nodes3406);
              }));
              callback(root4357); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3405;
              nodes3405 = node.contents();
              oldNodes.replaceWith(nodes3405);
            }));
            
            var oldNodes = iternode121;
            iternode121 = iternode121.contents();
            oldNodes.replaceWith(iternode121);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list121.addEventListener('change', function() { listSubs__.unsubscribe(); renderList121(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList121(true); }));
      });
    };
    renderList121();
    
    callback(root4356); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3404;
    nodes3404 = node.contents();
    oldNodes.replaceWith(nodes3404);
  }));
  callback(root4355); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root4359 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll291) {
    coll291 = coll291.reverse();
    function processOne21() {
      var it;
      it = coll291.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll291.length > 0) processOne21(); else rest21();
      
    }
    function rest21() {
      
      var tmp8380 = mobl.ref(null);
      
      var nodes3407 = $("<span>");
      root4359.append(nodes3407);
      subs__.addSub((ui.header)(title, tmp8380, function(_, callback) {
        var root4360 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp8377 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp8378 = mobl.ref(mobl._("Back", []));
        
        var nodes3408 = $("<span>");
        root4360.append(nodes3408);
        subs__.addSub((ui.backButton)(tmp8378, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8377, function(_, callback) {
          var root4361 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4361); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3408;
          nodes3408 = node.contents();
          oldNodes.replaceWith(nodes3408);
        }));
        
        var tmp8379 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll290) {
                               coll290 = coll290.reverse();
                               function processOne20() {
                                 var checked;var it;
                                 var tmp8414 = coll290.pop();
                                 checked = tmp8414._1;it = tmp8414._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll290.length > 0) processOne20(); else rest20();
                                   
                                 } else {
                                   {
                                     
                                     if(coll290.length > 0) processOne20(); else rest20();
                                     
                                   }
                                 }
                               }
                               function rest20() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll290.length > 0) processOne20(); else rest20();
                             });
                             
                           });
        
        var nodes3409 = $("<span>");
        root4360.append(nodes3409);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8379, function(_, callback) {
          var root4362 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4362); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3409;
          nodes3409 = node.contents();
          oldNodes.replaceWith(nodes3409);
        }));
        callback(root4360); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3407;
        nodes3407 = node.contents();
        oldNodes.replaceWith(nodes3407);
      }));
      var nodes3410 = $("<span>");
      root4359.append(nodes3410);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root4363 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4363); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3410;
        nodes3410 = node.contents();
        oldNodes.replaceWith(nodes3410);
      }));
      callback(root4359); return subs__;
      
      
    }
    if(coll291.length > 0) processOne21(); else rest21();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root4364 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp8382 = mobl.ref(null);
  
  
  var tmp8381 = mobl.ref(null);
  
  var nodes3411 = $("<span>");
  root4364.append(nodes3411);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp8381, tmp8382, function(_, callback) {
    var root4365 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4365); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3411;
    nodes3411 = node.contents();
    oldNodes.replaceWith(nodes3411);
  }));
  
  var tmp8383 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp8383.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp8383.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp8383.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp8383.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp8383.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes3412 = $("<span>");
  root4364.append(nodes3412);
  subs__.addSub((ui.masterDetail)(tmp8383, masterItem, detailItem, function(_, callback) {
    var root4366 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4366); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3412;
    nodes3412 = node.contents();
    oldNodes.replaceWith(nodes3412);
  }));
  callback(root4364); return subs__;
  
  
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
  var root4367 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp8396 = mobl.ref(null);
  
  
  var tmp8395 = mobl.ref(null);
  
  
  var tmp8394 = mobl.ref(null);
  
  var nodes3413 = $("<span>");
  root4367.append(nodes3413);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp8394, tmp8395, tmp8396, function(_, callback) {
    var root4368 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node642 = mobl.loadingSpan();
    root4368.append(node642);
    var list122;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList122 = function() {
      var subs__ = listSubs__;
      list122 = sections.get();
      list122.list(function(results130) {
        node642.empty();
        for(var i122 = 0; i122 < results130.length; i122++) {
          (function() {
            var iternode122 = $("<span>");
            node642.append(iternode122);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results130), i122), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results130), i122), "_2");
            
            var tmp8387 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp8387.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp8387.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp8387.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp8387.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp8386 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp8389 = mobl.ref(null);
            
            
            var tmp8388 = mobl.ref(null);
            
            var nodes3414 = $("<span>");
            iternode122.append(nodes3414);
            subs__.addSub((mobl.span)(tmp8387, tmp8388, tmp8386, tmp8389, function(_, callback) {
              var root4369 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp8385 = mobl.ref(null);
              
              
              var tmp8384 = mobl.ref(null);
              
              var nodes3415 = $("<span>");
              root4369.append(nodes3415);
              subs__.addSub((mobl.label)(sectionName, tmp8384, tmp8385, function(_, callback) {
                var root4370 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4370); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3415;
                nodes3415 = node.contents();
                oldNodes.replaceWith(nodes3415);
              }));
              callback(root4369); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3414;
              nodes3414 = node.contents();
              oldNodes.replaceWith(nodes3414);
            }));
            
            var tmp8390 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp8390.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp8390.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp8390.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp8390.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp8393 = mobl.ref(null);
            
            
            var tmp8392 = mobl.ref(null);
            
            
            var tmp8391 = mobl.ref(null);
            
            var nodes3416 = $("<span>");
            iternode122.append(nodes3416);
            subs__.addSub((mobl.block)(tmp8390, tmp8391, tmp8392, tmp8393, function(_, callback) {
              var root4371 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3417 = $("<span>");
              root4371.append(nodes3417);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl234();
              }));
              
              function renderControl234() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root4372 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root4372); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3417;
                  nodes3417 = node.contents();
                  oldNodes.replaceWith(nodes3417);
                }));
              }
              renderControl234();
              callback(root4371); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3416;
              nodes3416 = node.contents();
              oldNodes.replaceWith(nodes3416);
            }));
            
            var oldNodes = iternode122;
            iternode122 = iternode122.contents();
            oldNodes.replaceWith(iternode122);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list122.addEventListener('change', function() { listSubs__.unsubscribe(); renderList122(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList122(true); }));
      });
    };
    renderList122();
    
    callback(root4368); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3413;
    nodes3413 = node.contents();
    oldNodes.replaceWith(nodes3413);
  }));
  callback(root4367); return subs__;
  
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
  var root4373 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node643 = $("<table>");
  
  var ref555 = mobl.ref(ui.tableStyle);
  if(ref555.get() !== null) {
    node643.attr('class', ref555.get());
    subs__.addSub(ref555.addEventListener('change', function(_, ref, val) {
      node643.attr('class', val);
    }));
    
  }
  subs__.addSub(ref555.rebind());
  
  var nodes3418 = $("<span>");
  node643.append(nodes3418);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl235();
  }));
  
  function renderControl235() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4374 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4374); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3418;
      nodes3418 = node.contents();
      oldNodes.replaceWith(nodes3418);
    }));
  }
  renderControl235();
  root4373.append(node643);
  callback(root4373); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root4375 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node644 = $("<tr>");
  
  var ref556 = mobl.ref(ui.trStyle);
  if(ref556.get() !== null) {
    node644.attr('class', ref556.get());
    subs__.addSub(ref556.addEventListener('change', function(_, ref, val) {
      node644.attr('class', val);
    }));
    
  }
  subs__.addSub(ref556.rebind());
  
  var nodes3419 = $("<span>");
  node644.append(nodes3419);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl236();
  }));
  
  function renderControl236() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4376 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4376); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3419;
      nodes3419 = node.contents();
      oldNodes.replaceWith(nodes3419);
    }));
  }
  renderControl236();
  root4375.append(node644);
  callback(root4375); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root4377 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node645 = $("<td>");
  
  var ref557 = width;
  if(ref557.get() !== null) {
    node645.attr('width', ref557.get());
    subs__.addSub(ref557.addEventListener('change', function(_, ref, val) {
      node645.attr('width', val);
    }));
    
  }
  subs__.addSub(ref557.rebind());
  
  var ref558 = mobl.ref(ui.tdStyle);
  if(ref558.get() !== null) {
    node645.attr('class', ref558.get());
    subs__.addSub(ref558.addEventListener('change', function(_, ref, val) {
      node645.attr('class', val);
    }));
    
  }
  subs__.addSub(ref558.rebind());
  
  var nodes3420 = $("<span>");
  node645.append(nodes3420);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl237();
  }));
  
  function renderControl237() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4378 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4378); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3420;
      nodes3420 = node.contents();
      oldNodes.replaceWith(nodes3420);
    }));
  }
  renderControl237();
  root4377.append(node645);
  callback(root4377); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root4379 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node646 = $("<td>");
  
  var ref559 = width;
  if(ref559.get() !== null) {
    node646.attr('width', ref559.get());
    subs__.addSub(ref559.addEventListener('change', function(_, ref, val) {
      node646.attr('width', val);
    }));
    
  }
  subs__.addSub(ref559.rebind());
  
  var ref560 = mobl.ref(ui.tdStyle);
  if(ref560.get() !== null) {
    node646.attr('class', ref560.get());
    subs__.addSub(ref560.addEventListener('change', function(_, ref, val) {
      node646.attr('class', val);
    }));
    
  }
  subs__.addSub(ref560.rebind());
  
  var nodes3421 = $("<span>");
  node646.append(nodes3421);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl238();
  }));
  
  function renderControl238() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4380 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4380); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3421;
      nodes3421 = node.contents();
      oldNodes.replaceWith(nodes3421);
    }));
  }
  renderControl238();
  root4379.append(node646);
  callback(root4379); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root4381 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node647 = $("<td>");
  
  var ref561 = width;
  if(ref561.get() !== null) {
    node647.attr('width', ref561.get());
    subs__.addSub(ref561.addEventListener('change', function(_, ref, val) {
      node647.attr('width', val);
    }));
    
  }
  subs__.addSub(ref561.rebind());
  
  var ref562 = mobl.ref(ui.tdStyle);
  if(ref562.get() !== null) {
    node647.attr('class', ref562.get());
    subs__.addSub(ref562.addEventListener('change', function(_, ref, val) {
      node647.attr('class', val);
    }));
    
  }
  subs__.addSub(ref562.rebind());
  
  
  var node648 = $("<strong>");
  
  var nodes3422 = $("<span>");
  node648.append(nodes3422);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl239();
  }));
  
  function renderControl239() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4382 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4382); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3422;
      nodes3422 = node.contents();
      oldNodes.replaceWith(nodes3422);
    }));
  }
  renderControl239();
  node647.append(node648);
  root4381.append(node647);
  callback(root4381); return subs__;
  
  
  
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