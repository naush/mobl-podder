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
           var tmp16858 = result__;
           var result__ = tmp16858.feed;
           var tmp16857 = result__;
           var result__ = tmp16857.entry;
           var tmp16856 = result__;
           var result__ = tmp16856;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll724) {
             coll724 = coll724.reverse();
             function processOne220() {
               var result;
               result = coll724.pop();
               var result__ = mobl.instantiate(mpodder.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll724.length > 0) processOne220(); else rest220();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll724.length > 0) processOne220(); else rest220();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll724.length > 0) processOne220(); else rest220();
                     
                   }
                 }
               }
             }
             function rest220() {
               var result__ = episodes;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll724.length > 0) processOne220(); else rest220();
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
    var tmp16859 = result__;
    var result__ = tmp16859;
    var resource = result__;
    var result__ = new persistence.LocalQueryCollection([]);
    var podcasts = result__;
    var result__ = resource;
    if(result__) {
      var result__ = resource.json.json;
      resource.json.json.list(function(coll725) {
        coll725 = coll725.reverse();
        function processOne221() {
          var podcast;
          podcast = coll725.pop();
          var result__ = podcasts.add(mobl.instantiate(mpodder.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
          
          if(coll725.length > 0) processOne221(); else rest221();
          
        }
        function rest221() {
          var result__ = podcasts;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
        if(coll725.length > 0) processOne221(); else rest221();
      });
      
    } else {
      {
        var result__ = podcasts;
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
  var root8113 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp16809 = mobl.ref(null);
  
  
  var tmp16808 = mobl.ref(null);
  
  
  var tmp16807 = mobl.ref(null);
  
  
  var tmp16806 = mobl.ref(null);
  
  var nodes6487 = $("<span>");
  root8113.append(nodes6487);
  subs__.addSub((mobl.block)(tmp16806, tmp16807, tmp16808, tmp16809, function(_, callback) {
    var root8114 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp16788 = mobl.ref(false);
    
    
    var tmp16787 = mobl.ref(null);
    
    
    var tmp16786 = mobl.ref(null);
    
    var nodes6488 = $("<span>");
    root8114.append(nodes6488);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16786, tmp16787, tmp16788, function(_, callback) {
      var root8115 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp16780 = mobl.ref(120);
      
      
      var tmp16785 = mobl.ref(null);
      
      
      var tmp16784 = mobl.ref(null);
      
      
      var tmp16783 = mobl.ref(null);
      
      
      var tmp16782 = mobl.ref(null);
      
      
      var tmp16781 = mobl.ref(null);
      
      var nodes6489 = $("<span>");
      root8115.append(nodes6489);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp16780, tmp16781, tmp16782, tmp16783, tmp16784, tmp16785, function(_, callback) {
        var root8116 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8116); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6489;
        nodes6489 = node.contents();
        oldNodes.replaceWith(nodes6489);
      }));
      callback(root8115); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6488;
      nodes6488 = node.contents();
      oldNodes.replaceWith(nodes6488);
    }));
    
    var tmp16794 = mobl.ref(false);
    
    
    var tmp16793 = mobl.ref(null);
    
    
    var tmp16792 = mobl.ref(null);
    
    var nodes6490 = $("<span>");
    root8114.append(nodes6490);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16792, tmp16793, tmp16794, function(_, callback) {
      var root8117 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp16789 = mobl.ref(mpodder.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp16789.set(mpodder.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      }));
      
      
      var tmp16791 = mobl.ref(null);
      
      
      var tmp16790 = mobl.ref(null);
      
      var nodes6491 = $("<span>");
      root8117.append(nodes6491);
      subs__.addSub((mobl.label)(tmp16789, tmp16790, tmp16791, function(_, callback) {
        var root8118 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8118); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6491;
        nodes6491 = node.contents();
        oldNodes.replaceWith(nodes6491);
      }));
      callback(root8117); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6490;
      nodes6490 = node.contents();
      oldNodes.replaceWith(nodes6490);
    }));
    
    var tmp16800 = mobl.ref(false);
    
    
    var tmp16799 = mobl.ref(null);
    
    
    var tmp16798 = mobl.ref(null);
    
    var nodes6492 = $("<span>");
    root8114.append(nodes6492);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16798, tmp16799, tmp16800, function(_, callback) {
      var root8119 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp16795 = mobl.ref(mpodder.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp16795.set(mpodder.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      }));
      
      
      var tmp16797 = mobl.ref(null);
      
      
      var tmp16796 = mobl.ref(null);
      
      var nodes6493 = $("<span>");
      root8119.append(nodes6493);
      subs__.addSub((mobl.label)(tmp16795, tmp16796, tmp16797, function(_, callback) {
        var root8120 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8120); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6493;
        nodes6493 = node.contents();
        oldNodes.replaceWith(nodes6493);
      }));
      callback(root8119); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6492;
      nodes6492 = node.contents();
      oldNodes.replaceWith(nodes6492);
    }));
    
    var tmp16805 = mobl.ref(false);
    
    
    var tmp16804 = mobl.ref(null);
    
    
    var tmp16803 = mobl.ref(null);
    
    var nodes6494 = $("<span>");
    root8114.append(nodes6494);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16803, tmp16804, tmp16805, function(_, callback) {
      var root8121 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp16801 = mobl.ref(mpodder.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp16801.set(mpodder.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      }));
      
      
      var tmp16802 = mobl.ref("_blank");
      
      var nodes6495 = $("<span>");
      root8121.append(nodes6495);
      subs__.addSub((mobl.link)(tmp16801, tmp16802, function(_, callback) {
        var root8122 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8122); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6495;
        nodes6495 = node.contents();
        oldNodes.replaceWith(nodes6495);
      }));
      callback(root8121); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6494;
      nodes6494 = node.contents();
      oldNodes.replaceWith(nodes6494);
    }));
    callback(root8114); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6487;
    nodes6487 = node.contents();
    oldNodes.replaceWith(nodes6487);
  }));
  
  var tmp16821 = mobl.ref(null);
  
  
  var tmp16820 = mobl.ref(null);
  
  
  var tmp16819 = mobl.ref(null);
  
  
  var tmp16818 = mobl.ref(null);
  
  var nodes6496 = $("<span>");
  root8113.append(nodes6496);
  subs__.addSub((mobl.block)(tmp16818, tmp16819, tmp16820, tmp16821, function(_, callback) {
    var root8123 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp16810 = mobl.ref("Episodes");
    
    
    var tmp16811 = mobl.ref(null);
    
    var nodes6497 = $("<span>");
    root8123.append(nodes6497);
    subs__.addSub((ui.header)(tmp16810, tmp16811, function(_, callback) {
      var root8124 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8124); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6497;
      nodes6497 = node.contents();
      oldNodes.replaceWith(nodes6497);
    }));
    podcast.get().fetchEpisodes(function(result__) {
      var tmp16817 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp16860 = result__;
          var result__ = tmp16860;
          tmp16817.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp16861 = result__;
          var result__ = tmp16861;
          tmp16817.set(result__);
          
        });
      }));
      
      
      var node1311 = mobl.loadingSpan();
      root8123.append(node1311);
      var list294;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList294 = function() {
        var subs__ = listSubs__;
        list294 = tmp16817.get();
        list294.list(function(results1562) {
          node1311.empty();
          for(var i294 = 0; i294 < results1562.length; i294++) {
            (function() {
              var iternode294 = $("<span>");
              node1311.append(iternode294);
              var episode;
              episode = mobl.ref(mobl.ref(results1562), i294);
              
              var tmp16814 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('mpodder.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp16862 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp16816 = mobl.ref(false);
              
              
              var tmp16815 = mobl.ref(null);
              
              var nodes6498 = $("<span>");
              iternode294.append(nodes6498);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16814, tmp16815, tmp16816, function(_, callback) {
                var root8125 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp16813 = mobl.ref(null);
                
                
                var tmp16812 = mobl.ref(null);
                
                var nodes6499 = $("<span>");
                root8125.append(nodes6499);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp16812, tmp16813, function(_, callback) {
                  var root8126 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8126); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6499;
                  nodes6499 = node.contents();
                  oldNodes.replaceWith(nodes6499);
                }));
                callback(root8125); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6498;
                nodes6498 = node.contents();
                oldNodes.replaceWith(nodes6498);
              }));
              
              var oldNodes = iternode294;
              iternode294 = iternode294.contents();
              oldNodes.replaceWith(iternode294);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list294.addEventListener('change', function() { listSubs__.unsubscribe(); renderList294(true); }));
          subs__.addSub(tmp16817.addEventListener('change', function() { listSubs__.unsubscribe(); renderList294(true); }));
        });
      };
      renderList294();
      
      callback(root8123); return subs__;
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6496;
    nodes6496 = node.contents();
    oldNodes.replaceWith(nodes6496);
  }));
  callback(root8113); return subs__;
  
  
  return subs__;
};
mpodder.parseTime = function(time) {
   var __this = this;
  var mins = mobl.Math.floor(time / 60);
  
  var secs = mobl.Math.floor(time % 60);
  
  return "" + mins + ":" + secs;
};

mpodder.prettyPlayTime = function(current, duration) {
   var __this = this;
  return mpodder.parseTime(current) + " (" + mpodder.parseTime(duration) + ")";
};


mpodder.listen = function(episode, callback, screenCallback) {
  var root8127 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(null);
  var result__ = mobl.media.Audio.load(episode.get().downloadUrl);
  audio.set(result__);
  
  
  var tmp16824 = mobl.ref(null);
  
  var nodes6500 = $("<span>");
  root8127.append(nodes6500);
  subs__.addSub((ui.header)(mobl.ref(episode, 'title'), tmp16824, function(_, callback) {
    var root8128 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp16822 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         var result__ = audio.get().destroy();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp16823 = mobl.ref(mobl._("Back", []));
    
    var nodes6501 = $("<span>");
    root8128.append(nodes6501);
    subs__.addSub((ui.backButton)(tmp16823, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16822, function(_, callback) {
      var root8129 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8129); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6501;
      nodes6501 = node.contents();
      oldNodes.replaceWith(nodes6501);
    }));
    callback(root8128); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6500;
    nodes6500 = node.contents();
    oldNodes.replaceWith(nodes6500);
  }));
  
  var tmp16846 = mobl.ref(null);
  
  
  var tmp16845 = mobl.ref(null);
  
  
  var tmp16844 = mobl.ref(null);
  
  
  var tmp16843 = mobl.ref(null);
  
  var nodes6502 = $("<span>");
  root8127.append(nodes6502);
  subs__.addSub((mobl.block)(tmp16843, tmp16844, tmp16845, tmp16846, function(_, callback) {
    var root8130 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp16828 = mobl.ref(false);
    
    
    var tmp16827 = mobl.ref(null);
    
    
    var tmp16826 = mobl.ref(null);
    
    var nodes6503 = $("<span>");
    root8130.append(nodes6503);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16826, tmp16827, tmp16828, function(_, callback) {
      var root8131 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp16825 = mobl.ref("_blank");
      
      var nodes6504 = $("<span>");
      root8131.append(nodes6504);
      subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp16825, function(_, callback) {
        var root8132 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8132); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6504;
        nodes6504 = node.contents();
        oldNodes.replaceWith(nodes6504);
      }));
      callback(root8131); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6503;
      nodes6503 = node.contents();
      oldNodes.replaceWith(nodes6503);
    }));
    
    var tmp16842 = mobl.ref(mobl.media.Audio.canPlayMp3());
    subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
      tmp16842.set(mobl.media.Audio.canPlayMp3());
    }));
    
    
    var node1312 = $("<span>");
    root8130.append(node1312);
    var condSubs393 = new mobl.CompSubscription();
    subs__.addSub(condSubs393);
    var oldValue393;
    var renderCond393 = function() {
      var value725 = tmp16842.get();
      if(oldValue393 === value725) return;
      oldValue393 = value725;
      var subs__ = condSubs393;
      subs__.unsubscribe();
      node1312.empty();
      if(value725) {
        
        var tmp16834 = mobl.ref(false);
        
        
        var tmp16833 = mobl.ref(null);
        
        
        var tmp16832 = mobl.ref(null);
        
        var nodes6505 = $("<span>");
        node1312.append(nodes6505);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16832, tmp16833, tmp16834, function(_, callback) {
          var root8133 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp16829 = mobl.ref(mpodder.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
            tmp16829.set(mpodder.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          subs__.addSub(audio.addEventListener('change', function() {
            tmp16829.set(mpodder.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          
          
          var tmp16831 = mobl.ref(null);
          
          
          var tmp16830 = mobl.ref(null);
          
          var nodes6506 = $("<span>");
          root8133.append(nodes6506);
          subs__.addSub((mobl.label)(tmp16829, tmp16830, tmp16831, function(_, callback) {
            var root8134 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8134); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes6506;
            nodes6506 = node.contents();
            oldNodes.replaceWith(nodes6506);
          }));
          callback(root8133); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes6505;
          nodes6505 = node.contents();
          oldNodes.replaceWith(nodes6505);
        }));
        
        var tmp16841 = mobl.ref(false);
        
        
        var tmp16840 = mobl.ref(null);
        
        
        var tmp16839 = mobl.ref(null);
        
        var nodes6507 = $("<span>");
        node1312.append(nodes6507);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16839, tmp16840, tmp16841, function(_, callback) {
          var root8135 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp16836 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().play();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp16835 = mobl.ref("Play");
          
          var nodes6508 = $("<span>");
          root8135.append(nodes6508);
          subs__.addSub((ui.button)(tmp16835, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp16836, function(_, callback) {
            var root8136 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8136); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes6508;
            nodes6508 = node.contents();
            oldNodes.replaceWith(nodes6508);
          }));
          
          var tmp16838 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().pause();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp16837 = mobl.ref("Pause");
          
          var nodes6509 = $("<span>");
          root8135.append(nodes6509);
          subs__.addSub((ui.button)(tmp16837, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp16838, function(_, callback) {
            var root8137 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8137); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes6509;
            nodes6509 = node.contents();
            oldNodes.replaceWith(nodes6509);
          }));
          callback(root8135); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes6507;
          nodes6507 = node.contents();
          oldNodes.replaceWith(nodes6507);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond393();
    subs__.addSub(tmp16842.addEventListener('change', function() {
      renderCond393();
    }));
    
    callback(root8130); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6502;
    nodes6502 = node.contents();
    oldNodes.replaceWith(nodes6502);
  }));
  callback(root8127); return subs__;
  
  
  
  return subs__;
};

mpodder.podcastItem = function(podcast, elements, callback) {
  var root8138 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp16847 = mobl.ref(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  subs__.addSub(mobl.ref(mobl.ref(podcast, 'title'), 'length').addEventListener('change', function() {
    tmp16847.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
    tmp16847.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  
  
  var tmp16849 = mobl.ref(null);
  
  
  var tmp16848 = mobl.ref(null);
  
  var nodes6510 = $("<span>");
  root8138.append(nodes6510);
  subs__.addSub((mobl.label)(tmp16847, tmp16848, tmp16849, function(_, callback) {
    var root8139 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8139); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6510;
    nodes6510 = node.contents();
    oldNodes.replaceWith(nodes6510);
  }));
  callback(root8138); return subs__;
  
  return subs__;
};

mpodder.root = function(callback, screenCallback) {
  var root8140 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var query = mobl.ref("jazz");
  
  var podcasts = mobl.ref(null);
  mpodder.fetch(query.get(), function(result__) {
    var tmp16863 = result__;
    var result__ = tmp16863;
    podcasts.set(result__);
    
  });
  
  var tmp16850 = mobl.ref("mPodder");
  
  
  var tmp16851 = mobl.ref(null);
  
  var nodes6511 = $("<span>");
  root8140.append(nodes6511);
  subs__.addSub((ui.header)(tmp16850, tmp16851, function(_, callback) {
    var root8141 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8141); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6511;
    nodes6511 = node.contents();
    oldNodes.replaceWith(nodes6511);
  }));
  
  var tmp16852 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = ui.startLoading("Loading...", ui.progressStyle);
                       mpodder.fetch(query.get(), function(result__) {
                         var tmp16864 = result__;
                         var result__ = tmp16864;
                         podcasts.set(result__);
                         var result__ = ui.endLoading();
                         if(callback && callback.apply) callback(); return;
                       });
                     });
  
  
  var tmp16854 = mobl.ref(null);
  
  
  var tmp16853 = mobl.ref(mobl._("Search term", []));
  
  var nodes6512 = $("<span>");
  root8140.append(nodes6512);
  subs__.addSub((ui.searchBox)(query, tmp16853, tmp16852, tmp16854, function(_, callback) {
    var root8142 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8142); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6512;
    nodes6512 = node.contents();
    oldNodes.replaceWith(nodes6512);
  }));
  
  var tmp16855 = mobl.ref("Loading...");
  
  var nodes6513 = $("<span>");
  root8140.append(nodes6513);
  subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp16855, function(_, callback) {
    var root8143 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes6514 = $("<span>");
    root8143.append(nodes6514);
    subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(mpodder.podcastItem), mobl.ref(mpodder.podcastDetail), function(_, callback) {
      var root8144 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8144); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6514;
      nodes6514 = node.contents();
      oldNodes.replaceWith(nodes6514);
    }));
    callback(root8143); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6513;
    nodes6513 = node.contents();
    oldNodes.replaceWith(nodes6513);
  }));
  callback(root8140); return subs__;
  
  
  
  
  return subs__;
};
