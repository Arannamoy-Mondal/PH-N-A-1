{
    function processValue(value: string | number): number{
        if(typeof(value)==="string")return value.length
        return value*2;
    }
    
    
    console.log(processValue("hello"));
    console.log(processValue(10));
}