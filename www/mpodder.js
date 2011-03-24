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
           var tmp19139 = result__;
           var result__ = tmp19139.feed;
           var tmp19138 = result__;
           var result__ = tmp19138.entry;
           var tmp19137 = result__;
           var result__ = tmp19137;
           var results = result__;
           var result__ = new persistence.LocalQueryCollection([]);
           var episodes = result__;
           var result__ = results;
           results.list(function(coll778) {
             coll778 = coll778.reverse();
             function processOne274() {
               var result;
               result = coll778.pop();
               var result__ = mobl.instantiate(mpodder.Episode, {'title': result.title});
               var episode = result__;
               var result__ = result.link.href;
               if(result__) {
                 var result__ = result.link.href;
                 episode.downloadUrl = result__;
                 var result__ = episodes.add(episode);
                 
                 if(coll778.length > 0) processOne274(); else rest274();
                 
               } else {
                 var result__ = result.link.length;
                 if(result__) {
                   var result__ = result.link.get(result.link.length - 1).href;
                   episode.downloadUrl = result__;
                   var result__ = episodes.add(episode);
                   
                   if(coll778.length > 0) processOne274(); else rest274();
                   
                 } else {
                   {
                     var result__ = episodes.add(episode);
                     
                     if(coll778.length > 0) processOne274(); else rest274();
                     
                   }
                 }
               }
             }
             function rest274() {
               var result__ = episodes;
               if(callback && callback.apply) callback(result__);
               return;
               if(callback && callback.apply) callback(); return;
             }
             if(coll778.length > 0) processOne274(); else rest274();
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
    var tmp19140 = result__;
    var result__ = tmp19140;
    var resource = result__;
    var result__ = new persistence.LocalQueryCollection([]);
    var podcasts = result__;
    var result__ = resource;
    if(result__) {
      var result__ = resource.json.json;
      resource.json.json.list(function(coll779) {
        coll779 = coll779.reverse();
        function processOne275() {
          var podcast;
          podcast = coll779.pop();
          var result__ = podcasts.add(mobl.instantiate(mpodder.Podcast, {'website': podcast.website, 'mygpo_link': podcast.mygpo_link, 'description': podcast.description, 'subs': podcast.subscribers, 'title': podcast.title, 'url': podcast.url, 'subscribers_last_week': podcast.subscribers_last_week, 'logo_url': podcast.logo_url}));
          
          if(coll779.length > 0) processOne275(); else rest275();
          
        }
        function rest275() {
          var result__ = podcasts;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
        if(coll779.length > 0) processOne275(); else rest275();
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
  var root8972 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp19090 = mobl.ref(null);
  
  
  var tmp19089 = mobl.ref(null);
  
  
  var tmp19088 = mobl.ref(null);
  
  
  var tmp19087 = mobl.ref(null);
  
  var nodes7238 = $("<span>");
  root8972.append(nodes7238);
  subs__.addSub((mobl.block)(tmp19087, tmp19088, tmp19089, tmp19090, function(_, callback) {
    var root8973 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp19069 = mobl.ref(false);
    
    
    var tmp19068 = mobl.ref(null);
    
    
    var tmp19067 = mobl.ref(null);
    
    var nodes7239 = $("<span>");
    root8973.append(nodes7239);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19067, tmp19068, tmp19069, function(_, callback) {
      var root8974 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp19061 = mobl.ref(120);
      
      
      var tmp19066 = mobl.ref(null);
      
      
      var tmp19065 = mobl.ref(null);
      
      
      var tmp19064 = mobl.ref(null);
      
      
      var tmp19063 = mobl.ref(null);
      
      
      var tmp19062 = mobl.ref(null);
      
      var nodes7240 = $("<span>");
      root8974.append(nodes7240);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp19061, tmp19062, tmp19063, tmp19064, tmp19065, tmp19066, function(_, callback) {
        var root8975 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8975); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7240;
        nodes7240 = node.contents();
        oldNodes.replaceWith(nodes7240);
      }));
      callback(root8974); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7239;
      nodes7239 = node.contents();
      oldNodes.replaceWith(nodes7239);
    }));
    
    var tmp19075 = mobl.ref(false);
    
    
    var tmp19074 = mobl.ref(null);
    
    
    var tmp19073 = mobl.ref(null);
    
    var nodes7241 = $("<span>");
    root8973.append(nodes7241);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19073, tmp19074, tmp19075, function(_, callback) {
      var root8976 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp19070 = mobl.ref(mpodder.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp19070.set(mpodder.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      }));
      
      
      var tmp19072 = mobl.ref(null);
      
      
      var tmp19071 = mobl.ref(null);
      
      var nodes7242 = $("<span>");
      root8976.append(nodes7242);
      subs__.addSub((mobl.label)(tmp19070, tmp19071, tmp19072, function(_, callback) {
        var root8977 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8977); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7242;
        nodes7242 = node.contents();
        oldNodes.replaceWith(nodes7242);
      }));
      callback(root8976); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7241;
      nodes7241 = node.contents();
      oldNodes.replaceWith(nodes7241);
    }));
    
    var tmp19081 = mobl.ref(false);
    
    
    var tmp19080 = mobl.ref(null);
    
    
    var tmp19079 = mobl.ref(null);
    
    var nodes7243 = $("<span>");
    root8973.append(nodes7243);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19079, tmp19080, tmp19081, function(_, callback) {
      var root8978 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp19076 = mobl.ref(mpodder.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp19076.set(mpodder.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      }));
      
      
      var tmp19078 = mobl.ref(null);
      
      
      var tmp19077 = mobl.ref(null);
      
      var nodes7244 = $("<span>");
      root8978.append(nodes7244);
      subs__.addSub((mobl.label)(tmp19076, tmp19077, tmp19078, function(_, callback) {
        var root8979 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8979); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7244;
        nodes7244 = node.contents();
        oldNodes.replaceWith(nodes7244);
      }));
      callback(root8978); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7243;
      nodes7243 = node.contents();
      oldNodes.replaceWith(nodes7243);
    }));
    
    var tmp19086 = mobl.ref(false);
    
    
    var tmp19085 = mobl.ref(null);
    
    
    var tmp19084 = mobl.ref(null);
    
    var nodes7245 = $("<span>");
    root8973.append(nodes7245);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19084, tmp19085, tmp19086, function(_, callback) {
      var root8980 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp19082 = mobl.ref(mpodder.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp19082.set(mpodder.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      }));
      
      
      var tmp19083 = mobl.ref("_blank");
      
      var nodes7246 = $("<span>");
      root8980.append(nodes7246);
      subs__.addSub((mobl.link)(tmp19082, tmp19083, function(_, callback) {
        var root8981 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8981); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7246;
        nodes7246 = node.contents();
        oldNodes.replaceWith(nodes7246);
      }));
      callback(root8980); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7245;
      nodes7245 = node.contents();
      oldNodes.replaceWith(nodes7245);
    }));
    callback(root8973); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7238;
    nodes7238 = node.contents();
    oldNodes.replaceWith(nodes7238);
  }));
  
  var tmp19102 = mobl.ref(null);
  
  
  var tmp19101 = mobl.ref(null);
  
  
  var tmp19100 = mobl.ref(null);
  
  
  var tmp19099 = mobl.ref(null);
  
  var nodes7247 = $("<span>");
  root8972.append(nodes7247);
  subs__.addSub((mobl.block)(tmp19099, tmp19100, tmp19101, tmp19102, function(_, callback) {
    var root8982 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp19091 = mobl.ref("Episodes");
    
    
    var tmp19092 = mobl.ref(null);
    
    var nodes7248 = $("<span>");
    root8982.append(nodes7248);
    subs__.addSub((ui.header)(tmp19091, tmp19092, function(_, callback) {
      var root8983 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8983); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7248;
      nodes7248 = node.contents();
      oldNodes.replaceWith(nodes7248);
    }));
    podcast.get().fetchEpisodes(function(result__) {
      var tmp19098 = mobl.ref(result__);
      subs__.addSub(mobl.ref(podcast.get().fetchEpisodes()).addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp19141 = result__;
          var result__ = tmp19141;
          tmp19098.set(result__);
          
        });
      }));
      subs__.addSub(podcast.addEventListener('change', function() {
        podcast.get().fetchEpisodes(function(result__) {
          var tmp19142 = result__;
          var result__ = tmp19142;
          tmp19098.set(result__);
          
        });
      }));
      
      
      var node1364 = mobl.loadingSpan();
      root8982.append(node1364);
      var list321;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList321 = function() {
        var subs__ = listSubs__;
        list321 = tmp19098.get();
        list321.list(function(results1958) {
          node1364.empty();
          for(var i321 = 0; i321 < results1958.length; i321++) {
            (function() {
              var iternode321 = $("<span>");
              node1364.append(iternode321);
              var episode;
              episode = mobl.ref(mobl.ref(results1958), i321);
              
              var tmp19095 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('mpodder.listen', [episode, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp19143 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp19097 = mobl.ref(false);
              
              
              var tmp19096 = mobl.ref(null);
              
              var nodes7249 = $("<span>");
              iternode321.append(nodes7249);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19095, tmp19096, tmp19097, function(_, callback) {
                var root8984 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp19094 = mobl.ref(null);
                
                
                var tmp19093 = mobl.ref(null);
                
                var nodes7250 = $("<span>");
                root8984.append(nodes7250);
                subs__.addSub((mobl.label)(mobl.ref(episode, 'title'), tmp19093, tmp19094, function(_, callback) {
                  var root8985 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8985); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7250;
                  nodes7250 = node.contents();
                  oldNodes.replaceWith(nodes7250);
                }));
                callback(root8984); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7249;
                nodes7249 = node.contents();
                oldNodes.replaceWith(nodes7249);
              }));
              
              var oldNodes = iternode321;
              iternode321 = iternode321.contents();
              oldNodes.replaceWith(iternode321);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list321.addEventListener('change', function() { listSubs__.unsubscribe(); renderList321(true); }));
          subs__.addSub(tmp19098.addEventListener('change', function() { listSubs__.unsubscribe(); renderList321(true); }));
        });
      };
      renderList321();
      
      callback(root8982); return subs__;
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7247;
    nodes7247 = node.contents();
    oldNodes.replaceWith(nodes7247);
  }));
  callback(root8972); return subs__;
  
  
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
  var root8986 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var audio = mobl.ref(mobl.media.Audio.load(episode.get().downloadUrl));
  
  var tmp19105 = mobl.ref(null);
  
  var nodes7251 = $("<span>");
  root8986.append(nodes7251);
  subs__.addSub((ui.header)(mobl.ref(episode, 'title'), tmp19105, function(_, callback) {
    var root8987 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp19103 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = audio.get().pause();
                         var result__ = audio.get().destroy();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp19104 = mobl.ref(mobl._("Back", []));
    
    var nodes7252 = $("<span>");
    root8987.append(nodes7252);
    subs__.addSub((ui.backButton)(tmp19104, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp19103, function(_, callback) {
      var root8988 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8988); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7252;
      nodes7252 = node.contents();
      oldNodes.replaceWith(nodes7252);
    }));
    callback(root8987); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7251;
    nodes7251 = node.contents();
    oldNodes.replaceWith(nodes7251);
  }));
  
  var tmp19127 = mobl.ref(null);
  
  
  var tmp19126 = mobl.ref(null);
  
  
  var tmp19125 = mobl.ref(null);
  
  
  var tmp19124 = mobl.ref(null);
  
  var nodes7253 = $("<span>");
  root8986.append(nodes7253);
  subs__.addSub((mobl.block)(tmp19124, tmp19125, tmp19126, tmp19127, function(_, callback) {
    var root8989 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp19109 = mobl.ref(false);
    
    
    var tmp19108 = mobl.ref(null);
    
    
    var tmp19107 = mobl.ref(null);
    
    var nodes7254 = $("<span>");
    root8989.append(nodes7254);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19107, tmp19108, tmp19109, function(_, callback) {
      var root8990 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp19106 = mobl.ref("_blank");
      
      var nodes7255 = $("<span>");
      root8990.append(nodes7255);
      subs__.addSub((mobl.link)(mobl.ref(episode, 'downloadUrl'), tmp19106, function(_, callback) {
        var root8991 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8991); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7255;
        nodes7255 = node.contents();
        oldNodes.replaceWith(nodes7255);
      }));
      callback(root8990); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7254;
      nodes7254 = node.contents();
      oldNodes.replaceWith(nodes7254);
    }));
    
    var tmp19123 = mobl.ref(mobl.media.Audio.canPlayMp3());
    subs__.addSub(mobl.ref(mobl.media.Audio).addEventListener('change', function() {
      tmp19123.set(mobl.media.Audio.canPlayMp3());
    }));
    
    
    var node1365 = $("<span>");
    root8989.append(node1365);
    var condSubs419 = new mobl.CompSubscription();
    subs__.addSub(condSubs419);
    var oldValue419;
    var renderCond419 = function() {
      var value751 = tmp19123.get();
      if(oldValue419 === value751) return;
      oldValue419 = value751;
      var subs__ = condSubs419;
      subs__.unsubscribe();
      node1365.empty();
      if(value751) {
        
        var tmp19115 = mobl.ref(false);
        
        
        var tmp19114 = mobl.ref(null);
        
        
        var tmp19113 = mobl.ref(null);
        
        var nodes7256 = $("<span>");
        node1365.append(nodes7256);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19113, tmp19114, tmp19115, function(_, callback) {
          var root8992 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp19110 = mobl.ref(mpodder.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          subs__.addSub(mobl.ref(audio, 'currentTime').addEventListener('change', function() {
            tmp19110.set(mpodder.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          subs__.addSub(audio.addEventListener('change', function() {
            tmp19110.set(mpodder.prettyPlayTime(audio.get().currentTime, audio.get().getDuration()));
          }));
          
          
          var tmp19112 = mobl.ref(null);
          
          
          var tmp19111 = mobl.ref(null);
          
          var nodes7257 = $("<span>");
          root8992.append(nodes7257);
          subs__.addSub((mobl.label)(tmp19110, tmp19111, tmp19112, function(_, callback) {
            var root8993 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8993); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7257;
            nodes7257 = node.contents();
            oldNodes.replaceWith(nodes7257);
          }));
          callback(root8992); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7256;
          nodes7256 = node.contents();
          oldNodes.replaceWith(nodes7256);
        }));
        
        var tmp19122 = mobl.ref(false);
        
        
        var tmp19121 = mobl.ref(null);
        
        
        var tmp19120 = mobl.ref(null);
        
        var nodes7258 = $("<span>");
        node1365.append(nodes7258);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19120, tmp19121, tmp19122, function(_, callback) {
          var root8994 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var tmp19117 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().play();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp19116 = mobl.ref("Play");
          
          var nodes7259 = $("<span>");
          root8994.append(nodes7259);
          subs__.addSub((ui.button)(tmp19116, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp19117, function(_, callback) {
            var root8995 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8995); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7259;
            nodes7259 = node.contents();
            oldNodes.replaceWith(nodes7259);
          }));
          
          var tmp19119 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = audio.get().pause();
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp19118 = mobl.ref("Pause");
          
          var nodes7260 = $("<span>");
          root8994.append(nodes7260);
          subs__.addSub((ui.button)(tmp19118, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp19119, function(_, callback) {
            var root8996 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8996); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7260;
            nodes7260 = node.contents();
            oldNodes.replaceWith(nodes7260);
          }));
          callback(root8994); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7258;
          nodes7258 = node.contents();
          oldNodes.replaceWith(nodes7258);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond419();
    subs__.addSub(tmp19123.addEventListener('change', function() {
      renderCond419();
    }));
    
    callback(root8989); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7253;
    nodes7253 = node.contents();
    oldNodes.replaceWith(nodes7253);
  }));
  callback(root8986); return subs__;
  
  
  return subs__;
};

mpodder.podcastItem = function(podcast, elements, callback) {
  var root8997 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp19128 = mobl.ref(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  subs__.addSub(mobl.ref(mobl.ref(podcast, 'title'), 'length').addEventListener('change', function() {
    tmp19128.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
    tmp19128.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
  }));
  
  
  var tmp19130 = mobl.ref(null);
  
  
  var tmp19129 = mobl.ref(null);
  
  var nodes7261 = $("<span>");
  root8997.append(nodes7261);
  subs__.addSub((mobl.label)(tmp19128, tmp19129, tmp19130, function(_, callback) {
    var root8998 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8998); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7261;
    nodes7261 = node.contents();
    oldNodes.replaceWith(nodes7261);
  }));
  callback(root8997); return subs__;
  
  return subs__;
};

mpodder.root = function(callback, screenCallback) {
  var root8999 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var query = mobl.ref("jazz");
  
  var podcasts = mobl.ref(null);
  mpodder.fetch(query.get(), function(result__) {
    var tmp19144 = result__;
    var result__ = tmp19144;
    podcasts.set(result__);
    
  });
  
  var tmp19131 = mobl.ref("mPodder");
  
  
  var tmp19132 = mobl.ref(null);
  
  var nodes7262 = $("<span>");
  root8999.append(nodes7262);
  subs__.addSub((ui.header)(tmp19131, tmp19132, function(_, callback) {
    var root9000 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9000); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7262;
    nodes7262 = node.contents();
    oldNodes.replaceWith(nodes7262);
  }));
  
  var tmp19133 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = ui.startLoading("Loading...", ui.progressStyle);
                       mpodder.fetch(query.get(), function(result__) {
                         var tmp19145 = result__;
                         var result__ = tmp19145;
                         podcasts.set(result__);
                         var result__ = ui.endLoading();
                         if(callback && callback.apply) callback(); return;
                       });
                     });
  
  
  var tmp19135 = mobl.ref(null);
  
  
  var tmp19134 = mobl.ref(mobl._("Search term", []));
  
  var nodes7263 = $("<span>");
  root8999.append(nodes7263);
  subs__.addSub((ui.searchBox)(query, tmp19134, tmp19133, tmp19135, function(_, callback) {
    var root9001 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9001); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7263;
    nodes7263 = node.contents();
    oldNodes.replaceWith(nodes7263);
  }));
  
  var tmp19136 = mobl.ref("Loading...");
  
  var nodes7264 = $("<span>");
  root8999.append(nodes7264);
  subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp19136, function(_, callback) {
    var root9002 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes7265 = $("<span>");
    root9002.append(nodes7265);
    subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(mpodder.podcastItem), mobl.ref(mpodder.podcastDetail), function(_, callback) {
      var root9003 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9003); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7265;
      nodes7265 = node.contents();
      oldNodes.replaceWith(nodes7265);
    }));
    callback(root9002); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7264;
    nodes7264 = node.contents();
    oldNodes.replaceWith(nodes7264);
  }));
  callback(root8999); return subs__;
  
  
  
  
  return subs__;
};
