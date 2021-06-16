const cc=require('./codechef');
const url ='https://www.codechef.com/users/deepaknad';
cc.getCodechef(url,function(result){
    console.log('result',result);
});