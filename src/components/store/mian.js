let _Vue
class Stroe {
    constructor(options){
        this.$option = options
        this._mutation = options.mutation
        this._actions = options.actions
        // 创建响应式的state 借鸡生蛋
        this._vm = new _Vue({
            data(){
                return{
                    // 不希望被代理$$
                    $$state:options.state
                }
                // return options.state
            }
        })
    }
    // 修改this
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
}
get state(){
    return this._vm._data.$$state
}
set state(v){
    console.error('error');
}
// 修改state
// this.$store.commit('add',v)
commit(type,v){
    // 获取type的mutation
    let fn = this._mutation[type]
    if(!fn) return
    fn(this.state,v)
}
dispatch(type,v){
    // 获取type的action
    let fn = this._action[type]
    if(!fn) return
    // 传入当前store实例上下文
    return fn(this,v)
}
function install(Vue){
    _Vue = Vue
    Vue.mixin({
        beforeCreate(){
            if(this.$option.stroe){
                Vue.prototype.$store = this.$option.store
            }
        }
    })
}
export default {
    Stroe,
    install
}