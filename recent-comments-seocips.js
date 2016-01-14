/**
 * Beauty Recent Comments (http://www.seocips.com/2014/04/widget-recent-comments-for-blogger.html)
**/
function tampilkankomentar(a) {
	var b, urlkomentar, c, isikomentar, lihatkomentar;
	for (var i = 0; i < jmlkomentar; i++) {
		b = a.feed.entry[i];
		if (i == a.feed.entry.length) break;
		for (var k = 0; k < b.link.length; k++) {
			if (b.link[k].rel == 'alternate') {
				urlkomentar = b.link[k].href;
				break
			}
		}
		for (var p = 0; p < b.author.length; p++) {
			namaAdmin = b.author[p].name.$t;
			var c = new Array();
			try {
				c = b.author[p].gd$image.src
			} catch(error) {
				c = 'http://img1.blogblog.com/img/anon36.png'
			}
			if (c.indexOf("/s512-c/") != -1 && c.indexOf("http:") != 0) {
				c = "http:" + c
			}
		}
		urlkomentar = urlkomentar.replace("#", "#comment-");
		if ("content" in b) {
			isikomentar = b.content.$t
		} else if ("summary" in b) {
			isikomentar = b.summary.$t
		} else {
			isikomentar = ""
		}
		var d = /<\S[^>]*>/g;
		isikomentar = isikomentar.replace(d, "");
		if (isikomentar.length > jmlkarakter) {
			isikomentar = isikomentar.substring(0, jmlkarakter) + "..."
		}
		lihatkomentar = "<li><a rel='nofollow' href='" + urlkomentar + "'>";
		lihatkomentar += "<div class='gamen'><span>" + namaAdmin + "</span><img height='40' width='40' src='" + c + "'/></div>";
		lihatkomentar += "<div class='ismen'>" + isikomentar + "</div>";
		lihatkomentar += "</a></li>";
		document.write(lihatkomentar)
	}
}
