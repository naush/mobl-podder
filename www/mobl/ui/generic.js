mobl.provides('mobl.ui.generic');
mobl.provides('mobl.ui');
mobl.provides('mobl');
mobl.ui.generic.loadingStyle = 'mobl__ui__generic__loadingStyle';

mobl.ui.generic.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root4401 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node649 = $("<span>");
  root4401.append(node649);
  var condSubs222 = new mobl.CompSubscription();
  subs__.addSub(condSubs222);
  var oldValue222;
  var renderCond222 = function() {
    var value406 = value.get();
    if(oldValue222 === value406) return;
    oldValue222 = value406;
    var subs__ = condSubs222;
    subs__.unsubscribe();
    node649.empty();
    if(value406) {
      var nodes3438 = $("<span>");
      node649.append(nodes3438);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl240();
      }));
      
      function renderControl240() {
        subs__.addSub((elements)(function(elements, callback) {
          var root4402 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4402); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3438;
          nodes3438 = node.contents();
          oldNodes.replaceWith(nodes3438);
        }));
      }
      renderControl240();
      
      
    } else {
      
      var tmp8472 = mobl.ref(null);
      
      
      var tmp8471 = mobl.ref(null);
      
      
      var tmp8470 = mobl.ref(null);
      
      var nodes3439 = $("<span>");
      node649.append(nodes3439);
      subs__.addSub((mobl.block)(style, tmp8470, tmp8471, tmp8472, function(_, callback) {
        var root4403 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp8462 = mobl.ref(null);
        
        
        var tmp8461 = mobl.ref(null);
        
        var nodes3440 = $("<span>");
        root4403.append(nodes3440);
        subs__.addSub((mobl.label)(loadingMessage, tmp8461, tmp8462, function(_, callback) {
          var root4404 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4404); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3440;
          nodes3440 = node.contents();
          oldNodes.replaceWith(nodes3440);
        }));
        
        var tmp8464 = mobl.ref("middle");
        
        
        var tmp8463 = mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw==");
        
        
        var tmp8469 = mobl.ref(null);
        
        
        var tmp8468 = mobl.ref(null);
        
        
        var tmp8467 = mobl.ref(null);
        
        
        var tmp8466 = mobl.ref(null);
        
        
        var tmp8465 = mobl.ref(null);
        
        var nodes3441 = $("<span>");
        root4403.append(nodes3441);
        subs__.addSub((mobl.ui.generic.image)(tmp8463, tmp8465, tmp8466, tmp8467, tmp8468, tmp8464, tmp8469, function(_, callback) {
          var root4405 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4405); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3441;
          nodes3441 = node.contents();
          oldNodes.replaceWith(nodes3441);
        }));
        callback(root4403); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3439;
        nodes3439 = node.contents();
        oldNodes.replaceWith(nodes3439);
      }));
      
      
    }
  };
  renderCond222();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond222();
  }));
  
  callback(root4401); return subs__;
  
  return subs__;
};
mobl.ui.generic.headerStyle = 'mobl__ui__generic__headerStyle';
mobl.ui.generic.headerContainerStyle = 'mobl__ui__generic__headerContainerStyle';
mobl.ui.generic.headerTextStyle = 'mobl__ui__generic__headerTextStyle';

mobl.ui.generic.header = function(text, onclick, elements, callback) {
  var root4406 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node650 = $("<div>");
  
  var ref566 = mobl.ref(mobl.ui.generic.headerStyle);
  if(ref566.get() !== null) {
    node650.attr('class', ref566.get());
    subs__.addSub(ref566.addEventListener('change', function(_, ref, val) {
      node650.attr('class', val);
    }));
    
  }
  subs__.addSub(ref566.rebind());
  
  var val323 = onclick.get();
  if(val323 !== null) {
    subs__.addSub(mobl.domBind(node650, 'tap', val323));
  }
  
  
  var node651 = $("<div>");
  
  var ref565 = mobl.ref(mobl.ui.generic.headerContainerStyle);
  if(ref565.get() !== null) {
    node651.attr('class', ref565.get());
    subs__.addSub(ref565.addEventListener('change', function(_, ref, val) {
      node651.attr('class', val);
    }));
    
  }
  subs__.addSub(ref565.rebind());
  
  
  var node652 = $("<div>");
  
  var ref563 = text;
  node652.text(""+ref563.get());
  var ignore113 = false;
  subs__.addSub(ref563.addEventListener('change', function(_, ref, val) {
    if(ignore113) return;
    node652.text(""+val);
  }));
  subs__.addSub(ref563.rebind());
  
  
  var ref564 = mobl.ref(mobl.ui.generic.headerTextStyle);
  if(ref564.get() !== null) {
    node652.attr('class', ref564.get());
    subs__.addSub(ref564.addEventListener('change', function(_, ref, val) {
      node652.attr('class', val);
    }));
    
  }
  subs__.addSub(ref564.rebind());
  
  node651.append(node652);
  node650.append(node651);
  var nodes3442 = $("<span>");
  node650.append(nodes3442);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl241();
  }));
  
  function renderControl241() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4407 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4407); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3442;
      nodes3442 = node.contents();
      oldNodes.replaceWith(nodes3442);
    }));
  }
  renderControl241();
  root4406.append(node650);
  callback(root4406); return subs__;
  
  
  
  
  return subs__;
};
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4408 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref567 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref567.get() !== null) {
    sp.attr('class', ref567.get());
    subs__.addSub(ref567.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref567.rebind());
  
  var val324 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val324 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val324));
  }
  
  var val325 = function(event, callback) {
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
  if(val325 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val325));
  }
  
  var val326 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after99(result__) {
                    var tmp8544 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after99);if(result__ !== undefined) after99(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val326 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val326));
  }
  
  var val327 = function(event, callback) {
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
  if(val327 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val327));
  }
  
  var ref568 = text;
  sp.text(""+ref568.get());
  var ignore114 = false;
  subs__.addSub(ref568.addEventListener('change', function(_, ref, val) {
    if(ignore114) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref568.rebind());
  
  
  root4408.append(sp);
  callback(root4408); return subs__;
  
  return subs__;
};
mobl.ui.generic.sideButtonStyle = 'mobl__ui__generic__sideButtonStyle';
mobl.ui.generic.sideButtonPushedStyle = 'mobl__ui__generic__sideButtonPushedStyle';

mobl.ui.generic.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4409 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3443 = $("<span>");
  root4409.append(nodes3443);
  subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root4410 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4410); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3443;
    nodes3443 = node.contents();
    oldNodes.replaceWith(nodes3443);
  }));
  callback(root4409); return subs__;
  
  return subs__;
};
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';

mobl.ui.generic.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4411 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3444 = $("<span>");
  root4411.append(nodes3444);
  subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root4412 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4412); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3444;
    nodes3444 = node.contents();
    oldNodes.replaceWith(nodes3444);
  }));
  callback(root4411); return subs__;
  
  return subs__;
};
mobl.ui.generic.groupStyle = 'mobl__ui__generic__groupStyle';

mobl.ui.generic.group = function(elements, callback) {
  var root4413 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node653 = $("<ul>");
  
  var ref569 = mobl.ref(mobl.ui.generic.groupStyle);
  if(ref569.get() !== null) {
    node653.attr('class', ref569.get());
    subs__.addSub(ref569.addEventListener('change', function(_, ref, val) {
      node653.attr('class', val);
    }));
    
  }
  subs__.addSub(ref569.rebind());
  
  var nodes3445 = $("<span>");
  node653.append(nodes3445);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl242();
  }));
  
  function renderControl242() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4414 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4414); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3445;
      nodes3445 = node.contents();
      oldNodes.replaceWith(nodes3445);
    }));
  }
  renderControl242();
  root4413.append(node653);
  callback(root4413); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root4415 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node654 = $("<img>");
  
  var ref570 = url;
  if(ref570.get() !== null) {
    node654.attr('src', ref570.get());
    subs__.addSub(ref570.addEventListener('change', function(_, ref, val) {
      node654.attr('src', val);
    }));
    
  }
  subs__.addSub(ref570.rebind());
  
  var ref571 = width;
  if(ref571.get() !== null) {
    node654.attr('width', ref571.get());
    subs__.addSub(ref571.addEventListener('change', function(_, ref, val) {
      node654.attr('width', val);
    }));
    
  }
  subs__.addSub(ref571.rebind());
  
  var ref572 = height;
  if(ref572.get() !== null) {
    node654.attr('height', ref572.get());
    subs__.addSub(ref572.addEventListener('change', function(_, ref, val) {
      node654.attr('height', val);
    }));
    
  }
  subs__.addSub(ref572.rebind());
  
  var ref573 = style;
  if(ref573.get() !== null) {
    node654.attr('class', ref573.get());
    subs__.addSub(ref573.addEventListener('change', function(_, ref, val) {
      node654.attr('class', val);
    }));
    
  }
  subs__.addSub(ref573.rebind());
  
  var val328 = onclick.get();
  if(val328 !== null) {
    subs__.addSub(mobl.domBind(node654, 'tap', val328));
  }
  
  var ref574 = valign;
  if(ref574.get() !== null) {
    node654.attr('valign', ref574.get());
    subs__.addSub(ref574.addEventListener('change', function(_, ref, val) {
      node654.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref574.rebind());
  
  var ref575 = align;
  if(ref575.get() !== null) {
    node654.attr('align', ref575.get());
    subs__.addSub(ref575.addEventListener('change', function(_, ref, val) {
      node654.attr('align', val);
    }));
    
  }
  subs__.addSub(ref575.rebind());
  
  root4415.append(node654);
  callback(root4415); return subs__;
  
  return subs__;
};
mobl.ui.generic.itemStyle = 'mobl__ui__generic__itemStyle';
mobl.ui.generic.itemPushedStyle = 'mobl__ui__generic__itemPushedStyle';
mobl.ui.generic.itemArrowStyle = 'mobl__ui__generic__itemArrowStyle';

mobl.ui.generic.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root4416 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref576 = mobl.ref(mobl.ui.generic.itemStyle);
  if(ref576.get() !== null) {
    el.attr('class', ref576.get());
    subs__.addSub(ref576.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref576.rebind());
  
  var ref577 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref577.get() !== null) {
    el.attr('class', ref577.get());
    subs__.addSub(ref577.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(mobl.ui.generic.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref577.rebind());
  
  var val329 = onswipe.get();
  if(val329 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val329));
  }
  
  var val330 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp8545 = result__;
                                           function after100(result__) {
                                             var tmp8546 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after100);if(result__ !== undefined) after100(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp8547 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val330 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val330));
  }
  
  var nodes3446 = $("<span>");
  el.append(nodes3446);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl243();
  }));
  
  function renderControl243() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4417 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4417); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3446;
      nodes3446 = node.contents();
      oldNodes.replaceWith(nodes3446);
    }));
  }
  renderControl243();
  root4416.append(el);
  callback(root4416); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.checkBox = function(b, label, onchange, elements, callback) {
  var root4418 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node655 = $("<input>");
  node655.attr('type', "checkbox");
  
  var ref579 = b;
  node655.attr('checked', !!ref579.get());
  subs__.addSub(ref579.addEventListener('change', function(_, ref, val) {
    if(ref === ref579) node655.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node655, 'change', function() {
    b.set(!!node655.attr('checked'));
  }));
  
  var val332 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val332 !== null) {
    subs__.addSub(mobl.domBind(node655, 'tap', val332));
  }
  
  var val333 = onchange.get();
  if(val333 !== null) {
    subs__.addSub(mobl.domBind(node655, 'change', val333));
  }
  
  root4418.append(node655);
  
  root4418.append(" ");
  
  var node656 = $("<span>");
  
  var ref578 = label;
  node656.text(""+ref578.get());
  var ignore115 = false;
  subs__.addSub(ref578.addEventListener('change', function(_, ref, val) {
    if(ignore115) return;
    node656.text(""+val);
  }));
  subs__.addSub(ref578.rebind());
  
  
  var val331 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after101(result__) {
                    var tmp8548 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after101);if(result__ !== undefined) after101(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val331 !== null) {
    subs__.addSub(mobl.domBind(node656, 'tap', val331));
  }
  
  root4418.append(node656);
  callback(root4418); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.textFieldStyle = 'mobl__ui__generic__textFieldStyle';
mobl.ui.generic.textFieldInvalidStyle = 'mobl__ui__generic__textFieldInvalidStyle';
mobl.ui.generic.textFieldLabelStyle = 'mobl__ui__generic__textFieldLabelStyle';
mobl.ui.generic.validationMessageStyle = 'mobl__ui__generic__validationMessageStyle';
mobl.ui.generic.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


mobl.ui.generic.textField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4419 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node657 = $("<span>");
  root4419.append(node657);
  var condSubs223 = new mobl.CompSubscription();
  subs__.addSub(condSubs223);
  var oldValue223;
  var renderCond223 = function() {
    var value407 = label.get();
    if(oldValue223 === value407) return;
    oldValue223 = value407;
    var subs__ = condSubs223;
    subs__.unsubscribe();
    node657.empty();
    if(value407) {
      
      var tmp8473 = mobl.ref(null);
      
      var nodes3447 = $("<span>");
      node657.append(nodes3447);
      subs__.addSub((mobl.label)(label, mobl.ref(mobl.ui.generic.textFieldLabelStyle), tmp8473, function(_, callback) {
        var root4420 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4420); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3447;
        nodes3447 = node.contents();
        oldNodes.replaceWith(nodes3447);
      }));
      
      
    } else {
      
    }
  };
  renderCond223();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond223();
  }));
  
  
  var node658 = $("<span>");
  root4419.append(node658);
  var condSubs224 = new mobl.CompSubscription();
  subs__.addSub(condSubs224);
  var oldValue224;
  var renderCond224 = function() {
    var value408 = validator.get();
    if(oldValue224 === value408) return;
    oldValue224 = value408;
    var subs__ = condSubs224;
    subs__.unsubscribe();
    node658.empty();
    if(value408) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after105(result__) {
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp8549 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node659 = $("<input>");
        node659.attr('type', "text");
        
        var ref580 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref580.get() !== null) {
          node659.attr('class', ref580.get());
          subs__.addSub(ref580.addEventListener('change', function(_, ref, val) {
            node659.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node659.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node659.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node659.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref580.rebind());
        
        var ref581 = placeholder;
        if(ref581.get() !== null) {
          node659.attr('placeholder', ref581.get());
          subs__.addSub(ref581.addEventListener('change', function(_, ref, val) {
            node659.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref581.rebind());
        
        var ref582 = temp;
        node659.val(""+ref582.get());
        var ignore116 = false;
        subs__.addSub(ref582.addEventListener('change', function(_, ref, val) {
          if(ignore116) return;
          node659.val(""+val);
        }));
        subs__.addSub(ref582.rebind());
        
        subs__.addSub(mobl.domBind(node659, 'keyup change', function() {
          ignore116 = true;
          temp.set(mobl.stringTomobl__String(node659.val()));
          ignore116 = false;
        }));
        
        
        var val334 = onchange.get();
        if(val334 !== null) {
          subs__.addSub(mobl.domBind(node659, 'change', val334));
        }
        
        var val335 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after102(result__) {
                          var tmp8550 = result__;
                          function after103(result__) {
                            var tmp8551 = result__;
                            var result__ = tmp8551;
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
                          var result__ = validator.get()(temp.get(), after103);if(result__ !== undefined) after103(result__);
                        }
                        var result__ = onkeyup.get()(event, after102);if(result__ !== undefined) after102(result__);
                      } else {
                        {
                          function after104(result__) {
                            var tmp8551 = result__;
                            var result__ = tmp8551;
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
                          var result__ = validator.get()(temp.get(), after104);if(result__ !== undefined) after104(result__);
                        }
                      }
                    };
        if(val335 !== null) {
          subs__.addSub(mobl.domBind(node659, 'keyup', val335));
        }
        
        var val336 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = mobl.ui.generic.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val336 !== null) {
          subs__.addSub(mobl.domBind(node659, 'blur', val336));
        }
        
        node658.append(node659);
        
        var tmp8474 = mobl.ref(null);
        
        var nodes3448 = $("<span>");
        node658.append(nodes3448);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(mobl.ui.generic.validationMessageStyle), tmp8474, function(_, callback) {
          var root4421 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4421); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3448;
          nodes3448 = node.contents();
          oldNodes.replaceWith(nodes3448);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after105);if(result__ !== undefined) after105(result__);
    } else {
      
      var node660 = $("<input>");
      node660.attr('type', "text");
      
      var ref583 = style;
      if(ref583.get() !== null) {
        node660.attr('class', ref583.get());
        subs__.addSub(ref583.addEventListener('change', function(_, ref, val) {
          node660.attr('class', val);
        }));
        
      }
      subs__.addSub(ref583.rebind());
      
      var ref584 = placeholder;
      if(ref584.get() !== null) {
        node660.attr('placeholder', ref584.get());
        subs__.addSub(ref584.addEventListener('change', function(_, ref, val) {
          node660.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref584.rebind());
      
      var ref585 = s;
      node660.val(""+ref585.get());
      var ignore117 = false;
      subs__.addSub(ref585.addEventListener('change', function(_, ref, val) {
        if(ignore117) return;
        node660.val(""+val);
      }));
      subs__.addSub(ref585.rebind());
      
      subs__.addSub(mobl.domBind(node660, 'keyup change', function() {
        ignore117 = true;
        s.set(mobl.stringTomobl__String(node660.val()));
        ignore117 = false;
      }));
      
      
      var val337 = onchange.get();
      if(val337 !== null) {
        subs__.addSub(mobl.domBind(node660, 'change', val337));
      }
      
      var val338 = onkeyup.get();
      if(val338 !== null) {
        subs__.addSub(mobl.domBind(node660, 'keyup', val338));
      }
      
      var val339 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val339 !== null) {
        subs__.addSub(mobl.domBind(node660, 'blur', val339));
      }
      
      node658.append(node660);
      
      
    }
  };
  renderCond224();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond224();
  }));
  
  callback(root4419); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4422 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3449 = $("<span>");
  root4422.append(nodes3449);
  subs__.addSub((mobl.ui.generic.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root4423 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4423); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3449;
    nodes3449 = node.contents();
    oldNodes.replaceWith(nodes3449);
  }));
  callback(root4422); return subs__;
  
  return subs__;
};
mobl.ui.generic.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


mobl.ui.generic.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4424 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after106(result__) {
      var tmp8552 = result__;
      var result__ = tmp8552;
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
    var result__ = validator.get()(n2, after106);if(result__ !== undefined) after106(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes3450 = $("<span>");
  root4424.append(nodes3450);
  subs__.addSub((mobl.ui.generic.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root4425 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4425); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3450;
    nodes3450 = node.contents();
    oldNodes.replaceWith(nodes3450);
  }));
  callback(root4424); return subs__;
  
  return subs__;
};

mobl.ui.generic.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root4426 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node661 = $("<span>");
  root4426.append(node661);
  var condSubs225 = new mobl.CompSubscription();
  subs__.addSub(condSubs225);
  var oldValue225;
  var renderCond225 = function() {
    var value409 = label.get();
    if(oldValue225 === value409) return;
    oldValue225 = value409;
    var subs__ = condSubs225;
    subs__.unsubscribe();
    node661.empty();
    if(value409) {
      
      var node662 = $("<span>");
      node662.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref589 = label;
      node662.text(""+ref589.get());
      var ignore119 = false;
      subs__.addSub(ref589.addEventListener('change', function(_, ref, val) {
        if(ignore119) return;
        node662.text(""+val);
      }));
      subs__.addSub(ref589.rebind());
      
      
      node661.append(node662);
      
      var node663 = $("<span>");
      node663.attr('style', "float: left");
      
      
      var node664 = $("<input>");
      node664.attr('type', "password");
      
      var ref586 = style;
      if(ref586.get() !== null) {
        node664.attr('class', ref586.get());
        subs__.addSub(ref586.addEventListener('change', function(_, ref, val) {
          node664.attr('class', val);
        }));
        
      }
      subs__.addSub(ref586.rebind());
      
      var ref587 = placeholder;
      if(ref587.get() !== null) {
        node664.attr('placeholder', ref587.get());
        subs__.addSub(ref587.addEventListener('change', function(_, ref, val) {
          node664.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref587.rebind());
      
      var ref588 = s;
      node664.val(""+ref588.get());
      var ignore118 = false;
      subs__.addSub(ref588.addEventListener('change', function(_, ref, val) {
        if(ignore118) return;
        node664.val(""+val);
      }));
      subs__.addSub(ref588.rebind());
      
      subs__.addSub(mobl.domBind(node664, 'keyup change', function() {
        ignore118 = true;
        s.set(mobl.stringTomobl__String(node664.val()));
        ignore118 = false;
      }));
      
      
      var val340 = onchange.get();
      if(val340 !== null) {
        subs__.addSub(mobl.domBind(node664, 'change', val340));
      }
      
      var val341 = onkeyup.get();
      if(val341 !== null) {
        subs__.addSub(mobl.domBind(node664, 'keyup', val341));
      }
      
      var val342 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val342 !== null) {
        subs__.addSub(mobl.domBind(node664, 'blur', val342));
      }
      
      node663.append(node664);
      node661.append(node663);
      
      
      
      
    } else {
      
      var node665 = $("<input>");
      node665.attr('type', "password");
      
      var ref590 = style;
      if(ref590.get() !== null) {
        node665.attr('class', ref590.get());
        subs__.addSub(ref590.addEventListener('change', function(_, ref, val) {
          node665.attr('class', val);
        }));
        
      }
      subs__.addSub(ref590.rebind());
      
      var ref591 = placeholder;
      if(ref591.get() !== null) {
        node665.attr('placeholder', ref591.get());
        subs__.addSub(ref591.addEventListener('change', function(_, ref, val) {
          node665.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref591.rebind());
      
      var ref592 = s;
      node665.val(""+ref592.get());
      var ignore120 = false;
      subs__.addSub(ref592.addEventListener('change', function(_, ref, val) {
        if(ignore120) return;
        node665.val(""+val);
      }));
      subs__.addSub(ref592.rebind());
      
      subs__.addSub(mobl.domBind(node665, 'keyup change', function() {
        ignore120 = true;
        s.set(mobl.stringTomobl__String(node665.val()));
        ignore120 = false;
      }));
      
      
      var val343 = onchange.get();
      if(val343 !== null) {
        subs__.addSub(mobl.domBind(node665, 'change', val343));
      }
      
      var val344 = onkeyup.get();
      if(val344 !== null) {
        subs__.addSub(mobl.domBind(node665, 'keyup', val344));
      }
      
      var val345 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val345 !== null) {
        subs__.addSub(mobl.domBind(node665, 'blur', val345));
      }
      
      node661.append(node665);
      
      
    }
  };
  renderCond225();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond225();
  }));
  
  callback(root4426); return subs__;
  
  return subs__;
};
mobl.ui.generic.selectFieldStyle = 'mobl__ui__generic__selectFieldStyle';

mobl.ui.generic.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root4427 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref597 = style;
  if(ref597.get() !== null) {
    sel.attr('class', ref597.get());
    subs__.addSub(ref597.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref597.rebind());
  
  var val346 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after107(result__) {
                    var tmp8554 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after107);if(result__ !== undefined) after107(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val346 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val346));
  }
  
  
  var node666 = mobl.loadingSpan();
  sel.append(node666);
  var list123;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList123 = function() {
    var subs__ = listSubs__;
    list123 = options.get();
    list123.list(function(results131) {
      node666.empty();
      for(var i123 = 0; i123 < results131.length; i123++) {
        (function() {
          var iternode123 = $("<span>");
          node666.append(iternode123);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results131), i123), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results131), i123), "_2");
          
          var node667 = $("<option>");
          
          var ref593 = optionDescription;
          node667.text(""+ref593.get());
          var ignore121 = false;
          subs__.addSub(ref593.addEventListener('change', function(_, ref, val) {
            if(ignore121) return;
            node667.text(""+val);
          }));
          subs__.addSub(ref593.rebind());
          
          
          var ref594 = optionStyle;
          if(ref594.get() !== null) {
            node667.attr('class', ref594.get());
            subs__.addSub(ref594.addEventListener('change', function(_, ref, val) {
              node667.attr('class', val);
            }));
            
          }
          subs__.addSub(ref594.rebind());
          
          var ref595 = optionValue;
          if(ref595.get() !== null) {
            node667.attr('value', ref595.get());
            subs__.addSub(ref595.addEventListener('change', function(_, ref, val) {
              node667.attr('value', val);
            }));
            
          }
          subs__.addSub(ref595.rebind());
          
          var ref596 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref596.get() !== null) {
            node667.attr('selected', ref596.get());
            subs__.addSub(ref596.addEventListener('change', function(_, ref, val) {
              node667.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node667.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node667.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref596.rebind());
          
          iternode123.append(node667);
          
          var oldNodes = iternode123;
          iternode123 = iternode123.contents();
          oldNodes.replaceWith(iternode123);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list123.addEventListener('change', function() { listSubs__.unsubscribe(); renderList123(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList123(true); }));
    });
  };
  renderList123();
  
  root4427.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root4427); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.tabbarStyle = 'mobl__ui__generic__tabbarStyle';
mobl.ui.generic.inActiveTabButtonStyle = 'mobl__ui__generic__inActiveTabButtonStyle';
mobl.ui.generic.activeTabButtonStyle = 'mobl__ui__generic__activeTabButtonStyle';
mobl.ui.generic.inActiveTabStyle = 'mobl__ui__generic__inActiveTabStyle';
mobl.ui.generic.activeTabStyle = 'mobl__ui__generic__activeTabStyle';

mobl.ui.generic.tabSet = function(tabs, elements, callback) {
  var root4428 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp8483 = mobl.ref(null);
  
  
  var tmp8482 = mobl.ref(null);
  
  
  var tmp8481 = mobl.ref(null);
  
  var nodes3451 = $("<span>");
  root4428.append(nodes3451);
  subs__.addSub((mobl.block)(mobl.ref(mobl.ui.generic.tabbarStyle), tmp8481, tmp8482, tmp8483, function(_, callback) {
    var root4429 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node668 = mobl.loadingSpan();
    root4429.append(node668);
    var list124;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList124 = function() {
      var subs__ = listSubs__;
      list124 = tabs.get();
      list124.list(function(results132) {
        node668.empty();
        for(var i124 = 0; i124 < results132.length; i124++) {
          (function() {
            var iternode124 = $("<span>");
            node668.append(iternode124);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results132), i124), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results132), i124), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results132), i124), "_3");
            
            var tmp8478 = mobl.ref(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp8478.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp8478.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeTabButtonStyle).addEventListener('change', function() {
              tmp8478.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp8478.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            
            
            var tmp8477 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp8480 = mobl.ref(null);
            
            
            var tmp8479 = mobl.ref(null);
            
            var nodes3452 = $("<span>");
            iternode124.append(nodes3452);
            subs__.addSub((mobl.span)(tmp8478, tmp8479, tmp8477, tmp8480, function(_, callback) {
              var root4430 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp8476 = mobl.ref(null);
              
              
              var tmp8475 = mobl.ref(null);
              
              var nodes3453 = $("<span>");
              root4430.append(nodes3453);
              subs__.addSub((mobl.label)(tabName, tmp8475, tmp8476, function(_, callback) {
                var root4431 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4431); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3453;
                nodes3453 = node.contents();
                oldNodes.replaceWith(nodes3453);
              }));
              callback(root4430); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3452;
              nodes3452 = node.contents();
              oldNodes.replaceWith(nodes3452);
            }));
            
            var oldNodes = iternode124;
            iternode124 = iternode124.contents();
            oldNodes.replaceWith(iternode124);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list124.addEventListener('change', function() { listSubs__.unsubscribe(); renderList124(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList124(true); }));
      });
    };
    renderList124();
    
    callback(root4429); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3451;
    nodes3451 = node.contents();
    oldNodes.replaceWith(nodes3451);
  }));
  
  var node669 = mobl.loadingSpan();
  root4428.append(node669);
  var list125;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList125 = function() {
    var subs__ = listSubs__;
    list125 = tabs.get();
    list125.list(function(results133) {
      node669.empty();
      for(var i125 = 0; i125 < results133.length; i125++) {
        (function() {
          var iternode125 = $("<span>");
          node669.append(iternode125);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results133), i125), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results133), i125), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results133), i125), "_3");
          
          var tmp8484 = mobl.ref(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp8484.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp8484.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.activeTabStyle).addEventListener('change', function() {
            tmp8484.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabStyle).addEventListener('change', function() {
            tmp8484.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          
          
          var tmp8487 = mobl.ref(null);
          
          
          var tmp8486 = mobl.ref(null);
          
          
          var tmp8485 = mobl.ref(null);
          
          var nodes3454 = $("<span>");
          iternode125.append(nodes3454);
          subs__.addSub((mobl.block)(tmp8484, tmp8485, tmp8486, tmp8487, function(_, callback) {
            var root4432 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes3455 = $("<span>");
            root4432.append(nodes3455);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root4433 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3456 = $("<span>");
              root4433.append(nodes3456);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl244();
              }));
              
              function renderControl244() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root4434 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root4434); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3456;
                  nodes3456 = node.contents();
                  oldNodes.replaceWith(nodes3456);
                }));
              }
              renderControl244();
              callback(root4433); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3455;
              nodes3455 = node.contents();
              oldNodes.replaceWith(nodes3455);
            }));
            callback(root4432); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes3454;
            nodes3454 = node.contents();
            oldNodes.replaceWith(nodes3454);
          }));
          
          var oldNodes = iternode125;
          iternode125 = iternode125.contents();
          oldNodes.replaceWith(iternode125);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list125.addEventListener('change', function() { listSubs__.unsubscribe(); renderList125(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList125(true); }));
    });
  };
  renderList125();
  
  callback(root4428); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.searchboxStyle = 'mobl__ui__generic__searchboxStyle';
mobl.ui.generic.searchBoxInputStyle = 'mobl__ui__generic__searchBoxInputStyle';

mobl.ui.generic.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root4435 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node670 = $("<div>");
  
  var ref601 = mobl.ref(mobl.ui.generic.searchboxStyle);
  if(ref601.get() !== null) {
    node670.attr('class', ref601.get());
    subs__.addSub(ref601.addEventListener('change', function(_, ref, val) {
      node670.attr('class', val);
    }));
    
  }
  subs__.addSub(ref601.rebind());
  
  
  var node671 = $("<input>");
  node671.attr('type', "search");
  
  var ref598 = mobl.ref(mobl.ui.generic.searchBoxInputStyle);
  if(ref598.get() !== null) {
    node671.attr('class', ref598.get());
    subs__.addSub(ref598.addEventListener('change', function(_, ref, val) {
      node671.attr('class', val);
    }));
    
  }
  subs__.addSub(ref598.rebind());
  
  var ref599 = placeholder;
  if(ref599.get() !== null) {
    node671.attr('placeholder', ref599.get());
    subs__.addSub(ref599.addEventListener('change', function(_, ref, val) {
      node671.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref599.rebind());
  
  var ref600 = s;
  node671.val(""+ref600.get());
  var ignore122 = false;
  subs__.addSub(ref600.addEventListener('change', function(_, ref, val) {
    if(ignore122) return;
    node671.val(""+val);
  }));
  subs__.addSub(ref600.rebind());
  
  subs__.addSub(mobl.domBind(node671, 'keyup change', function() {
    ignore122 = true;
    s.set(mobl.stringTomobl__String(node671.val()));
    ignore122 = false;
  }));
  
  
  var val347 = onsearch.get();
  if(val347 !== null) {
    subs__.addSub(mobl.domBind(node671, 'change', val347));
  }
  
  var val348 = onkeyup.get();
  if(val348 !== null) {
    subs__.addSub(mobl.domBind(node671, 'keyup', val348));
  }
  node671.attr('autocorrect', false);
  node671.attr('autocapitalize', false);
  node671.attr('autocomplete', false);
  
  node670.append(node671);
  root4435.append(node670);
  callback(root4435); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.contextMenuStyle = 'mobl__ui__generic__contextMenuStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.contextMenu = function(elements, callback) {
  var root4436 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref602 = mobl.ref(mobl.ui.generic.contextMenuStyle);
  if(ref602.get() !== null) {
    menu.attr('class', ref602.get());
    subs__.addSub(ref602.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref602.rebind());
  
  var nodes3457 = $("<span>");
  menu.append(nodes3457);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl245();
  }));
  
  function renderControl245() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4437 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4437); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3457;
      nodes3457 = node.contents();
      oldNodes.replaceWith(nodes3457);
    }));
  }
  renderControl245();
  root4436.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val349 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp8557 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val349 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val349));
  }
  
  root4436.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root4436); return subs__;
  
  
  
  return subs__;
};

mobl.ui.generic.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root4438 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8543 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp8543.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node672 = $("<span>");
  root4438.append(node672);
  var condSubs226 = new mobl.CompSubscription();
  subs__.addSub(condSubs226);
  var oldValue226;
  var renderCond226 = function() {
    var value410 = tmp8543.get();
    if(oldValue226 === value410) return;
    oldValue226 = value410;
    var subs__ = condSubs226;
    subs__.unsubscribe();
    node672.empty();
    if(value410) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node673 = $("<div>");
        node673.attr('width', "100%");
        
        
        var node674 = $("<div>");
        node674.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes3460 = $("<span>");
        node674.append(nodes3460);
        subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
          var root4441 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node677 = mobl.loadingSpan();
          root4441.append(node677);
          var list126;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList126 = function() {
            var subs__ = listSubs__;
            list126 = items.get();
            list126.list(function(results134) {
              node677.empty();
              for(var i126 = 0; i126 < results134.length; i126++) {
                (function() {
                  var iternode126 = $("<span>");
                  node677.append(iternode126);
                  var it;
                  it = mobl.ref(mobl.ref(results134), i126);
                  
                  var tmp8501 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp8501.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp8501.set(it.get() == current.get());
                  }));
                  
                  
                  var node678 = $("<span>");
                  iternode126.append(node678);
                  var condSubs228 = new mobl.CompSubscription();
                  subs__.addSub(condSubs228);
                  var oldValue228;
                  var renderCond228 = function() {
                    var value412 = tmp8501.get();
                    if(oldValue228 === value412) return;
                    oldValue228 = value412;
                    var subs__ = condSubs228;
                    subs__.unsubscribe();
                    node678.empty();
                    if(value412) {
                      
                      var tmp8497 = mobl.ref(false);
                      
                      
                      var tmp8496 = mobl.ref(null);
                      
                      
                      var tmp8495 = mobl.ref(null);
                      
                      var nodes3461 = $("<span>");
                      node678.append(nodes3461);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.selectedItemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp8495, tmp8496, tmp8497, function(_, callback) {
                        var root4442 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes3462 = $("<span>");
                        root4442.append(nodes3462);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl247();
                        }));
                        
                        function renderControl247() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root4443 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root4443); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes3462;
                            nodes3462 = node.contents();
                            oldNodes.replaceWith(nodes3462);
                          }));
                        }
                        renderControl247();
                        callback(root4442); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3461;
                        nodes3461 = node.contents();
                        oldNodes.replaceWith(nodes3461);
                      }));
                      
                      
                    } else {
                      
                      var tmp8499 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           var result__ = mobl.ui.generic.scrollUp();
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp8498 = mobl.ref(true);
                      
                      
                      var tmp8500 = mobl.ref(null);
                      
                      var nodes3463 = $("<span>");
                      node678.append(nodes3463);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp8499, tmp8500, tmp8498, function(_, callback) {
                        var root4444 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes3464 = $("<span>");
                        root4444.append(nodes3464);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl248();
                        }));
                        
                        function renderControl248() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root4445 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root4445); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes3464;
                            nodes3464 = node.contents();
                            oldNodes.replaceWith(nodes3464);
                          }));
                        }
                        renderControl248();
                        callback(root4444); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3463;
                        nodes3463 = node.contents();
                        oldNodes.replaceWith(nodes3463);
                      }));
                      
                      
                    }
                  };
                  renderCond228();
                  subs__.addSub(tmp8501.addEventListener('change', function() {
                    renderCond228();
                  }));
                  
                  
                  var oldNodes = iternode126;
                  iternode126 = iternode126.contents();
                  oldNodes.replaceWith(iternode126);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list126.addEventListener('change', function() { listSubs__.unsubscribe(); renderList126(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList126(true); }));
            });
          };
          renderList126();
          
          callback(root4441); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3460;
          nodes3460 = node.contents();
          oldNodes.replaceWith(nodes3460);
        }));
        node673.append(node674);
        
        var node675 = $("<div>");
        node675.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node676 = $("<span>");
        node675.append(node676);
        var condSubs227 = new mobl.CompSubscription();
        subs__.addSub(condSubs227);
        var oldValue227;
        var renderCond227 = function() {
          var value411 = current.get();
          if(oldValue227 === value411) return;
          oldValue227 = value411;
          var subs__ = condSubs227;
          subs__.unsubscribe();
          node676.empty();
          if(value411) {
            var nodes3458 = $("<span>");
            node676.append(nodes3458);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl246();
            }));
            
            function renderControl246() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root4439 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4439); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3458;
                nodes3458 = node.contents();
                oldNodes.replaceWith(nodes3458);
              }));
            }
            renderControl246();
            
            
          } else {
            
            var tmp8502 = mobl.ref(mobl._("Select an item on the left", []));
            
            
            var tmp8504 = mobl.ref(null);
            
            
            var tmp8503 = mobl.ref(null);
            
            var nodes3459 = $("<span>");
            node676.append(nodes3459);
            subs__.addSub((mobl.label)(tmp8502, tmp8503, tmp8504, function(_, callback) {
              var root4440 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4440); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3459;
              nodes3459 = node.contents();
              oldNodes.replaceWith(nodes3459);
            }));
            
            
          }
        };
        renderCond227();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond227();
        }));
        
        node673.append(node675);
        node672.append(node673);
        
        
        
        
        
        
      });
    } else {
      var nodes3465 = $("<span>");
      node672.append(nodes3465);
      subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
        var root4446 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node679 = mobl.loadingSpan();
        root4446.append(node679);
        var list127;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList127 = function() {
          var subs__ = listSubs__;
          list127 = items.get();
          list127.list(function(results135) {
            node679.empty();
            for(var i127 = 0; i127 < results135.length; i127++) {
              (function() {
                var iternode127 = $("<span>");
                node679.append(iternode127);
                var it;
                it = mobl.ref(mobl.ref(results135), i127);
                
                var tmp8488 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('mobl.ui.generic.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp8558 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp8490 = mobl.ref(false);
                
                
                var tmp8489 = mobl.ref(null);
                
                var nodes3466 = $("<span>");
                iternode127.append(nodes3466);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp8488, tmp8489, tmp8490, function(_, callback) {
                  var root4447 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3467 = $("<span>");
                  root4447.append(nodes3467);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl249();
                  }));
                  
                  function renderControl249() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root4448 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4448); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3467;
                      nodes3467 = node.contents();
                      oldNodes.replaceWith(nodes3467);
                    }));
                  }
                  renderControl249();
                  callback(root4447); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3466;
                  nodes3466 = node.contents();
                  oldNodes.replaceWith(nodes3466);
                }));
                
                var oldNodes = iternode127;
                iternode127 = iternode127.contents();
                oldNodes.replaceWith(iternode127);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list127.addEventListener('change', function() { listSubs__.unsubscribe(); renderList127(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList127(true); }));
          });
        };
        renderList127();
        
        callback(root4446); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3465;
        nodes3465 = node.contents();
        oldNodes.replaceWith(nodes3465);
      }));
      
      
    }
  };
  renderCond226();
  subs__.addSub(tmp8543.addEventListener('change', function() {
    renderCond226();
  }));
  
  callback(root4438); return subs__;
  
  return subs__;
};

mobl.ui.generic.detailScreen = function(it, detail, callback, screenCallback) {
  var root4449 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp8493 = mobl.ref("Detail");
  
  
  var tmp8494 = mobl.ref(null);
  
  var nodes3468 = $("<span>");
  root4449.append(nodes3468);
  subs__.addSub((mobl.ui.generic.header)(tmp8493, tmp8494, function(_, callback) {
    var root4450 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp8492 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp8491 = mobl.ref("Back");
    
    var nodes3469 = $("<span>");
    root4450.append(nodes3469);
    subs__.addSub((mobl.ui.generic.backButton)(tmp8491, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp8492, function(_, callback) {
      var root4451 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4451); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3469;
      nodes3469 = node.contents();
      oldNodes.replaceWith(nodes3469);
    }));
    callback(root4450); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3468;
    nodes3468 = node.contents();
    oldNodes.replaceWith(nodes3468);
  }));
  var nodes3470 = $("<span>");
  root4449.append(nodes3470);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl250();
  }));
  
  function renderControl250() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root4452 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4452); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3470;
      nodes3470 = node.contents();
      oldNodes.replaceWith(nodes3470);
    }));
  }
  renderControl250();
  callback(root4449); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.selectedItemStyle = 'mobl__ui__generic__selectedItemStyle';

mobl.ui.generic.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root4453 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes3471 = $("<span>");
  root4453.append(nodes3471);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root4454 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node680 = mobl.loadingSpan();
    root4454.append(node680);
    var list128;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList128 = function() {
      var subs__ = listSubs__;
      list128 = coll.get();
      list128.list(function(results136) {
        node680.empty();
        for(var i128 = 0; i128 < results136.length; i128++) {
          (function() {
            var iternode128 = $("<span>");
            node680.append(iternode128);
            var it;
            it = mobl.ref(mobl.ref(results136), i128);
            
            var tmp8511 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp8511.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp8511.set(it.get() == selected.get());
            }));
            
            
            var node681 = $("<span>");
            iternode128.append(node681);
            var condSubs229 = new mobl.CompSubscription();
            subs__.addSub(condSubs229);
            var oldValue229;
            var renderCond229 = function() {
              var value413 = tmp8511.get();
              if(oldValue229 === value413) return;
              oldValue229 = value413;
              var subs__ = condSubs229;
              subs__.unsubscribe();
              node681.empty();
              if(value413) {
                
                var tmp8507 = mobl.ref(false);
                
                
                var tmp8506 = mobl.ref(null);
                
                
                var tmp8505 = mobl.ref(null);
                
                var nodes3472 = $("<span>");
                node681.append(nodes3472);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp8505, tmp8506, tmp8507, function(_, callback) {
                  var root4455 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3473 = $("<span>");
                  root4455.append(nodes3473);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl251();
                  }));
                  
                  function renderControl251() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root4456 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4456); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3473;
                      nodes3473 = node.contents();
                      oldNodes.replaceWith(nodes3473);
                    }));
                  }
                  renderControl251();
                  callback(root4455); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3472;
                  nodes3472 = node.contents();
                  oldNodes.replaceWith(nodes3472);
                }));
                
                
              } else {
                
                var tmp8509 = mobl.ref(true);
                
                
                var tmp8508 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp8510 = mobl.ref(null);
                
                var nodes3474 = $("<span>");
                node681.append(nodes3474);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp8508, tmp8510, tmp8509, function(_, callback) {
                  var root4457 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3475 = $("<span>");
                  root4457.append(nodes3475);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl252();
                  }));
                  
                  function renderControl252() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root4458 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4458); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3475;
                      nodes3475 = node.contents();
                      oldNodes.replaceWith(nodes3475);
                    }));
                  }
                  renderControl252();
                  callback(root4457); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3474;
                  nodes3474 = node.contents();
                  oldNodes.replaceWith(nodes3474);
                }));
                
                
              }
            };
            renderCond229();
            subs__.addSub(tmp8511.addEventListener('change', function() {
              renderCond229();
            }));
            
            
            var oldNodes = iternode128;
            iternode128 = iternode128.contents();
            oldNodes.replaceWith(iternode128);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list128.addEventListener('change', function() { listSubs__.unsubscribe(); renderList128(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList128(true); }));
      });
    };
    renderList128();
    
    callback(root4454); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3471;
    nodes3471 = node.contents();
    oldNodes.replaceWith(nodes3471);
  }));
  callback(root4453); return subs__;
  
  return subs__;
};
mobl.ui.generic.loadMoreStyle = 'mobl__ui__generic__loadMoreStyle';

mobl.ui.generic.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, elements, callback) {
  var root4459 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes3476 = $("<span>");
    root4459.append(nodes3476);
    subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
      var root4460 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp8515 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp8515.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp8515.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp8515.set(coll.get().limit(n.get()));
      }));
      
      
      var node682 = mobl.loadingSpan();
      root4460.append(node682);
      var list129;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList129 = function() {
        var subs__ = listSubs__;
        list129 = tmp8515.get();
        list129.list(function(results137) {
          node682.empty();
          for(var i129 = 0; i129 < results137.length; i129++) {
            (function() {
              var iternode129 = $("<span>");
              node682.append(iternode129);
              var it;
              it = mobl.ref(mobl.ref(results137), i129);
              
              var tmp8512 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp8514 = mobl.ref(false);
              
              
              var tmp8513 = mobl.ref(null);
              
              var nodes3477 = $("<span>");
              iternode129.append(nodes3477);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp8512, tmp8513, tmp8514, function(_, callback) {
                var root4461 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3478 = $("<span>");
                root4461.append(nodes3478);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl253();
                }));
                
                function renderControl253() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root4462 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root4462); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3478;
                    nodes3478 = node.contents();
                    oldNodes.replaceWith(nodes3478);
                  }));
                }
                renderControl253();
                callback(root4461); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3477;
                nodes3477 = node.contents();
                oldNodes.replaceWith(nodes3477);
              }));
              
              var oldNodes = iternode129;
              iternode129 = iternode129.contents();
              oldNodes.replaceWith(iternode129);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list129.addEventListener('change', function() { listSubs__.unsubscribe(); renderList129(true); }));
          subs__.addSub(tmp8515.addEventListener('change', function() { listSubs__.unsubscribe(); renderList129(true); }));
        });
      };
      renderList129();
      
      
      var tmp8518 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp8518.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp8518.set(n.get() < total.get());
      }));
      
      
      var node683 = $("<span>");
      root4460.append(node683);
      var condSubs230 = new mobl.CompSubscription();
      subs__.addSub(condSubs230);
      var oldValue230;
      var renderCond230 = function() {
        var value414 = tmp8518.get();
        if(oldValue230 === value414) return;
        oldValue230 = value414;
        var subs__ = condSubs230;
        subs__.unsubscribe();
        node683.empty();
        if(value414) {
          
          var node684 = $("<li>");
          
          var ref603 = mobl.ref(mobl.ui.generic.loadMoreStyle);
          if(ref603.get() !== null) {
            node684.attr('class', ref603.get());
            subs__.addSub(ref603.addEventListener('change', function(_, ref, val) {
              node684.attr('class', val);
            }));
            
          }
          subs__.addSub(ref603.rebind());
          
          var val350 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val350 !== null) {
            subs__.addSub(mobl.domBind(node684, 'tap', val350));
          }
          
          
          var tmp8517 = mobl.ref(null);
          
          
          var tmp8516 = mobl.ref(null);
          
          var nodes3479 = $("<span>");
          node684.append(nodes3479);
          subs__.addSub((mobl.label)(moreLabel, tmp8516, tmp8517, function(_, callback) {
            var root4463 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4463); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3479;
            nodes3479 = node.contents();
            oldNodes.replaceWith(nodes3479);
          }));
          node683.append(node684);
          
          
          
        } else {
          
        }
      };
      renderCond230();
      subs__.addSub(tmp8518.addEventListener('change', function() {
        renderCond230();
      }));
      
      callback(root4460); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3476;
      nodes3476 = node.contents();
      oldNodes.replaceWith(nodes3476);
    }));
    callback(root4459); return subs__;
    
  });
  return subs__;
};

mobl.ui.generic.markableList = function(items, elements, callback) {
  var root4464 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3480 = $("<span>");
  root4464.append(nodes3480);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root4465 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node685 = mobl.loadingSpan();
    root4465.append(node685);
    var list130;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList130 = function() {
      var subs__ = listSubs__;
      list130 = items.get();
      list130.list(function(results138) {
        node685.empty();
        for(var i130 = 0; i130 < results138.length; i130++) {
          (function() {
            var iternode130 = $("<span>");
            node685.append(iternode130);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results138), i130), "_1");it = mobl.ref(mobl.ref(mobl.ref(results138), i130), "_2");
            
            var tmp8522 = mobl.ref(false);
            
            
            var tmp8521 = mobl.ref(null);
            
            
            var tmp8520 = mobl.ref(null);
            
            var nodes3481 = $("<span>");
            iternode130.append(nodes3481);
            subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp8520, tmp8521, tmp8522, function(_, callback) {
              var root4466 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp8519 = mobl.ref(null);
              
              var nodes3482 = $("<span>");
              root4466.append(nodes3482);
              subs__.addSub((mobl.ui.generic.checkBox)(checked, it, tmp8519, function(_, callback) {
                var root4467 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4467); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3482;
                nodes3482 = node.contents();
                oldNodes.replaceWith(nodes3482);
              }));
              callback(root4466); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3481;
              nodes3481 = node.contents();
              oldNodes.replaceWith(nodes3481);
            }));
            
            var oldNodes = iternode130;
            iternode130 = iternode130.contents();
            oldNodes.replaceWith(iternode130);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list130.addEventListener('change', function() { listSubs__.unsubscribe(); renderList130(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList130(true); }));
      });
    };
    renderList130();
    
    callback(root4465); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3480;
    nodes3480 = node.contents();
    oldNodes.replaceWith(nodes3480);
  }));
  callback(root4464); return subs__;
  
  return subs__;
};

mobl.ui.generic.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root4468 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll305) {
    coll305 = coll305.reverse();
    function processOne23() {
      var it;
      it = coll305.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll305.length > 0) processOne23(); else rest23();
      
    }
    function rest23() {
      
      var tmp8526 = mobl.ref(null);
      
      var nodes3483 = $("<span>");
      root4468.append(nodes3483);
      subs__.addSub((mobl.ui.generic.header)(title, tmp8526, function(_, callback) {
        var root4469 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp8523 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp8524 = mobl.ref(mobl._("Back", []));
        
        var nodes3484 = $("<span>");
        root4469.append(nodes3484);
        subs__.addSub((mobl.ui.generic.backButton)(tmp8524, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp8523, function(_, callback) {
          var root4470 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4470); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3484;
          nodes3484 = node.contents();
          oldNodes.replaceWith(nodes3484);
        }));
        
        var tmp8525 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll304) {
                               coll304 = coll304.reverse();
                               function processOne22() {
                                 var checked;var it;
                                 var tmp8560 = coll304.pop();
                                 checked = tmp8560._1;it = tmp8560._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll304.length > 0) processOne22(); else rest22();
                                   
                                 } else {
                                   {
                                     
                                     if(coll304.length > 0) processOne22(); else rest22();
                                     
                                   }
                                 }
                               }
                               function rest22() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll304.length > 0) processOne22(); else rest22();
                             });
                             
                           });
        
        var nodes3485 = $("<span>");
        root4469.append(nodes3485);
        subs__.addSub((mobl.ui.generic.button)(doneButtonLabel, mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp8525, function(_, callback) {
          var root4471 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4471); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3485;
          nodes3485 = node.contents();
          oldNodes.replaceWith(nodes3485);
        }));
        callback(root4469); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3483;
        nodes3483 = node.contents();
        oldNodes.replaceWith(nodes3483);
      }));
      var nodes3486 = $("<span>");
      root4468.append(nodes3486);
      subs__.addSub((mobl.ui.generic.markableList)(items, function(_, callback) {
        var root4472 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4472); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3486;
        nodes3486 = node.contents();
        oldNodes.replaceWith(nodes3486);
      }));
      callback(root4468); return subs__;
      
      
    }
    if(coll305.length > 0) processOne23(); else rest23();
  });
  
  return subs__;
};

mobl.ui.generic.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root4473 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp8528 = mobl.ref(null);
  
  
  var tmp8527 = mobl.ref(null);
  
  var nodes3487 = $("<span>");
  root4473.append(nodes3487);
  subs__.addSub((mobl.ui.generic.searchBox)(phrase, searchTermPlaceholder, tmp8527, tmp8528, function(_, callback) {
    var root4474 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4474); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3487;
    nodes3487 = node.contents();
    oldNodes.replaceWith(nodes3487);
  }));
  
  var tmp8529 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp8529.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp8529.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp8529.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp8529.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp8529.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes3488 = $("<span>");
  root4473.append(nodes3488);
  subs__.addSub((mobl.ui.generic.masterDetail)(tmp8529, masterItem, detailItem, function(_, callback) {
    var root4475 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4475); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3488;
    nodes3488 = node.contents();
    oldNodes.replaceWith(nodes3488);
  }));
  callback(root4473); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.progressStyle = 'mobl__ui__generic__progressStyle';
mobl.ui.generic.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
  mobl.$("body").prepend(loading);
};

mobl.ui.generic.endLoading = function() {
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
}(mobl.ui.generic));mobl.ui.generic.accordionStyle = 'mobl__ui__generic__accordionStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.inActiveSectionStyle = 'mobl__ui__generic__inActiveSectionStyle';
mobl.ui.generic.activeSectionStyle = 'mobl__ui__generic__activeSectionStyle';

mobl.ui.generic.accordion = function(sections, elements, callback) {
  var root4476 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp8542 = mobl.ref(null);
  
  
  var tmp8541 = mobl.ref(null);
  
  
  var tmp8540 = mobl.ref(null);
  
  var nodes3489 = $("<span>");
  root4476.append(nodes3489);
  subs__.addSub((mobl.block)(mobl.ref(mobl.ui.generic.accordionStyle), tmp8540, tmp8541, tmp8542, function(_, callback) {
    var root4477 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node686 = mobl.loadingSpan();
    root4477.append(node686);
    var list131;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList131 = function() {
      var subs__ = listSubs__;
      list131 = sections.get();
      list131.list(function(results139) {
        node686.empty();
        for(var i131 = 0; i131 < results139.length; i131++) {
          (function() {
            var iternode131 = $("<span>");
            node686.append(iternode131);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results139), i131), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results139), i131), "_2");
            
            var tmp8533 = mobl.ref(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp8533.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp8533.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp8533.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp8533.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp8532 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp8535 = mobl.ref(null);
            
            
            var tmp8534 = mobl.ref(null);
            
            var nodes3490 = $("<span>");
            iternode131.append(nodes3490);
            subs__.addSub((mobl.span)(tmp8533, tmp8534, tmp8532, tmp8535, function(_, callback) {
              var root4478 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp8531 = mobl.ref(null);
              
              
              var tmp8530 = mobl.ref(null);
              
              var nodes3491 = $("<span>");
              root4478.append(nodes3491);
              subs__.addSub((mobl.label)(sectionName, tmp8530, tmp8531, function(_, callback) {
                var root4479 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4479); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3491;
                nodes3491 = node.contents();
                oldNodes.replaceWith(nodes3491);
              }));
              callback(root4478); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3490;
              nodes3490 = node.contents();
              oldNodes.replaceWith(nodes3490);
            }));
            
            var tmp8536 = mobl.ref(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp8536.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp8536.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionStyle).addEventListener('change', function() {
              tmp8536.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionStyle).addEventListener('change', function() {
              tmp8536.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            
            
            var tmp8539 = mobl.ref(null);
            
            
            var tmp8538 = mobl.ref(null);
            
            
            var tmp8537 = mobl.ref(null);
            
            var nodes3492 = $("<span>");
            iternode131.append(nodes3492);
            subs__.addSub((mobl.block)(tmp8536, tmp8537, tmp8538, tmp8539, function(_, callback) {
              var root4480 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3493 = $("<span>");
              root4480.append(nodes3493);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl254();
              }));
              
              function renderControl254() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root4481 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root4481); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3493;
                  nodes3493 = node.contents();
                  oldNodes.replaceWith(nodes3493);
                }));
              }
              renderControl254();
              callback(root4480); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3492;
              nodes3492 = node.contents();
              oldNodes.replaceWith(nodes3492);
            }));
            
            var oldNodes = iternode131;
            iternode131 = iternode131.contents();
            oldNodes.replaceWith(iternode131);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list131.addEventListener('change', function() { listSubs__.unsubscribe(); renderList131(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList131(true); }));
      });
    };
    renderList131();
    
    callback(root4477); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3489;
    nodes3489 = node.contents();
    oldNodes.replaceWith(nodes3489);
  }));
  callback(root4476); return subs__;
  
  return subs__;
};
mobl.ui.generic.tableStyle = 'mobl__ui__generic__tableStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';

mobl.ui.generic.table = function(elements, callback) {
  var root4482 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node687 = $("<table>");
  
  var ref604 = mobl.ref(mobl.ui.generic.tableStyle);
  if(ref604.get() !== null) {
    node687.attr('class', ref604.get());
    subs__.addSub(ref604.addEventListener('change', function(_, ref, val) {
      node687.attr('class', val);
    }));
    
  }
  subs__.addSub(ref604.rebind());
  
  var nodes3494 = $("<span>");
  node687.append(nodes3494);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl255();
  }));
  
  function renderControl255() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4483 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4483); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3494;
      nodes3494 = node.contents();
      oldNodes.replaceWith(nodes3494);
    }));
  }
  renderControl255();
  root4482.append(node687);
  callback(root4482); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.row = function(elements, callback) {
  var root4484 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node688 = $("<tr>");
  
  var ref605 = mobl.ref(mobl.ui.generic.trStyle);
  if(ref605.get() !== null) {
    node688.attr('class', ref605.get());
    subs__.addSub(ref605.addEventListener('change', function(_, ref, val) {
      node688.attr('class', val);
    }));
    
  }
  subs__.addSub(ref605.rebind());
  
  var nodes3495 = $("<span>");
  node688.append(nodes3495);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl256();
  }));
  
  function renderControl256() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4485 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4485); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3495;
      nodes3495 = node.contents();
      oldNodes.replaceWith(nodes3495);
    }));
  }
  renderControl256();
  root4484.append(node688);
  callback(root4484); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.cell = function(width, elements, callback) {
  var root4486 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node689 = $("<td>");
  
  var ref606 = width;
  if(ref606.get() !== null) {
    node689.attr('width', ref606.get());
    subs__.addSub(ref606.addEventListener('change', function(_, ref, val) {
      node689.attr('width', val);
    }));
    
  }
  subs__.addSub(ref606.rebind());
  
  var ref607 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref607.get() !== null) {
    node689.attr('class', ref607.get());
    subs__.addSub(ref607.addEventListener('change', function(_, ref, val) {
      node689.attr('class', val);
    }));
    
  }
  subs__.addSub(ref607.rebind());
  
  var nodes3496 = $("<span>");
  node689.append(nodes3496);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl257();
  }));
  
  function renderControl257() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4487 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4487); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3496;
      nodes3496 = node.contents();
      oldNodes.replaceWith(nodes3496);
    }));
  }
  renderControl257();
  root4486.append(node689);
  callback(root4486); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.col = function(width, elements, callback) {
  var root4488 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node690 = $("<td>");
  
  var ref608 = width;
  if(ref608.get() !== null) {
    node690.attr('width', ref608.get());
    subs__.addSub(ref608.addEventListener('change', function(_, ref, val) {
      node690.attr('width', val);
    }));
    
  }
  subs__.addSub(ref608.rebind());
  
  var ref609 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref609.get() !== null) {
    node690.attr('class', ref609.get());
    subs__.addSub(ref609.addEventListener('change', function(_, ref, val) {
      node690.attr('class', val);
    }));
    
  }
  subs__.addSub(ref609.rebind());
  
  var nodes3497 = $("<span>");
  node690.append(nodes3497);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl258();
  }));
  
  function renderControl258() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4489 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4489); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3497;
      nodes3497 = node.contents();
      oldNodes.replaceWith(nodes3497);
    }));
  }
  renderControl258();
  root4488.append(node690);
  callback(root4488); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.headerCol = function(width, elements, callback) {
  var root4490 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node691 = $("<td>");
  
  var ref610 = width;
  if(ref610.get() !== null) {
    node691.attr('width', ref610.get());
    subs__.addSub(ref610.addEventListener('change', function(_, ref, val) {
      node691.attr('width', val);
    }));
    
  }
  subs__.addSub(ref610.rebind());
  
  var ref611 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref611.get() !== null) {
    node691.attr('class', ref611.get());
    subs__.addSub(ref611.addEventListener('change', function(_, ref, val) {
      node691.attr('class', val);
    }));
    
  }
  subs__.addSub(ref611.rebind());
  
  
  var node692 = $("<strong>");
  
  var nodes3498 = $("<span>");
  node692.append(nodes3498);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl259();
  }));
  
  function renderControl259() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4491 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4491); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3498;
      nodes3498 = node.contents();
      oldNodes.replaceWith(nodes3498);
    }));
  }
  renderControl259();
  node691.append(node692);
  root4490.append(node691);
  callback(root4490); return subs__;
  
  
  
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
}(mobl.ui.generic));