mobl.provides('mobl');
mobl.mergeStyles = function(styles) {
   var __this = this;
  var styleString = styles.join(" ");
  
  return styleString;
};

(function(__ns) {
__ns.LocalStorage = {
                      setItem: function(key, value) {
                                 window.localStorage.setItem(key, JSON.stringify(value));
                               },
                      getItem: function(key, defaultValue) {
                                 var val = JSON.parse(window.localStorage.getItem(key) || "null") || defaultValue;
                                 if(val && typeof val === 'object' && !val.addEventListener)
                                 {
                                   return new mobl.ObservableObject(val);
                                 }
                                 else
                                 {
                                   return val;
                                 }
                               },
                      getNum: function(key, defaultValue) {
                                return this.get(key, defaultValue);
                              },
                      getString: function(key, defaultValue) {
                                   return this.get(key, defaultValue);
                                 },
                      getBool: function(key, defaultValue) {
                                 return this.get(key, defaultValue);
                               }
                    };
}(mobl));(function(__ns) {
__ns.isIphone = function() {
                  return !!navigator.userAgent.match(/iPhone/i) || !!navigator.userAgent.match(/iPod/i);
                };
__ns.isIpad = function() {
                return !!navigator.userAgent.match(/iPad/i);
              };
__ns.isAndroid = function() {
                   return !!navigator.userAgent.match(/Android/i);
                 };
__ns.isLandscape = function() {
                     return window.innerHeight < window.innerWidth;
                   };
__ns.isPortrait = function() {
                    return window.innerHeight >= window.innerWidth;
                  };
__ns.isTouchDevice = function() {
                       return 'ontouchstart' in document.documentElement;
                     };
__ns.isOnline = function(callback) {
                  var i = new Image();
                  i.onload = function() {
                               callback(true);
                             };
                  i.onerror = function() {
                                callback(false);
                              };
                  i.src = 'http://gfx2.hotmail.com/mail/uxp/w4/m4/pr014/h/s7.png?d=' + escape(Date());
                };
}(mobl));
mobl.label = function(s, style, onclick, elements, callback) {
  var root5301 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node803 = $("<span>");
  
  var ref669 = s;
  node803.text(""+ref669.get());
  var ignore134 = false;
  subs__.addSub(ref669.addEventListener('change', function(_, ref, val) {
    if(ignore134) return;
    node803.text(""+val);
  }));
  subs__.addSub(ref669.rebind());
  
  
  var ref670 = style;
  if(ref670.get() !== null) {
    node803.attr('class', ref670.get());
    subs__.addSub(ref670.addEventListener('change', function(_, ref, val) {
      node803.attr('class', val);
    }));
    
  }
  subs__.addSub(ref670.rebind());
  
  var val384 = onclick.get();
  if(val384 !== null) {
    subs__.addSub(mobl.domBind(node803, 'tap', val384));
  }
  
  root5301.append(node803);
  callback(root5301); return subs__;
  
  return subs__;
};

mobl.block = function(cssClass, id, onclick, onswipe, elements, callback) {
  var root5302 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node804 = $("<div>");
  
  var ref671 = id;
  if(ref671.get() !== null) {
    node804.attr('id', ref671.get());
    subs__.addSub(ref671.addEventListener('change', function(_, ref, val) {
      node804.attr('id', val);
    }));
    
  }
  subs__.addSub(ref671.rebind());
  
  var ref672 = cssClass;
  if(ref672.get() !== null) {
    node804.attr('class', ref672.get());
    subs__.addSub(ref672.addEventListener('change', function(_, ref, val) {
      node804.attr('class', val);
    }));
    
  }
  subs__.addSub(ref672.rebind());
  
  var val385 = onclick.get();
  if(val385 !== null) {
    subs__.addSub(mobl.domBind(node804, 'tap', val385));
  }
  
  var val386 = onswipe.get();
  if(val386 !== null) {
    subs__.addSub(mobl.domBind(node804, 'swipe', val386));
  }
  
  var nodes4171 = $("<span>");
  node804.append(nodes4171);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl284();
  }));
  
  function renderControl284() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5303 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5303); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4171;
      nodes4171 = node.contents();
      oldNodes.replaceWith(nodes4171);
    }));
  }
  renderControl284();
  root5302.append(node804);
  callback(root5302); return subs__;
  
  
  return subs__;
};

mobl.span = function(cssClass, id, onclick, onswipe, elements, callback) {
  var root5304 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node805 = $("<span>");
  
  var ref673 = id;
  if(ref673.get() !== null) {
    node805.attr('id', ref673.get());
    subs__.addSub(ref673.addEventListener('change', function(_, ref, val) {
      node805.attr('id', val);
    }));
    
  }
  subs__.addSub(ref673.rebind());
  
  var ref674 = cssClass;
  if(ref674.get() !== null) {
    node805.attr('class', ref674.get());
    subs__.addSub(ref674.addEventListener('change', function(_, ref, val) {
      node805.attr('class', val);
    }));
    
  }
  subs__.addSub(ref674.rebind());
  
  var val387 = onclick.get();
  if(val387 !== null) {
    subs__.addSub(mobl.domBind(node805, 'tap', val387));
  }
  
  var val388 = onswipe.get();
  if(val388 !== null) {
    subs__.addSub(mobl.domBind(node805, 'swipe', val388));
  }
  
  var nodes4172 = $("<span>");
  node805.append(nodes4172);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl285();
  }));
  
  function renderControl285() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5305 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5305); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4172;
      nodes4172 = node.contents();
      oldNodes.replaceWith(nodes4172);
    }));
  }
  renderControl285();
  root5304.append(node805);
  callback(root5304); return subs__;
  
  
  return subs__;
};

mobl.link = function(url, target, elements, callback) {
  var root5306 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var l = $("<a>");
  
  var ref675 = url;
  if(ref675.get() !== null) {
    l.attr('href', ref675.get());
    subs__.addSub(ref675.addEventListener('change', function(_, ref, val) {
      l.attr('href', val);
    }));
    
  }
  subs__.addSub(ref675.rebind());
  
  var ref676 = target;
  if(ref676.get() !== null) {
    l.attr('target', ref676.get());
    subs__.addSub(ref676.addEventListener('change', function(_, ref, val) {
      l.attr('target', val);
    }));
    
  }
  subs__.addSub(ref676.rebind());
  
  var nodes4173 = $("<span>");
  l.append(nodes4173);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl286();
  }));
  
  function renderControl286() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5307 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5307); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4173;
      nodes4173 = node.contents();
      oldNodes.replaceWith(nodes4173);
    }));
  }
  renderControl286();
  root5306.append(l);
  var result__ = l.contents().length == 0;
  if(result__) {
    var result__ = l.text(url.get());
    callback(root5306); return subs__;
  } else {
    {
      callback(root5306); return subs__;
    }
  }
  
  
  return subs__;
};

mobl.nl = function(elements, callback) {
  var root5308 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node806 = $("<br>");
  
  root5308.append(node806);
  callback(root5308); return subs__;
  
  return subs__;
};

mobl.screenContext = function(elements, callback) {
  var root5309 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node807 = $("<div>");
  node807.attr('class', "screenContext");
  node807.attr('style', "position: relative;");
  
  
  var node808 = $("<div>");
  node808.attr('class', "initialElements");
  
  var nodes4174 = $("<span>");
  node808.append(nodes4174);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl287();
  }));
  
  function renderControl287() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5310 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5310); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4174;
      nodes4174 = node.contents();
      oldNodes.replaceWith(nodes4174);
    }));
  }
  renderControl287();
  node807.append(node808);
  root5309.append(node807);
  callback(root5309); return subs__;
  
  
  
  return subs__;
};
(function(__ns) {
var bundle = {
             };
__ns.fetchLanguageBundle = function(path, callback) {
                             $.getJSON(path, function(json) {
                                               bundle = json;
                                               callback();
                                             });
                           };
__ns._ = function(key, placeholders) {
           var s = bundle[key] || key;
           var parts = s.split('%%');
           s = parts[0];
           for(var i = 0; i < placeholders.length; i++)
           {
             s += placeholders[i];
             if(parts[i + 1])
             {
               s += parts[i + 1];
             }
           }
           return s;
         };
}(mobl));(function(__ns) {
var argspec = persistence.argspec;
__ns.$ = jQuery;
__ns.sleep = function(time, callback) {
               setTimeout(callback, time);
             };
__ns.Dynamic = {
               };
__ns.repeat = function(time, callback) {
                setInterval(callback, time);
              };
mobl.alert = function(s) {
               alert(s);
             };
mobl.log = function(s, _, callback) {
             console.log(s);
             if(callback)
             callback();
           };
__ns.parseNum = function(s) {
                  return parseInt(s, 10);
                };
__ns.escape = function(s) {
                return escape(s);
              };
__ns.add = function(e) {
             var allEnt = persistence.define(e._type).all();
             allEnt.add(e);
           };
mobl.now = function() {
             return new Date();
           };
mobl.remove = function(e) {
                persistence.remove(e);
                var allEnt = persistence.define(e._type).all();
                allEnt.triggerEvent('remove', allEnt, e);
                allEnt.triggerEvent('change', allEnt, e);
              };
mobl.flushDatabase = function(callback) {
                       persistence.flush(callback);
                     };
mobl.resetDatabase = function(callback) {
                       persistence.reset(function() {
                                           persistence.schemaSync(callback);
                                         });
                     };
mobl.reload = function() {
                persistence.flush(function() {
                                    window.location.reload();
                                  });
              };
mobl.openUrl = function(url) {
                 location = url;
               };
mobl.random = function(max) {
                return Math.round(Math.random() * max);
              };
persistence.QueryCollection.prototype.updates = function() {
                                                  this.triggerEvent('change', this);
                                                };
mobl.DateTime = {
                  parse: function(s) {
                           return new Date(Date.parse(s));
                         },
                  fromTimestamp: function(timestamp) {
                                   return new Date(timestamp);
                                 },
                  create: function(year, month, day, hour, minute, second, ms) {
                            return new Date(year,month,day,hour,minute,second,ms);
                          }
                };
Date.prototype.toDateString = function() {
                                return "" + ( this.getMonth() + 1 ) + "/" + this.getDate() + "/" + this.getFullYear();
                              };
mobl.Math = Math;
mobl.Math.pi = function() {
                 return Math.PI;
               };
mobl.Math.isNaN = function(n) {
                    return isNaN(n);
                  };
mobl.JSON = JSON;
mobl.formatDate = function(date) {
                    var diff = (( (new Date()).getTime() - date.getTime() ) / 1000);
                    var day_diff = Math.floor(diff / 86400);
                    if(isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
                    return;
                    return day_diff === 0 && ( diff < 60 && "just now" || diff < 120 && "1 minute ago" || diff < 3600 && Math.floor(diff / 60) + " minutes ago" || diff < 7200 && "1 hour ago" || diff < 86400 && Math.floor(diff / 3600) + " hours ago" ) || day_diff === 1 && "Yesterday" || day_diff < 7 && day_diff + " days ago" || day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
                  };
mobl.range = function(from, to) {
               var ar = [];
               for(var i = from; i < to; i++)
               {
                 ar.push(i);
               }
               return ar;
             };
mobl.html = function(html, elements, callback) {
              var root192 = $("<span>");
              var node180 = $("<span >");
              var ref108 = html;
              node180.html(html.get().toString());
              var ignore51 = false;
              ref108.addEventListener('change', function(_, ref, val) {
                                                  if(ignore51)
                                                  return;
                                                  if(ref === ref108)
                                                  {
                                                    node180.html(val.toString());
                                                  }
                                                });
              ref108.rebind();
              root192.append(node180);
              callback(root192);
              return;
            };
persistence.entityDecoratorHooks.push(function(Entity) {
                                        Entity.searchPrefix = function(query) {
                                                                return Entity.search(query, true);
                                                              };
                                      });
Array.prototype.list = function(tx, callback) {
                         var args = argspec.getArgs(arguments, [{
                                                                  name: 'tx',
                                                                  optional: true,
                                                                  check: function(obj) {
                                                                           return tx.executeSql;
                                                                         }
                                                                },{
                                                                    name: 'callback',
                                                                    optional: false,
                                                                    check: argspec.isCallback()
                                                                  }]);
                         tx = args.tx;
                         callback = args.callback;
                         var valueCopy = [];
                         for(var i = 0; i < this.length; i++)
                         {
                           valueCopy[i] = this[i];
                         }
                         callback(valueCopy);
                       };
Array.prototype.insert = function(idx, item) {
                           this.splice(idx, 0, item);
                         };
Array.prototype.get = function(idx) {
                        return this[idx];
                      };
Array.prototype.one = function(callback) {
                        if(this.length === 0)
                        {
                          callback(null);
                        }
                        else
                        {
                          callback(this[0]);
                        }
                      };
Array.prototype.contains = function(el) {
                             for(var i = 0; i < this.length; i++)
                             {
                               if(this[i] === el)
                               {
                                 return true;
                               }
                             }
                             return false;
                           };
Array.prototype.remove = function(el) {
                           for(var i = 0; i < this.length; i++)
                           {
                             if(this[i] === el)
                             {
                               this.splice(i, 1);
                               return;
                             }
                           }
                         };
Array.prototype.addEventListener = function() {
                                   };
mobl.dummyMapper = function(data, callback) {
                     callback(data);
                   };
mobl.Map = function() {
             this.data = {
                         };
           };
mobl.Map.prototype.set = function(k, v) {
                           this.data[k] = v;
                         };
mobl.Map.prototype.get = function(k) {
                           return this.data[k];
                         };
mobl.Map.prototype.keys = function() {
                            var keys = [];
                            for(var p in this.data)
                            {
                              if(this.data.hasOwnProperty(p))
                              {
                                keys.push(p);
                              }
                            }
                            return keys;
                          };
mobl.screenStack = [ ];
mobl.innerHeight = false;
setTimeout(function() {
             if(mobl.isAndroid)
             {
               mobl.innerHeight = window.innerHeight;
             }
           }, 200);
function updateScrollers ( ) {
  var scrollwrappers = $("div#scrollwrapper");
  if(scrollwrappers.length > 0)
  {
    var height = mobl.innerHeight?mobl.innerHeight:window.innerHeight;
    height -= $("#footer:visible").height();
    height -= $("#tabbar:visible").height();
    scrollwrappers.height(height);
  }
  var scrollers = $("div#scrollwrapper div#content");
  for(var i = 0; i < scrollers.length; i++)
  {
    var scroller = scrollers.eq(i).data("scroller");
    if(scroller)
    {
      scroller.refresh();
    }
    else
    {
    }
  }
}
mobl.delayedUpdateScrollers = function() {
                                setTimeout(updateScrollers, 200);
                              };
if(!mobl.isAndroid)
{
  $(window).resize(updateScrollers);
}
$(function() {
    setInterval(function() {
                  persistence.flush();
                  if(persistence.saveToLocalStorage)
                  {
                    persistence.saveToLocalStorage();
                  }
                }, 2500);
  });
mobl.postCallHooks = [ ];
mobl.contextStack = [ ];
if(mobl.contextStack.length === 0)
{
  mobl.contextStack.push([{
                            screens: [],
                            dom: null
                          }]);
}
mobl.findDeepestVisibleContext = function() {
                                   var idx = mobl.contextStack.length - 1;
                                   while ( idx >= 0 )
                                   {
                                     var top = mobl.contextStack[idx];
                                     for(var i = 0; i < top.length; i++)
                                     {
                                       if(!top[i].dom)
                                       {
                                         top[i].dom = $("body");
                                       }
                                       if(top[i].dom.is(':visible'))
                                       {
                                         return top[i];
                                       }
                                     }
                                     idx--;
                                   }
                                 };
var TRANSITION_SPEED = 150;
__ns.animations = {
                  };
__ns.animations.slide = function(prevNode, nextNode, forward, callback) {
                          nextNode.show('slide', {
                                                   direction: forward?'right':'left'
                                                 }, TRANSITION_SPEED);
                          prevNode.hide('slide', {
                                                   direction: forward?'left':'right'
                                                 }, TRANSITION_SPEED, callback);
                        };
__ns.animations.fade = function(prevNode, nextNode, forward, callback) {
                         nextNode.fadeIn(300);
                         prevNode.fadeOut(300, callback);
                       };
__ns.animations.none = function(prevNode, nextNode, forward, callback) {
                         nextNode.show();
                         prevNode.hide();
                         callback();
                       };
__ns.getCurrentScreen = function() {
                          var screenContext = mobl.findDeepestVisibleContext();
                          for(var i = 0; i < screenContext.screens.length; i++)
                          {
                            if(screenContext.screens[i].dom.is(':visible'))
                            {
                              return screenContext.screens[i];
                            }
                          }
                          return null;
                        };
__ns.call = function(screenName, args, callback) {
              var replace = args[args.length - 2].get();
              var animate = args[args.length - 1].get();
              args.splice(args.length - 2, 2);
              var screenFrame = {
                                  name: screenName,
                                  args: args,
                                  callback: callback,
                                  div: screenName.replace(/\./g, '__'),
                                  dom: null
                                };
              var screenContext = mobl.findDeepestVisibleContext();
              screenContext.screens.push(screenFrame);
              var callbackFn = function() {
                                 screenFrame.subs.unsubscribe();
                                 screenContext.screens.pop();
                                 if(screenFrame.dom.find("div.screenContext").length > 0)
                                 {
                                   mobl.contextStack.pop();
                                 }
                                 mobl.delayedUpdateScrollers();
                                 var domNode;
                                 if(screenContext.screens.length > 0)
                                 {
                                   var previousScreen = screenContext.screens[screenContext.screens.length - 1];
                                   domNode = previousScreen.dom;
                                   scrollTo(0, previousScreen.pageYOffset);
                                 }
                                 else
                                 {
                                   domNode = screenContext.initialElements;
                                   scrollTo(0, 0);
                                 }
                                 __ns.animations[animate](screenFrame.dom, domNode, false, function() {
                                                                                             screenFrame.dom.remove();
                                                                                           });
                                 if(callback)
                                 {
                                   callback.apply(null, arguments);
                                 }
                               };
              var parts = screenName.split('.');
              var current = window;
              for(var i = 0; i < parts.length; i++)
              {
                current = current[parts[i]];
              }
              var screenTemplate = current;
              screenFrame.subs = screenTemplate.apply(null, args.concat([function(node) {
                                                                           node.attr('id', screenFrame.div);
                                                                           node.css('position', 'absolute').css('top', '0').css('left', '0').css('width', '100%');
                                                                           screenFrame.dom = node;
                                                                           if(screenContext.screens.length > 1)
                                                                           {
                                                                             var previousScreen = screenContext.screens[screenContext.screens.length - 2];
                                                                             previousScreen.pageYOffset = window.pageYOffset;
                                                                             node.hide();
                                                                             node.prependTo(screenContext.dom);
                                                                             __ns.animations[animate](previousScreen.dom, node, true, function() {
                                                                                                                                      });
                                                                             scrollTo(0, 0);
                                                                           }
                                                                           else
                                                                           {
                                                                             if(screenContext.dom.selector === 'body')
                                                                             {
                                                                               screenContext.initialElements = screenContext.dom.find("div.initialElements");
                                                                               node.prependTo(screenContext.dom);
                                                                               node.show();
                                                                               screenContext.initialElements.hide();
                                                                             }
                                                                             else
                                                                             {
                                                                               screenContext.initialElements = screenContext.dom.find("div.initialElements");
                                                                               node.hide();
                                                                               node.prependTo(screenContext.dom);
                                                                               __ns.animations[animate](screenContext.initialElements, node, true, function() {
                                                                                                                                                   });
                                                                               scrollTo(0, 0);
                                                                             }
                                                                           }
                                                                           var localScreenContexts = node.find("div.screenContext");
                                                                           if(localScreenContexts.length > 0)
                                                                           {
                                                                             var ar = [];
                                                                             for(var i = 0; i < localScreenContexts.length; i++)
                                                                             {
                                                                               ar.push({
                                                                                         screens: [],
                                                                                         dom: localScreenContexts.eq(i)
                                                                                       });
                                                                             }
                                                                             mobl.contextStack.push(ar);
                                                                           }
                                                                           mobl.postCallHooks.forEach(function(fn) {
                                                                                                        fn(node);
                                                                                                      });
                                                                           if(replace)
                                                                           {
                                                                             var screenToRemove = screenContext.screens[screenContext.screens.length - 2];
                                                                             screenToRemove.dom.remove();
                                                                             screenContext.screens.splice(screenContext.screens.length - 2, 1);
                                                                           }
                                                                           $(function() {
                                                                               var scrollers = $("div#scrollwrapper div#content");
                                                                               var i = 0;
                                                                               if(scrollers.length > 0)
                                                                               {
                                                                                 for(i = 0; i < scrollers.length; i++)
                                                                                 {
                                                                                   if(!scrollers.eq(i).data("scroller"))
                                                                                   {
                                                                                     scrollers.eq(i).data("scroller", new iScroll(scrollers.get(i),'y'));
                                                                                   }
                                                                                 }
                                                                                 mobl.delayedUpdateScrollers();
                                                                               }
                                                                             });
                                                                         },callbackFn]));
            };
mobl.ref = function(r, prop) {
             if(prop)
             {
               for(var i = 0; i < r.childRefs.length; i++)
               {
                 if(r.childRefs[i].prop === prop)
                 {
                   return r.childRefs[i];
                 }
               }
             }
             return new mobl.Reference(r,prop);
           };
function fromScope ( that , prop ) {
  if(prop)
  {
    return $(that).scope().get(prop);
  }
  else
  {
    return $(that).scope();
  }
}
mobl.stringTomobl__Num = function(s) {
                           return parseFloat(s, 10);
                         };
mobl.stringTomobl__String = function(s) {
                              return s;
                            };
mobl.conditionalDef = function(oldDef, condFn, newDef) {
                        return function() {
                                 if(condFn())
                                 {
                                   return newDef.apply(null, arguments);
                                 }
                                 else
                                 {
                                   return oldDef.apply(null, arguments);
                                 }
                               };
                      };
mobl.stringTomobl__DateTime = function(s) {
                                return new Date(s);
                              };
mobl.encodeUrlObj = function(obj) {
                      var parts = [];
                      for(var k in obj)
                      {
                        if(obj.hasOwnProperty(k))
                        {
                          parts.push(encodeURI(k) + "=" + encodeURI(obj[k]));
                        }
                      }
                      return "?" + parts.join("&");
                    };
function op ( operator , e1 , e2 , callback ) {
  switch(operator) {
    case '+':
      callback(e1 + e2);
      break;
    case '-':
      callback(e1 - e2);
      break;
    case '*':
      callback(e1 * e2);
      break;
    case '/':
      callback(e1 / e2);
      break;
    case '%':
      callback(e1 % e2);
      break;
    }
}
mobl.proxyUrl = function(url, user, password) {
                  if(user && password)
                  {
                    return '/proxy.php?user=' + user + '&pwd=' + password + '&proxy_url=' + encodeURIComponent(url);
                  }
                  else
                  {
                    return '/proxy.php?proxy_url=' + encodeURIComponent(url);
                  }
                };
mobl.remoteCollection = function(uri, datatype, processor) {
                          return {
                                   addEventListener: function() {
                                                     },
                                   list: function(_, callback) {
                                           $.ajax({
                                                    url: mobl.proxyUrl(uri),
                                                    datatype: datatype,
                                                    error: function(_, message, error) {
                                                             console.log(message);
                                                             console.log(error);
                                                             callback([]);
                                                           },
                                                    success: function(data) {
                                                               callback(processor(data));
                                                             }
                                                  });
                                         }
                                 };
                        };
mobl.instantiate = function(sup, props) {
                     var obj = {
                               };
                     for(var p in sup)
                     {
                       if(sup.hasOwnProperty(p))
                       {
                         obj[p] = sup[p];
                       }
                     }
                     for(var p in props)
                     {
                       if(props.hasOwnProperty(p))
                       {
                         obj[p] = props[p];
                       }
                     }
                     return new mobl.ObservableObject(obj);
                   };
mobl.ObservableObject = function(props) {
                          this._data = props;
                          this.subscribers = {
                                             };
                          var that = this;
                          for(var property in props)
                          {
                            if(props.hasOwnProperty(property))
                            {
                              (function() {
                                 var p = property;
                                 that.__defineGetter__(p, function() {
                                                            return that._data[p];
                                                          });
                                 that.__defineSetter__(p, function(val) {
                                                            that._data[p] = val;
                                                            that.triggerEvent('change', that, p, val);
                                                          });
                               }());
                            }
                          }
                        };
mobl.ObservableObject.prototype = new persistence.Observable ( );
mobl.ObservableObject.prototype.toJSON = function() {
                                           var obj = {
                                                     };
                                           for(var p in this._data)
                                           {
                                             if(this._data.hasOwnProperty(p))
                                             {
                                               obj[p] = this._data[p];
                                             }
                                           }
                                           return obj;
                                         };
function log ( s ) {
  console.log(s);
}
mobl.implementInterface = function(sourceModule, targetModule, items) {
                            for(var i = 0; i < items.length; i++)
                            {
                              targetModule[items[i]] = sourceModule[items[i]];
                            }
                          };
(function() {
   function Tuple ( ) {
     for(var i = 0; i < arguments.length; i++)
     {
       this['_' + ( i + 1 )] = arguments[i];
     }
     this.subscribers = {
                        };
     this.length = arguments.length;
   }
   Tuple.prototype = new persistence.Observable ( );
   Tuple.prototype.toJSON = function() {
                              var obj = {
                                        };
                              for(var i = 0; i < this.length; i++)
                              {
                                obj['_' + ( i + 1 )] = this['_' + ( i + 1 )];
                              }
                              return obj;
                            };
   function CompSubscription ( name ) {
     this.subscriptions = [ ];
     this.name = name;
   }
   CompSubscription.prototype.addSub = function(sub) {
                                         if(sub)
                                         {
                                           this.subscriptions.push(sub);
                                         }
                                       };
   CompSubscription.prototype.unsubscribe = function() {
                                              this.subscriptions.forEach(function(sub) {
                                                                           sub.unsubscribe();
                                                                         });
                                              this.subscriptions = [ ];
                                            };
   function DomSubscription ( node , eventType , fn ) {
     this.node = node;
     this.eventType = eventType;
     this.fn = fn;
   }
   DomSubscription.prototype.unsubscribe = function() {
                                             this.node.unbind(this.eventType, this.fn);
                                           };
   mobl.domBind = function(node, eventType, fn) {
                    node.bind(eventType, fn);
                    return new DomSubscription(node,eventType,fn);
                  };
   function Reference ( ref , prop ) {
     this.ref = ref;
     this.prop = prop;
     this.childRefs = [ ];
     if(prop)
     {
       ref.childRefs.push(this);
     }
     this.subscribers = {
                        };
   }
   Reference.prototype = new persistence.Observable ( );
   Reference.prototype.oldAddListener = Reference.prototype.addEventListener;
   Reference.prototype.addEventListener = function(eventType, callback) {
                                            if(eventType === 'change' && this.prop !== undefined && this.ref.get() && this.ref.get().addEventListener)
                                            {
                                              var that = this;
                                              var subs = new CompSubscription();
                                              subs.addSub(this.ref.get().addEventListener('change', function(_, _, prop, value) {
                                                                                                      if(prop === that.prop)
                                                                                                      {
                                                                                                        callback(eventType, that, value);
                                                                                                      }
                                                                                                    }));
                                              subs.addSub(this.oldAddListener(eventType, callback));
                                              return subs;
                                            }
                                            else
                                            {
                                              return this.oldAddListener(eventType, callback);
                                            }
                                          };
   Reference.prototype.addSetListener = function(callback) {
                                          var that = this;
                                          if(this.ref.addEventListener)
                                          {
                                            return this.ref.addEventListener('change', function(_, _, prop, value) {
                                                                                         if(prop === that.prop)
                                                                                         {
                                                                                           callback(eventType, that, value);
                                                                                         }
                                                                                       });
                                          }
                                        };
   Reference.prototype.get = function() {
                               if(this.prop === undefined)
                               {
                                 return this.ref;
                               }
                               if(this.ref.get)
                               {
                                 return this.ref.get()[this.prop];
                               }
                             };
   Reference.prototype.set = function(value) {
                               if(this.prop === undefined)
                               {
                                 this.ref = value;
                                 this.triggerEvent('change', this, value);
                               }
                               else
                               {
                                 this.ref.get()[this.prop] = value;
                                 this.triggerEvent('change', this, value);
                               }
                               var childRefs = this.childRefs.slice(0);
                               for(var i = 0; i < childRefs.length; i++)
                               {
                                 var childRef = childRefs[i];
                                 childRef.rebind();
                                 childRef.triggerEvent('change', childRef, childRef.get());
                               }
                             };
   Reference.prototype.rebind = function() {
                                  var that = this;
                                  var subs = new mobl.CompSubscription();
                                  if(this.prop !== undefined)
                                  {
                                    if(this.ref.get().addEventListener)
                                    {
                                      subs.addSub(this.ref.get().addEventListener('change', function(_, _, prop, value) {
                                                                                              if(prop === that.prop)
                                                                                              {
                                                                                                that.triggerEvent('change', that, value);
                                                                                              }
                                                                                            }));
                                    }
                                  }
                                  var childRefs = this.childRefs.slice(0);
                                  for(var i = 0; i < childRefs.length; i++)
                                  {
                                    subs.addSub(childRefs[i].rebind());
                                  }
                                  return subs;
                                };
   mobl.Tuple = Tuple;
   mobl.Reference = Reference;
   mobl.CompSubscription = CompSubscription;
 }());
}(mobl));
mobl.Window = {
  innerWidth: null,
  innerHeight: null
};
mobl.window = mobl.ref(mobl.instantiate(mobl.Window, {}));
(function(__ns) {
__ns.window.get().innerWidth = window.innerWidth;
__ns.window.get().innerHeight = window.innerHeight;
window.onresize = function() {
                    mobl.window.get().innerWidth = window.innerWidth;
                    mobl.window.get().innerHeight = window.innerHeight;
                  };
}(mobl));mobl.emailValidator = function(s) {
   var __this = this;
  return /^[A-Z0-9_%+.\-]+@[A-Z0-9.\-]+\.[A-Z]{2,4}$/i.test(s) ? "" : "Invalid e-mail address";
};

mobl.allInputValid = mobl.ref(true);
(function(__ns) {
__ns.setValidationError = function(id, ok) {
                            var screen = mobl.getCurrentScreen();
                            screen.validations = screen.validations || {
                                                                       };
                            screen.validations[id] = ok;
                            var isValid = true;
                            for(var p in screen.validations)
                            {
                              if(screen.validations.hasOwnProperty(p))
                              {
                                if(!screen.validations[p])
                                {
                                  isValid = false;
                                }
                              }
                            }
                            __ns.allInputValid.set(isValid);
                          };
}(mobl));