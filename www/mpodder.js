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
    var tmp8790 = result__;
    var result__ = tmp8790;
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
  var root4566 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8777 = mobl.ref(null);
  
  
  var tmp8776 = mobl.ref(null);
  
  
  var tmp8775 = mobl.ref(null);
  
  
  var tmp8774 = mobl.ref(null);
  
  var nodes3561 = $("<span>");
  root4566.append(nodes3561);
  subs__.addSub((mobl.block)(tmp8774, tmp8775, tmp8776, tmp8777, function(_, callback) {
    var root4567 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8756 = mobl.ref(false);
    
    
    var tmp8755 = mobl.ref(null);
    
    
    var tmp8754 = mobl.ref(null);
    
    var nodes3562 = $("<span>");
    root4567.append(nodes3562);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8754, tmp8755, tmp8756, function(_, callback) {
      var root4568 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8753 = mobl.ref(null);
      
      
      var tmp8752 = mobl.ref(null);
      
      
      var tmp8751 = mobl.ref(null);
      
      
      var tmp8750 = mobl.ref(null);
      
      
      var tmp8749 = mobl.ref(null);
      
      
      var tmp8748 = mobl.ref(null);
      
      var nodes3563 = $("<span>");
      root4568.append(nodes3563);
      subs__.addSub((ui.image)(mobl.ref(podcast, 'logo_url'), tmp8748, tmp8749, tmp8750, tmp8751, tmp8752, tmp8753, function(_, callback) {
        var root4569 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4569); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3563;
        nodes3563 = node.contents();
        oldNodes.replaceWith(nodes3563);
      }));
      callback(root4568); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3562;
      nodes3562 = node.contents();
      oldNodes.replaceWith(nodes3562);
    }));
    
    var tmp8762 = mobl.ref(false);
    
    
    var tmp8761 = mobl.ref(null);
    
    
    var tmp8760 = mobl.ref(null);
    
    var nodes3564 = $("<span>");
    root4567.append(nodes3564);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8760, tmp8761, tmp8762, function(_, callback) {
      var root4570 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8757 = mobl.ref(mpodder.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
        tmp8757.set(mpodder.blank(podcast.get().title) ? "N/A" : podcast.get().title);
      }));
      
      
      var tmp8759 = mobl.ref(null);
      
      
      var tmp8758 = mobl.ref(null);
      
      var nodes3565 = $("<span>");
      root4570.append(nodes3565);
      subs__.addSub((mobl.label)(tmp8757, tmp8758, tmp8759, function(_, callback) {
        var root4571 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4571); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3565;
        nodes3565 = node.contents();
        oldNodes.replaceWith(nodes3565);
      }));
      callback(root4570); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3564;
      nodes3564 = node.contents();
      oldNodes.replaceWith(nodes3564);
    }));
    
    var tmp8768 = mobl.ref(false);
    
    
    var tmp8767 = mobl.ref(null);
    
    
    var tmp8766 = mobl.ref(null);
    
    var nodes3566 = $("<span>");
    root4567.append(nodes3566);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8766, tmp8767, tmp8768, function(_, callback) {
      var root4572 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8763 = mobl.ref(mpodder.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      subs__.addSub(mobl.ref(podcast, 'description').addEventListener('change', function() {
        tmp8763.set(mpodder.blank(podcast.get().description) ? "N/A" : podcast.get().description);
      }));
      
      
      var tmp8765 = mobl.ref(null);
      
      
      var tmp8764 = mobl.ref(null);
      
      var nodes3567 = $("<span>");
      root4572.append(nodes3567);
      subs__.addSub((mobl.label)(tmp8763, tmp8764, tmp8765, function(_, callback) {
        var root4573 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4573); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3567;
        nodes3567 = node.contents();
        oldNodes.replaceWith(nodes3567);
      }));
      callback(root4572); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3566;
      nodes3566 = node.contents();
      oldNodes.replaceWith(nodes3566);
    }));
    
    var tmp8773 = mobl.ref(false);
    
    
    var tmp8772 = mobl.ref(null);
    
    
    var tmp8771 = mobl.ref(null);
    
    var nodes3568 = $("<span>");
    root4567.append(nodes3568);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8771, tmp8772, tmp8773, function(_, callback) {
      var root4574 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8769 = mobl.ref(mpodder.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      subs__.addSub(mobl.ref(podcast, 'website').addEventListener('change', function() {
        tmp8769.set(mpodder.blank(podcast.get().website) ? "N/A" : podcast.get().website);
      }));
      
      
      var tmp8770 = mobl.ref("_blank");
      
      var nodes3569 = $("<span>");
      root4574.append(nodes3569);
      subs__.addSub((mobl.link)(tmp8769, tmp8770, function(_, callback) {
        var root4575 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4575); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3569;
        nodes3569 = node.contents();
        oldNodes.replaceWith(nodes3569);
      }));
      callback(root4574); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3568;
      nodes3568 = node.contents();
      oldNodes.replaceWith(nodes3568);
    }));
    callback(root4567); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3561;
    nodes3561 = node.contents();
    oldNodes.replaceWith(nodes3561);
  }));
  callback(root4566); return subs__;
  
  return subs__;
};

mpodder.podcastItem = function(podcast, elements, callback) {
  var root4576 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8783 = mobl.ref(false);
  
  
  var tmp8782 = mobl.ref(null);
  
  
  var tmp8781 = mobl.ref(null);
  
  var nodes3570 = $("<span>");
  root4576.append(nodes3570);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8781, tmp8782, tmp8783, function(_, callback) {
    var root4577 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8778 = mobl.ref(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
    subs__.addSub(mobl.ref(mobl.ref(podcast, 'title'), 'length').addEventListener('change', function() {
      tmp8778.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
    }));
    subs__.addSub(mobl.ref(podcast, 'title').addEventListener('change', function() {
      tmp8778.set(podcast.get().title.length == 0 ? "N/A" : podcast.get().title);
    }));
    
    
    var tmp8780 = mobl.ref(null);
    
    
    var tmp8779 = mobl.ref(null);
    
    var nodes3571 = $("<span>");
    root4577.append(nodes3571);
    subs__.addSub((mobl.label)(tmp8778, tmp8779, tmp8780, function(_, callback) {
      var root4578 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4578); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3571;
      nodes3571 = node.contents();
      oldNodes.replaceWith(nodes3571);
    }));
    callback(root4577); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3570;
    nodes3570 = node.contents();
    oldNodes.replaceWith(nodes3570);
  }));
  callback(root4576); return subs__;
  
  return subs__;
};

mpodder.root = function(callback, screenCallback) {
  var root4579 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var query = mobl.ref("jazz");
  
  var podcasts = mobl.ref(null);
  mpodder.fetch(query.get(), function(result__) {
    var tmp8791 = result__;
    var result__ = tmp8791;
    podcasts.set(result__);
    
  });
  
  var tmp8784 = mobl.ref("mPodder");
  
  
  var tmp8785 = mobl.ref(null);
  
  var nodes3572 = $("<span>");
  root4579.append(nodes3572);
  subs__.addSub((ui.header)(tmp8784, tmp8785, function(_, callback) {
    var root4580 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4580); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3572;
    nodes3572 = node.contents();
    oldNodes.replaceWith(nodes3572);
  }));
  
  var tmp8786 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       mpodder.fetch(query.get(), function(result__) {
                         var tmp8792 = result__;
                         var result__ = tmp8792;
                         podcasts.set(result__);
                         if(callback && callback.apply) callback(); return;
                       });
                     });
  
  
  var tmp8788 = mobl.ref(null);
  
  
  var tmp8787 = mobl.ref(mobl._("Search term", []));
  
  var nodes3573 = $("<span>");
  root4579.append(nodes3573);
  subs__.addSub((ui.searchBox)(query, tmp8787, tmp8786, tmp8788, function(_, callback) {
    var root4581 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4581); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3573;
    nodes3573 = node.contents();
    oldNodes.replaceWith(nodes3573);
  }));
  
  var tmp8789 = mobl.ref("Loading...");
  
  var nodes3574 = $("<span>");
  root4579.append(nodes3574);
  subs__.addSub((ui.whenLoaded)(podcasts, mobl.ref(ui.loadingStyle), tmp8789, function(_, callback) {
    var root4582 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes3575 = $("<span>");
    root4582.append(nodes3575);
    subs__.addSub((ui.masterDetail)(podcasts, mobl.ref(mpodder.podcastItem), mobl.ref(mpodder.podcastDetail), function(_, callback) {
      var root4583 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4583); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3575;
      nodes3575 = node.contents();
      oldNodes.replaceWith(nodes3575);
    }));
    callback(root4582); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3574;
    nodes3574 = node.contents();
    oldNodes.replaceWith(nodes3574);
  }));
  callback(root4579); return subs__;
  
  
  
  
  return subs__;
};
