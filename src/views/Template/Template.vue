<template>
  <div class="view-template">
    <Card>
      <textarea ref="mycode" v-model="code"></textarea>
      <div class="tool-bar clearfix">
        <Button>保存</Button>
      </div>
    </Card>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/xml-hint'
import 'codemirror/addon/hint/html-hint'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/hint/show-hint.css'

export default {
  data () {
    return {
      code: 'function myScript(){return 100;}\n'
    }
  },
  mounted () {
    this.editor = CodeMirror.fromTextArea(this.$refs.mycode, {
      value: 'function myScript(){return 100;}\n',
      mode: 'javascript',
      lineNumbers: true,
      line: true
    })
  }
}
</script>

<style scoped>
.tool-bar{
  background: #fff;
  width: 100%;
  padding: 10px;
}
</style>>
