<template>

  <div class="home">
    <div class="main">
      <router-view />
      <div class="navbar">
        <ul class="nav-menu">
          <li class="menu-item">
            <router-link class="link" to='take'>
              <i class="icon-take icon-eleme"></i>
              <p>外卖</p>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link class="link" to='find'>
              <i class="icon-take icon-faxian"></i>
              <p>发现</p>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link class="link" to='order'>
              <i class="icon-take icon-order"></i>
              <p>订单</p>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link class="link" to='mine'>
              <i class="icon-take icon-wode"></i>
              <p>我的</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>
<script>
  export default {

  }

</script>
<style scoped lang="stylus">
  .home {
         margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .main {
      flex: auto;
    }

    .navbar {
      position: fixed;
      bottom: 0;
      width: 100%;
      overflow: hidden;
      flex: 0 0 1.2077rem;
      background-color: #f6f6f6;

      .nav-menu {
        display: flex;
        height: 1.3rem;

        .menu-item {
          flex: auto;
          text-align: center;

          .link {
            display: block;
            padding: 5px;
            width: 100%;
            height: 100%;
            color: #666;
            box-sizing: border-box;

            &.active {
              color: #00a1ff;
            }

            i {
              vertical-align: bottom;
              font-size: 0.5797rem;
            }

            p {
              margin: 2px 0 0 0;
              font-size: 0.2899rem;
            }
          }
        }
      }
    }
  }

</style>
