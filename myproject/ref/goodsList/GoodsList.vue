<template>
  <div class="wrap">
    <div class="category">
      <ul class="list">
        <li class="item" :class="{active: activeCate == 0}" @click="selectList" :data-index="0">
          <div class="title"><span class="name">水饺</span></div>
        </li>
        <li class="item" :class="{active: activeCate == 1}" @click="selectList" :data-index="0">
          <div class="title"><span class="name">面</span></div>
        </li>
        <li class="item" :class="{active: activeCate == 2}" @click="selectList" :data-index="0">
          <div class="title"><span class="name">米饭</span></div>
        </li>
        <li class="item" :class="{active: activeCate == 3}" @click="selectList" :data-index="0">
          <div class="title"><span class="name">米线</span></div>
        </li>
      </ul>
    </div>
    <div class="goods" @scroll="sliderList" ref="goods">
      <ul class="cate-list">
        <li class="cate-item" ref="cateItems">
          <div class="title">
            <span class="name">汉堡</span>
            <span class="desc">各种汉堡,让你吃到爆</span>
          </div>
          <ul class="goods-list">
            <li class="goods-item">
              <div class="logo">
                <img src="/static/img/goods/jtb.webp" alt="">
              </div>
              <div class="content">
                <div class="name">鸡腿堡</div>
                <div class="desc">大鸡腿做的汉堡包</div>
                <div class="sale">
                  <span class="sale-count">月售1220份</span>
                  <span class="rating">好评率99%</span>
                </div>
                <div class="tags">
                  <i class="recommend">老板推荐</i>
                </div>
                <div class="control">
                  <span class="price">&yen;20</span>
                  <span class="shopping">
                    <i class="icon-take icon-jian" @click="reduce()"></i>
                    <span class="count">66</span>
                    <i class="icon-take icon-jia" @click="add()"></i>
                  </span>
                </div>
              </div>
            </li>
            <li class="goods-item">
              <div class="logo">
                <img src="/static/img/goods/jtb.webp" alt="">
              </div>
              <div class="content">
                <div class="name">虾肉堡</div>
                <div class="desc">大龙虾</div>
                <div class="sale">
                  <span class="sale-count">月售11120份</span>
                  <span class="rating">好评率99%</span>
                </div>
                <div class="tags">
                  <i class="recommend">老板推荐</i>
                </div>
                <div class="control">
                  <span class="price">&yen;30</span>
                  <span class="shopping">
                    <i class="icon-take icon-jian" @click="reduce()"></i>
                    <span class="count">1</span>
                    <i class="icon-take icon-jia" @click="add()"></i>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      activeCate: 0, // 激活的分类
      cateItemsHeight: [0], // 商品列表每一个分类列表的高度
      goodsList: [] //  产品列表
    }
  },
  created () {
    //  接收来自首页的参数
    //  使用axios发起Ajax请求
    //  获得数组结果,对比id,找到唯一的一个商家
  },
  updated () {
    // 在goodsList被初始化之后，将每组列表项的高度与之前的高度相加，再存储在高度数组中

  },
  methods: {
    // 当选择左侧菜单时，根据自定义属性index获取所选的菜单ID，根据ID去高度数组里找到将要滑动的位置
    selectList (event) {
    },
    sliderList (event) {
      // 随着右侧菜单的滑动，从后向前比较，如果top大于等于某个分组，说明该组已经滑动到顶部，则将左侧菜单对应的项目设置样式
    },
    reduce (item) {
      //  商品数量减一
      //  使用$set进行设置,则count属性也是响应式的
    },
    add (item) {
      //  商品数量加一
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrap {
  flex: auto;
  display: flex;
  // height:400px;
  .category {
    flex: none;
    width: 1.7391rem;
    overflow: auto;
    .list {
      background: #f8f8f8;
      border-right 1px solid #eee;
      .item {
        padding: 0 0.2415rem;
        font-size: 0.2818rem;
        letter-spacing: 3px;
        line-height: 1.5;
        border-bottom 1px solid #eee;
        .title {
          padding: 0.4rem 0;
          color: #686868;
          text-align: center;
        }
        &.active {
          font-weight: 700;
          background: #fff;
        }
        &:last-child > .title {
          border: none;
        }
      }
    }
  }
  .goods {
    padding-top: 0.161rem;
    margin-left: 0.2576rem;
    flex: auto;
    overflow-y: auto;
    .cate-list {
      .cate-item {
        .title {
          display: flex;
          padding: 0.2013rem 0;
          font-size: 0;
          overflow: hidden;
          white-space: nowrap;
          border-bottom: 1px solid #eee;
          .name {
            flex: none;
            margin-right: 0.1208rem;
            font-size: 0.2818rem;
            font-weight: 700;
            color: #666;
            vertical-align: bottom;
          }
          .desc {
            flex: auto;
            color: #999;
            font-size: 0.2818rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: bottom;
          }
        }
        .goods-list {
          .goods-item {
            display: flex;
            padding: 0.3623rem 0.2415rem 0.3623rem 0;
            border-bottom: 1px solid #f7f7f7;
            .logo {
              flex: none;
              img {
                width: 1.8116rem;
                height: 1.8116rem;
                border-radius: 0.0805rem;
              }
            }
            .content {
              flex: auto;
              margin-left: 0.2415rem;
              overflow: hidden;
              .name {
                font-size: 0.3382rem;
                font-weight: 700;
                color: #333;
              }
              .desc {
                padding-top: 0.161rem;
                color: #999;
                width: 100%;
                font-size: 0.2415rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .sale {
                padding-top: 0.161rem;
                font-size: 0;
                color: #666;
                .sale-count {
                  margin-right: 0.2013rem;
                  font-size: 0.2415rem;
                }
                .rating {
                  font-size: 0.2415rem;
                }
              }
              .tags {
                padding-top: 0.161rem;
                .recommend {
                  padding: 0.0805rem;
                  color: #ff5339;
                  font-style: normal;
                  font-size: 0.2415rem;
                  border: 1px solid #ff5339;
                }
              }
              .control {
                margin-top: 0.161rem;
                line-height: 0.5636rem;
                .price {
                  color: #ff5339;
                  font-size: 0.3382rem;
                  font-weight: bolder;
                }
                .shopping {
                  float: right;
                  font-size: 0;
                  .count {
                    display: inline-block;
                    padding: 0 0.161rem;
                    font-size: 0.3623rem;
                    vertical-align: middle;
                  }
                  .icon-take {
                    display: inline-block;
                    color: #2395ff;
                    font-size: 0.5636rem;
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
