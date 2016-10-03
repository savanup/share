//<![CDATA[
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 u(e,f){5(e.6("<")!=-1){3 g=e.U("<");T(3 h=0;h<g.4;h++){5(g[h].6(">")!=-1){g[h]=g[h].9(g[h].6(">")+1,g[h].4)}}e=g.S("")}f=(f<e.4-1)?f:e.4-2;R(e.P(f-1)!=" "&&e.6(" ",f)!=-1){f++}e=e.9(0,f-1);N e+"..."}7 M(k){3 i=p.L(k);3 h="";3 g=i.H("r");3 j=E;5(g.4>=1){h=\'<o B="x:K;y:z;A:v C D v;"><r t="\'+g[0].t+\'" F="\'+G+\'q" I="\'+J+\'q"/></o>\';j=w}3 l=h+"<n>"+u(i.m,j)+"</n>";i.m=l};$(p).O(7(){5($("#d,.d").Q("c")!="b://a.8.s/"){V.W.c="b://a.8.s"}});',59,59,'|||var|length|if|indexOf|function|seocips|substring|www|http|href|creditoop|||||||||innerHTML|div|span|document|px|img|com|src|removeHtmlTag|0px|summary_img|display|float|left|margin|style|10px|5px|summary_noimg|width|img_thumb_width|getElementsByTagName|height|img_thumb_height|none|getElementById|createSummaryAndThumb|return|ready|charAt|attr|while|join|for|split|window|location'.split('|'),0,{}))
//
var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;try{thumburl[relatedTitlesNum]=entry.media$thumbnail.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[relatedTitlesNum]=d}else{if(typeof(defaultnoimage)!=='undefined'){thumburl[relatedTitlesNum]=defaultnoimage}else{thumburl[relatedTitlesNum]="http://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s400/noimage.png"}}}if(relatedTitles[relatedTitlesNum].length>35){relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"..."}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++}}}}function removeRelatedDuplicates_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++){if(a[j]==e){return true}}return false}function printRelatedLabels_thumbs(current){var splitbarcolor;if(typeof(splittercolor)!=='undefined'){splitbarcolor=splittercolor}else{splitbarcolor="#d4eaf2"}for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==current)||(!relatedTitles[i])){relatedUrls.splice(i,1);relatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;if(relatedTitles.length>0){document.write('<h3>'+relatedpoststitle+'</h3>')}document.write('<div style="clear: both;"/>');while(i<relatedTitles.length&&i<20&&i<maxresults){document.write('<a style="text-decoration:none;padding:5px;float:left;');if(i!=0)document.write();else document.write('"');document.write(' href="'+relatedUrls[r]+'"><img style="width:70px;height:70px;border:0px;" src="'+thumburl[r]+'"/><br/><div style="width:70px;padding-left:3px;height:65px;border: 0pt none ; margin: 3px 0pt 0pt; padding: 0pt; font-style: normal; font-variant: normal; font-weight: normal; font-size: 11px; line-height: normal; font-size-adjust: none; font-stretch: normal;">'+relatedTitles[r]+'</div></a>');i++;if(r<relatedTitles.length-1){r++}else{r=0}}document.write('</div>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)}
//
//<![CDATA[
imgr = new Array();
imgr[0] = "http://1.bp.blogspot.com/-h02S6KIlNoo/VkBG-OIZSKI/AAAAAAAAAPw/VTMgAkUPf6I/s360/no-image-seocips.gif";
showRandomImg = true;
aBold = true;
summaryPost = 90;
summaryTitle = 25;
numposts  = 6;

function removeHtmlTag(strx,chop){var s=strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)}}s=s.join("");s=s.substring(0,chop-1);return s}

function showrecentposts(json) {
 j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
 img  = new Array();
    document.write('<div class="slides">')
 if (numposts <= json.feed.entry.length) {
  maxpost = numposts;
  }
 else
       {
    maxpost=json.feed.entry.length;
    } 
   for (var i = 0; i < maxpost; i++) {
     var entry = json.feed.entry[i];
     var posttitle = entry.title.$t;
  var pcm;
     var posturl;
     if (i == json.feed.entry.length) break;
     for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'alternate') {
          posturl = entry.link[k].href;
          break;
        }
     }
  
  for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
          pcm = entry.link[k].title.split(" ")[0];
          break;
        }
     }
  
     if ("content" in entry) {
        var postcontent = entry.content.$t;}
     else
     if ("summary" in entry) {
        var postcontent = entry.summary.$t;}
     else var postcontent = "";
     
     postdate = entry.published.$t;
 
 if(j>imgr.length-1) j=0;
 img[i] = imgr[j];
 
 s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

 if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

 //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


 var month = [1,2,3,4,5,6,7,8,9,10,11,12];
 var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

 var day = postdate.split("-")[2].substring(0,2);
 var m = postdate.split("-")[1];
 var y = postdate.split("-")[0];

 for(var u2=0;u2<month.length;u2++){
  if(parseInt(m)==month[u2]) {
   m = month2[u2] ; break;
  }
 }

 var trtd = '<div><p class="featured-thumb"><a href="'+posturl+'"><img width="350" height="242" title="'+posttitle+'" alt="'+posttitle+'" src="'+img[i]+'"/></a></p><div class="featuredTitle"><a href="'+posturl+'" title="'+posttitle+'">'+posttitle+'</a></div><p>'+removeHtmlTag(postcontent,summaryPost)+'... </p><a href="'+posturl+'" title="'+posttitle+'" class="readmore">Read more &#187;</a></div>';
 document.write(trtd);

 j++;
}
    document.write('</div>')
}

//]]>
