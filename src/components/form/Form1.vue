<!-- 这个组件主要是通过provide将数据、rule传递到他的子孙隔代级；定义全部校验的地方 -->
<template>
  <div class='form'>
    1223
      <slot></slot>
  </div>
</template>

<script>
export default {
//   重点
  provide(){
    return {
      form:tihis
    }
  },
  name:'Form', 
  props:{
      values:{
          type:Object,
          default:{}
      },
      rules:{
          type:Object,
          default:{}
      }
  },
  mounted(){
      console.log(this.values);
      console.log(this.rules);
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style scoped>
</style>