$(function()
{
    /*輪播器*/
    $('.banner-container').slick(
        {
          autoplay:true,
          accessibility:false,
          arrows:false,
          dots:true,
          dotsClass:'slick-dot',
          infinite:true,
          variableWidth:true,
          adaptiveHeight:true
        }
    );
    

    /*open*/
    $('#mobileItem').click(function()
    {
      $('.mobile-menu').css('left','0')
      $('body').css('overflow','hidden')

    }); 
    /*leave*/
    $('#menuLeave').click(function()
    {
      $('.mobile-menu').css('left','-100%')
      $('body').css('overflow','auto')
    });

    /*list-normal*/
    let navFlag= false
    $('.nav-item').hover(
      function(In)
      {
        navFlag =!navFlag
        
          $(this).children('.second-nav-container').stop(true,false).slideDown();
          console.log(navFlag);


        
      },
      function(Out){
        navFlag =!navFlag
        
          $(this).children('.second-nav-container').stop(true,false).slideUp();
          console.log(navFlag);

      }
    );
    /*nav*/
      
    $(window).scroll(function()
    {
      let tes = $(this).scrollTop();
      //console.log(tes);//抓取卷軸現在的位置
      if(tes == 0)
      {
        $("#header").addClass("header-top");
        $("#header").removeClass("header-fixed");
        $("#logoImg").addClass("logo-top");
      }
      else
      {
        $("#header").addClass("header-fixed");
        $("#header").removeClass("header-top");
        $("#logoImg").removeClass("logo-top");
      }

    });
    /*product*/ 
    $(".product-item").hover(
      function()
      {
        $(this).find(".product-price").css("color","#ffffff");
        $(this).find(".product-pic").css("transform","scale(0.9,0.9)")
      },
      function()
      {
        $(this).find(".product-price").css("color","#ad7203");
        $(this).find(".product-pic").css("transform","scale(1,1)")
      }
    );

      
     
     

    /*list-mobile*/
    let menuFlag = false;
    let listId = null;
    $('.menu-item').click(function(x)
    {
      
      if(listId ==  this || listId == null){
        listId = this;
        menuFlag =!menuFlag;
        console.log(listId);
        if (menuFlag) {
          $(this).children(".second-list").slideDown();
          $(this).css("color","#eb9318");
          
        }
        else{
          $(this).children(".second-list").slideUp();
          $(this).css("color","#ffffff");
          
        }

      }
      else{
        $(".second-list").slideUp();
        $(".menu-item").css("color","#ffffff");
        $(this).children(".second-list").slideDown();
        $(this).css("color","#eb9318");
        menuFlag =true;
        listId = this;
        
      }


    });

    





});