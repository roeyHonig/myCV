// notice a few things:
        // headerDivHeight is the height of the container-fluid div - look comment below
        // we want to change the font-size from navbarMaxFontSize to 0.5*navbarMaxFontSize
        // that is, when scroll is 0 - fontsize:navbarMaxFontSize, 
        // when scroll is headerDivHeight (we've scrolled the all container-fluid div) we want fontsize: 0.5*navbarMaxFontSize
        $(document).ready(function(){
            setTheTopPaddingWithRespectToNavHeight()

            var headerDivHeight = $(".container-fluid").height()
            var navbarMaxFontSize = $(".navbar").css("fontSize")
            navbarMaxFontSize = parseInt(navbarMaxFontSize)
            //make sure nav height will be 0.5*navbarMaxFontSize in case page has allredy been loaded scrolled down
            // could happends when the user press ctrl+R
            if (scrollY >=headerDivHeight) {
                document.getElementById("tabletNavbar").style.fontSize = (0.5*navbarMaxFontSize)+"px"
                setTheTopPaddingWithRespectToNavHeight()                
            } 
            // the scroll event which tracks scroll position and adjust the nav bar height
            $(window).scroll(function(){
                //linearlly decress the size of the navbar fontsize
                if ($(window).scrollTop() <= headerDivHeight) $(".navbar").css("font-size", (navbarMaxFontSize*(1-0.5*$(window).scrollTop()/headerDivHeight))+"px");                    
                else $(".navbar").css("font-size", navbarMaxFontSize*0.5+"px");  

                setTheTopPaddingWithRespectToNavHeight()      
                // rotate the "settings" icon while scrolling
                $("#rotate").css("transform","rotate("+$(window).scrollTop()*0.1+"deg)");                                    
            });           

        });
               

        // This function is in case the user press the nav links prior of scrolling down
        // we have to manually and instantlly, re-size the navbar height
        // so the nav will not hide some of the link content
        // because the padding-top of the links content is in accordence with the smallest
        // nav height which is supposed to be 25px
        function fixNavHeightOnClick() {
            var headerDivHeight = $(".container-fluid").height()
            var navbarMaxFontSize = $(".navbar").css("fontSize")
            navbarMaxFontSize = parseInt(navbarMaxFontSize)
            if (scrollY <=headerDivHeight) {
                document.getElementById("tabletNavbar").style.fontSize = (0.5*navbarMaxFontSize)+"px"
                // sets the top-padding IAW the current Nav Height
                setTheTopPaddingWithRespectToNavHeight() 
            }
            
        }

        function setTheTopPaddingWithRespectToNavHeight() {
            $("#fat").css("padding-top", $("#tabletNavbar").innerHeight()+"px")
            $("#mdo").css("padding-top", $("#tabletNavbar").innerHeight()+"px")
            $("#one").css("padding-top", $("#tabletNavbar").innerHeight()+"px")
            $("#two").css("padding-top", $("#tabletNavbar").innerHeight()+"px")
            
        }

       function adjustDivHeightWithRespectToTextSize(DivClassNameToBeAdjusted) {
            var maxHeight = 0;
            var elmnt = document.getElementsByClassName(DivClassNameToBeAdjusted);
            for (let index = 0; index < elmnt.length; index++) {
                if (maxHeight < elmnt[index].scrollHeight) maxHeight = elmnt[index].scrollHeight
            }

            for (let index = 0; index < elmnt.length; index++) {
                elmnt[index].style.height=maxHeight+"px";
            }
            
            
        }
        