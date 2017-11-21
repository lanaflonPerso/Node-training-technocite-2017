const http = require('http');
const values=[];
const sitesToVisit = ['http://www.lesoir.be','http://www.voo.be','http://www.pass.be']
let sitesLoaded = 0;
const getStringFromUrlAndSTock = (url) =>{
    http.get(url, res =>{
        res.setEncoding('utf-8');
        let body = '';
        res.on('data',data=>{
           body +=data;
        })
        res.on('end', () => {
            values.push(body);
            sitesLoaded++;
            console.log(`data from ${url} fully downloaded`);
            if(sitesLoaded === sitesToVisit.length){
                console.log('all sites loaded')
            }
        })
    })
}

const init=()=>{ 
    sitesToVisit.map(site =>{
        getStringFromUrlAndSTock(site)
    })
}
init();