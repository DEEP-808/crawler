const axios =require('axios');
const cheerio= require('cheerio');
const url ='https://www.codechef.com/users/deepaknad';

module.exports.getCodechef=async function(){
    async function getStats(){
        let userstats=[];
        await axios(url).then(response=>{
            const html=response.data;
            const $ = cheerio.load(html)
            let stars = ($('.rating').text()[0]);
            let rating=$('.rating-number').text();
            let solved=$('section[class="rating-data-section problems-solved"]').find('div > h5').text();
            console.log(stars)
            console.log(rating);
            console.log(solved)
            userstats=[stars,rating,solved];
            //console.log('Inside function',userstats);
            //return userstats;
        }).catch(console.error);
        return userstats;

    }
    let x=[]
    async function final(){
        x = await getStats();
        console.log(x);
        return x;
    }
    console.log(await final());
}
// let res = await  getStats();
// console.log('final result ',res);