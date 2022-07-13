<template>
  <view class="tree" id="my">
    <view>
      <view class="item" v-for="list in lists">
        <a href="#" class="title" @click="curShow(list)">
          {{ list.name }}
          <b :class="list.flag?'down':'up'">^</b>
        </a>
        <view class="p_item" :style="{maxHeight:list.flag?maxHeight:0,'overflow':'hidden'}" >
          <view id="p-list-inner">
            <view v-for="sub in list.sublists">
              <a>{{ sub.name }}</a>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "classDetail",
  data() {
    return {
      lists: [
        {
          name: "运动服务",
          flag: false,
          sublists: [
            {name: "运动服务1"},
            {name: "运动服务1"},
            {name: "运动服务1"},
            {name: "运动服务1"},
          ]
        },
        {
          name: "家电家具",
          flag: false,
          sublists: [
            {name: "家电家具1"},
            {name: "家电家具1"},
            {name: "家电家具1"},
            {name: "家电家具1"}
          ]
        },
        {
          name: "衣服包包",
          flag: false,
          sublists: [
            {name: "衣服包包1"},
            {name: "衣服包包1"},
            {name: "衣服包包1"},
            {name: "衣服包包1"}
          ]
        },
        {
          name: "日常百货",
          flag: false,
          sublists: [
            {name: "日常百货1"},
            {name: "日常百货1"},
            {name: "日常百货1"},
            {name: "日常百货1"}
          ]
        },
        {
          name: "日常百货",
          flag: false,
          sublists: [
            {name: "日常百货1"},
            {name: "日常百货1"},
            {name: "日常百货1"},
            {name: "日常百货1"}
          ]
        }
      ],
      maxHeight:0
    }
  },
  methods: {
    getRect(context, selector) {
      return new Promise((resolve) => {
        const query = uni.createSelectorQuery().in(context);
        query
            .select(selector)
            .boundingClientRect((data) => {
              resolve(data);
            })
            .exec();
      });
    },
    curShow: function (list) {
      this.getRect(this,'#p-list-inner').then(res=>{
        console.log(res)
        this.maxHeight = res.height +'px'
        //取反来控制一级选项的显示与隐藏
        list.flag = !list.flag;
        console.log(list.flag)
      })
    }
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}

#my {
  width: 150px;
  background-color: #0088CC;
}

.tree .item .title {
  width: 150px;
  height: 20px;
  line-height: 20px;
  display: block;
  padding: 10px 0;
  color: white;
  font-size: 16px;
  position: relative;
}

.tree li a:hover {
  background-color: #CC3333;
}

.tree .item .title b {
  position: absolute;
  right: 10px;
  transition: all ease 0.6s;
}

.up {
  transform: rotate(0deg);
}

.down {
  transform: rotate(180deg);
}
.p_item{
  transition:max-height 0.4s ease;
}
.tree .p_item a {
  padding: 3px 0 0 10px;
  color: white;
  box-sizing: border-box;
  width: 150px;
  height: 30px;
  display: block;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
}

</style>
