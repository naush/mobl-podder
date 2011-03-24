mobl.provides('mpodder');
mobl.provides('mobl');
persistence.debug = false;
mpodder.Podcast = {
  website: null,
  mygpo_link: null,
  description: null,
  subs: null,
  title: null,
  url: null,
  subscribers_last_week: null,
  logo_url: null,
  fetchEpisodes: function(callback) {
         var __this = this;
         mobl.yql.YQL.query("select * from feednormalizer where url='" + __this.url + "' and output='atom_1.0'", function(result__) {
           var tmp10636 = result__;
           var result__ = tmp10636.feed;
           var tmp10635 = result__;
           var result__ = tmp10635.entry;
           var tmp10634 = result__;
           var result__ = tmp10634;
           var episodes = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var results = result__;
           var result__ = episodes;
           episodes.list(function(coll386) {
             coll386 = coll386.reverse();
             function processOne68() {
               var e;
               e = coll386.pop();
               var result__ = mobl.instantiate(mpodder.Episode, {'title': e.title});
               var ep = result__;
               var result__ = e.link.href;
               if(result__) {
                 var result__ = e.link.href;
                 ep.downloadUrl = result__;
                 var result__ = results.add(ep);
                 
                 if(coll386.length > 0) processOne68(); else rest68();
                 
               } else {
                 var result__ = e.link.length;
                 if(result__) {
                   var result__ = e.link.get(e.link.length - 1).href;
                   ep.downloadUrl = result__;
                   var result__ = results.add(ep);
                   
                   if(coll386.length > 0) processOne68(); else rest68();
                   
                 } else {
                   {
                     var result__ = results.add(ep);
                     
                     if(coll386.length > 0) processOne68(); else rest68();
                     
                   }
                 }
               }
             }
             function rest68() {
               var result__ = results;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll386.length > 0) processOne68(); else rest68();
           });
           
         });
       }
};

mpodder.Episode = {
  title: null,
  downloadUrl: null
};
mpodder.fetch = function(query, callback) {
  var __this = this;
  mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + query + "'", function(result__) {
    var tmp10637 = result__;
    var result__ = tmp10637;
    var resource = result__;
    var result__ = new persistence.LocalQueryCollection([]);
    var ps = result__;
    var result__ = resource;
    if(result__) {
      var result__ = resource.json.json;
      resource.json.json.list(function(coll387) {
        coll387 = coll387.reverse();
        function processOne69() {
          var pc;
          pc = coll387.pop();
          var result__ = ps.add(mobl.instantiate(mpodder.Podcast, {'website': pc.website, 'mygpo_link': pc.mygpo_link, 'description': pc.description, 'subs': pc.subscribers, 'title': pc.title, 'url': pc.url, 'subscribers_last_week': pc.subscribers_last_week, 'logo_url': pc.logo_url}));
          
          if(coll387.length > 0) processOne69(); else rest69();
          
        }
        function rest69() {
          var result__ = ps;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
        if(coll387.length > 0) processOne69(); else rest69();
      });
      
    } else {
      {
        var result__ = ps;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      }
    }
  });
};

mpodder.blank = function(target) {
   var __this = this;
  return target == null || target.length == 0;
};


mpodder.podcastDetail = function(podcast, elements, callback) {
  var root5402 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp10598 = mobl.ref(null);
  
  
  var tmp10597 = mobl.ref(null);
  
  
  var tmp10596 = mobl.ref(null);
  
  
  var tmp10595 = mobl.ref(null);
  
  var nodes4236 = $("<span>");
  root5402.append(nodes4236);
  subs__.addSub((mobl.block)(tmp10595, tmp10596, tmp10597, tmp10598, function(_, callback) {
    var root5403 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp10577 = mobl.ref(false);
    
    
    var tmp10576 = mobl.ref(null);
    
    
    var tmp10575 = mobl.ref(null);
    
    var nodes4237 = $("<span>");
    root5403.append(nodes4237);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10575, tmp10576, tmp10577, function(_, callback) {
      var root5404 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10569 = mobl.ref(120);
      
      
      var tmp10574 = mobl.ref(null);
      
      
      var tmp10573 = mobl.ref(null);
      
      
      var tmp10572 = mobl.ref(null);
      
      
      var tmp10571 = mobl.ref(null);
      
      
      var tmp10570 = mobl.ref(null);
      
      var nodes4238 = $("<span>");
      root5404.append(nodes4238);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp10569, tmp10570, tmp10571, tmp10572, tmp10573, tmp10574, function(_, callback) {
        var root5405 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5405); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4238;
        nodes4238 = node.contents();
        oldNodes.replaceWith(nodes4238);
      }));
      callback(root5404); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4237;
      nodes4237 = node.contents();
      oldNodes.replaceWith(nodes4237);
    }));
    
    var tmp10583 = mobl.ref(false);
    
    
    var tmp10582 = mobl.ref(null);
    
    
    var tmp10581 = mobl.ref(null);
    
    var nodes4239 = $("<span>");
    root5403.append(nodes4239);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10581, tmp10582, tmp10583, function(_, callback) {
      var root5406 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10578 = mobl.ref(mpodder.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp10578.set(mpodder.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      }));
      
      
      var tmp10580 = mobl.ref(null);
      
      
      var tmp10579 = mobl.ref(null);
      
      var nodes4240 = $("<span>");
      root5406.append(nodes4240);
      subs__.addSub((mobl.label)(tmp10578, tmp10579, tmp10580, function(_, callback) {
        var root5407 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5407); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4240;
        nodes4240 = node.contents();
        oldNodes.replaceWith(nodes4240);
      }));
      callback(root5406); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4239;
      nodes4239 = node.contents();
      oldNodes.replaceWith(nodes4239);
    }));
    
    var tmp10589 = mobl.ref(false);
    
    
    var tmp10588 = mobl.ref(null);
    
    
    var tmp10587 = mobl.ref(null);
    
    var nodes4241 = $("<span>");
    root5403.append(nodes4241);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10587, tmp10588, tmp10589, function(_, callback) {
      var root5408 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10584 = mobl.ref(mpodder.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp10584.set(mpodder.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      }));
      
      
      var tmp10586 = mobl.ref(null);
      
      
      var tmp10585 = mobl.ref(null);
      
      var nodes4242 = $("<span>");
      root5408.append(nodes4242);
      subs__.addSub((mobl.label)(tmp10584, tmp10585, tmp10586, function(_, callback) {
        var root5409 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5409); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4242;
        nodes4242 = node.contents();
        oldNodes.replaceWith(nodes4242);
      }));
      callback(root5408); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4241;
      nodes4241 = node.contents();
      oldNodes.replaceWith(nodes4241);
    }));
    
    var tmp10594 = mobl.ref(false);
    
    
    var tmp10593 = mobl.ref(null);
    
    
    var tmp10592 = mobl.ref(null);
    
    var nodes4243 = $("<span>");
    root5403.append(nodes4243);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10592, tmp10593, tmp10594, function(_, callback) {
      var root5410 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp10590 = mobl.ref(mpodder.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp10590.set(mpodder.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      }));
      
      
      var tmp10591 = mobl.ref("_blank");
      
      var nodes4244 = $("<span>");
      root5410.append(nodes4244);
      subs__.addSub((mobl.link)(tmp10590, tmp10591, function(_, callback) {
        var root5411 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5411); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4244;
        nodes4244 = node.contents();
        oldNodes.replaceWith(nodes4244);
      }));
      callback(root5410); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4243;
      nodes4243 = node.contents();
      oldNodes.replaceWith(nodes4243);
    }));
    callback(root5403); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4236;
    nodes4236 = node.contents();
    oldNodes.replaceWith(nodes4236);
  }));
  
  var node853 = $("<h2>");
  
  
  node853.append("Episodes");
  root5402.append(node853);
  var nodes4245 = $("<span>");
  root5402.append(nodes4245);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5412 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    podcast.get().fetchEpisodes(function(result__) {
      var tmp10604 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp10638 = result__;
          var result__ = tmp10638;
          tmp10604.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp10639 = result__;
          var result__ = tmp10639;
          tmp10604.set(result__);
          
        });
      }));
      
      
      var node854 = mobl.loadingSpan();
      root5412.append(node854);
      var list170;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList170 = function() {
        var subs__ = listSubs__;
        list170 = tmp10604.get();
        list170.list(function(results485) {
          node854.empty();
          for(var i170 = 0; i170 < results485.length; i170++) {
            (function() {
              var iternode170 = $("<span>");
              node854.append(iternode170);
              var ep;
              ep = mobl.ref(mobl.ref(results485), i170);
              
              var tmp10601 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('mpodder.listen', [ep, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp10640 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp10603 = mobl.ref(false);
              
              
              var tmp10602 = mobl.ref(null);
              
              var nodes4246 = $("<span>");
              iternode170.append(nodes4246);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10601, tmp10602, tmp10603, function(_, callback) {
                var root5413 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp10600 = mobl.ref(null);
                
                
                var tmp10599 = mobl.ref(null);
                
                var nodes4247 = $("<span>");
                root5413.append(nodes4247);
                subs__.addSub((mobl.label)(mobl.ref(ep, 'title'), tmp10599, tmp10600, function(_, callback) {
                  var root5414 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5414); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4247;
                  nodes4247 = node.contents();
                  oldNodes.replaceWith(nodes4247);
                }));
                callback(root5413); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4246;
                nodes4246 = node.contents();
                oldNodes.replaceWith(nodes4246);
              }));
              
              var oldNodes = iternode170;
              iternode170 = iternode170.contents();
              oldNodes.replaceWith(iternode170);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list170.addEventListener('change', function() { listSubs__.unsubscribe(); renderList170(true); }));
          subs__.addSub(tmp10604.addEventListener('change', function() { listSubs__.unsubscribe(); renderList170(true); }));
        });
      };
      renderList170();
      
      callback(root5412); return subs__;
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes4245;
    nodes4245 = node.contents();
    oldNodes.replaceWith(nodes4245);
  }));
  callback(root5402); return subs__;
  
  
  
  return subs__;
};
mpodder.prettyPlayTime = function(s) {
   var __this = this;
  var mins = mobl.Math.floor(s / 60);
  
  var secs = mobl.Math.floor(s % 60);
  
  return "" + mins + ":" + secs;
};


mpodder.listen = function(ep, callback, screenCallback) {
  var root5415 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(ep.get().downloadUrl));
  
  var tmp10607 = mobl.ref(null);
  
  var nodes4248 = $("<span>");
  root5415.append(nodes4248);
  subs__.addSub((ui.header)(mobl.ref(ep, 'title'), tmp10607, function(_, callback) {
    var root5416 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp10605 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().destroy();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp10606 = mobl.ref(mobl._("Back", []));
    
    var nodes4249 = $("<span>");
    root5416.append(nodes4249);
    subs__.addSub((ui.backButton)(tmp10606, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10605, function(_, callback) {
      var root5417 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5417); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4249;
      nodes4249 = node.contents();
      oldNodes.replaceWith(nodes4249);
    }));
    callback(root5416); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4248;
    nodes4248 = node.contents();
    oldNodes.replaceWith(nodes4248);
  }));
  
  var tmp10608 = mobl.ref("_blank");
  
  var nodes4250 = $("<span>");
  root5415.append(nodes4250);
  subs__.addSub((mobl.link)(mobl.ref(ep, 'downloadUrl'), tmp10608, function(_, callback) {
    var root5418 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5418); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4250;
    nodes4250 = node.contents();
    oldNodes.replaceWith(nodes4250);
  }));
  
  var tmp10624 = mobl.ref(mobl.media.Audio.canPlayMp3());
  subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
    tmp10624.set(mobl.media.Audio.canPlayMp3());
  }));
  
  
  var node855 = $("<span>");
  root5415.append(node855);
  var condSubs269 = new mobl.CompSubscription();
  subs__.addSub(condSubs269);
  var oldValue269;
  var renderCond269 = function() {
    var value477 = tmp10624.get();
    if(oldValue269 === value477) return;
    oldValue269 = value477;
    var subs__ = condSubs269;
    subs__.unsubscribe();
    node855.empty();
    if(value477) {
      
      var tmp10615 = mobl.ref(null);
      
      
      var tmp10614 = mobl.ref(null);
      
      
      var tmp10613 = mobl.ref(null);
      
      
      var tmp10612 = mobl.ref(null);
      
      var nodes4251 = $("<span>");
      node855.append(nodes4251);
      subs__.addSub((mobl.block)(tmp10612, tmp10613, tmp10614, tmp10615, function(_, callback) {
        var root5419 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp10609 = mobl.ref(mpodder.prettyPlayTime(audio.get().currentTime));
        subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
          tmp10609.set(mpodder.prettyPlayTime(audio.get().currentTime));
        }));
        
        
        var tmp10611 = mobl.ref(null);
        
        
        var tmp10610 = mobl.ref(null);
        
        var nodes4252 = $("<span>");
        root5419.append(nodes4252);
        subs__.addSub((mobl.label)(tmp10609, tmp10610, tmp10611, function(_, callback) {
          var root5420 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5420); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4252;
          nodes4252 = node.contents();
          oldNodes.replaceWith(nodes4252);
        }));
        callback(root5419); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4251;
        nodes4251 = node.contents();
        oldNodes.replaceWith(nodes4251);
      }));
      
      var tmp10623 = mobl.ref(null);
      
      
      var tmp10622 = mobl.ref(null);
      
      
      var tmp10621 = mobl.ref(null);
      
      
      var tmp10620 = mobl.ref(null);
      
      var nodes4253 = $("<span>");
      node855.append(nodes4253);
      subs__.addSub((mobl.block)(tmp10620, tmp10621, tmp10622, tmp10623, function(_, callback) {
        var root5421 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp10617 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().play();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp10616 = mobl.ref("Play");
        
        var nodes4254 = $("<span>");
        root5421.append(nodes4254);
        subs__.addSub((ui.button)(tmp10616, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp10617, function(_, callback) {
          var root5422 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5422); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4254;
          nodes4254 = node.contents();
          oldNodes.replaceWith(nodes4254);
        }));
        
        var tmp10619 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = audio.get().pause();
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp10618 = mobl.ref("Pause");
        
        var nodes4255 = $("<span>");
        root5421.append(nodes4255);
        subs__.addSub((ui.button)(tmp10618, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp10619, function(_, callback) {
          var root5423 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5423); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4255;
          nodes4255 = node.contents();
          oldNodes.replaceWith(nodes4255);
        }));
        callback(root5421); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4253;
        nodes4253 = node.contents();
        oldNodes.replaceWith(nodes4253);
      }));
      
      
      
    } else {
      
    }
  };
  renderCond269();
  subs__.addSub(tmp10624.addEventListener('change', function() {
    renderCond269();
  }));
  
  callback(root5415); return subs__;
  
  
  
  return subs__;
};

mpodder.podcastItem = function(podcast, elements, callback) {
  var root5424 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp10625 = mobl.ref(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  subs__.addSub(mobl.ref(mobl.ref(podcast, 'title'), 'length').addEventListener('change', function() {
    tmp10625.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
    tmp10625.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  
  
  var tmp10627 = mobl.ref(null);
  
  
  var tmp10626 = mobl.ref(null);
  
  var nodes4256 = $("<span>");
  root5424.append(nodes4256);
  subs__.addSub((mobl.label)(tmp10625, tmp10626, tmp10627, function(_, callback) {
    var root5425 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5425); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4256;
    nodes4256 = node.contents();
    oldNodes.replaceWith(nodes4256);
  }));
  callback(root5424); return subs__;
  
  return subs__;
};

mpodder.root = function(callback, screenCallback) {
  var root5426 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var query = mobl.ref("tech");
  
  var podcasts = mobl.ref(null);
  mpodder.fetch(query.get(), function(result__) {
    var tmp10641 = result__;
    var result__ = tmp10641;
    podcasts.set(result__);
    
  });
  
  var tmp10628 = mobl.ref("mPodder");
  
  
  var tmp10629 = mobl.ref(null);
  
  var nodes4257 = $("<span>");
  root5426.append(nodes4257);
  subs__.addSub((ui.header)(tmp10628, tmp10629, function(_, callback) {
    var root5427 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5427); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4257;
    nodes4257 = node.contents();
    oldNodes.replaceWith(nodes4257);
  }));
  
  var tmp10630 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = ui.startLoading("Loading...", ui.progressStyle);
                       mpodder.fetch(query.get(), function(result__) {
                         var tmp10642 = result__;
                         var result__ = tmp10642;
                         podcasts.set(result__);
                         var result__ = ui.endLoading();
                         if(callback && callback.apply) callback(); return;
                       });
                     });
  
  
  var tmp10632 = mobl.ref(null);
  
  
  var tmp10631 = mobl.ref(mobl._("Search term", []));
  
  var nodes4258 = $("<span>");
  root5426.append(nodes4258);
  subs__.addSub((ui.searchBox)(query, tmp10631, tmp10630, tmp10632, function(_, callback) {
    var root5428 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5428); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4258;
    nodes4258 = node.contents();
    oldNodes.replaceWith(nodes4258);
  }));
  
  var tmp10633 = mobl.ref("Loading...");
  
  var nodes4259 = $("<span>");
  root5426.append(nodes4259);
  subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp10633, function(_, callback) {
    var root5429 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes4260 = $("<span>");
    root5429.append(nodes4260);
    subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(mpodder.podcastItem), mobl.ref(mpodder.podcastDetail), function(_, callback) {
      var root5430 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5430); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4260;
      nodes4260 = node.contents();
      oldNodes.replaceWith(nodes4260);
    }));
    callback(root5429); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4259;
    nodes4259 = node.contents();
    oldNodes.replaceWith(nodes4259);
  }));
  callback(root5426); return subs__;
  
  
  
  
  return subs__;
};
