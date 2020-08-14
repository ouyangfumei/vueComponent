<!-- label error处理，校验单个是否通过-->
<template>
  <div class='FormItem'>
    <label for="">{{label}}</label>
    <slot></slot>
    <p class="error" v-if="error">error</p>
  </div>
</template>

<script>
import Validator from "async-validator";
export default {
  // 从form里面得到rules和数据源 provide 和inject
  inject:['form'],
  name:'FormItem', 
  props:{
      label:{
        type:String,
        default:''
      },
      key:{
        type:String,
        default:''
      }
  },
  data () {
    return {
      error:false
    };
  },

  methods: {
    // 进行单个校验
    validate(){
      debugger
      // 获取到rules和value来对应，判断是否出现error
      let itemRule = form.rules[this.key];
      let itemValue = form.values[this.key];
      // 创建一个校验器实例
      let validator = new Validator({[this.key]:itemRule});
      // 校验返回promise
      return validator.validate({[this.key]:itemValue},errors=>{
        if(errors){
          this.error = errors[0].message;
        }else{
          this.error = '';
        }
      })
    }
  }
}

</script>
<style scoped>
</style>