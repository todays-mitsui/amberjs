(function(b,c,d,e,f,g,a){f=c.createElement('div').appendChild(c.getElementsByTagName('html')[0].cloneNode(true));e=f.querySelectorAll('[href],[src]');for(var i=0,n=e.length;i<n;i++){if(e[i].href){e[i].href=e[i].href}if(e[i].src){e[i].src=e[i].src}}g=f.innerHTML;a=c.createElement('a');a.download=decodeURI(d.pathname+d.hash).replace(/\//g,'__').replace(/#/g,'--')+'.html';a.href=(b.URL||b.webkitURL).createObjectURL(new Blob([g]));a.click()})(window,document,location);
