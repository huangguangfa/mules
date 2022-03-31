async function test(){
    const user = await test2()
    console.log('info',user);

}


function test1(){
    return new Promise( resolve =>{
        setTimeout( () =>{
            resolve('1111')
        },1000)
    })
}

async function test2(){
    const name = 'gf';
    const res = await test1();
    return {
        name,
        age:res
    }
}   

export const aaaa = () =>{
    console.log('aaaaa')
}

test()