<template>
  <div :style="style"></div>
</template>

<script>
var debounce = require('lodash.debounce');
var monacoLoader = require('./MonacoLoader');

module.exports = {
  props: {
    //editor 宽，默认100%
    width: { type: [String, Number], default: '100%' },
    //editor 高，默认100%
    height: { type: [String, Number], default: '100%' },
    //editor中的代码
    code: { type: String, default: '// code \n' },
    //cdn源路径
    srcPath: { type: String },
    //语言 ，默认javascript
    language: { type: String, default: 'javascript' },
    //主题 ，默认 vs-dark
    theme: { type: String, default: 'vs-dark' }, // vs, hc-black
    //options 选项，可用来扩展
    options: { type: Object, default: () => {} },
    //
    highlighted: { type: Array, default: () => [{
      number: 0,
      class: ''
    }]},
    //
    changeThrottle: { type: Number, default: 0 }
  },
  //组建加载完成后，通过monacoLoader 创建monaco对象
  mounted() {
    this.fetchEditor();
  },
  //对象销毁
  destroyed() {
    this.destroyMonaco();
  },

  //计算属性
  computed: {
    //通过props 来生成 样式
    style() {
      const { width, height } = this;
      const fixedWidth = width.toString().indexOf('%') !== -1 ? width : `${width}px`;
      const fixedHeight = height.toString().indexOf('%') !== -1 ? height : `${height}px`;
      return {
        width: fixedWidth,
        height: fixedHeight,
      };
    },
    //editor配置选项合并
    editorOptions() {
      // Object.assing 对象合并。  将{}，this.defaults ,this.options,{value:……}合并为一个对象
      return Object.assign({}, this.defaults, this.options, {
        value: this.code,
        language: this.language,
        theme: this.theme
      });
    }
  },
  data() {
    return {
      //editor 默认配置
      defaults: {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: false,
        glyphMargin: true
      }
    }
  },
  watch: {
    highlighted: {
      handler(lines) {
        this.highlightLines(lines);
      },
      deep: true
    },
    language () {
      window.monaco.editor.setModelLanguage(this.editor.getModel(), this.language)
    }
  },
  methods: {
    highlightLines(lines) {
      if (!this.editor) {
        return;
      }
      lines.forEach((line) => {
        const className = line.class;
        const highlighted = this.$el.querySelector(`.${className}`);

        if (highlighted) {
          highlighted.classList.remove(className);
        }

        const number = parseInt(line.number);
        if (!this.editor && number < 1 || isNaN(number)) {
          return;
        }

        const selectedLine = this.$el.querySelector(`.view-lines [linenumber="${number}"]`);
        if (selectedLine) {
          selectedLine.classList.add(className);
        }
      });
    },

    //
    editorHasLoaded(editor, monaco) {
      this.editor = editor;
      this.monaco = monaco;
      this.editor.onDidChangeModelContent(event =>
        this.codeChangeHandler(editor, event)
      );
      this.$emit('mounted', editor);
    },
    codeChangeHandler: function(editor) {
      if (this.codeChangeEmitter) {
        this.codeChangeEmitter(editor);
      } else {
        this.codeChangeEmitter = debounce(
          function(editor) {
            this.$emit('codeChange', editor);
          },
          this.changeThrottle
        );
        this.codeChangeEmitter(editor);
      }
    },

    //加载monaco模块，并创建monaco对象
    fetchEditor() {
      //通过monacoLoader对象加载并创建monaco
      monacoLoader.load(this.srcPath, this.createMonaco);
    },

    //创建monaco对象
    createMonaco() {
      /**
       * monaco.editor.create(document.getElementById("container"), {
            value: "function hello() {\n\talert('Hello world!');\n}",
            language: "javascript"
          });
          demo url:https://microsoft.github.io/monaco-editor/playground.html
       */
       //通过monacoLoader加载，monaco对象被绑定到window下
       //$el：dom元素选择器 ,this.editorOptions: monaco的配置选项
      this.editor = window.monaco.editor.create(this.$el, this.editorOptions);
      //editor 已经被创建后，执行的方法
      this.editorHasLoaded(this.editor, window.monaco);
    },

    //对象销毁
    destroyMonaco() {
      if (typeof this.editor !== 'undefined') {
        this.editor.dispose();
      }
    }
  }
};
</script>
