mobl.provides('mobl.yql');

mobl.yql.YQL = {
  query: function(q, callback) {
    var url = "" + (this.root ? this.root : "") + "http://query.yahooapis.com/v1/public/yql?q=" + mobl.escape(q) + "&format=json";
    $.ajax({
       url: url,
       dataType: "jsonp",
       type: "GET",
       
       error: function(_, message, error) {
         console.error(message);
         console.error(error);
         callback(null);
       },
       success: function(data) {
          var result = mobl.yql.yqlMapper(data, callback);
          if(result !== undefined) {
            callback(result);
          }
       }
    });
  }
  ,
  fetchXMLAsJSON: function(url, callback) {
    var url = "" + (this.root ? this.root : "") + "http://query.yahooapis.com/v1/public/yql?q=" + mobl.escape("select * from html where url = '" + url + "'") + "&format=json";
    $.ajax({
       url: url,
       dataType: "json",
       type: "GET",
       
       error: function(_, message, error) {
         console.error(message);
         console.error(error);
         callback(null);
       },
       success: function(data) {
          var result = mobl.yql.yqlMapper(data, callback);
          if(result !== undefined) {
            callback(result);
          }
       }
    });
  }
  ,
  fetchURL: function(url, callback) {
    var url = "" + (this.root ? this.root : "") + "http://query.yahooapis.com/v1/public/yql?q=" + mobl.escape("select * from html where url = '" + url + "'") + "&format=html";
    $.ajax({
       url: url,
       dataType: "text",
       type: "GET",
       
       error: function(_, message, error) {
         console.error(message);
         console.error(error);
         callback(null);
       },
       success: function(data) {
          var result = mobl.dummyMapper(data, callback);
          if(result !== undefined) {
            callback(result);
          }
       }
    });
  }
  
};
mobl.yql.yqlMapper = function(result) {
   var __this = this;
  if(result.error) {
    return result;
  } else {
    return result.query.results;
  }
};

