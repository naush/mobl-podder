mobl.provides('mpodder');
mobl.provides('mobl');
persistence.debug = false;
mpodder.Podcast = {
  website: null,
  mygpo_link: null,
  description: null,
  subscribers: null,
  title: null,
  url: null,
  subscribers_last_week: null,
  logo_url: null
};
mpodder.fetch = function(query, callback) {
  var __this = this;
  mobl.yql.YQL.query("select * from json where url='http://gpodder.net/search.json?q=" + query + "'", function(result__) {
    var tmp8880 = result__;
    var result__ = tmp8880;
    var resource = result__;
    var result__ = resource.json.json;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};

mpodder.blank = function(target) {
   var __this = this;
  return target == null || target.length == 0;
};


mpodder.podcastDetail = function(podcast, elements, callback) {
  var root4602 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8867 = mobl.ref(null);
  
  
  var tmp8866 = mobl.ref(null);
  
  
  var tmp8865 = mobl.ref(null);
  
  
  var tmp8864 = mobl.ref(null);
  
  var nodes3591 = $("<span>");
  root4602.append(nodes3591);
  subs__.addSub((mobl.block)(tmp8864, tmp8865, tmp8866, tmp8867, function(_, callback) {
    var root4603 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8846 = mobl.ref(false);
    
    
    var tmp8845 = mobl.ref(null);
    
    
    var tmp8844 = mobl.ref(null);
    
    var nodes3592 = $("<span>");
    root4603.append(nodes3592);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8844, tmp8845, tmp8846, function(_, callback) {
      var root4604 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8843 = mobl.ref(null);
      
      
      var tmp8842 = mobl.ref(null);
      
      
      var tmp8841 = mobl.ref(null);
      
      
      var tmp8840 = mobl.ref(null);
      
      
      var tmp8839 = mobl.ref(null);
      
      
      var tmp8838 = mobl.ref(null);
      
      var nodes3593 = $("<span>");
      root4604.append(nodes3593);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp8838, tmp8839, tmp8840, tmp8841, tmp8842, tmp8843, function(_, callback) {
        var root4605 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4605); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3593;
        nodes3593 = node.contents();
        oldNodes.replaceWith(nodes3593);
      }));
      callback(root4604); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3592;
      nodes3592 = node.contents();
      oldNodes.replaceWith(nodes3592);
    }));
    
    var tmp8852 = mobl.ref(false);
    
    
    var tmp8851 = mobl.ref(null);
    
    
    var tmp8850 = mobl.ref(null);
    
    var nodes3594 = $("<span>");
    root4603.append(nodes3594);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8850, tmp8851, tmp8852, function(_, callback) {
      var root4606 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8847 = mobl.ref(mpodder.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp8847.set(mpodder.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      }));
      
      
      var tmp8849 = mobl.ref(null);
      
      
      var tmp8848 = mobl.ref(null);
      
      var nodes3595 = $("<span>");
      root4606.append(nodes3595);
      subs__.addSub((mobl.label)(tmp8847, tmp8848, tmp8849, function(_, callback) {
        var root4607 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4607); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3595;
        nodes3595 = node.contents();
        oldNodes.replaceWith(nodes3595);
      }));
      callback(root4606); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3594;
      nodes3594 = node.contents();
      oldNodes.replaceWith(nodes3594);
    }));
    
    var tmp8858 = mobl.ref(false);
    
    
    var tmp8857 = mobl.ref(null);
    
    
    var tmp8856 = mobl.ref(null);
    
    var nodes3596 = $("<span>");
    root4603.append(nodes3596);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8856, tmp8857, tmp8858, function(_, callback) {
      var root4608 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8853 = mobl.ref(mpodder.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp8853.set(mpodder.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      }));
      
      
      var tmp8855 = mobl.ref(null);
      
      
      var tmp8854 = mobl.ref(null);
      
      var nodes3597 = $("<span>");
      root4608.append(nodes3597);
      subs__.addSub((mobl.label)(tmp8853, tmp8854, tmp8855, function(_, callback) {
        var root4609 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4609); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3597;
        nodes3597 = node.contents();
        oldNodes.replaceWith(nodes3597);
      }));
      callback(root4608); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3596;
      nodes3596 = node.contents();
      oldNodes.replaceWith(nodes3596);
    }));
    
    var tmp8863 = mobl.ref(false);
    
    
    var tmp8862 = mobl.ref(null);
    
    
    var tmp8861 = mobl.ref(null);
    
    var nodes3598 = $("<span>");
    root4603.append(nodes3598);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8861, tmp8862, tmp8863, function(_, callback) {
      var root4610 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8859 = mobl.ref(mpodder.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp8859.set(mpodder.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      }));
      
      
      var tmp8860 = mobl.ref("_blank");
      
      var nodes3599 = $("<span>");
      root4610.append(nodes3599);
      subs__.addSub((mobl.link)(tmp8859, tmp8860, function(_, callback) {
        var root4611 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4611); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3599;
        nodes3599 = node.contents();
        oldNodes.replaceWith(nodes3599);
      }));
      callback(root4610); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3598;
      nodes3598 = node.contents();
      oldNodes.replaceWith(nodes3598);
    }));
    callback(root4603); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3591;
    nodes3591 = node.contents();
    oldNodes.replaceWith(nodes3591);
  }));
  callback(root4602); return subs__;
  
  return subs__;
};

mpodder.podcastItem = function(podcast, elements, callback) {
  var root4612 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8873 = mobl.ref(false);
  
  
  var tmp8872 = mobl.ref(null);
  
  
  var tmp8871 = mobl.ref(null);
  
  var nodes3600 = $("<span>");
  root4612.append(nodes3600);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8871, tmp8872, tmp8873, function(_, callback) {
    var root4613 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8868 = mobl.ref(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
    subs__.addSub(mobl.ref(mobl.ref(podcast, 'title'), 'length').addEventListener('change', function() {
      tmp8868.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
    }));
    subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
      tmp8868.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
    }));
    
    
    var tmp8870 = mobl.ref(null);
    
    
    var tmp8869 = mobl.ref(null);
    
    var nodes3601 = $("<span>");
    root4613.append(nodes3601);
    subs__.addSub((mobl.label)(tmp8868, tmp8869, tmp8870, function(_, callback) {
      var root4614 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4614); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3601;
      nodes3601 = node.contents();
      oldNodes.replaceWith(nodes3601);
    }));
    callback(root4613); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3600;
    nodes3600 = node.contents();
    oldNodes.replaceWith(nodes3600);
  }));
  callback(root4612); return subs__;
  
  return subs__;
};

mpodder.root = function(callback, screenCallback) {
  var root4615 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var query = mobl.ref("jazz");
  
  var podcasts = mobl.ref(null);
  mpodder.fetch(query.get(), function(result__) {
    var tmp8881 = result__;
    var result__ = tmp8881;
    podcasts.set(result__);
    
  });
  
  var tmp8874 = mobl.ref("mPodder");
  
  
  var tmp8875 = mobl.ref(null);
  
  var nodes3602 = $("<span>");
  root4615.append(nodes3602);
  subs__.addSub((ui.header)(tmp8874, tmp8875, function(_, callback) {
    var root4616 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4616); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3602;
    nodes3602 = node.contents();
    oldNodes.replaceWith(nodes3602);
  }));
  
  var tmp8876 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       mpodder.fetch(query.get(), function(result__) {
                         var tmp8882 = result__;
                         var result__ = tmp8882;
                         podcasts.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
                     });
  
  
  var tmp8878 = mobl.ref(null);
  
  
  var tmp8877 = mobl.ref(mobl._("Search term", []));
  
  var nodes3603 = $("<span>");
  root4615.append(nodes3603);
  subs__.addSub((ui.searchBox)(query, tmp8877, tmp8876, tmp8878, function(_, callback) {
    var root4617 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4617); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3603;
    nodes3603 = node.contents();
    oldNodes.replaceWith(nodes3603);
  }));
  
  var tmp8879 = mobl.ref("Loading...");
  
  var nodes3604 = $("<span>");
  root4615.append(nodes3604);
  subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp8879, function(_, callback) {
    var root4618 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes3605 = $("<span>");
    root4618.append(nodes3605);
    subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(mpodder.podcastItem), mobl.ref(mpodder.podcastDetail), function(_, callback) {
      var root4619 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4619); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3605;
      nodes3605 = node.contents();
      oldNodes.replaceWith(nodes3605);
    }));
    callback(root4618); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3604;
    nodes3604 = node.contents();
    oldNodes.replaceWith(nodes3604);
  }));
  callback(root4615); return subs__;
  
  
  
  
  return subs__;
};
