let _Vue  //vue实例
class VueRouter{
    // 选项 routes
    constructor(options){
        this.$options = options;
        // 缓存path和route的映射关系
        this.routeMap = {}
        this.$options.routes.forEach(
            route =>{
                this.routeMap[route.path] = route
            }
        )
        // 需要定义一个响应式的current属性
        const initial = window.location.hash.slice(1) || '/'
        _Vue.util.defineReactive(this,'current',initial)
        // 监控url变化
        window.addEventListener('hashchange',this.onhashchange.bind(this))
       
    }
    onhashchange(){
        // #后面 响应式
        this.current = window.location.hash.slice(1)
    }
}
VueRouter.install = function(Vue){
    _Vue = Vue
    // 1挂载$router
    Vue.minxin({
        beforeCreate(){
            // 判断有router
            // this是指组件实例
            if(this.$options.router){
             Vue.prototype.$router = this.$options.router
            }
        }
    })
    // 2定义全局router-link router-view组件
    Vue.component('router-link',{
        props:{
            to:{
                type:String,
                require:true
            }
        },
        render(h){
            // <router-link to="/about"></router-link>
            // <a href="#/about">xxx</a>
            return h('a',{
                attrs:{
                    href:'#'+this.to
                }
            })
            // 或者jsx也实现
        // return <a href={'#'+this.to}>{this.$slots.default}</a>
        }
    })
    Vue.component('router-view',{
        render(h){
            let component = null;
            // 找到当前url对应的组件
            // let route = this.$router.$options.routes.find(
            //     route=>route.path === this.$router.current
            // )
            // if(component) component = route.component;
            let {routeMap,current} = this.$route
            component = routeMap[current].component?routeMap[current].component:null
            // 渲染传入得组件
            return h(component)
        }
    })

}