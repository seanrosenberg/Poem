/**
 * Created by hxsd on 2016/9/27.
 */
var myapp=angular.module("myapp",["ionic"]);
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("tour",{
        url:"/tour",
        templateUrl:"views/welcome.html"
    })
        .state("home",{
        url:"/home",
        templateUrl:"views/home/home.html",
        controller:"homeCtrl"
    })
        .state("select",{
        url:"/select",
        templateUrl:"views/select/select.html",
        controller:"selectCtrl"
    })
        .state("seek",{
        url:"/seek",
        templateUrl:"views/seek/seek.html",
        controller:"seekCtrl"
    })
        .state("me",{
        url:"/me/:name:show:touxiang",
        templateUrl:"views/me/me.html",
        controller:"meCtrl"
    })
        .state("home_xiang",{
        url:"/home_xiang/:id",
        templateUrl:"views/home/home_xiang.html",
        controller:"xiangCtrl"
    })
        .state("login",{
        url:"/login",
        templateUrl:"views/me/login.html",
        controller:"loginCtrl"
    })
        .state("search",{
        url:"/search",
        templateUrl:"views/home/home_search.html"
    })
        .state("registered",{
        url:"/registered",
        templateUrl:"views/me/registered.html"
    });
    $urlRouterProvider.otherwise("/tour");
});

// 使用工厂方法，创建的一个单例对象
// 这个单例对象会被缓存
myapp.factory("dataFactory", function ($http) {
    var data ={productList: []};// 一定要保存到对象中，不要直接保存到一个数组变量中
//  $http.get("data.json").success(function (_data, status, headers, config) {
        data.productList=[
  {
  "id":"1001",
  "title":"如今你黑黑的眼睛",
  "bTitle":"万物只因皆归于时间",
  "titleinfo":"穿越谁？穿过荞麦花似的天边为忧伤所掩盖的往事，我替谁又死了一次",
  "bigImgsrc":"./images/d03.png",
  "txImgsrc":"./images/s03.jpg",
  "smallImgsrc":"./images/s03.jpg",
  "authorInfo":"蓝蓝",
  "comments":"23",
  "collection":"15",
  "loadNum":"1.2w",
  "readNum":"3",
  "like":true,
  "show":false,
  "iflike":true,
  "miniText":[
    "如今我黑黑的眼睛",
    "比写在树上的夜醒的更早",
    "比赤麻鸭更早看见"
  ],
  "text":[
    "如今我黑黑的眼睛",
    "比写在树上的夜醒的更早",
    "比赤麻鸭更早看见",
    "北方青青的麦苗",
    "如今鸡血石已经可以记起的往事",
    "可以在槐花树下吟唱的过去",
    "如今杨穗掉在田头",
    "地米菜像恋爱的眼睛布满小路",
    "我看见杏树金色的微风翻动",
    "在墙头弄出斑斑驳驳的花影",
    "仿佛这一切从另一个春天传来",
    "是另一个人迈动我轻快的双脚",
    "如今暖暖的风早已吹远",
    "地虫在苏醒后的恐惧里忙碌",
    "如今我不想再想下一个春天",
    "那里已经不会有这张忧伤的脸"
  ]
},
  {
    "id":"1002",
    "title":"叶子的秋天",
    "bTitle":"我是一片秋日里的叶子",
    "titleinfo":"一个不愿向秋风和寒冷低头的叶子,任凭枝头再怎么摇晃,也不能将我摇落绝不能",
    "bigImgsrc":"./images/d02.jpg",
    "txImgsrc":"./images/sm02.jpg",
    "smallImgsrc":"./images/s02.jpg",
    "authorInfo":"靴子",
    "comments":"23",
    "collection":"10",
    "loadNum":"1.4w",
    "like":false,
    "iflike":true,
    "show":false,
    "readNum":"1",
    "miniText":[
      "叶子的秋天",
      "我是一片秋日里的叶子",
      "一个不愿向秋风和寒冷低头的叶子"
    ],
    "text":[
      "叶子的秋天",
      "我是一片秋日里的叶子",
      "一个不愿向秋风和寒冷低头的叶子",
      "任凭枝头再怎么摇晃",
      "也不能将我摇落绝不能",
      "因为",
      "我要一睹冬天里那洁白的雪花",
      "与她一起作伴",
      "一起舞动天山戈壁",
      "记得在那芬芳的春日里",
      "大地回春万物苏醒",
      "我使出全身所有的力量",
      "尽情享受这世上最美的",
      "阳光雨露",
      "还有那和煦的微风",
      "尽情汲取大地母亲的养分",
      "一整个夏天",
      "万树皆绿百花争艳",
      "这座小城的条条马路街道",
      "人来人往车流不息",
      "安静的我",
      "默默目睹着这个城市的朝夕发展",
      "感受着男女老少的喜怒哀乐",
      "亲吻着百花盛开传递出的清香",
      "还有不远处传来的阵阵果香和烤羊肉味",
      "哈哈哈",
      "彻底让我陶醉",
      "啊呀",
      "这股子风里怎么透着一股子寒呢",
      "你看，我的那些兄弟姐妹们似乎已经坚持不住了",
      "正在枝头摇摆",
      "有的瑟瑟发抖",
      "有的已经掉落下去了",
      "难道你们是想树妈妈了吗",
      "可我",
      "更喜欢在枝头眺望",
      "不",
      "这该死的秋风",
      "我不怕你",
      "你再厉害",
      "我也不惧你",
      "我养足了一生的精力",
      "要和你抗衡到底",
      "你吹吧怒吼吧",
      "我要一睹这冬日里的莽莽雪原",
      "还要和雪花共舞呢",
      "哈哈哈",
      "随你肆虐",
      "我不怕"
    ]
  },
  {
    "id":"1003",
    "title":"薰衣草的梦境",
    "bTitle":"谛听薰衣草的低吟",
    "titleinfo":"我与你漫步于薰衣草田里,谛听薰衣草的低吟,回应自然的呀语",
    "bigImgsrc":"./images/d01.jpg",
    "txImgsrc":"./images/sm01.jpg",
    "smallImgsrc":"./images/s01.jpg",
    "authorInfo":"凤歌笑孔丘",
    "comments":"5",
    "collection":"8",
    "loadNum":"8,000",
    "like":false,
    "show":true,
    "iflike":true,
    "readNum":"2",
    "miniText":[
      "我与你漫步于薰衣草田里",
      "一起",
      "谛听薰衣草的低吟"
    ],
    "text":[
      "我与你漫步于薰衣草田里",
      "一起",
      "谛听薰衣草的低吟",
      "回应自然的呀语",
      "你俏生生的笑了笑",
      "扑朔了眼波里的迷离",
      "我与你亲密无间",
      "胜却了人世的虚情",
      "跃过那泥泞的田埂",
      "也不惧那耀武的马蜂",
      "找个地方吧",
      "轻轻的躺下",
      "让温存的细雨濡湿灰黑的发髻",
      "在薰衣草的馨香里凄迷",
      "静静的",
      "寂寥的风摘下浮动的蕊",
      "在姑娘临别的泪旁支离破碎",
      "狂乱的",
      "如你一样的",
      "狂乱的舞向远方",
      "哀怨中— —",
      "带着一丝甜沁",
      "悄悄的",
      "在薰衣草清香的泥土里",
      "钻出又一条嫩绿的萧条",
      "在这生机盎然里",
      "我与你漫步于薰衣草田里",
      "再回首",
      "没了你的魅影",
      "我只好",
      "在没了你的原地— —",
      "痴迷"
    ]
  },
  {
    "id":"1004",
    "title":"天堂和地狱，你牵的谁的手",
    "authorInfo":"白桦",
    "bTitle":"你到底牵的是谁的手？",
    "titleinfo":"他在梦幻的天堂谁牵着你的手，可是真的可否，牵我一次手!只是希望，牵一次我的手",
    "bigImgsrc":"./images/d02.jpg",
    "txImgsrc":"./images/sm02.jpg",
    "smallImgsrc":"./images/s02.jpg",
    "comments":"2",
    "collection":"3",
    "loadNum":"7,000",
    "like":false,
    "show":false,
    "iflike":true,
    "readNum":"1",
    "miniText":[
      "你牵着的是谁的手?",
      "是天堂的还是地狱的?",
      "你到底牵了谁的手?"
    ],
    "text":[
      "你牵着的是谁的手?",
      "是天堂的还是地狱的?",
      "为什么我的手",
      "直直的抓住的是悬空",
      "你到底牵的是谁的手？",
      "天堂和地狱的歌曲",
      "你记住哪一个",
      "又忘记了哪一个",
      "为什么？",
      "热闹的街市",
      "你放的歌我不懂",
      "你到底牵了谁的手？",
      "是天堂还是地狱的",
      "我这里没有梦幻",
      "他那里又有多少真实",
      "为什么真实的世界",
      "你牵着的手，越发的模糊",
      "我在那破落的地狱",
      "孤独的抓紧悬空",
      "他在梦幻的天堂谁牵着你的手，",
      "可是真的可否，牵我一次手!",
      "回到现实你依旧可以放纵",
      "只是希望，牵一次我的手",
      "一切够了"
    ]
  },
  {
    "id":"1005",
    "title":"黑色困域",
    "authorInfo":"白桦",
    "bTitle":"只有孤独的殿堂",
    "titleinfo":"我在愤懑中咆哮,在绝望中挣扎",
    "bigImgsrc":"./images/d01.jpg",
    "txImgsrc":"./images/sm01.jpg",
    "smallImgsrc":"./images/s01.jpg",
    "comments":"2",
    "collection":"3",
    "loadNum":"7,000",
    "like":false,
    "show":false,
    "iflike":true,
    "readNum":"1",
    "miniText":[
      "世尘的枷锁",
      "无情的困住了我的手脚",
      "我在愤懑中咆哮"
    ],
    "text":[
      "世尘的枷锁",
      "无情的困住了我的手脚",
      "我在愤懑中咆哮",
      "在绝望中挣扎",
      "何哀，无果",
      "粗壮的枷锁",
      "拉我进了那黑色的，只有孤独的殿堂",
      "哪还有一丝光芒?",
      "我无奈的适应",
      "在黑暗中彷徨",
      "漠然的寻找那破损的，被抛弃的希望",
      "但为何",
      "只有黑暗与孤独无边无际",
      "难道真的要我习惯",
      "真的要我麻木",
      "真的要我忘记光芒",
      "化作那一具玩偶",
      "没有意识",
      "只受这无边孤独的摆布吗？",
      "我还不想认命！"
    ]
  },
  {
    "id":"1006",
    "title":"一切",
    "authorInfo":"北岛",
    "bTitle":"一切语言都是重复",
    "titleinfo":"一切爆发都有片刻的宁静,一切死亡都有冗长的回声",
    "bigImgsrc":"./images/d03.png",
    "txImgsrc":"./images/sm03.jpg",
    "smallImgsrc":"./images/s03.jpg",
    "comments":"50",
    "collection":"20",
    "loadNum":"1.8w",
    "like":false,
    "show":true,
    "iflike":true,
    "readNum":"1",
    "miniText":[
      "一切都是命运",
      "一切都是烟云",
      "一切都是没有结局的开始"
    ],
    "text":[
      "一切都是命运",
      "一切都是烟云",
      "一切都是没有结局的开始",
      "一切都是稍纵即逝的追寻",
      "一切欢乐都没有微笑",
      "一切苦难都没有泪痕",
      "一切语言都是重复",
      "一切交往都是初逢",
      "一切爱情都在心里",
      "一切往事都在梦中",
      "一切希望都带着注释",
      "一切信仰都带着呻吟",
      "一切爆发都有片刻的宁静",
      "一切死亡都有冗长的回声",
      "真的要我麻木"
    ]
  },
  {
    "id":"1007",
    "title":"再别康桥",
    "authorInfo":"徐志摩",
    "bTitle":"寻梦？撑一支长蒿",
    "titleinfo":"悄悄的我走了 正如我悄悄的来",
    "bigImgsrc":"./images/d01.jpg",
    "txImgsrc":"./images/sm01.jpg",
    "smallImgsrc":"./images/s01.jpg",
    "comments":"50",
    "collection":"20",
    "loadNum":"1.8w",
    "like":false,
    "show":true,
    "iflike":true,
    "readNum":"1",
    "miniText":[
      "轻轻的我走了",
      "正如我轻轻的来",
      "我轻轻的招手",
      "作别西天的云彩"
    ],
    "text":[
      "轻轻的我走了， 正如我轻轻的来；",
      "我轻轻的招手， 作别西天的云彩。",
      "那河畔的金柳，是夕阳中的新娘；",
      "波光里的艳影， 在我的心头荡漾。",
      "软泥上的青荇，油油的在水底招摇；",
      "在康桥的柔波里， 我甘心做一条水草！",
      "那榆荫下的一潭，不是清泉，是天上虹 ",
      "揉碎在浮藻间， 沉淀着彩虹似的梦。",
      "寻梦？撑一支长蒿，向青草更青处漫溯，",
      "满载一船星辉， 在星辉斑斓里放歌。",
      "但我不能放歌，悄悄是别离的笙箫；",
      "夏虫也为我沉默， 沉默是今晚的康桥！",
      "悄悄的我走了，正如我悄悄的来；",
      "我挥一挥衣袖， 不带走一片云彩。"
    ]
  }
];
//  });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});


myapp.controller("myCtrl",function($scope,$state,$ionicViewSwitcher,$ionicHistory){

    //----跳转详情
    $scope.toDetail = function(product){
        product.show=true;
        $state.go("home_xiang",{id:product.id});
        // 将go有动画效果
        $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
    };
    //----样式开关部分
    $scope.closs1=true;
    $scope.showClass1=function(){
        $scope.closs1=true;
        $scope.closs2=false;
        $scope.closs3=false;
        $scope.closs4=false;
    };
    $scope.showClass2=function(){
        $scope.closs1=false;
        $scope.closs2=true;
        $scope.closs3=false;
        $scope.closs4=false;
    };
    $scope.showClass3=function(){
        $scope.closs1=false;
        $scope.closs2=false;
        $scope.closs3=true;
        $scope.closs4=false;
    };
    $scope.showClass4=function(){
        $scope.closs1=false;
        $scope.closs2=false;
        $scope.closs3=false;
        $scope.closs4=true;
    };
    //-----底部样式

});