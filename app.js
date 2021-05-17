const result=document.querySelector(".output");
let a="",b="",op,str="",f1=0,x=0,y=0;
function calc(str){
    for(let i=0;i<str.length;i++){
        if(str[i]==='+'||str[i]==='-'||str[i]==='*'||str[i]==='/'){
            op=str[i];
            f1=1;
        }
        else{
            if(f1===0){
                a=a+str[i];
            }
            else{
                b=b+str[i]
            }
        }
    }
    x=parseInt(a);y=parseInt(b);
    switch(op){
        case '+':
            x=x+y;
            break;
        case '-':
            x=x-y;
            break;
        case '*':
            x=x*y;
            break;
        case '/':
            x=x/y;
            break;
    }
    return x;
}
const key=document.addEventListener('click',
function(event){
    const value=event.target.innerText;
    switch(value){
        case '0':
            str=str+value;
            break;
        case '1':
            str=str+value;
            break;
        case '2':
            str=str+value;
            break;
        case '3':
            str=str+value;
            break;
        case '4':
            str=str+value;
            break;
        case '5':
            str=str+value;
            break;
        case '6':
            str=str+value;
            break;
        case '7':
            str=str+value;
            break;
        case '8':
            str=str+value;
            break;
        case '9':
            str=str+value;
            break;
        case '+':
            str=str+value;
            break;
        case '-':
            str=str+value;
            break;
        case '*':
            str=str+value;
            break;
        case '/':
            str=str+value;
            break;
        case 'C':
            str='';
            break;
        case '←':
            let s="";
            for(let i=0;i<str.length-1;i++){
                s=s+str[i];
            }
            str=s;
            break;
        case '=':
            str=calc(str);
            a="";
            b="";
            f1=0;
            break;
    }
    result.innerText=str;
});

