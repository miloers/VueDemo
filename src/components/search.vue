<template>
    <div id="search">
        <load></load>
        <div class="weui_panel weui_panel_access">
            <div class="weui_panel_hd font_sz15">查询列表</div>
            <div class="weui_panel_bd">
                <div v-for="item in items">
                    <a class="weui_panel_ft" @click="query(item.HSCode_Display)">
                        <div class="weui_media_box weui_media_text">
                            <h4 class="weui_media_title">商品编码 : {{item.HSCode_Display}}</h4>
                            <p class="weui_media_desc">商品名称 :{{item.CargoName}}</p></div>
                    </a>
              </div>         
            </div>
            <div class="query_button">
                    <a href="javascript:;" @click="back" class="weui_btn weui_btn_primary font_yhui query">返回</a>
            </div>
     </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                hsname: '',
                hscode: '',
                items: []
            }
        },

        created() {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                this.hsname = this.$route.params.hsname;
                this.hscode = this.$route.params.hscode;
                if (!this.hsname && !this.hscode) {
                    this.$router.push({
                        path: 'index'
                    })
                }
                this.getData();
            },
            back() {
                this.$router.push({
                    path: 'index'
                })
            },
            query(item) {

                var hscode = item.replace(".", "");

                this.$router.push({
                    name: 'details',
                    params: {
                        hscode: hscode,
                        hsname: this.hsname
                    }
                })

            },
            getData() {
                this.$http.get("" + this.hscode + "&CargoName=" + this.hsname, {}, {
                    headers: {},
                    emulateJSON: true
                }).then(response => {
                    this.items = JSON.parse(response.data);
                    if (this.items.length == 1) {
                        var hscode = this.items[0]["HSCode_Display"];
                        this.query(hscode);
                    }
                    console.log(this.items[0]["HSCode_Display"]);
                    console.log(this.items.length);
                }, response => {
                    // 这里是处理错误的回调
                    alert("网络异常！")
                    console.log(response)
                });
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