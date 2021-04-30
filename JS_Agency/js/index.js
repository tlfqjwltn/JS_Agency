$('document').ready(function(){
    let windowWidth = $(window).width();
    let windowS = $(window).scrollTop();
    $('a').click(function(e){
        e.preventDefault();
    });
    // a태그 초기화

    commonJs();
    if(windowWidth<800){
        mobJs();
    } else if(windowWidth>=800){
        webJs();
    }
    $(window).resize(function(){
        windowWidth = $(window).width();
        console.log(windowWidth);
        if(windowWidth<800){
            mobJs();
        } else if(windowWidth>=800){
            webJs();
            $('.section, .m_gnb_menu, #landing_container').removeAttr('style');
        }
    });
    // 윈도우 사이즈별 스크립트

    function commonJs(){
        let $section = $('.section');
        $('.gnb_logo').click(function(){
            $section.removeAttr('style');
            $('#main_container').fadeIn(300);
            $('#landing_container').css('display','none');
        });
        // 로고 클릭
        $('.btn_models').click(function(){
            $section.removeAttr('style');
            $('#models_container').fadeIn(300);
            $('#landing_container').css('display','none');
        });
        // See Artist 클릭
        let modelI = 0;
        let $modelSel = $('.models_wrap>li');
        $modelSel.hover(function(){
            modelI = $(this).index();
            if(modelI==0||modelI==1||modelI==4||modelI==5){
                $modelSel.eq(modelI).children('img').stop().animate({'left':'50%'},750)
            }else{
                $modelSel.eq(modelI).children('img').stop().animate({'right':'50%'},750)
            }
        },function(){
            modelI = $(this).index();
            if(modelI==0||modelI==1||modelI==4||modelI==5){
                $modelSel.eq(modelI).children('img').stop().animate({'left':'0'},750)
            }else{
                $modelSel.eq(modelI).children('img').stop().animate({'right':'0'},750)
            }
        });
        // e.model_hover
    }
    // e.commonJs
    function webJs(){
        let gnbI = 0;
        let $gnbSel = $('.gnb_wrap>li');
        let $section = $('.section');
        
        $gnbSel.click(function(){
            gnbI = $(this).index();
            $section.removeAttr('style');
            $section.eq(gnbI).fadeIn(300);
            $('#landing_container').css('display','none');
        });

        

    }
    // e.webJs
    function mobJs(){
        let mGnbI = 0;
        let $mGnbSel = $('.m_gnb_menu_wrap>li');
        let $mSection = $('.section');
        
        $('.m_gnb').click(function(){
            $('.m_gnb_menu').slideDown(300);
        });
        $('.m_gnb_menu_close').click(function(){
            $('.m_gnb_menu').slideUp(300);
        });
        $mGnbSel.click(function(){
            mGnbI = $(this).index()-2;
            console.log(mGnbI);
            $('.m_gnb_menu').slideUp(300);
            $mSection.removeAttr('style');
            $mSection.eq(mGnbI).fadeIn(300);
        });
    }
    // e.mobJs
})
