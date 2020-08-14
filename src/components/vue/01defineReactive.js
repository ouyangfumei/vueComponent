// vue源码 object.definePropty()
// 拦截：对某个对象的某个key做拦截 {get...set...}
// 内部变量暴露给外部 // 闭包
// 遍历指定的数据对象key 拦截他们
function defineReactive(obj,key,val){
    // val是否还是对象递归处理
    observe(val);
    Object.defineProperty(obj,key,{
        get(){
            console.log(val)
            console.log('get',key);
            return val;
        },
        set(newVal){
            if(val!==newVal){
                 // newVal是否还是对象递归处理
                observe(newVal);
                val = newVal;
                console.log(newVal)
                console.log('set',key);
            }
        }
    })
}
// 使用：
let obj = {}
defineReactive(obj,'foo','fooVal');
obj.foo
obj.foo = 'fppppppppppp'

// 遍历指定的数据对象key 拦截他们
function observe(obj){
    if(typeof obj !== 'object' || obj == null){
        return obj
    }
    Object.keys(obj).forEach(key=>{
        defineReactive(obj,key,obj[key])
    })
}
// 添加新的key的时候
function set(obj,key,val){
    defineReactive(obj,key,val)
}
obj.xinkey = '1111'