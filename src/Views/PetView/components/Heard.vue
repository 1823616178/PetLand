<template>
  <div>

    <body style="BodyCss">
      <div class="crumb-nav-large"><a href="">爱宠国度</a>&gt;爱宠小窝<br /></div>
      <div class="module-title">
        我的爱宠
        <span></span>
        <a :href="item.src"
           v-for="(item,index) in Heard"
           :key="index">{{ item.title }} <span></span></a>
      </div>

      <div class="module-content">
        <div class="chief1 self1">
          <img src="http://g.52gd.net/image/game/ggpet/bag/201704162159124815.jpg"
               alt=""
               class="nvcframe1" />
          <img src="http://g.52gd.net/image/game/ggpet/new/3_mood_0.jpg"
               alt="."
               class="nvcframe1" />
          <img src="http://g.52gd.net/image/game/ggpet/bag/201704162147184270.jpg"
               alt="" />
        </div>

        <a href="">免费抽奖</a>
        (马上抽奖)<br /><a href="">雨菲菲</a>
        :8级MM(♀)
        <div style="display:inline-block;width:18px;height:18px;border-width: 0px;-moz-border-radius: 0px;-khtml-border-radius: 0px;-webkit-border-radius: 0px;border-radius: 0px;padding:0px;background:url(/image/vip/5.gif);background-size:100% 100%"></div>
        <a href="">换装 </a><br />成就:<img src="http://g.52gd.net/image/game/ggpet/ach/0.gif"
             alt="." /><br />称号:无<br />成长:<img src="http://g.52gd.net/image/game/ggpet/top/3.gif"
             alt="." />114276/129600<br /><a href="">智力</a>:2964/5000(小学)<br />美艳度:30(看看
        <a href="">美艳度服饰</a>)<br />

        <!-- 状态 -->
        <el-col v-for="(item,index) in status"
                :key="index">
          <a href="">{{item.title}}</a>:
          <img :src="item.src"
               alt="." />{{item.Value.min}}/{{item.Value.min}}<br />
        </el-col>

        <!-- 动作 -->
        <a href="">去医院</a><br />
        【<a href="">动态墙</a>】<br />
        <!-- message -->
        <div class="tab-5 spacing-3"
             v-for="(item,index) in message"
             :key="index">
          {{item.message}}<br />
        </div>

        【<a href="">留言板</a>】<br />
        <div class="tab-5 spacing-3"
             v-for="(item,index) in leaveWorld"
             :key="index">
          ({{item.date}})<a href="">
            <font color="#ff9224">{{item.name}}</font>
          </a>{{item.leave}}<br />
        </div>
      </div>
    </body>
  </div>

</template>

<script>
import PetLand from '@/api/PetLand.js'
import Data from '@/data/data.js'
export default {
  name: 'Heard',
  created () {
    window.console.log('ss')
    PetLand.leaveWord().then((result) => {
      window.console.log(result)
    }).catch((err) => {
      window.console.log(err)
    });
  },
  data () {
    return {
      Heard: Data.Heard,
      status: Data.status,
      message: Data.message,
      leaveWorld: Data.leaveWord
    }
  }
}
</script>

<style>
.BodyCss {
  text-align: left;
  display: flex;
  justify-content: left;
  float: left;
}
</style>
