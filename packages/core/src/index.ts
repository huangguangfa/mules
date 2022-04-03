function test(n:string){
    return new Promise( resolve =>{
        setTimeout( () =>{
            resolve(111 + n)
        },2000)
    })
}


export async function test1(){
    const res = await test('1')
    console.log(res)
}


test1()