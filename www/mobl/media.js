mobl.provides('mobl.media');
(function(__ns) {
function AudioPlayer ( el ) {
  this.el = el;
  window.player = this;
  var that = this;
  var notNow = false;
  this.timeUpdateSub = function() {
                         notNow = true;
                         that.currentTime = el.currentTime;
                       };
  this.loadSub = function() {
                   that.loaded = true;
                 };
  el.addEventListener('timeupdate', this.timeUpdateSub);
  el.addEventListener('load', this.loadSub);
  this.sub = that.addEventListener('change', function(eventType, _, prop, value) {
                                               if(eventType === 'change' && prop === 'volume')
                                               {
                                                 el.volume = value;
                                               }
                                               else
                                               if(eventType === 'change' && prop === 'currentTime')
                                               {
                                                 if(!notNow)
                                                 {
                                                   el.currentTime = value;
                                                 }
                                                 notNow = false;
                                               }
                                             });
}
AudioPlayer.prototype = new mobl.ObservableObject ( {
                                                      volume: 1,
                                                      currentTime: 0,
                                                      loaded: false
                                                    } );
AudioPlayer.prototype.play = function() {
                               this.el.play();
                             };
AudioPlayer.prototype.pause = function() {
                                this.el.pause();
                              };
AudioPlayer.prototype.getDuration = function() {
                                      return this.el.duration;
                                    };
AudioPlayer.prototype.destroy = function() {
                                  this.sub.unsubscribe();
                                  this.el.removeEventListener('timeupdate', this.timeUpdateSub);
                                  this.el.removeEventListener('load', this.loadSub);
                                  this.el.src = null;
                                };
__ns.Audio = {
               load: function(url) {
                       var el = $("<audio src=\"" + url + "\">");
                       return new AudioPlayer(el[0]);
                     },
               canPlayMp3: function() {
                             var a = document.createElement('audio');
                             return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
                           },
               canPlayWav: function() {
                             var a = document.createElement('audio');
                             return !!(a.canPlayType && a.canPlayType('audio/wav; codecs="1"').replace(/no/, ''));
                           },
               canPlayVorbis: function() {
                                var a = document.createElement('audio');
                                return !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
                              },
               canPlayAac: function() {
                             var a = document.createElement('audio');
                             return !!(a.canPlayType && a.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, ''));
                           }
             };
}(mobl.media));