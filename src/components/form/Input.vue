<!-- input 输入框，输入触发parent校验 -->
<template>
 <div>
  <input 
    :value="value"
    v-bind="$attrs"
    @input="onInput">
 </div>
</template>

<script>
export default {
  name:'Input',
  props:{
    value:{
        type:String,
        default:''
    }
  },
  data () {
    return {
    };
  },
  methods: {
      onInput(e){
        debugger
          // console.log(e.target.value);
          // this.$emit('input',e.target.value)
        this.$parent.$emit('validate');   //触发formItem的
      }
  }
}

</script>
<style>
</style>