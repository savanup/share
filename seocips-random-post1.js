var randarray = new Array();var l=0;var flag;
var numofpost=10;function randomposts(json){
var total = parseInt(json.feed.openSearch$totalResults.$t,10);
for(i=0;i < numofpost;){flag=0;randarray.length=numofpost;l=Math.floor(Math.random()*total);for(j in randarray){if(l==randarray[j]){ flag=1;}}
if(flag==0&&l!=0){randarray[i++]=l;}}document.write('<ul>');
for(n in randarray){ var p=randarray[n];var entry=json.feed.entry[p-1];
for(k=0; k < entry.link.length; k++){if(entry.link[k].rel=='alternate'){var item = "<li>" + "<a href=" + entry.link[k].href + ">" + entry.title.$t + "</a> </li>";
document.write(item);}}
}document.write('</ul>');}
