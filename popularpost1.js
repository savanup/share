$(&#39;.popular-posts img&#39;).attr(&#39;src&#39;, function(e, t) {
return t.replace(&#39;/s72-c/&#39;, &#39;/s350-c/&#39;)
});
$(&#39;.popular-posts ul li .item-snippet&#39;).each(function(){
var txt=$(this).text().substr(0,60);
var j=txt.lastIndexOf(&#39; &#39;);
if(j&gt;10)
$(this).text(txt.substr(0,j).replace(/[?,!\.-:;]*$/,&#39;...&#39;));
});
$(&#39;.popular-posts ul li .item-content a&#39;).each(function(){
var txt=$(this).text().substr(0,60);
var j=txt.lastIndexOf(&#39; &#39;);
if(j&gt;=6)
$(this).text(txt.substr(0,j).replace(/[?,!\.-:;]*$/,&#39;...&#39;));
});
