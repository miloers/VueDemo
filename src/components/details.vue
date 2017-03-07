<template>
    <div class="weui_panel" id="Szpanel" >
        <div class="weui_panel_hd  font_yhui font_sz15">查询详情</div>
        <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
                <p class="font_yhui font_sz13">商品编号</p>
            </div>
            <div class="weui_cell_ft font_yhui font_sz13">{{items[0]["HSCode_Display"]}}</div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
                <p class="font_yhui font_sz13">商品名称</p>
            </div>
            <div class="weui_cell_ft font_yhui font_sz13">{{items[0]["CargoName"]}}</div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
                <p class="font_yhui font_sz13">法一单位</p>
            </div>
            <div class="weui_cell_ft font_yhui font_sz13">{{items[0]["LegalUnitsName1"]}}</div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
                <p class="font_yhui font_sz13">法二单位</p>
            </div>
            <div class="weui_cell_ft font_yhui font_sz13">{{items[0]["LegalUnitsName2"]}}</div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
                <p class="font_yhui font_sz13">普通税率</p>
            </div>
            <div class="weui_cell_ft font_yhui font_sz13">{{items[0]["Import_General_Tariff"]}}</div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
                <p class="font_yhui font_sz13">增值税率</p>
            </div>
            <div class="weui_cell_ft font_yhui font_sz13">{{items[0]["VAT"]}}</div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
                <p class="font_yhui font_sz13">进口最惠国税率</p>
            </div>
            <div class="weui_cell_ft font_yhui font_sz13">{{items[0]["Import_MFN_Tariff"]}} </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
                <p class="font_yhui font_sz13">监管代码</p>
            </div>
            <div class="weui_cell_ft font_yhui font_sz13">{{items[0]["SC_Code"]}}</div>
        </div>
        <div class="weui_cell">
            <div class="weui_media_box weui_media_box2 weui_media_text">
                <h6 class="weui_media_title font_yhui font_sz13">监管条件</h6>
                <p class="weui_media_desc font_yhui font_sz13">{{items[0]["SC_Description"]}}</p>
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_media_box weui_media_box2  weui_media_text">
                <h6 class="weui_media_title font_yhui font_sz13">申报要素</h6>
                <p class="weui_media_desc font_yhui font_sz13">{{items[0]["Elements"]}}</p>
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_media_box weui_media_box2  weui_media_text">
                <h6 class="weui_media_title font_yhui font_sz13">备注</h6>
                <p class="weui_media_desc font_yhui font_sz13">{{items[0]["Notes"]}}</p>
            </div>
        </div>
        <div class="query_button" @click="back"><a href="javascript:;" class="weui_btn weui_btn_primary font_yhui query">返回</a></div>
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
                if (!this.hsname) {
                    this.$router.push({
                        path: 'index'
                    })
                } else {
                    this.$router.push({
                        name: 'search',
                        params: {
                            hscode: "",
                            hsname: this.hsname
                        }
                    })
                }
            },
            getData() {
                this.$http.get("http://wss.globelinkcfs.com/wechat/export_lcl/CargoSz/code/szapi.php?HSCode=" + this.hscode + "&CargoName=" + this.hsname, {}, {
                    headers: {},
                    emulateJSON: true
                }).then(response => {
                    console.log(response.data);
                    this.items = eval('(' + response.data + ')');

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