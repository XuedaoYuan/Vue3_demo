<template>
  <div>
    <p>name: {{name}}</p>
    <p>text: {{text}}</p>
    <p>doubleText: {{doubleText}}</p>
    <p>successString {{successString}}</p>
    <p>user: {{user}} <button @click="setAge">set age</button></p>

  </div>
  <div>{{book}}
    <p>{{bookTitle}}</p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, reactive, ref, toRef } from 'vue';
// import { Options, Vue } from 'vue-class-component';
// import  from '@/components/ .vue'
interface Book {
  title: string;
  author?: string;
  year?: number | string;
}
interface User {
  name: string;
  age?: number;
}
export default defineComponent({
  name: 'Child',
  props: {
    name: String,
    success: { type: String },
    bookC: {
      type: Object as PropType<Book>,
      required: false
    },
    bookA: {
      type: Object as PropType<Book>,
      //   可以使用箭头函数
      default: () => ({
        title: '',
        author: '',
        year: ''
      }),
      validator: (book: Book) => !!book.title
    },
    bookB: {
      type: Object as PropType<Book>,
      //   不适用箭头函数， 使用function的话, 手动传入this
      default(this: void) {
        return {
          title: '',
          author: '',
          year: ''
        };
      },
      validator: function (this: void, book: Book) {
        return !!book.title;
      }
    }
  },
  emits: {
    addBook(payload: { bookName: string }) {
      return payload.bookName.length > 0;
    },
    change(payload: boolean) {
      return true;
    }
  },
  //   components: {}
  setup(props) {
    const text = ref<string | number>('123');
    text.value = 100;
    // const successString = toRef<any, string>(props, 'success');
    const successString = toRef(props, 'success');
    console.log(successString.value);
    // computed 将从返回值自动推断类型
    const doubleSuccessString = computed(() => {
      if (successString.value) return successString.value + successString.value;
      return '';
    });

    const user = reactive<User>({
      name: '',
      age: 0
    });

    return { text, successString, user };
  },
  data() {
    return {
      book: {
        title: '',
        author: '',
        year: ''
      } as Book
    };
  },
  computed: {
    doubleText(): string {
      return `${this.text}-${this.text}`;
    },
    bookTitle: {
      get(): string {
        return `书的名字是：${this.book.title}`;
      },
      set(title: string) {
        this.book.title = title.toUpperCase();
      }
    }
  },
  mounted() {
    this.book.title = 'JS教程';
    this.text = 'hello world';
    this.bookTitle = 'javascript program';
  },
  methods: {
    onSubmit() {
      this.$emit('addBook', { bookName: 'js教程' });
      this.$emit('change', false);
    },
    setAge() {
      this.user.age = 18;
    }
  }
});
</script>
<style lang="stylus" scoped></style>
