<!DOCTYPE html>
<html class="js no-touch cssanimations csstransitions">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title><?=$XIAOYU['article']['title'];?>-<?=$XIAOYU['site_info']['site'];?></title>
    <meta name="keywords" content="<?=$XIAOYU['article']['title'];?>，宝宝起名，<?=$XIAOYU['site_info']['site'];?>">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <link rel="canonical" href="<?=$XIAOYU['this_url']?>">
    <script type="text/javascript" src="/static/js/jquery.js"></script>
    <link rel="stylesheet" href="/static/css/font-awesome.css">
    <link rel="stylesheet" href="/static/css/detail.css">
    <script type="text/javascript" src="/static/js/modernizr.custom.js"></script>
    <script type="text/javascript" src="/static/js/jquery.dlmenu.js"></script>
    <script src="/static/js/jquery.lazyload.js"></script>
    <script src="/static/js/t.js"></script>
    <script type="text/javascript" charset="utf-8">$(function() {
            $("img.lazy").lazyload({
                effect: "fadeIn"
            });
        });</script>

</head>

<body>
<header class="header w100">
    <div class="header_top">
        <div class="neirong">
            <p>
                <img class="lazy" data-original="/static/images/laba.png" src="/static/images/laba.png">星尚起名馆是一家专业从事起名服务的平台，我们为您提供一对一宝宝起名、公司起名、店铺起名、个人改名等服务。
                <span>电话/微信：<?=$XIAOYU['site_info']['phone'];?></span>。</p></div>
    </div>
    <nav class="nav">
        <div class="neirong">
            <div class="tu">
                <a href="/" title="<?=$XIAOYU['site_info']['site']?>">
                    <img class="lazy" data-original="/static/images/logo.png" src="/static/images/logo.png"></a>
            </div>
            <ul>
                <li class="bg"><a href="/" title="<?=$XIAOYU['site_info']['site']?>"><?=$XIAOYU['site_info']['site']?></a></li>
                <li><a href="#about">关于我们</a></li>
                <li><a href="#anli">起名案例</a></li>
                <li><a href="#contact">联系我们</a></li>
            </ul>
        </div>
    </nav>
</header>
<script type="text/javascript">$(window).scroll(function() {
        var scr = $(window).scrollTop();
        if (scr > 108) {
            $('.nav').addClass('fixed');
        } else {
            $('.nav').removeClass('fixed');
        }
    })</script>
<header class="header1">
    <div class="logo">
        <img class="lazy" data-original="/static/images/logo_w.png" src="/static/images/logo_w.png"></div>
    <div id="dl-menu" class="dl-menuwrapper">
        <button id="dl-menu-button">导航</button>
        <ul class="dl-menu">
            <li class="bg"><a href="/" title="<?=$XIAOYU['site_info']['site']?>"><?=$XIAOYU['site_info']['site']?></a></li>
            <li><a href="#about">关于我们</a></li>
            <li><a href="#anli">起名案例</a></li>
            <li><a href="#contact">联系我们</a></li>
        </ul>
    </div>
</header>
<script type="text/javascript">
    $(window).scroll(function() {
        var scr = $(window).scrollTop();
        if (scr > 45) {
            $('.header1').addClass('fixed');
        } else {
            $('.header1').removeClass('fixed');
        }
    });

    $(function() {
        $('#dl-menu').dlmenu();
    });</script>
<div class="banner w100">
    <img src="/static/images/slide3.jpg">
</div>

<div class="fangfa">
    <ul>
        <li>
            <img class="lazy" data-original="/static/images/wuxing.png" alt="" src="/static/images/wuxing.png">
            <h4>精确八字五行分析</h4>
            <p>精确分析生辰八字、五行缺失</p>
        </li>
        <li>
            <img class="lazy" data-original="/static/images/sancai.png" alt="" src="/static/images/sancai.png">
            <h4>精确三才配置分析</h4>
            <p>分析三才配置，起名吉祥，前程锦绣</p>
        </li>
        <li>
            <img class="lazy" data-original="/static/images/shengxiao.png" alt="" src="/static/images/shengxiao.png">
            <h4>结合国学经典</h4>
            <p>参考诗词文献，起名有寓意、独一无二</p>
        </li>
        <li>
            <img class="lazy" data-original="/static/images/xingzuo.png" alt="" src="/static/images/xingzuo.png">
            <h4>结合字音、字形</h4>
            <p>符合音律，起名好听，有内涵</p>
        </li>
    </ul>
    <div class="clear"></div>
</div>

<div class="about_us w100" id="about">
    <div class="neirong">
        <h2>关于我们</h2>
        <dl>
            <em></em>
            <i></i>
        </dl>
        <ul>
            <li>
                <img class="lazy" data-original="/static/images/d7dec89650cdb42b76b2e709ec06cda4.jpg" src="/static/images/d7dec89650cdb42b76b2e709ec06cda4.jpg"></li>
            <li>
                <h4>宝宝起名哪里好？专业起名就找星尚起名馆！</h4>
                <p>星尚起名馆是由王宝乾老师创建的一家专业起名服务平台，我们为您提供一对一宝宝起名、公司起名、店铺起名、个人改名等服务。</p>
                <p>王宝乾老师，中国十大杰出命名策划师、中国著名周易命名实战派专家、中国姓名文化传播第一人、修慈姓名易术策划创始人。专注从事宝宝起名行业近20年，精通生辰八字、五行起名、周易起名。</p>
            </li>
        </ul>
    </div>
</div>
<div class="list">
    <div class="list_left">

        <div class="dangqian">
            <i class="fa fa-map-marker"></i>
            <span class="s1">当前位置：</span>
            <a href="/" title="<?=$XIAOYU['site_info']['site'];?>">
                <span class="s2">首页</span>
            </a>
            <span class="s1">&gt;</span>
            <span class="s2"><?=$XIAOYU['article']['title'];?></span></div>
        <div class="show">
            <div class="title">
                <h1><?=$XIAOYU['article']['title'];?></h1>
                <p class="p1"><i class="fa fa-clock-o"></i><?=date("Y-m-d H:i:s",$XIAOYU['article']['addtime']);?></p>
            </div>
            <?=$XIAOYU['article']['content'];?>
        </div>
        <div class="fenye">
            <p>上一篇：<?= empty($XIAOYU['prev'])?'没有了':'<a href="'.$XIAOYU['prev']['url'].'"><span>'.$XIAOYU['prev']['title'].'</span></a>';?>

            </p>
            <p>下一篇：<?= empty($XIAOYU['next'])?'没有了':'<a href="'.$XIAOYU['next']['url'].'"><span>'.$XIAOYU['next']['title'].'</span></a>';?>
            </p>
        </div>
        <!--小banner-->
        <div class="clear"></div>
    </div>
    <div class="list_right">
        <div class="hot" id="anli">
            <h2>起名案例</h2>
            <ul>
                <?php foreach($XIAOYU['article_list'] as $k=>$v):?>
                <li><a href="<?=$v['url'];?>"><span><?=$k+1;?></span><?=$v['title'];?></a></li>
                <?php endforeach;?>
            </ul>
        </div>
    </div>
    <script type="text/javascript">$(window).scroll(function() {
            var scr = $(window).scrollTop();
            if (scr > 1300) {
                $('.kuang').addClass('fixed1');
            } else {
                $('.kuang').removeClass('fixed1');
            }
        })
    </script>
    <div class="clear"></div>
</div>

<footer id="footer" class="footer-area section-padding">
    <div class="container">
        <div class="row">
            <h3 class="footer-titel" id="contact">联系我们</h3>
            <p class="container">联系电话/微信：<?=$XIAOYU['site_info']['phone']?> (王宝乾老师)</p>
            <h3 class="footer-titel">各地起名导航</h3>
            <ul class="footer-link container">
                <?php foreach($XIAOYU['area_links'] as $v):?>
                    <li><a href="<?=$v['url']?>"><?=$v['area']?></a></li>
                <?php endforeach;?>
            </ul>
        </div>
    </div>
</footer>
<div class="bottom">
    <div class="bottom_1">
        <div class="banquan">宝宝起名哪里好？专业起名就找<?=$XIAOYU['site_info']['site'];?>！</div>
        <div class="banquan">Copyright © 2019 <?=$XIAOYU['site_info']['site'];?> All Right Reserved
        </div>
    </div>
</div>


<div class="floating_ck">
    <dl>
        <dt></dt>
        <dd class="consult">
            <span>电话/微信</span>
            <div class="floating_left"><span class="phone"><?=$XIAOYU['site_info']['phone']?></span></div>
        </dd>
        <dd class="return">
            <span onClick="gotoTop();return false;">返回顶部</span>
        </dd>
    </dl>
</div>

<div class="fixed_right"></div>
<div class="m_fix">
    <div class="xw_right_dh">
        <a href="javascript:;" class="xw_right_b">
            <img src="/static/images/icon_top_b.png"></a>
    </div>
    <script type="text/javascript">$(function() {
            $(function() {
                $(window).scroll(function() {
                    if ($(window).scrollTop() > 100) {
                        $(".xw_right_b").addClass("xw_right_b_blick");
                    } else {
                        $(".xw_right_b").removeClass("xw_right_b_blick");
                    }
                });
            });
        });</script>
    <script>$(function() {
            $('.xw_right_b').click(function() {
                $('html , body').animate({
                        scrollTop: 0
                    },
                    'slow');
            });
        });</script>
</div>

</body>
</html>