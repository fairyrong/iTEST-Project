<template>
    <div class="nav-top row">
        <div class="head-left col-md-3">
            <span>logo</span>
        </div>
        <ul class="nav-ul col-md-6">
            <li class="nav-title"v-on:mouseover="showMeun($event)">
                <a href="javascript:void(0)">班级空间</a>
                <section class="nav-title-meun">
                    <router-link to="/myClass">我的班级</router-link>
                    <router-link to="/classTest">班级测试</router-link>
                    <router-link to="/schoolTest">学校考试</router-link>
                </section>
            </li>
            <li class="nav-title"v-on:mouseover="showMeun($event)">
                <a href="javascript:void(0)">考试任务</a>
                <section class="nav-title-meun">
                    <router-link to="/makePaper">组卷任务</router-link>
                    <router-link to="/reviewPaper">审卷任务</router-link>
                    <router-link to="/supervisor">监考任务</router-link>
                    <router-link to="/readPaper">阅卷任务</router-link>
                </section>
            </li>
            <li class="nav-title" v-on:mouseover="showMeun($event)">
                <a href="javascript:void(0)">试题组卷</a>
                <section class="nav-title-meun">
                    <router-link to="/myPaper">我的试卷</router-link>
                    <router-link to="/myTemplate">我的模板</router-link>
                    <router-link to="/myQuestion">我的试题</router-link>
                </section>
            </li>
            <li class="nav-title"v-on:mouseover="showMeun($event)">
                <a href="javascript:void(0)">成绩统计</a>
            </li>
        </ul>
        <div class="head-left col-md-3">
          <span style="margin-left:20px;display:inline-block;">
          <i class="iconfont user-pic">&#xe601;</i>
          <span>用户</span>
          </span>
        </div>
    </div>
</template>


<style>
    .head-left,.head-right,.nav-ul{padding: 0;}
    .nav-ul li{list-style: none;display: inline-block; padding: 0;border:0;}
    .nav-title{font-size: 18px;text-decoration: none;color:#2c3e50;width:24%;margin:0;line-height: 50px;height: 40px;padding-bottom: 10px;position:relative;}
    .nav-title:hover{border-bottom: 3px orange solid;}
    .nav-title:focus{border-bottom: 3px orange solid;}
    .nav-title a{text-decoration: none;color: #2c3e50;}
    .nav-title-meun {position: absolute;top:40px;font-size: 16px;width:100%;text-align:center;display: none;border: 1px solid #ccc;}
    .nav-title-meun a{display:block;width:100%;height: 30px;line-height: 30px;}
</style>
<script>
    export default{
        name: 'nav',
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        },
      methods: {
        showMeun: function (event) {
          var dom = event.target.childNodes.item(2);
          console.log(dom);
          if (dom.style.display === 'none') {
            dom.style.display = "block";
          } else {
            dom.style.display = "none";
          }
        }
      }
    }
</script>
