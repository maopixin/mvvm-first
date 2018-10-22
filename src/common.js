let ele = document.getElementById('box');
let data = {
    num : 44,
    age : 12
}
for (const item in data) {
    Object.defineProperty(data, item, {
        set:function(val){
            data[item] = val
        },
        get:function(){
            return data[item]
        }
    })
}

ele.innerHTML = data.num



console.log(data.num)