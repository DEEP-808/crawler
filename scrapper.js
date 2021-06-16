const rq = require('request-promise');
const cheerio = require('cheerio');
const got = require('got');
const { html } = require('cheerio/lib/static');
const url ='https://www.codechef.com/users/deepaknad';
let code_chef={
    getStarts:async function(url){
        await got(url).then(response =>{
            const $ =  cheerio.load(response.body);
            let stars = ($('.rating').text()[0]);
            return stars;
        }).catch(err=>{
            console.log("ERR : "+err);
        });
    },
    getRating : async function(url){
        await got(url).then(response=>{
            const $ = cheerio.load(response.body);
            var rating=$('.rating-number').text();
            console.log(rating);
            return rating;
        }).catch(err=>{
            console.log("ERR : "+err);
        });
    },   
    getSolved : async function(url)
    {
        await got(url).then(response=>{
            const $ =  cheerio.load(response.body);
            return $('section[class="rating-data-section problems-solved"]').find('div > h5').text();
        }).catch(err=>{
            console.log("ERR : "+err);
        });
    }
}


// var finalrating = await code_chef.getRating(url);
// var finalstars  = await code_chef.getStarts(url);
// var Fsolved     = await code_chef.getSolved(url);

// console.log(finalrating);
// console.log(finalstars);
// console.log(Fsolved);


// got(url).then(response =>{
//     const $ = cheerio.load(response.body);
//     console.log($('.rating').text()[0]);
// }).catch(err=>{
//     console.log("ERR : "+err);
// });

// got(url).then(response=>{
//     const $ = cheerio.load(response.body);
//     console.log($('.rating-number').text());
// }).catch(err=>{
//     console.log("ERR : "+err);
// });

// got(url).then(response=>{
//     const $ = cheerio.load(response.body);
//     console.log($('section[class="rating-data-section problems-solved"]').find('div > h5').text());
// }).catch(err=>{
//     console.log("ERR : "+err);
// });

async function get_stars(){    
    await rq(url)
    .then(function(html){
    //console.log(html);
    var $ = cheerio.load(html);
    //console.log($('.rating', html).text()[0])
    //console.log(typeof(all_ratings));
    // console.log(all_ratings.splice(0,1));
    // console.log(all_ratings.splice(1));
    console.log($('.rating',html).text()[0]);
    var rating=$('.rating-number').text();
    console.log(rating);
    console.log( $('section[class="rating-data-section problems-solved"]').find('div > h5').text());
        return rating;
    })
    .then(function(rating){
        return rating;
    })
    .catch(function(err){
    //handle error
    console.log("ERR :"+err);
    });

};
(async function(){
    console.log(await get_stars());
})()
