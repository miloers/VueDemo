<template>
    <div id="index">
        <form id="queryform" action="query.html">
            <div class="weui_panel"><div class="weui_panel_hd  font_yhui font_sz15">税则速查</div>
            <div class="weui_media_box ">
                <h6 class="weui_media_title">
                    <span class="dis_inline ">
                        <i class="iconfont "></i>
                    </span>
                    <input id="hscode" class="weui_input font_sz13 font_yhui margin_l5" name="hscode" placeholder="请输入商品编码" v-model="hscode">
                    </h6>
            </div>
            <div class="weui_media_box ">
                <h6 class="weui_media_title">
                    <span class="dis_inline"><i class="iconfont"></i></span>
                    <input class="weui_input font_sz13 font_yhui margin_l5" type="text" id="hsname" name="hsname" placeholder="请输入商品名称" v-model="hsname">
                </h6>
            </div>
         </div>
         <div class="query_button">
            <a href="javascript:;" class="weui_btn weui_btn_primary font_yhui query" @click="query">查询</a>
        </div>
    </form>
    </div>
</template>
<script>
    export default {
        name: 'index',
        data() {
            return {
                hscode: '',
                hsname: ''
            }
        },
        methods: {
            query() {
                if (!this.hscode && !this.hsname) {
                    alert("必须输入一个有效条件！")
                } else {
                    this.$router.push({
                        name: 'search',
                        params: {
                            hscode: this.hscode,
                            hsname: this.hsname
                        }
                    })
                }
            }
        }
    }
</script>
<style lang="">
    .query {
        width: 80%;
        border-radius: 2px;
        letter-spacing: 0.1rem;
    }
</style>