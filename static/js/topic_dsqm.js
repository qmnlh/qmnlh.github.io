$(function(){
    var input=$('.input'), select=$('.select-con'), check=$('.check-con'), datetime=$('.datetime'), btn=$('.btn-ok'), selector=$('.datetime_selector'), checkbox=$('.checkbox'), mask=$('.mask');

    // 获取现有信息显示对应状态
    // input文本对应的状态
    input.each(function(){
        if($(this).val() != ""){
            $(this).parents('label').addClass('on');
        }
    });
    $('input[name=area_name]').each(function(){
        if($(this).val() != ""){
            $(this).parents('label').addClass('on');
        }
    });
    //checkbox
    select.find('.options').each(function(){
        var text = $(this).find('label.on span').text();
        if( text != "" ){
            if( $(this).prev().hasClass('.select_tit02') ){
                $(this).prev().find('em').text(text)
            }else{
                if( text == '农历' ){
                    $(this).parent().next().find('label').css({display:'block'})
                }else if( text == '公历' ){
                    $(this).parent().next().find('label').removeAttr('style')
                }
                $(this).prev().find('p').text(text)
            }
        }
    });

    // $('.checked label').click(function(){
    //     if($(this).find('input').is(':checked')){
    //         $(this).addClass('on').siblings().removeClass('on');
    //         if($(this).find('input').val() == 2){
    //             var text = $('.expect').find('input[name=name_expect_girl]').val();
    //             if(text != ''){
    //                 $('.expect').prev().find('.s_tit span').html(text);
    //             }else{
    //                 $('.expect').prev().find('.s_tit span').html('父母期望');
    //             }
    //             $('.girl').removeClass('none').prev().addClass('none')
    //         }else{
    //             var text = $('.expect').find('input[name=name_expect_boy]').val();
    //             if(text != ''){
    //                 $('.expect').prev().find('.s_tit span').html(text);
    //             }else{
    //                 $('.expect').prev().find('.s_tit span').html('父母期望');
    //             }
    //             $('.girl').addClass('none').prev().removeClass('none')
    //         }
    //     }
    // });

    //标签多选
    check.find('.options').each(function(){
        var text = '';
        $(this).find('label').each(function(){
            var checked = $(this).find('input').is(':checked');
            if( checked == true ){
                $(this).addClass('on');
                text += $(this).find('p').text() + ',';
            }
        });
        if( text != "" ){
            $(this).prev().addClass('on').find('em').text(text);
        }
    });
$(function(){
	var w=$(window).width()
	if(w>780){
		   $(document).on('focus','.input',function (e) {
        $(this).parent().addClass('focus')
    });
    $(document).on('blur','.input',function (e) {
        var val=$(this).val();
        var name=$(this).attr('name');
        var all_qk=$(this).parent().removeClass();
        if(val == ''){
            if(name == 'surname' || name == 'mobile' ){
                all_qk.addClass('focus error').find('p span').html('不能为空')
            }else{
                all_qk
            }
        }else{
            if(name == 'surname'){
                if(!isNaN(val) || !/^[\u4e00-\u9fa5]+$/.test(val) || val.length > 2){
                    all_qk.addClass('focus error').find('p span').html('必须是1-2个汉字')
                }else{
                    all_qk.addClass('on').find('p span').html('')
                }
            }else if(name == 'mobile'){
                if(val.length < 11 || val.length > 11){
                    all_qk.addClass('focus error').find('p span').html('必须是11位的号码')
                }else if(/^1[3|4|5|8]\d{10}$/.test(val)){
                    all_qk.addClass('focus error').find('p span').html('格式不正确')
                }else{
                    all_qk.addClass('on').find('p span').html('')
                }
            }else{
                all_qk.addClass('on').find('p span').html('')
            }
        }
    });
		}else{
			
		}
})

 

    $(document).on('click','.select-con .select_tit',function (e) {
        e.stopPropagation();
        selector.hide().prev().find('div').removeClass('on');
        check.removeClass('on').find('div').removeAttr('style');
        $('#PoPx,#PoPy').remove();
        select.removeClass('on').find('.options').hide();
        if($(this).parent().hasClass('on')){
            $(this).next().hide().parent().removeClass('on')
        }else{
            $(this).next().show().parent().addClass('on')
        }
    });

    $(document).on('click','.check-con .check_tit',function () {
        selector.hide().prev().find('div').removeClass('on');
        select.removeClass('on').find('div').removeAttr('style');
        $('#PoPx,#PoPy').remove();
        check.removeClass('on').find('.options').hide();
        if($(this).parent().hasClass('on')){
            $(this).next().hide().parent().removeClass('on')
        }else{
            if( $(this).next().hasClass('boy') ){
                if($('input[name=sex]:checked').val() == 1){
                    $('.boy').removeClass('none').show().next().addClass('none').hide();
                }else if($('input[name=sex]:checked').val() == 2){
                    $('.boy').addClass('none').hide().next().removeClass('none').show();
                }
            }else{
                $(this).next().show().parent().addClass('on')
            }
        }
    });

    $(document).on('click','.select-con .options',function (e) {
        e.stopPropagation();
    });

    $(document).on('click','.datetime_selector',function (e) {
        e.stopPropagation();
    });
    $(document).on('click','.check-con',function (e) {
        e.stopPropagation();
    });

    $(document).on('click','.select-con .options label',function () {
        var val = $(this).find('span').text();
        if( $(this).find('input').attr('type') == 'checkbox' ){
            $(this).find('input').attr("checked",true).prop("checked","checked").parent().siblings().find('input').removeAttr("checked")
        }
        $(this).addClass('on').siblings().removeClass('on').parent().hide().parent().removeClass('on');
        if( val == '农历' ){
            $(this).parents('.info-con').next().find('label').css({display:'block'});
            if($(this).parents('.shuang').hasClass('bro_sis_box')){
                $(this).parents('.bro_sis_box').addClass('cur')
            }
        }else if( val == '公历' && $(this).parents('.shuang').hasClass('bro_sis_box') ){
            $(this).parents('.bro_sis_box').removeClass('cur');
            $(this).parents('.info-con').next().find('label').removeAttr('style');
        }else if( val == '男' ){
            var text = $('input[name=name_expect_boy]').val()
            if( text != ''){
                $('.boy').prev().addClass('on').find('em').text(text)
            }else{
                $('.boy').prev().removeClass('on').find('em').text('')
            }
        }else if( val == '女' ){
            var text = $('input[name=name_expect_girl]').val()
            if( text != ''){
                $('.boy').prev().addClass('on').find('em').text(text)
            }else{
                $('.boy').prev().removeClass('on').find('em').text('')
            }
        }else{
            $(this).parents('.info-con').next().find('label').removeAttr('style');
        }
        if( $(this).parent().prev().hasClass('select_tit02') ){
            $(this).parent().prev().find('em').text(val)
        }else{
            $(this).parent().prev().find('p').text(val)
        }
    });

    $(document).on('click','.check-con .options label',function () {
        if($(this).hasClass('on')){
            var text = '';
            $(this).parent().find('label').each(function(){
                if( $(this).find('input').is(':checked')){
                    $(this).addClass('on');
                    text += $(this).text() + ',';
                }else{
                    $(this).removeClass('on');
                }
            });
            $(this).parent().prevAll('label').find('em').html(text);
            $(this).nextAll('input').val(text)
            if( $(this).parent().find('label.on').size() == 0){
                $(this).parent().prevAll('label').removeClass('on')
            }
        }else{
            if( $(this).parent().find('label.on').size() < 6){
                var text = '';
                $(this).parent().find('label').each(function(){
                    if( $(this).find('input').is(':checked')){
                        $(this).addClass('on');
                        text += $(this).text() + ',';
                    }else{
                        $(this).removeClass('on');
                    }
                });
                $(this).parent().prevAll('label').addClass('on').find('em').html(text);
                $(this).nextAll('input').val(text)
            }else{
                $(this).removeClass('on').find('input').attr("checked",false);
            }
        }
    });

    $(document).on('click','.checkbox',function () {
        var name = $(this).find('input').attr('name');
        if( name == 'brother_is_leap[]' ){
            if($(this).find('input').is(':checked')){
                $(this).find('input').attr("checked",true).prop("checked","checked").val('1').parent().addClass('check')
            }else{
                $(this).find('input').attr("checked",false).removeAttr("checked").val('0').parent().removeClass('check')
            }
        }else{
            if($(this).find('input').is(':checked')){
                $(this).addClass('check')
            }else{
                $(this).removeClass('check')
            }
        }
    });

    $(document).on('click','.btn-ok',function () {
        $(this).parent().parent().hide().prev().find('div').removeClass('on');
    });

    $(document).on('click','.datetime',function (e) {
        e.stopPropagation();
        $('.options').hide().parent().removeClass('on');
        $('#PoPx,#PoPy').remove();
        $(this).parent().next().find('dl').each(function(){
            var top = $(this).find('label.on').index()*30;
            $(this).find('dd').animate({scrollTop:top});
        });

        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).parent().next().hide()
        }else{
            datetime.removeClass('on');
            selector.hide();
            $(this).addClass('on');
            var top = $(this).parent('label').position().top + $(this).outerHeight() + 12;
            $(this).parent().next().css({top:top}).show();
        }
    });

    $(document).on('click','.datetime_selector dd label',function () {
        if( $(this).find('input').is(':checked') ){
            $(this).addClass('on').siblings().removeClass('on');
            $(this).siblings().find("input").removeAttr("checked");
        }
        var top = $(this).index()*30;
        n = $(this).parents('.bd').find('label.on input[name=year]').val();
        y = $(this).parents('.bd').find('label.on input[name=month]').val();
        r = $(this).parents('.bd').find('label.on input[name=day]').val();
        s = $(this).parents('.bd').find('label.on input[name=hour]').val();
        f = $(this).parents('.bd').find('label.on input[name=minute]').val();
        if(!n && !y && !r && !s && !f){
            n = $(this).parents('.bd').find('label.on input[name=daddy_year]').val();
            y = $(this).parents('.bd').find('label.on input[name=daddy_month]').val();
            r = $(this).parents('.bd').find('label.on input[name=daddy_day]').val();
            s = $(this).parents('.bd').find('label.on input[name=daddy_hour]').val();
            f = $(this).parents('.bd').find('label.on input[name=daddy_minute]').val();
        }
        if(!n && !y && !r && !s && !f){
            n = $(this).parents('.bd').find('label.on input[name=mother_year]').val();
            y = $(this).parents('.bd').find('label.on input[name=mother_month]').val();
            r = $(this).parents('.bd').find('label.on input[name=mother_day]').val();
            s = $(this).parents('.bd').find('label.on input[name=mother_hour]').val();
            f = $(this).parents('.bd').find('label.on input[name=mother_minute]').val();
        }
        if(!n && !y && !r && !s && !f){
            n = $(this).parents('.bd').find("label.on .brother_year").val();
            y = $(this).parents('.bd').find("label.on .brother_month").val();
            r = $(this).parents('.bd').find("label.on .brother_day").val();
            s = $(this).parents('.bd').find("label.on .brother_hour").val();
            f = $(this).parents('.bd').find("label.on .brother_minute").val();
        }
        var val='<span class="year-display">'+n+'</span><i>年</i><span class="month-display">'+y+'</span><i>月</i><span class="day-display">'+r+'</span><i>日</i><span class="hour-display">'+s+'</span><i>时</i><span class="minute-display">'+f+'</span><i>分</i>';
        $(this).parent().animate({scrollTop:top}).parents('.datetime_selector').prev().find('div').html(val);
    });

    $(document).click(function(){
        $('.options').hide().parent().removeClass('on');
        selector.hide().prev().find('div').removeClass('on');
        select.removeClass('on').find('div').removeAttr('style');
        check.removeClass('on').find('div').removeAttr('style');
    });

    $('.taocan .hd').find('li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var num = $(this).index();
        $(this).parents('.hd').next().find('.item').eq(num).show().siblings().hide();
    });

    /* 触发出生地选择 */
    $(".cs").click(function (e) {
        SelCity(this,e);
    });
});

$('input[name=pay_code_click]').click(function(){
    $('.input').each(function(){
        var val=$(this).val();
        var name=$(this).attr('name');
        var all_qk=$(this).parent().removeClass();
        if(val == ''){
            if(name == 'surname' || name == 'mobile' || name == 'area_id' ){
                all_qk.addClass('focus error').find('p span').html('不能为空')
            }else{
                all_qk
            }
        }else{
            if(name == 'surname'){
                if(!isNaN(val) || !/^[\u4e00-\u9fa5]+$/.test(val) || val.length > 2){
                    all_qk.addClass('focus error').find('p span').html('必须是1-2个汉字')
                }else{
                    all_qk.addClass('on').find('p span').html('')
                }
            }else if(name == 'area_id'){
                if(isNaN(val) || val.length > 6 || val.length < 1 ){
                    all_qk.addClass('focus error').find('p span').html('请选择宝宝出生地')
                }else{
                    all_qk.addClass('on').find('p span').html('')
                }
            }else if(name == 'mobile'){
                if(val.length < 11 || val.length > 11){
                    all_qk.addClass('focus error').find('p span').html('必须是11位的号码')
                }else if(/^1[3|4|5|8]\d{10}$/.test(val)){
                    all_qk.addClass('focus error').find('p span').html('格式不正确')
                }else{
                    all_qk.addClass('on').find('p span').html('')
                }
            }else{
                all_qk.addClass('on').find('p span').html('')
            }
        }
    });

    if( $('.error').size() > 0 ){
        var top=$('.error').offset().top-220;
        $('html,body').animate({scrollTop:top},1000,'easeInOutQuart',function(){
            $(".error").first().focus();
        });
        return false;
    }else{
        $('#pay_code').val($(this).val());
        $('input[type=checkbox]').each(function(){
            var name = $(this).attr('name');
            if( name == 'brother_is_leap[]' ){
                $(this).attr("checked",true).prop("checked","checked")
            }
        });

        $("#expert_form").ajaxSubmit(options);
        return false;
    }
    return false;
});

function processJson(data) {
    if( data.code == 1 ) {
        $('.ajax_box').html('');
        $('.ajax_box').append(data.data);
        $('.fixed_info').addClass('show');
        $('html').css({overflow:'hidden'});
        return true;
    } else {
        alert(data.data);
        return false;
    }
}

$(document).on('click','.gx_add_sub',function () {
    $('.delete').addClass('on');
    var append_box = $(".bro_sis_box").eq(0).prop("outerHTML");
    $(append_box).insertBefore(".gx_add_sub");
});

// 删除兄妹信息
$(document).on('click', '.delete', function () {
    var num = $(this).parents('.item').find('.bro_sis_box').size();
    console.log(num);
    var mymessage=confirm("删除后，再次添加需重新输入信息！");
    if(mymessage==true)
    {
        $(this).parents('.bro_sis_box').remove();
        if (num <= 2) {
            $('.delete').removeClass('on')
        }
    }
});

$('.fixed_info .info_box').click(function(){
    return false;
});

jQuery(".about_img_box").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});


