<template>
    <div>
        <div class="header">
            <span class="header_title">{{config.title}}</span>
        </div>
        <div style="height: 47px;"></div>
        <!--文本显示-->
        <div class="text_content">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text=""
                    @load="onLoad"
            >
                <div
                        v-for="(item,index) in list"
                        :key="index+'a'"
                        :title="item"
                        class="item_style"
                ><span :class="item.class">{{item.text}}</span><br>
                    <span class="red_text">{{ws}}</span>
                </div>
                <div
                        v-for="(item,index) in list2"
                        :key="index+'b'"
                        :title="item"
                        class="item_style_2"
                ><span :class="item.class">{{item.text}}</span><br>
                    <span class="red_text">{{ws}}</span>
                </div>

            </van-list>

        </div>
        <!--图显示-->
        <div>
            <div>
                <span>{{title2}}</span>
            </div>
            <div v-for="img in imgList1" :key="img.id">
                <van-image
                        class="img_style"
                        lazy-load
                        :src="img.imgUrl"
                />
            </div>
        </div>
        <!--图片显示-->
        <div>
            <div>
                <span>{{title3}}</span>
            </div>
            <div v-for="img in imgList2" :key="img.id">
                <van-image
                        class="img_style"
                        lazy-load
                        :src="img.imgUrl"
                />
            </div>
        </div>
        <!--分享功能-->
        <vue-native-share :shareMenu="shareMenu" :config="config"/>

    </div>
</template>

<script>
    import vueNativeShare from 'vue-native-share'

    export default {
        name: "mainPage",
        components: {
            vueNativeShare
        },
        data() {
            return {
                ws: '微信：ap13133',
                numberList: ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'],
                backgroundColor: '#f6f6c8',
                colors: ['red_text', 'cyan_text', 'blue_text', 'purple_text', 'black_text', 'orange_text'],
                shareMenu: [0, 3],
                config: {
                    title: '商品详情介绍→回复数字→拒绝敏感词',
                    desc: '商品详情介绍→回复数字→拒绝敏感词',
                    img: 'http://qzonestyle.gtimg.cn/aoi/sola/20150617094556_OvfOpoRKRB.png',
                    img_title: '我是图片标题',
                    link: '当前链接',
                    success: () => {
                        // eslint-disable-next-line no-console
                        console.log('success')
                    }, //成功回调
                    cancel: () => {
                        // eslint-disable-next-line no-console
                        console.log('cancel')
                    }, //取消回调
                },
                list: [],
                list2: [
                    {
                        text: `10→永久电影✞直播✞抖音✞百度✞朋友圈✞电影网站一份=288大洋`,
                        class: 'red_big_text'
                    },
                    {
                        text: `11.新款式廉价版电影APP，仅售79.99（每日更新热门视频）`,
                        class: 'red_big_text'
                    }
                ],
                list3: [
                    {
                        text: '软件截图私聊，需要购买发编码就可以',
                        class: ''
                    },
                    {
                        text: '回复数字即可',
                        class: ''
                    },
                    {
                        text: '拒绝敏感词聊天，谢谢',
                        class: ''
                    },
                    {
                        text: '注：已经上APP软件支持苹果安卓，已正常使用两年以上1080分辨率，速度快，可下载，可选类型，直播可互动作业，包售后【除百度网站外】',
                        class: ''
                    },
                    {
                        text: '永久电影详情介绍→拒绝敏感词→回复数字！',
                        class: ''
                    }
                ],
                imgList1: [
                    {
                        id: 1,
                        imgUrl: require('../assets/img_1.jpg')
                    },
                    {
                        id: 2,
                        imgUrl: require('../assets/img_2.jpg')
                    },
                    {
                        id: 3,
                        imgUrl: require('../assets/img_3.jpg')
                    }
                ],
                imgList2: [
                    {
                        id: 4,
                        imgUrl: require('../assets/img_4.jpg')
                    },
                    {
                        id: 5,
                        imgUrl: require('../assets/img_5.jpg')
                    },
                    {
                        id: 6,
                        imgUrl: require('../assets/img_6.jpg')
                    },
                    {
                        id: 7,
                        imgUrl: require('../assets/img_7.jpg')
                    },
                    {
                        id: 8,
                        imgUrl: require('../assets/img_8.jpg')
                    },
                    {
                        id: 9,
                        imgUrl: require('../assets/img_9.jpg')
                    },
                    {
                        id: 10,
                        imgUrl: require('../assets/img_10.jpg')
                    },
                    {
                        id: 11,
                        imgUrl: require('../assets/img_11.jpg')
                    },
                ],
                title2: '商品详情介绍',
                title3: '115网盘定做详情图片',
                loading: false,
                finished: false


            }
        },
        mounted() {
            this.list = [
                {
                    text: `${this.numberList[1]}普通电影${this.numberList[3]}${this.numberList[8]}米 使用一个月`,
                    class: 'red_text'
                },
                {
                    text: `${this.numberList[2]}直播软件加抖音139元，永久免费无后期费用！`,
                    class: 'green_text'
                },
                {
                    text: `${this.numberList[3]}成人版抖音99永久，88包月永久免费使用片！`,
                    class: 'blue_text'
                },
                {
                    text: `${this.numberList[4]}电影永久99，包月88每天更新APP观看！`,
                    class: 'purple_text'
                },
                {
                    text: `${this.numberList[5]}115网盘，定做网盘${this.numberList[1]}${this.numberList[0]}${this.numberList[0]}起
                        ，一个类型30，${this.numberList[5]}个类型起做！永久电影！`,
                    class: 'black_text'
                },
                {
                    text: `${this.numberList[6]}乖乖水产品，无色无味，5→10分钟见效，488`,
                    class: 'orange_text'
                },
                {
                    text: `${this.numberList[7]}网站浏览在线电影，${this.numberList[5]}${this.numberList[8]}米『收代理月薪过万』（私聊）`,
                    class: 'red_text'
                },
                {
                    text: `${this.numberList[8]}淘宝店铺，一审，二审企业店铺价格（私聊）`,
                    class: 'green_text'
                },
                {
                    text: `${this.numberList[9]}成人版微信朋友圈 大量原创图片动态${this.numberList[8]}${this.numberList[8]}`,
                    class: 'blue_text'
                }
            ]
        },
        methods: {
            onLoad() {
                // 加载状态结束
                this.loading = false;
                this.finished = true;
            }
        },
        filters: {
            // changeNumber: function (val) {
            //     console.log("val", val);
            //     return this.numberList[val]
            // }
        }
    }
</script>

<style scoped>
    .header {
        position: fixed;
        width: 100%;
        height: 46px;
        line-height: 46px;
        text-align: center;
        background-color: #fff;
        -webkit-user-select: none;
        user-select: none;
        border: 0 solid #dddddd;
        border-bottom-width: 1px;
    }

    .header_title {
        font-weight: bold;
        font-size: 20px;
        color: #323233;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .text_content {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: bold;


    }

    .text_content span {
        font-weight: bold;
    }

    .item_style {
        padding: 10px;
        text-align: left;
    }

    .item_style_2 {
        padding: 10px;
        text-align: center;
    }

    .red_text {
        background-color: #f6f6c8;
        color: red;
    }

    .green_text {
        background-color: #f6f6c8;
        color: green;
    }

    .blue_text {
        background-color: #f6f6c8;
        color: blue;
    }

    .purple_text {
        background-color: #f6f6c8;
        color: purple;
    }

    .black_text {
        background-color: #f6f6c8;
        color: black;
    }

    .orange_text {
        background-color: #f6f6c8;
        color: orange;
    }

    .red_big_text {
        background-color: #f6f6c8;
        color: red;
        font-size: 24px;
        font-weight: 800;
    }

    .img_style {
        width: 100%;
    }
</style>
