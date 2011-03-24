mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root7250 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1216 = $("<span>");
  root7250.append(node1216);
  var condSubs360 = new mobl.CompSubscription();
  subs__.addSub(condSubs360);
  var oldValue360;
  var renderCond360 = function() {
    var value676 = value.get();
    if(oldValue360 === value676) return;
    oldValue360 = value676;
    var subs__ = condSubs360;
    subs__.unsubscribe();
    node1216.empty();
    if(value676) {
      var nodes5750 = $("<span>");
      node1216.append(nodes5750);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl408();
      }));
      
      function renderControl408() {
        subs__.addSub((elements)(function(elements, callback) {
          var root7251 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7251); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5750;
          nodes5750 = node.contents();
          oldNodes.replaceWith(nodes5750);
        }));
      }
      renderControl408();
      
      
    } else {
      
      var tmp14641 = mobl.ref(null);
      
      
      var tmp14640 = mobl.ref(null);
      
      
      var tmp14639 = mobl.ref(null);
      
      var nodes5751 = $("<span>");
      node1216.append(nodes5751);
      subs__.addSub((mobl.block)(style, tmp14639, tmp14640, tmp14641, function(_, callback) {
        var root7252 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp14631 = mobl.ref(null);
        
        
        var tmp14630 = mobl.ref(null);
        
        var nodes5752 = $("<span>");
        root7252.append(nodes5752);
        subs__.addSub((mobl.label)(loadingMessage, tmp14630, tmp14631, function(_, callback) {
          var root7253 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7253); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5752;
          nodes5752 = node.contents();
          oldNodes.replaceWith(nodes5752);
        }));
        
        var tmp14633 = mobl.ref("middle");
        
        
        var tmp14632 = mobl.ref("data:image/gif;base64,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");
        
        
        var tmp14638 = mobl.ref(null);
        
        
        var tmp14637 = mobl.ref(null);
        
        
        var tmp14636 = mobl.ref(null);
        
        
        var tmp14635 = mobl.ref(null);
        
        
        var tmp14634 = mobl.ref(null);
        
        var nodes5753 = $("<span>");
        root7252.append(nodes5753);
        subs__.addSub((ui.image)(tmp14632, tmp14634, tmp14635, tmp14636, tmp14637, tmp14633, tmp14638, function(_, callback) {
          var root7254 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7254); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5753;
          nodes5753 = node.contents();
          oldNodes.replaceWith(nodes5753);
        }));
        callback(root7252); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5751;
        nodes5751 = node.contents();
        oldNodes.replaceWith(nodes5751);
      }));
      
      
    }
  };
  renderCond360();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond360();
  }));
  
  callback(root7250); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root7255 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1217 = $("<div>");
  
  var ref978 = mobl.ref(ui.headerStyle);
  if(ref978.get() !== null) {
    node1217.attr('class', ref978.get());
    subs__.addSub(ref978.addEventListener('change', function(_, ref, val) {
      node1217.attr('class', val);
    }));
    
  }
  subs__.addSub(ref978.rebind());
  
  var val557 = onclick.get();
  if(val557 !== null) {
    subs__.addSub(mobl.domBind(node1217, 'tap', val557));
  }
  
  
  var node1218 = $("<div>");
  
  var ref977 = mobl.ref(ui.headerContainerStyle);
  if(ref977.get() !== null) {
    node1218.attr('class', ref977.get());
    subs__.addSub(ref977.addEventListener('change', function(_, ref, val) {
      node1218.attr('class', val);
    }));
    
  }
  subs__.addSub(ref977.rebind());
  
  
  var node1219 = $("<div>");
  
  var ref975 = text;
  node1219.text(""+ref975.get());
  var ignore195 = false;
  subs__.addSub(ref975.addEventListener('change', function(_, ref, val) {
    if(ignore195) return;
    node1219.text(""+val);
  }));
  subs__.addSub(ref975.rebind());
  
  
  var ref976 = mobl.ref(ui.headerTextStyle);
  if(ref976.get() !== null) {
    node1219.attr('class', ref976.get());
    subs__.addSub(ref976.addEventListener('change', function(_, ref, val) {
      node1219.attr('class', val);
    }));
    
  }
  subs__.addSub(ref976.rebind());
  
  node1218.append(node1219);
  node1217.append(node1218);
  var nodes5754 = $("<span>");
  node1217.append(nodes5754);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl409();
  }));
  
  function renderControl409() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7256 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7256); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5754;
      nodes5754 = node.contents();
      oldNodes.replaceWith(nodes5754);
    }));
  }
  renderControl409();
  root7255.append(node1217);
  callback(root7255); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7257 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref979 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref979.get() !== null) {
    sp.attr('class', ref979.get());
    subs__.addSub(ref979.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref979.rebind());
  
  var val558 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val558 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val558));
  }
  
  var val559 = function(event, callback) {
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
  if(val559 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val559));
  }
  
  var val560 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after171(result__) {
                    var tmp14713 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after171);if(result__ !== undefined) after171(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val560 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val560));
  }
  
  var val561 = function(event, callback) {
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
  if(val561 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val561));
  }
  
  var ref980 = text;
  sp.text(""+ref980.get());
  var ignore196 = false;
  subs__.addSub(ref980.addEventListener('change', function(_, ref, val) {
    if(ignore196) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref980.rebind());
  
  
  root7257.append(sp);
  callback(root7257); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7258 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5755 = $("<span>");
  root7258.append(nodes5755);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root7259 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7259); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5755;
    nodes5755 = node.contents();
    oldNodes.replaceWith(nodes5755);
  }));
  callback(root7258); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7260 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5756 = $("<span>");
  root7260.append(nodes5756);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root7261 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7261); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5756;
    nodes5756 = node.contents();
    oldNodes.replaceWith(nodes5756);
  }));
  callback(root7260); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root7262 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1220 = $("<ul>");
  
  var ref981 = mobl.ref(ui.groupStyle);
  if(ref981.get() !== null) {
    node1220.attr('class', ref981.get());
    subs__.addSub(ref981.addEventListener('change', function(_, ref, val) {
      node1220.attr('class', val);
    }));
    
  }
  subs__.addSub(ref981.rebind());
  
  var nodes5757 = $("<span>");
  node1220.append(nodes5757);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl410();
  }));
  
  function renderControl410() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7263 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7263); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5757;
      nodes5757 = node.contents();
      oldNodes.replaceWith(nodes5757);
    }));
  }
  renderControl410();
  root7262.append(node1220);
  callback(root7262); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root7264 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1221 = $("<img>");
  
  var ref982 = url;
  if(ref982.get() !== null) {
    node1221.attr('src', ref982.get());
    subs__.addSub(ref982.addEventListener('change', function(_, ref, val) {
      node1221.attr('src', val);
    }));
    
  }
  subs__.addSub(ref982.rebind());
  
  var ref983 = width;
  if(ref983.get() !== null) {
    node1221.attr('width', ref983.get());
    subs__.addSub(ref983.addEventListener('change', function(_, ref, val) {
      node1221.attr('width', val);
    }));
    
  }
  subs__.addSub(ref983.rebind());
  
  var ref984 = height;
  if(ref984.get() !== null) {
    node1221.attr('height', ref984.get());
    subs__.addSub(ref984.addEventListener('change', function(_, ref, val) {
      node1221.attr('height', val);
    }));
    
  }
  subs__.addSub(ref984.rebind());
  
  var ref985 = style;
  if(ref985.get() !== null) {
    node1221.attr('class', ref985.get());
    subs__.addSub(ref985.addEventListener('change', function(_, ref, val) {
      node1221.attr('class', val);
    }));
    
  }
  subs__.addSub(ref985.rebind());
  
  var val562 = onclick.get();
  if(val562 !== null) {
    subs__.addSub(mobl.domBind(node1221, 'tap', val562));
  }
  
  var ref986 = valign;
  if(ref986.get() !== null) {
    node1221.attr('valign', ref986.get());
    subs__.addSub(ref986.addEventListener('change', function(_, ref, val) {
      node1221.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref986.rebind());
  
  var ref987 = align;
  if(ref987.get() !== null) {
    node1221.attr('align', ref987.get());
    subs__.addSub(ref987.addEventListener('change', function(_, ref, val) {
      node1221.attr('align', val);
    }));
    
  }
  subs__.addSub(ref987.rebind());
  
  root7264.append(node1221);
  callback(root7264); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root7265 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref988 = mobl.ref(ui.itemStyle);
  if(ref988.get() !== null) {
    el.attr('class', ref988.get());
    subs__.addSub(ref988.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref988.rebind());
  
  var ref989 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref989.get() !== null) {
    el.attr('class', ref989.get());
    subs__.addSub(ref989.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref989.rebind());
  
  var val563 = onswipe.get();
  if(val563 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val563));
  }
  
  var val564 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp14714 = result__;
                                           function after172(result__) {
                                             var tmp14715 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after172);if(result__ !== undefined) after172(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp14716 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val564 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val564));
  }
  
  var nodes5758 = $("<span>");
  el.append(nodes5758);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl411();
  }));
  
  function renderControl411() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7266 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7266); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5758;
      nodes5758 = node.contents();
      oldNodes.replaceWith(nodes5758);
    }));
  }
  renderControl411();
  root7265.append(el);
  callback(root7265); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root7267 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1222 = $("<input>");
  node1222.attr('type', "checkbox");
  
  var ref991 = b;
  node1222.attr('checked', !!ref991.get());
  subs__.addSub(ref991.addEventListener('change', function(_, ref, val) {
    if(ref === ref991) node1222.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1222, 'change', function() {
    b.set(!!node1222.attr('checked'));
  }));
  
  var val566 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val566 !== null) {
    subs__.addSub(mobl.domBind(node1222, 'tap', val566));
  }
  
  var val567 = onchange.get();
  if(val567 !== null) {
    subs__.addSub(mobl.domBind(node1222, 'change', val567));
  }
  
  root7267.append(node1222);
  
  root7267.append(" ");
  
  var node1223 = $("<span>");
  
  var ref990 = label;
  node1223.text(""+ref990.get());
  var ignore197 = false;
  subs__.addSub(ref990.addEventListener('change', function(_, ref, val) {
    if(ignore197) return;
    node1223.text(""+val);
  }));
  subs__.addSub(ref990.rebind());
  
  
  var val565 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after173(result__) {
                    var tmp14717 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after173);if(result__ !== undefined) after173(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val565 !== null) {
    subs__.addSub(mobl.domBind(node1223, 'tap', val565));
  }
  
  root7267.append(node1223);
  callback(root7267); return subs__;
  
  
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
  var root7268 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1224 = $("<span>");
  root7268.append(node1224);
  var condSubs361 = new mobl.CompSubscription();
  subs__.addSub(condSubs361);
  var oldValue361;
  var renderCond361 = function() {
    var value677 = label.get();
    if(oldValue361 === value677) return;
    oldValue361 = value677;
    var subs__ = condSubs361;
    subs__.unsubscribe();
    node1224.empty();
    if(value677) {
      
      var tmp14642 = mobl.ref(null);
      
      var nodes5759 = $("<span>");
      node1224.append(nodes5759);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), tmp14642, function(_, callback) {
        var root7269 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7269); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5759;
        nodes5759 = node.contents();
        oldNodes.replaceWith(nodes5759);
      }));
      
      
    } else {
      
    }
  };
  renderCond361();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond361();
  }));
  
  
  var node1225 = $("<span>");
  root7268.append(node1225);
  var condSubs362 = new mobl.CompSubscription();
  subs__.addSub(condSubs362);
  var oldValue362;
  var renderCond362 = function() {
    var value678 = validator.get();
    if(oldValue362 === value678) return;
    oldValue362 = value678;
    var subs__ = condSubs362;
    subs__.unsubscribe();
    node1225.empty();
    if(value678) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after177(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp14718 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1226 = $("<input>");
        node1226.attr('type', "text");
        
        var ref992 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref992.get() !== null) {
          node1226.attr('class', ref992.get());
          subs__.addSub(ref992.addEventListener('change', function(_, ref, val) {
            node1226.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1226.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1226.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1226.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref992.rebind());
        
        var ref993 = placeholder;
        if(ref993.get() !== null) {
          node1226.attr('placeholder', ref993.get());
          subs__.addSub(ref993.addEventListener('change', function(_, ref, val) {
            node1226.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref993.rebind());
        
        var ref994 = temp;
        node1226.val(""+ref994.get());
        var ignore198 = false;
        subs__.addSub(ref994.addEventListener('change', function(_, ref, val) {
          if(ignore198) return;
          node1226.val(""+val);
        }));
        subs__.addSub(ref994.rebind());
        
        subs__.addSub(mobl.domBind(node1226, 'keyup change', function() {
          ignore198 = true;
          temp.set(mobl.stringTomobl__String(node1226.val()));
          ignore198 = false;
        }));
        
        
        var val568 = onchange.get();
        if(val568 !== null) {
          subs__.addSub(mobl.domBind(node1226, 'change', val568));
        }
        
        var val569 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after174(result__) {
                          var tmp14719 = result__;
                          function after175(result__) {
                            var tmp14720 = result__;
                            var result__ = tmp14720;
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
                          var result__ = validator.get()(temp.get(), after175);if(result__ !== undefined) after175(result__);
                        }
                        var result__ = onkeyup.get()(event, after174);if(result__ !== undefined) after174(result__);
                      } else {
                        {
                          function after176(result__) {
                            var tmp14720 = result__;
                            var result__ = tmp14720;
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
                          var result__ = validator.get()(temp.get(), after176);if(result__ !== undefined) after176(result__);
                        }
                      }
                    };
        if(val569 !== null) {
          subs__.addSub(mobl.domBind(node1226, 'keyup', val569));
        }
        
        var val570 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val570 !== null) {
          subs__.addSub(mobl.domBind(node1226, 'blur', val570));
        }
        
        node1225.append(node1226);
        
        var tmp14643 = mobl.ref(null);
        
        var nodes5760 = $("<span>");
        node1225.append(nodes5760);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), tmp14643, function(_, callback) {
          var root7270 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7270); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5760;
          nodes5760 = node.contents();
          oldNodes.replaceWith(nodes5760);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after177);if(result__ !== undefined) after177(result__);
    } else {
      
      var node1227 = $("<input>");
      node1227.attr('type', "text");
      
      var ref995 = style;
      if(ref995.get() !== null) {
        node1227.attr('class', ref995.get());
        subs__.addSub(ref995.addEventListener('change', function(_, ref, val) {
          node1227.attr('class', val);
        }));
        
      }
      subs__.addSub(ref995.rebind());
      
      var ref996 = placeholder;
      if(ref996.get() !== null) {
        node1227.attr('placeholder', ref996.get());
        subs__.addSub(ref996.addEventListener('change', function(_, ref, val) {
          node1227.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref996.rebind());
      
      var ref997 = s;
      node1227.val(""+ref997.get());
      var ignore199 = false;
      subs__.addSub(ref997.addEventListener('change', function(_, ref, val) {
        if(ignore199) return;
        node1227.val(""+val);
      }));
      subs__.addSub(ref997.rebind());
      
      subs__.addSub(mobl.domBind(node1227, 'keyup change', function() {
        ignore199 = true;
        s.set(mobl.stringTomobl__String(node1227.val()));
        ignore199 = false;
      }));
      
      
      var val571 = onchange.get();
      if(val571 !== null) {
        subs__.addSub(mobl.domBind(node1227, 'change', val571));
      }
      
      var val572 = onkeyup.get();
      if(val572 !== null) {
        subs__.addSub(mobl.domBind(node1227, 'keyup', val572));
      }
      
      var val573 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val573 !== null) {
        subs__.addSub(mobl.domBind(node1227, 'blur', val573));
      }
      
      node1225.append(node1227);
      
      
    }
  };
  renderCond362();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond362();
  }));
  
  callback(root7268); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root7271 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5761 = $("<span>");
  root7271.append(nodes5761);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root7272 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7272); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5761;
    nodes5761 = node.contents();
    oldNodes.replaceWith(nodes5761);
  }));
  callback(root7271); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root7273 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after178(result__) {
      var tmp14721 = result__;
      var result__ = tmp14721;
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
    var result__ = validator.get()(n2, after178);if(result__ !== undefined) after178(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes5762 = $("<span>");
  root7273.append(nodes5762);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root7274 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7274); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5762;
    nodes5762 = node.contents();
    oldNodes.replaceWith(nodes5762);
  }));
  callback(root7273); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root7275 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1228 = $("<span>");
  root7275.append(node1228);
  var condSubs363 = new mobl.CompSubscription();
  subs__.addSub(condSubs363);
  var oldValue363;
  var renderCond363 = function() {
    var value679 = label.get();
    if(oldValue363 === value679) return;
    oldValue363 = value679;
    var subs__ = condSubs363;
    subs__.unsubscribe();
    node1228.empty();
    if(value679) {
      
      var node1229 = $("<span>");
      node1229.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1001 = label;
      node1229.text(""+ref1001.get());
      var ignore201 = false;
      subs__.addSub(ref1001.addEventListener('change', function(_, ref, val) {
        if(ignore201) return;
        node1229.text(""+val);
      }));
      subs__.addSub(ref1001.rebind());
      
      
      node1228.append(node1229);
      
      var node1230 = $("<span>");
      node1230.attr('style', "float: left");
      
      
      var node1231 = $("<input>");
      node1231.attr('type', "password");
      
      var ref998 = style;
      if(ref998.get() !== null) {
        node1231.attr('class', ref998.get());
        subs__.addSub(ref998.addEventListener('change', function(_, ref, val) {
          node1231.attr('class', val);
        }));
        
      }
      subs__.addSub(ref998.rebind());
      
      var ref999 = placeholder;
      if(ref999.get() !== null) {
        node1231.attr('placeholder', ref999.get());
        subs__.addSub(ref999.addEventListener('change', function(_, ref, val) {
          node1231.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref999.rebind());
      
      var ref1000 = s;
      node1231.val(""+ref1000.get());
      var ignore200 = false;
      subs__.addSub(ref1000.addEventListener('change', function(_, ref, val) {
        if(ignore200) return;
        node1231.val(""+val);
      }));
      subs__.addSub(ref1000.rebind());
      
      subs__.addSub(mobl.domBind(node1231, 'keyup change', function() {
        ignore200 = true;
        s.set(mobl.stringTomobl__String(node1231.val()));
        ignore200 = false;
      }));
      
      
      var val574 = onchange.get();
      if(val574 !== null) {
        subs__.addSub(mobl.domBind(node1231, 'change', val574));
      }
      
      var val575 = onkeyup.get();
      if(val575 !== null) {
        subs__.addSub(mobl.domBind(node1231, 'keyup', val575));
      }
      
      var val576 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val576 !== null) {
        subs__.addSub(mobl.domBind(node1231, 'blur', val576));
      }
      
      node1230.append(node1231);
      node1228.append(node1230);
      
      
      
      
    } else {
      
      var node1232 = $("<input>");
      node1232.attr('type', "password");
      
      var ref1002 = style;
      if(ref1002.get() !== null) {
        node1232.attr('class', ref1002.get());
        subs__.addSub(ref1002.addEventListener('change', function(_, ref, val) {
          node1232.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1002.rebind());
      
      var ref1003 = placeholder;
      if(ref1003.get() !== null) {
        node1232.attr('placeholder', ref1003.get());
        subs__.addSub(ref1003.addEventListener('change', function(_, ref, val) {
          node1232.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1003.rebind());
      
      var ref1004 = s;
      node1232.val(""+ref1004.get());
      var ignore202 = false;
      subs__.addSub(ref1004.addEventListener('change', function(_, ref, val) {
        if(ignore202) return;
        node1232.val(""+val);
      }));
      subs__.addSub(ref1004.rebind());
      
      subs__.addSub(mobl.domBind(node1232, 'keyup change', function() {
        ignore202 = true;
        s.set(mobl.stringTomobl__String(node1232.val()));
        ignore202 = false;
      }));
      
      
      var val577 = onchange.get();
      if(val577 !== null) {
        subs__.addSub(mobl.domBind(node1232, 'change', val577));
      }
      
      var val578 = onkeyup.get();
      if(val578 !== null) {
        subs__.addSub(mobl.domBind(node1232, 'keyup', val578));
      }
      
      var val579 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val579 !== null) {
        subs__.addSub(mobl.domBind(node1232, 'blur', val579));
      }
      
      node1228.append(node1232);
      
      
    }
  };
  renderCond363();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond363();
  }));
  
  callback(root7275); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root7276 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1009 = style;
  if(ref1009.get() !== null) {
    sel.attr('class', ref1009.get());
    subs__.addSub(ref1009.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1009.rebind());
  
  var val580 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after179(result__) {
                    var tmp14723 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after179);if(result__ !== undefined) after179(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val580 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val580));
  }
  
  
  var node1233 = mobl.loadingSpan();
  sel.append(node1233);
  var list261;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList261 = function() {
    var subs__ = listSubs__;
    list261 = options.get();
    list261.list(function(results1102) {
      node1233.empty();
      for(var i261 = 0; i261 < results1102.length; i261++) {
        (function() {
          var iternode261 = $("<span>");
          node1233.append(iternode261);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results1102), i261), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results1102), i261), "_2");
          
          var node1234 = $("<option>");
          
          var ref1005 = optionDescription;
          node1234.text(""+ref1005.get());
          var ignore203 = false;
          subs__.addSub(ref1005.addEventListener('change', function(_, ref, val) {
            if(ignore203) return;
            node1234.text(""+val);
          }));
          subs__.addSub(ref1005.rebind());
          
          
          var ref1006 = optionStyle;
          if(ref1006.get() !== null) {
            node1234.attr('class', ref1006.get());
            subs__.addSub(ref1006.addEventListener('change', function(_, ref, val) {
              node1234.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1006.rebind());
          
          var ref1007 = optionValue;
          if(ref1007.get() !== null) {
            node1234.attr('value', ref1007.get());
            subs__.addSub(ref1007.addEventListener('change', function(_, ref, val) {
              node1234.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1007.rebind());
          
          var ref1008 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1008.get() !== null) {
            node1234.attr('selected', ref1008.get());
            subs__.addSub(ref1008.addEventListener('change', function(_, ref, val) {
              node1234.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1234.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1234.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1008.rebind());
          
          iternode261.append(node1234);
          
          var oldNodes = iternode261;
          iternode261 = iternode261.contents();
          oldNodes.replaceWith(iternode261);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list261.addEventListener('change', function() { listSubs__.unsubscribe(); renderList261(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList261(true); }));
    });
  };
  renderList261();
  
  root7276.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root7276); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root7277 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp14652 = mobl.ref(null);
  
  
  var tmp14651 = mobl.ref(null);
  
  
  var tmp14650 = mobl.ref(null);
  
  var nodes5763 = $("<span>");
  root7277.append(nodes5763);
  subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), tmp14650, tmp14651, tmp14652, function(_, callback) {
    var root7278 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1235 = mobl.loadingSpan();
    root7278.append(node1235);
    var list262;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList262 = function() {
      var subs__ = listSubs__;
      list262 = tabs.get();
      list262.list(function(results1103) {
        node1235.empty();
        for(var i262 = 0; i262 < results1103.length; i262++) {
          (function() {
            var iternode262 = $("<span>");
            node1235.append(iternode262);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results1103), i262), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1103), i262), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1103), i262), "_3");
            
            var tmp14647 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp14647.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp14647.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp14647.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp14647.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp14646 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp14649 = mobl.ref(null);
            
            
            var tmp14648 = mobl.ref(null);
            
            var nodes5764 = $("<span>");
            iternode262.append(nodes5764);
            subs__.addSub((mobl.span)(tmp14647, tmp14648, tmp14646, tmp14649, function(_, callback) {
              var root7279 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp14645 = mobl.ref(null);
              
              
              var tmp14644 = mobl.ref(null);
              
              var nodes5765 = $("<span>");
              root7279.append(nodes5765);
              subs__.addSub((mobl.label)(tabName, tmp14644, tmp14645, function(_, callback) {
                var root7280 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7280); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5765;
                nodes5765 = node.contents();
                oldNodes.replaceWith(nodes5765);
              }));
              callback(root7279); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5764;
              nodes5764 = node.contents();
              oldNodes.replaceWith(nodes5764);
            }));
            
            var oldNodes = iternode262;
            iternode262 = iternode262.contents();
            oldNodes.replaceWith(iternode262);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list262.addEventListener('change', function() { listSubs__.unsubscribe(); renderList262(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList262(true); }));
      });
    };
    renderList262();
    
    callback(root7278); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5763;
    nodes5763 = node.contents();
    oldNodes.replaceWith(nodes5763);
  }));
  
  var node1236 = mobl.loadingSpan();
  root7277.append(node1236);
  var list263;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList263 = function() {
    var subs__ = listSubs__;
    list263 = tabs.get();
    list263.list(function(results1104) {
      node1236.empty();
      for(var i263 = 0; i263 < results1104.length; i263++) {
        (function() {
          var iternode263 = $("<span>");
          node1236.append(iternode263);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results1104), i263), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1104), i263), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1104), i263), "_3");
          
          var tmp14653 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp14653.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp14653.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp14653.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp14653.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp14656 = mobl.ref(null);
          
          
          var tmp14655 = mobl.ref(null);
          
          
          var tmp14654 = mobl.ref(null);
          
          var nodes5766 = $("<span>");
          iternode263.append(nodes5766);
          subs__.addSub((mobl.block)(tmp14653, tmp14654, tmp14655, tmp14656, function(_, callback) {
            var root7281 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes5767 = $("<span>");
            root7281.append(nodes5767);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root7282 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5768 = $("<span>");
              root7282.append(nodes5768);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl412();
              }));
              
              function renderControl412() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root7283 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root7283); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5768;
                  nodes5768 = node.contents();
                  oldNodes.replaceWith(nodes5768);
                }));
              }
              renderControl412();
              callback(root7282); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5767;
              nodes5767 = node.contents();
              oldNodes.replaceWith(nodes5767);
            }));
            callback(root7281); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes5766;
            nodes5766 = node.contents();
            oldNodes.replaceWith(nodes5766);
          }));
          
          var oldNodes = iternode263;
          iternode263 = iternode263.contents();
          oldNodes.replaceWith(iternode263);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list263.addEventListener('change', function() { listSubs__.unsubscribe(); renderList263(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList263(true); }));
    });
  };
  renderList263();
  
  callback(root7277); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root7284 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1237 = $("<div>");
  
  var ref1013 = mobl.ref(ui.searchboxStyle);
  if(ref1013.get() !== null) {
    node1237.attr('class', ref1013.get());
    subs__.addSub(ref1013.addEventListener('change', function(_, ref, val) {
      node1237.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1013.rebind());
  
  
  var node1238 = $("<input>");
  node1238.attr('type', "search");
  
  var ref1010 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1010.get() !== null) {
    node1238.attr('class', ref1010.get());
    subs__.addSub(ref1010.addEventListener('change', function(_, ref, val) {
      node1238.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1010.rebind());
  
  var ref1011 = placeholder;
  if(ref1011.get() !== null) {
    node1238.attr('placeholder', ref1011.get());
    subs__.addSub(ref1011.addEventListener('change', function(_, ref, val) {
      node1238.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1011.rebind());
  
  var ref1012 = s;
  node1238.val(""+ref1012.get());
  var ignore204 = false;
  subs__.addSub(ref1012.addEventListener('change', function(_, ref, val) {
    if(ignore204) return;
    node1238.val(""+val);
  }));
  subs__.addSub(ref1012.rebind());
  
  subs__.addSub(mobl.domBind(node1238, 'keyup change', function() {
    ignore204 = true;
    s.set(mobl.stringTomobl__String(node1238.val()));
    ignore204 = false;
  }));
  
  
  var val581 = onsearch.get();
  if(val581 !== null) {
    subs__.addSub(mobl.domBind(node1238, 'change', val581));
  }
  
  var val582 = onkeyup.get();
  if(val582 !== null) {
    subs__.addSub(mobl.domBind(node1238, 'keyup', val582));
  }
  node1238.attr('autocorrect', false);
  node1238.attr('autocapitalize', false);
  node1238.attr('autocomplete', false);
  
  node1237.append(node1238);
  root7284.append(node1237);
  callback(root7284); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root7285 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1014 = mobl.ref(ui.contextMenuStyle);
  if(ref1014.get() !== null) {
    menu.attr('class', ref1014.get());
    subs__.addSub(ref1014.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1014.rebind());
  
  var nodes5769 = $("<span>");
  menu.append(nodes5769);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl413();
  }));
  
  function renderControl413() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7286 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7286); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5769;
      nodes5769 = node.contents();
      oldNodes.replaceWith(nodes5769);
    }));
  }
  renderControl413();
  root7285.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val583 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp14726 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val583 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val583));
  }
  
  root7285.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root7285); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root7287 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp14712 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp14712.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1239 = $("<span>");
  root7287.append(node1239);
  var condSubs364 = new mobl.CompSubscription();
  subs__.addSub(condSubs364);
  var oldValue364;
  var renderCond364 = function() {
    var value680 = tmp14712.get();
    if(oldValue364 === value680) return;
    oldValue364 = value680;
    var subs__ = condSubs364;
    subs__.unsubscribe();
    node1239.empty();
    if(value680) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node1240 = $("<div>");
        node1240.attr('width', "100%");
        
        
        var node1241 = $("<div>");
        node1241.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes5772 = $("<span>");
        node1241.append(nodes5772);
        subs__.addSub((ui.group)(function(_, callback) {
          var root7290 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1244 = mobl.loadingSpan();
          root7290.append(node1244);
          var list264;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList264 = function() {
            var subs__ = listSubs__;
            list264 = items.get();
            list264.list(function(results1105) {
              node1244.empty();
              for(var i264 = 0; i264 < results1105.length; i264++) {
                (function() {
                  var iternode264 = $("<span>");
                  node1244.append(iternode264);
                  var it;
                  it = mobl.ref(mobl.ref(results1105), i264);
                  
                  var tmp14670 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp14670.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp14670.set(it.get() == current.get());
                  }));
                  
                  
                  var node1245 = $("<span>");
                  iternode264.append(node1245);
                  var condSubs366 = new mobl.CompSubscription();
                  subs__.addSub(condSubs366);
                  var oldValue366;
                  var renderCond366 = function() {
                    var value682 = tmp14670.get();
                    if(oldValue366 === value682) return;
                    oldValue366 = value682;
                    var subs__ = condSubs366;
                    subs__.unsubscribe();
                    node1245.empty();
                    if(value682) {
                      
                      var tmp14666 = mobl.ref(false);
                      
                      
                      var tmp14665 = mobl.ref(null);
                      
                      
                      var tmp14664 = mobl.ref(null);
                      
                      var nodes5773 = $("<span>");
                      node1245.append(nodes5773);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp14664, tmp14665, tmp14666, function(_, callback) {
                        var root7291 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes5774 = $("<span>");
                        root7291.append(nodes5774);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl415();
                        }));
                        
                        function renderControl415() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root7292 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root7292); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes5774;
                            nodes5774 = node.contents();
                            oldNodes.replaceWith(nodes5774);
                          }));
                        }
                        renderControl415();
                        callback(root7291); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes5773;
                        nodes5773 = node.contents();
                        oldNodes.replaceWith(nodes5773);
                      }));
                      
                      
                    } else {
                      
                      var tmp14668 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = ui.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp14667 = mobl.ref(true);
                      
                      
                      var tmp14669 = mobl.ref(null);
                      
                      var nodes5775 = $("<span>");
                      node1245.append(nodes5775);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14668, tmp14669, tmp14667, function(_, callback) {
                        var root7293 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes5776 = $("<span>");
                        root7293.append(nodes5776);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl416();
                        }));
                        
                        function renderControl416() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root7294 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root7294); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes5776;
                            nodes5776 = node.contents();
                            oldNodes.replaceWith(nodes5776);
                          }));
                        }
                        renderControl416();
                        callback(root7293); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes5775;
                        nodes5775 = node.contents();
                        oldNodes.replaceWith(nodes5775);
                      }));
                      
                      
                    }
                  };
                  renderCond366();
                  subs__.addSub(tmp14670.addEventListener('change', function() {
                    renderCond366();
                  }));
                  
                  
                  var oldNodes = iternode264;
                  iternode264 = iternode264.contents();
                  oldNodes.replaceWith(iternode264);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list264.addEventListener('change', function() { listSubs__.unsubscribe(); renderList264(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList264(true); }));
            });
          };
          renderList264();
          
          callback(root7290); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes5772;
          nodes5772 = node.contents();
          oldNodes.replaceWith(nodes5772);
        }));
        node1240.append(node1241);
        
        var node1242 = $("<div>");
        node1242.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1243 = $("<span>");
        node1242.append(node1243);
        var condSubs365 = new mobl.CompSubscription();
        subs__.addSub(condSubs365);
        var oldValue365;
        var renderCond365 = function() {
          var value681 = current.get();
          if(oldValue365 === value681) return;
          oldValue365 = value681;
          var subs__ = condSubs365;
          subs__.unsubscribe();
          node1243.empty();
          if(value681) {
            var nodes5770 = $("<span>");
            node1243.append(nodes5770);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl414();
            }));
            
            function renderControl414() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root7288 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7288); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5770;
                nodes5770 = node.contents();
                oldNodes.replaceWith(nodes5770);
              }));
            }
            renderControl414();
            
            
          } else {
            
            var tmp14671 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp14673 = mobl.ref(null);
            
            
            var tmp14672 = mobl.ref(null);
            
            var nodes5771 = $("<span>");
            node1243.append(nodes5771);
            subs__.addSub((mobl.label)(tmp14671, tmp14672, tmp14673, function(_, callback) {
              var root7289 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root7289); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes5771;
              nodes5771 = node.contents();
              oldNodes.replaceWith(nodes5771);
            }));
            
            
          }
        };
        renderCond365();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond365();
        }));
        
        node1240.append(node1242);
        node1239.append(node1240);
        
        
        
        
        
        
      });
    } else {
      var nodes5777 = $("<span>");
      node1239.append(nodes5777);
      subs__.addSub((ui.group)(function(_, callback) {
        var root7295 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1246 = mobl.loadingSpan();
        root7295.append(node1246);
        var list265;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList265 = function() {
          var subs__ = listSubs__;
          list265 = items.get();
          list265.list(function(results1106) {
            node1246.empty();
            for(var i265 = 0; i265 < results1106.length; i265++) {
              (function() {
                var iternode265 = $("<span>");
                node1246.append(iternode265);
                var it;
                it = mobl.ref(mobl.ref(results1106), i265);
                
                var tmp14657 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp14727 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp14659 = mobl.ref(false);
                
                
                var tmp14658 = mobl.ref(null);
                
                var nodes5778 = $("<span>");
                iternode265.append(nodes5778);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14657, tmp14658, tmp14659, function(_, callback) {
                  var root7296 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5779 = $("<span>");
                  root7296.append(nodes5779);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl417();
                  }));
                  
                  function renderControl417() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root7297 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7297); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5779;
                      nodes5779 = node.contents();
                      oldNodes.replaceWith(nodes5779);
                    }));
                  }
                  renderControl417();
                  callback(root7296); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5778;
                  nodes5778 = node.contents();
                  oldNodes.replaceWith(nodes5778);
                }));
                
                var oldNodes = iternode265;
                iternode265 = iternode265.contents();
                oldNodes.replaceWith(iternode265);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list265.addEventListener('change', function() { listSubs__.unsubscribe(); renderList265(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList265(true); }));
          });
        };
        renderList265();
        
        callback(root7295); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5777;
        nodes5777 = node.contents();
        oldNodes.replaceWith(nodes5777);
      }));
      
      
    }
  };
  renderCond364();
  subs__.addSub(tmp14712.addEventListener('change', function() {
    renderCond364();
  }));
  
  callback(root7287); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root7298 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp14662 = mobl.ref("Detail");
  
  
  var tmp14663 = mobl.ref(null);
  
  var nodes5780 = $("<span>");
  root7298.append(nodes5780);
  subs__.addSub((ui.header)(tmp14662, tmp14663, function(_, callback) {
    var root7299 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp14661 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp14660 = mobl.ref("Back");
    
    var nodes5781 = $("<span>");
    root7299.append(nodes5781);
    subs__.addSub((ui.backButton)(tmp14660, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp14661, function(_, callback) {
      var root7300 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7300); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5781;
      nodes5781 = node.contents();
      oldNodes.replaceWith(nodes5781);
    }));
    callback(root7299); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5780;
    nodes5780 = node.contents();
    oldNodes.replaceWith(nodes5780);
  }));
  var nodes5782 = $("<span>");
  root7298.append(nodes5782);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl418();
  }));
  
  function renderControl418() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root7301 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7301); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5782;
      nodes5782 = node.contents();
      oldNodes.replaceWith(nodes5782);
    }));
  }
  renderControl418();
  callback(root7298); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root7302 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes5783 = $("<span>");
  root7302.append(nodes5783);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7303 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1247 = mobl.loadingSpan();
    root7303.append(node1247);
    var list266;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList266 = function() {
      var subs__ = listSubs__;
      list266 = coll.get();
      list266.list(function(results1107) {
        node1247.empty();
        for(var i266 = 0; i266 < results1107.length; i266++) {
          (function() {
            var iternode266 = $("<span>");
            node1247.append(iternode266);
            var it;
            it = mobl.ref(mobl.ref(results1107), i266);
            
            var tmp14680 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp14680.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp14680.set(it.get() == selected.get());
            }));
            
            
            var node1248 = $("<span>");
            iternode266.append(node1248);
            var condSubs367 = new mobl.CompSubscription();
            subs__.addSub(condSubs367);
            var oldValue367;
            var renderCond367 = function() {
              var value683 = tmp14680.get();
              if(oldValue367 === value683) return;
              oldValue367 = value683;
              var subs__ = condSubs367;
              subs__.unsubscribe();
              node1248.empty();
              if(value683) {
                
                var tmp14676 = mobl.ref(false);
                
                
                var tmp14675 = mobl.ref(null);
                
                
                var tmp14674 = mobl.ref(null);
                
                var nodes5784 = $("<span>");
                node1248.append(nodes5784);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14674, tmp14675, tmp14676, function(_, callback) {
                  var root7304 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5785 = $("<span>");
                  root7304.append(nodes5785);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl419();
                  }));
                  
                  function renderControl419() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root7305 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7305); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5785;
                      nodes5785 = node.contents();
                      oldNodes.replaceWith(nodes5785);
                    }));
                  }
                  renderControl419();
                  callback(root7304); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5784;
                  nodes5784 = node.contents();
                  oldNodes.replaceWith(nodes5784);
                }));
                
                
              } else {
                
                var tmp14678 = mobl.ref(true);
                
                
                var tmp14677 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp14679 = mobl.ref(null);
                
                var nodes5786 = $("<span>");
                node1248.append(nodes5786);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14677, tmp14679, tmp14678, function(_, callback) {
                  var root7306 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5787 = $("<span>");
                  root7306.append(nodes5787);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl420();
                  }));
                  
                  function renderControl420() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root7307 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7307); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5787;
                      nodes5787 = node.contents();
                      oldNodes.replaceWith(nodes5787);
                    }));
                  }
                  renderControl420();
                  callback(root7306); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5786;
                  nodes5786 = node.contents();
                  oldNodes.replaceWith(nodes5786);
                }));
                
                
              }
            };
            renderCond367();
            subs__.addSub(tmp14680.addEventListener('change', function() {
              renderCond367();
            }));
            
            
            var oldNodes = iternode266;
            iternode266 = iternode266.contents();
            oldNodes.replaceWith(iternode266);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list266.addEventListener('change', function() { listSubs__.unsubscribe(); renderList266(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList266(true); }));
      });
    };
    renderList266();
    
    callback(root7303); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5783;
    nodes5783 = node.contents();
    oldNodes.replaceWith(nodes5783);
  }));
  callback(root7302); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root7308 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes5788 = $("<span>");
    root7308.append(nodes5788);
    subs__.addSub((ui.group)(function(_, callback) {
      var root7309 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp14684 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp14684.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp14684.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp14684.set(coll.get().limit(n.get()));
      }));
      
      
      var node1249 = mobl.loadingSpan();
      root7309.append(node1249);
      var list267;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList267 = function() {
        var subs__ = listSubs__;
        list267 = tmp14684.get();
        list267.list(function(results1108) {
          node1249.empty();
          for(var i267 = 0; i267 < results1108.length; i267++) {
            (function() {
              var iternode267 = $("<span>");
              node1249.append(iternode267);
              var it;
              it = mobl.ref(mobl.ref(results1108), i267);
              
              var tmp14681 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp14683 = mobl.ref(false);
              
              
              var tmp14682 = mobl.ref(null);
              
              var nodes5789 = $("<span>");
              iternode267.append(nodes5789);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14681, tmp14682, tmp14683, function(_, callback) {
                var root7310 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5790 = $("<span>");
                root7310.append(nodes5790);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl421();
                }));
                
                function renderControl421() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root7311 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root7311); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5790;
                    nodes5790 = node.contents();
                    oldNodes.replaceWith(nodes5790);
                  }));
                }
                renderControl421();
                callback(root7310); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5789;
                nodes5789 = node.contents();
                oldNodes.replaceWith(nodes5789);
              }));
              
              var oldNodes = iternode267;
              iternode267 = iternode267.contents();
              oldNodes.replaceWith(iternode267);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list267.addEventListener('change', function() { listSubs__.unsubscribe(); renderList267(true); }));
          subs__.addSub(tmp14684.addEventListener('change', function() { listSubs__.unsubscribe(); renderList267(true); }));
        });
      };
      renderList267();
      
      
      var tmp14687 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp14687.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp14687.set(n.get() < total.get());
      }));
      
      
      var node1250 = $("<span>");
      root7309.append(node1250);
      var condSubs368 = new mobl.CompSubscription();
      subs__.addSub(condSubs368);
      var oldValue368;
      var renderCond368 = function() {
        var value684 = tmp14687.get();
        if(oldValue368 === value684) return;
        oldValue368 = value684;
        var subs__ = condSubs368;
        subs__.unsubscribe();
        node1250.empty();
        if(value684) {
          
          var node1251 = $("<li>");
          
          var ref1015 = mobl.ref(ui.loadMoreStyle);
          if(ref1015.get() !== null) {
            node1251.attr('class', ref1015.get());
            subs__.addSub(ref1015.addEventListener('change', function(_, ref, val) {
              node1251.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1015.rebind());
          
          var val584 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val584 !== null) {
            subs__.addSub(mobl.domBind(node1251, 'tap', val584));
          }
          
          
          var tmp14686 = mobl.ref(null);
          
          
          var tmp14685 = mobl.ref(null);
          
          var nodes5791 = $("<span>");
          node1251.append(nodes5791);
          subs__.addSub((mobl.label)(moreLabel, tmp14685, tmp14686, function(_, callback) {
            var root7312 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root7312); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes5791;
            nodes5791 = node.contents();
            oldNodes.replaceWith(nodes5791);
          }));
          node1250.append(node1251);
          
          
          
        } else {
          
        }
      };
      renderCond368();
      subs__.addSub(tmp14687.addEventListener('change', function() {
        renderCond368();
      }));
      
      callback(root7309); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5788;
      nodes5788 = node.contents();
      oldNodes.replaceWith(nodes5788);
    }));
    callback(root7308); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root7313 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5792 = $("<span>");
  root7313.append(nodes5792);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7314 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1252 = mobl.loadingSpan();
    root7314.append(node1252);
    var list268;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList268 = function() {
      var subs__ = listSubs__;
      list268 = items.get();
      list268.list(function(results1109) {
        node1252.empty();
        for(var i268 = 0; i268 < results1109.length; i268++) {
          (function() {
            var iternode268 = $("<span>");
            node1252.append(iternode268);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results1109), i268), "_1");it = mobl.ref(mobl.ref(mobl.ref(results1109), i268), "_2");
            
            var tmp14691 = mobl.ref(false);
            
            
            var tmp14690 = mobl.ref(null);
            
            
            var tmp14689 = mobl.ref(null);
            
            var nodes5793 = $("<span>");
            iternode268.append(nodes5793);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14689, tmp14690, tmp14691, function(_, callback) {
              var root7315 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp14688 = mobl.ref(null);
              
              var nodes5794 = $("<span>");
              root7315.append(nodes5794);
              subs__.addSub((ui.checkBox)(checked, it, tmp14688, function(_, callback) {
                var root7316 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7316); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5794;
                nodes5794 = node.contents();
                oldNodes.replaceWith(nodes5794);
              }));
              callback(root7315); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5793;
              nodes5793 = node.contents();
              oldNodes.replaceWith(nodes5793);
            }));
            
            var oldNodes = iternode268;
            iternode268 = iternode268.contents();
            oldNodes.replaceWith(iternode268);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list268.addEventListener('change', function() { listSubs__.unsubscribe(); renderList268(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList268(true); }));
      });
    };
    renderList268();
    
    callback(root7314); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5792;
    nodes5792 = node.contents();
    oldNodes.replaceWith(nodes5792);
  }));
  callback(root7313); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root7317 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll651) {
    coll651 = coll651.reverse();
    function processOne171() {
      var it;
      it = coll651.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll651.length > 0) processOne171(); else rest171();
      
    }
    function rest171() {
      
      var tmp14695 = mobl.ref(null);
      
      var nodes5795 = $("<span>");
      root7317.append(nodes5795);
      subs__.addSub((ui.header)(title, tmp14695, function(_, callback) {
        var root7318 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp14692 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp14693 = mobl.ref(mobl._("Back", []));
        
        var nodes5796 = $("<span>");
        root7318.append(nodes5796);
        subs__.addSub((ui.backButton)(tmp14693, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp14692, function(_, callback) {
          var root7319 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7319); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5796;
          nodes5796 = node.contents();
          oldNodes.replaceWith(nodes5796);
        }));
        
        var tmp14694 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll650) {
                               coll650 = coll650.reverse();
                               function processOne170() {
                                 var checked;var it;
                                 var tmp14729 = coll650.pop();
                                 checked = tmp14729._1;it = tmp14729._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll650.length > 0) processOne170(); else rest170();
                                   
                                 } else {
                                   {
                                     
                                     if(coll650.length > 0) processOne170(); else rest170();
                                     
                                   }
                                 }
                               }
                               function rest170() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll650.length > 0) processOne170(); else rest170();
                             });
                             
                           });
        
        var nodes5797 = $("<span>");
        root7318.append(nodes5797);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp14694, function(_, callback) {
          var root7320 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7320); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5797;
          nodes5797 = node.contents();
          oldNodes.replaceWith(nodes5797);
        }));
        callback(root7318); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5795;
        nodes5795 = node.contents();
        oldNodes.replaceWith(nodes5795);
      }));
      var nodes5798 = $("<span>");
      root7317.append(nodes5798);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root7321 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7321); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5798;
        nodes5798 = node.contents();
        oldNodes.replaceWith(nodes5798);
      }));
      callback(root7317); return subs__;
      
      
    }
    if(coll651.length > 0) processOne171(); else rest171();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root7322 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp14697 = mobl.ref(null);
  
  
  var tmp14696 = mobl.ref(null);
  
  var nodes5799 = $("<span>");
  root7322.append(nodes5799);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, tmp14696, tmp14697, function(_, callback) {
    var root7323 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7323); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5799;
    nodes5799 = node.contents();
    oldNodes.replaceWith(nodes5799);
  }));
  
  var tmp14698 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp14698.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp14698.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp14698.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp14698.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp14698.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes5800 = $("<span>");
  root7322.append(nodes5800);
  subs__.addSub((ui.masterDetail)(tmp14698, masterItem, detailItem, function(_, callback) {
    var root7324 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7324); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5800;
    nodes5800 = node.contents();
    oldNodes.replaceWith(nodes5800);
  }));
  callback(root7322); return subs__;
  
  
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
  var root7325 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp14711 = mobl.ref(null);
  
  
  var tmp14710 = mobl.ref(null);
  
  
  var tmp14709 = mobl.ref(null);
  
  var nodes5801 = $("<span>");
  root7325.append(nodes5801);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), tmp14709, tmp14710, tmp14711, function(_, callback) {
    var root7326 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1253 = mobl.loadingSpan();
    root7326.append(node1253);
    var list269;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList269 = function() {
      var subs__ = listSubs__;
      list269 = sections.get();
      list269.list(function(results1110) {
        node1253.empty();
        for(var i269 = 0; i269 < results1110.length; i269++) {
          (function() {
            var iternode269 = $("<span>");
            node1253.append(iternode269);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results1110), i269), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results1110), i269), "_2");
            
            var tmp14702 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp14702.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp14702.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp14702.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp14702.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp14701 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp14704 = mobl.ref(null);
            
            
            var tmp14703 = mobl.ref(null);
            
            var nodes5802 = $("<span>");
            iternode269.append(nodes5802);
            subs__.addSub((mobl.span)(tmp14702, tmp14703, tmp14701, tmp14704, function(_, callback) {
              var root7327 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp14700 = mobl.ref(null);
              
              
              var tmp14699 = mobl.ref(null);
              
              var nodes5803 = $("<span>");
              root7327.append(nodes5803);
              subs__.addSub((mobl.label)(sectionName, tmp14699, tmp14700, function(_, callback) {
                var root7328 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7328); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5803;
                nodes5803 = node.contents();
                oldNodes.replaceWith(nodes5803);
              }));
              callback(root7327); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5802;
              nodes5802 = node.contents();
              oldNodes.replaceWith(nodes5802);
            }));
            
            var tmp14705 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp14705.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp14705.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp14705.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp14705.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp14708 = mobl.ref(null);
            
            
            var tmp14707 = mobl.ref(null);
            
            
            var tmp14706 = mobl.ref(null);
            
            var nodes5804 = $("<span>");
            iternode269.append(nodes5804);
            subs__.addSub((mobl.block)(tmp14705, tmp14706, tmp14707, tmp14708, function(_, callback) {
              var root7329 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5805 = $("<span>");
              root7329.append(nodes5805);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl422();
              }));
              
              function renderControl422() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root7330 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root7330); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5805;
                  nodes5805 = node.contents();
                  oldNodes.replaceWith(nodes5805);
                }));
              }
              renderControl422();
              callback(root7329); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5804;
              nodes5804 = node.contents();
              oldNodes.replaceWith(nodes5804);
            }));
            
            var oldNodes = iternode269;
            iternode269 = iternode269.contents();
            oldNodes.replaceWith(iternode269);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list269.addEventListener('change', function() { listSubs__.unsubscribe(); renderList269(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList269(true); }));
      });
    };
    renderList269();
    
    callback(root7326); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5801;
    nodes5801 = node.contents();
    oldNodes.replaceWith(nodes5801);
  }));
  callback(root7325); return subs__;
  
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
  var root7331 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1254 = $("<table>");
  
  var ref1016 = mobl.ref(ui.tableStyle);
  if(ref1016.get() !== null) {
    node1254.attr('class', ref1016.get());
    subs__.addSub(ref1016.addEventListener('change', function(_, ref, val) {
      node1254.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1016.rebind());
  
  var nodes5806 = $("<span>");
  node1254.append(nodes5806);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl423();
  }));
  
  function renderControl423() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7332 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7332); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5806;
      nodes5806 = node.contents();
      oldNodes.replaceWith(nodes5806);
    }));
  }
  renderControl423();
  root7331.append(node1254);
  callback(root7331); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root7333 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1255 = $("<tr>");
  
  var ref1017 = mobl.ref(ui.trStyle);
  if(ref1017.get() !== null) {
    node1255.attr('class', ref1017.get());
    subs__.addSub(ref1017.addEventListener('change', function(_, ref, val) {
      node1255.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1017.rebind());
  
  var nodes5807 = $("<span>");
  node1255.append(nodes5807);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl424();
  }));
  
  function renderControl424() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7334 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7334); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5807;
      nodes5807 = node.contents();
      oldNodes.replaceWith(nodes5807);
    }));
  }
  renderControl424();
  root7333.append(node1255);
  callback(root7333); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root7335 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1256 = $("<td>");
  
  var ref1018 = width;
  if(ref1018.get() !== null) {
    node1256.attr('width', ref1018.get());
    subs__.addSub(ref1018.addEventListener('change', function(_, ref, val) {
      node1256.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1018.rebind());
  
  var ref1019 = mobl.ref(ui.tdStyle);
  if(ref1019.get() !== null) {
    node1256.attr('class', ref1019.get());
    subs__.addSub(ref1019.addEventListener('change', function(_, ref, val) {
      node1256.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1019.rebind());
  
  var nodes5808 = $("<span>");
  node1256.append(nodes5808);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl425();
  }));
  
  function renderControl425() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7336 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7336); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5808;
      nodes5808 = node.contents();
      oldNodes.replaceWith(nodes5808);
    }));
  }
  renderControl425();
  root7335.append(node1256);
  callback(root7335); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root7337 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1257 = $("<td>");
  
  var ref1020 = width;
  if(ref1020.get() !== null) {
    node1257.attr('width', ref1020.get());
    subs__.addSub(ref1020.addEventListener('change', function(_, ref, val) {
      node1257.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1020.rebind());
  
  var ref1021 = mobl.ref(ui.tdStyle);
  if(ref1021.get() !== null) {
    node1257.attr('class', ref1021.get());
    subs__.addSub(ref1021.addEventListener('change', function(_, ref, val) {
      node1257.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1021.rebind());
  
  var nodes5809 = $("<span>");
  node1257.append(nodes5809);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl426();
  }));
  
  function renderControl426() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7338 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7338); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5809;
      nodes5809 = node.contents();
      oldNodes.replaceWith(nodes5809);
    }));
  }
  renderControl426();
  root7337.append(node1257);
  callback(root7337); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root7339 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1258 = $("<td>");
  
  var ref1022 = width;
  if(ref1022.get() !== null) {
    node1258.attr('width', ref1022.get());
    subs__.addSub(ref1022.addEventListener('change', function(_, ref, val) {
      node1258.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1022.rebind());
  
  var ref1023 = mobl.ref(ui.tdStyle);
  if(ref1023.get() !== null) {
    node1258.attr('class', ref1023.get());
    subs__.addSub(ref1023.addEventListener('change', function(_, ref, val) {
      node1258.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1023.rebind());
  
  
  var node1259 = $("<strong>");
  
  var nodes5810 = $("<span>");
  node1259.append(nodes5810);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl427();
  }));
  
  function renderControl427() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7340 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7340); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5810;
      nodes5810 = node.contents();
      oldNodes.replaceWith(nodes5810);
    }));
  }
  renderControl427();
  node1258.append(node1259);
  root7339.append(node1258);
  callback(root7339); return subs__;
  
  
  
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
}(ui));ui.boldItemStyle = 'ui__boldItemStyle';
