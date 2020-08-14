<template>
  <div class="hello">
    <From1 :values="formValues" :rules="rules">
      <FormItem label="姓名" key="name"> 
        <Input 
          type="text"
          placeholder="name"
          v-model="formValues.name"
          />
      </FormItem>
      <FormItem label="密码" key="password"> 
        <Input 
          type="password"
          placeholder="password"
          v-model="formValues.password"
           />
      </FormItem>
    </From1>
  </div>
</template>

<script>
import { 
  Input,
  FormItem,
  // From,
  Form1
} from '@/components/form'

export default {
  name: 'HelloWorld',
  data () {
    return {
      formValues:{
        name: '',
        password:''
      },
      rules:{
        name:[{required:true,message:'请输入名字'}],
        password:[{required:true,message:'请输入密码'}]
      }
    }
  },
  components: {
    Input,
    FormItem,
    From1
  },
  watch:{
    value(n){
      console.log(n);
    }
  },
  methods:{
    onInput(val){

    }
  }
}
</script>
<style scoped>
.hello{
  /* background: #000; */
}
</style>
