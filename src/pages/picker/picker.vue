<template>
  <view class="content">
      <van-picker
        :columns="columns"
        value-key="name"
        @change="onChange"
    />
  </view>
</template>

<script>
import pickerData from "./picker.json";

export default {
  data() {
    return {
      columns: [
        {
          values: [],
        },
        {
          values: [],
        },
        {
          values: [],
        },
      ],
      data: [], //接口返回所有省市区数据
    };
  },
  onLoad() {
    this.getPickerData();
    this.$nextTick(function () {
      this.pageShow = true;
    });
  },
  methods: {
    // 获取数据
    getPickerData() {
      let res = pickerData.body;
      this.setList(res[0].children, 0);
    },
    setList(courseList, index) {
      this.data = courseList;
      // 默认展示一级的数据
      this.columns[0].values = courseList || [];
      // 默认展示二级的数据
      this.columns[1].values = courseList[0]?.children || [];
      // 默认展示三级的数据
      this.columns[2].values = courseList[0]?.children?.[0].children || [];

    },
    onChange(event) {
      const {picker, value, index} = event.detail;
      console.log('picker:::::', picker)
      // 回调时修改第2列数据
      if (picker === 0) {
        picker.setColumnValues(1, this.courseDate2(this.data, value[0].code, value));
        picker.setColumnValues(2, this.courseDate3(this.courseDate2(this.data, value[0].code, value), value[1].code, value));
      } else {
        picker.setColumnValues(2, this.courseDate3(this.courseDate2(this.data, value[0].code, value), value[1].code, value));
      }
    },
    // 二级课程处理
    courseDate2(data, code, value) {
      console.log('code:::::', code)
      console.log('data:::::', data)
      console.log('value:::::', value)
      return data.filter(item => item.code === code)?.[0]?.children || []
    },
    // 三级课程处理
    courseDate3(list, code) {
      console.log(list, code)
      console.log('三级课程处理')
      return list?.filter(item => item.code === code)?.[0]?.children || []
    },
  },
};
</script>

<style></style>
