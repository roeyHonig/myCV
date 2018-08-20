
    var viewPortWidth = window.innerWidth;
    var viewPortHeight = window.innerHeight;    
    var midScreenWidth = Math.round(viewPortWidth/2);
    var DesktopContainerWidth;
    var DesktopContainerHeight;
    var imgTagPosition;
    var imgTagWidth;
    var imgTagHeight;
    var personalProfilePosition;    
    var personalProfileWidth;    
    var personalProfileHeight;
    var personalProfileIconTagPosition;    
    var personalProfileIconTagWidth;    
    var personalProfileIconTagHeight;    
    var educationIconTagPosition;    
    var educationIconIconTagWidth;    
    var educationIconIconTagHeight;  
    var educationDivPosition;    
    var educationDivTagWidth;    
    var educationDivTagHeight;
    var contactInfoDivPosition;    
    var contactInfoDivTagWidth;    
    var contactInfoDivTagHeight;
    var contactInfoHeaderPosition;    
    var contactInfoHeaderWidth;    
    var contactInfoHeaderHeight;
    var workExperiencePosition;    
    var workExperienceWidth;    
    var workExperienceHeight;
    var namePosition;    
    var nameWidth;    
    var nameHeight;
    var skillsPosition;    
    var skillsWidth;    
    var skillsHeight;
    var hobbiesPosition;    
    var hobbiesWidth;    
    var hobbiesHeight;
    var lineWidth = 3; 
    
    

    $(document).ready(function(){
       
        console.log($("#educationH1Id").outerHeight(true))
        
        
    });

    
    

    // cheack the width of the viewport and calls the function which draws the canvas
    function cheackWidth() {
        document.getElementsByTagName("BODY")[0].style.opacity = 0    
        //This is an event for detecting tablet screen oriantiotion change
        // Apperantlly, oriantition change is not treated as a size change
        // This is why we have to explicityly invoke the cheackWidth function from this jquery event
           window.addEventListener("orientationchange", function() {
                  document.getElementsByTagName("BODY")[0].style.opacity = 0                
                  reloadPageUponOriantatiuonChange()
             });    
        
        setTimeout(() => {
           document.getElementsByTagName("BODY")[0].style.opacity = 1
            
        }, 50);

        // get the viewPort dimenstions
        viewPortWidth = window.innerWidth;
        viewPortHeight = window.innerHeight;    
        midScreenWidth = Math.round(viewPortWidth/2);
        //calls the function which sets the font size for all text elements
        // for this pupose a class name "autoResizeText" was introduced to all text elements 
        myFunction("autoResizeText","60px"); 
        myFunction("autoResizeTextForPargraps","20px");   
        
        // set the font size of the containeer
        var nameElement = document.getElementById("Desktop");
        nameElement.style.fontSize = Math.round(viewPortHeight/80) +"px";
        // returns the width \ height of the Desktop container div
        $(document).ready(function(){
            DesktopContainerWidth = $("#Desktop").width();
            DesktopContainerHeight = $("#Desktop").height();
            // creates the canvas tag
            var canvasOutDivElement = document.getElementById("canvasOut");
            canvasOutDivElement.innerHTML = '<canvas id="can" width="'+DesktopContainerWidth+'px" height="'+DesktopContainerHeight+'px"> ';

            // returns the difrrent div's position and dimenstions
            imgTagWidth =  $("#roeyPhoto").width();
            imgTagHeight = $("#roeyPhoto").height();
            $("#roeyPhoto").offset({top:DesktopContainerHeight*0.5-imgTagHeight*0.5,left:DesktopContainerWidth*0.5})            
            imgTagPosition = $("#roeyPhoto").position();            
            personalProfilePosition = $("#personalProfile").position();
            personalProfileWidth =  $("#personalProfile").width();
            personalProfileHeight =  $("#personalProfile").height();
            personalProfileIconTagPosition = $("#personalProfileIcon").position();
            personalProfileIconTagWidth =  $("#personalProfileIcon").width();
            personalProfileIconTagHeight =  $("#personalProfileIcon").height();
            educationIconTagPosition = $("#educationIcon").position();
            educationIconIconTagWidth =  $("#educationIcon").width();
            educationIconIconTagHeight =  $("#educationIcon").height();
            educationDivPosition = $("#education").position();
            educationDivTagWidth =  $("#education").width();
            educationDivTagHeight =  $("#education").height();
            contactInfoDivPosition = $("#contactInfo").position();
            contactInfoDivTagWidth =  $("#contactInfo").width();
            contactInfoDivTagHeight =  $("#contactInfo").height();
            contactInfoHeaderPosition = $("#contactInfoHeader").position();
            contactInfoHeaderWidth =  $("#contactInfoHeader").width();
            contactInfoHeaderHeight =  $("#contactInfoHeader").height();
            skillsPosition = $("#skills").position();
            skillsWidth =  $("#skills").width();
            skillsHeight =  $("#skills").height();
            workExperiencePosition = $("#workExperience").position();
            workExperienceWidth =  $("#workExperience").width();
            workExperienceHeight =  $("#workExperience").height();
            namePosition = $("#name").position();
            nameWidth =  $("#name").width();
            nameHeight =  $("#name").height();
            hobbiesPosition = $("#hobbies").position();
            hobbiesWidth =  $("#hobbies").width();
            hobbiesHeight =  $("#hobbies").height();

           
            
            document.getElementById("Desktop").style.visibility = "visible";
           // setTimeout basically excuates the function of drawing the lines, but delays the excuation by 300 ms
           //clearTimeout will cancel the excuation - set in setTimeout - if the user is countinueslly resizing
           // otherwise the lines will alaawys get drawn and the screen will be in a mass
           // by the wat, that's 300 ms after the text has been resised, which can take 3 seconds
            var doit;
            doit = setTimeout( myCanvasDraw, 300,imgTagPosition.left+0.5*imgTagWidth ,imgTagPosition.top+0.5*imgTagHeight , imgTagWidth*0.5*1.3);
            $(window).resize(function(){clearTimeout(doit)});
            });
            
    }

    
    // sets the font size for all text elements in the page
    function myFunction(divIdName,initFontSize) {
        var elmnt = document.getElementsByClassName(divIdName);
        for (i = 0; i < elmnt.length; i++) {

            elmnt[i].style.fontSize=initFontSize;
            var listElement = elmnt[i].querySelectorAll(".unOrderedListAutoResizeText");
            listElement.forEach(element => {
                element.style.fontSize=initFontSize;
            });

            var fontSize = elmnt[i].style.fontSize
            fontSize = parseInt(fontSize)
            fontSize = Number(fontSize)
            var contentOveride 
            if (elmnt[i].offsetHeight < elmnt[i].scrollHeight || elmnt[i].offsetWidth < elmnt[i].scrollWidth) {
                contentOveride = true;
            } else {
                contentOveride = false;
            }
            while (fontSize > 1 && contentOveride) {
                fontSize -= 1;
                elmnt[i].style.fontSize=fontSize+"px";
                listElement.forEach(element => {
                    element.style.fontSize=fontSize+"px";
                });

                if (elmnt[i].offsetHeight < elmnt[i].scrollHeight || elmnt[i].offsetWidth < elmnt[i].scrollWidth) {
                contentOveride = true;
                 } else {
                contentOveride = false;
                }
    
            }
        }
    }

    function reloadPageUponOriantatiuonChange() {
        location.reload();
       
    }


    // this the function which draws the canvas    
    function myCanvasDraw(arcCenterX , arcCenterY , radius) {

        



        var canvas = document.getElementById("can"); 
        var ctx = canvas.getContext("2d"); 
        ctx.clearRect(0, 0, 10000, 10000);
        var requestAnimationFrame = window.requestAnimationFrame
        // init line length to 0, velocites, Line Width, Line Caps
        var PixelLengthPerFrame = 8; // in pixel
        var anglePerFrame = 5;  // in degress    
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        //init path 0
        var route_p0 = 1;
        var angle_p0; //angle of linear lines     
        var ap0 =190; // start angle of arc line
        var startX_p0 = arcCenterX + Math.cos((Math.PI / 180) * ap0)*radius;
        var startY_p0 = arcCenterY + Math.sin((Math.PI / 180) * ap0)*radius ;
        var ap0End =225; // end start angle of arc line
        //init path 1
        var route_p1 = 1;
        var angle_p1; //angle of linear lines     
        var ap1 =270; // start angle of arc line
        var startX_p1 = arcCenterX + Math.cos((Math.PI / 180) * ap1)*radius;
        var startY_p1 = arcCenterY + Math.sin((Math.PI / 180) * ap1)*radius ;
        var ap1End =270; // end start angle of arc line      
        //init path 2
        var route_p2 = 1;
        var angle_p2; //angle of linear lines     
        var ap2 =280; // start angle of arc line
        var startX_p2 = arcCenterX + Math.cos((Math.PI / 180) * ap2)*radius;
        var startY_p2 = arcCenterY + Math.sin((Math.PI / 180) * ap2)*radius ;
        var ap2End =315; // end start angle of arc line
        //init path 3
        var route_p3 = 1;
        var angle_p3; //angle of linear lines     
        var ap3 =10; // start angle of arc line
        var startX_p3 = arcCenterX + Math.cos((Math.PI / 180) * ap3)*radius;
        var startY_p3 = arcCenterY + Math.sin((Math.PI / 180) * ap3)*radius ;
        var ap3End =45; // end start angle of arc line
        //init path 4
        var route_p4 = 1;
        var angle_p4; //angle of linear lines     
        var ap4 =145; // start angle of arc line
        var startX_p4 = arcCenterX + Math.cos((Math.PI / 180) * ap4)*radius;
        var startY_p4 = arcCenterY + Math.sin((Math.PI / 180) * ap4)*radius ;
        var ap4End =180; // end start angle of arc line
        //init path 5
        var route_p5 = 1;
        var angle_p5; //angle of linear lines     
        var ap5 =270; // start angle of arc line
        var startX_p5 = arcCenterX + Math.cos((Math.PI / 180) * ap5)*radius;
        var startY_p5 = arcCenterY + Math.sin((Math.PI / 180) * ap5)*radius ;
        var ap5End =235; // end start angle of arc line
        //init path 6
        var route_p6 = 1;
        var angle_p6; //angle of linear lines     
        var ap6 =325; // start angle of arc line
        var startX_p6 = arcCenterX + Math.cos((Math.PI / 180) * ap6)*radius;
        var startY_p6 = arcCenterY + Math.sin((Math.PI / 180) * ap6)*radius ;
        var ap6End =360; // end start angle of arc line
        //init path 7
        var route_p7 = 1;
        var angle_p7; //angle of linear lines     
        var ap7 =100; // start angle of arc line
        var startX_p7 = arcCenterX + Math.cos((Math.PI / 180) * ap7)*radius;
        var startY_p7 = arcCenterY + Math.sin((Math.PI / 180) * ap7)*radius ;
        var ap7End =135; // end start angle of arc line
        //init path 8
        var route_p8 = 1;
        var angle_p8; //angle of linear lines     
        var ap8 =55; // start angle of arc line
        var startX_p8 = arcCenterX + Math.cos((Math.PI / 180) * ap8)*radius;
        var startY_p8 = arcCenterY + Math.sin((Math.PI / 180) * ap8)*radius ;
        var ap8End =55; // end start angle of arc line
        //init path 9
        var route_p9 = 1;
        var angle_p9; //angle of linear lines     
        var ap9 =55; // start angle of arc line
        var startX_p9 = arcCenterX + Math.cos((Math.PI / 180) * ap9)*radius;
        var startY_p9 = arcCenterY + Math.sin((Math.PI / 180) * ap9)*radius ;
        var ap9End =90; // end start angle of arc line
        // This is the function that draws the paths and cllsback to itself for animation
        function drawPersonalProfilePath() {
            
            // draw p0 path
            {
                if (ap0 < ap0End)  {
                    route_p0 = 1;
                } else if(startX_p0>(workExperiencePosition.left+workExperienceWidth+lineWidth*2)){
                    route_p0 = 2;
                } else if(startY_p0>(namePosition.top+0.5*nameHeight)) {
                    route_p0 = 3;   
                }else if(startX_p0 > (namePosition.left+nameWidth))
                      route_p0 = 4;
                 else route_p0 = 0;
            
                switch (route_p0) {
                    case 1:// arc
                    animatedArc_p0()
                        break;
                    case 2:// linear line
                    angle_p0 = 225
                    animatedLinearLine()
                        break;
                    case 3://linear line
                    angle_p0 = 270;
                    animatedLinearLine()                    
                        break;
                    case 4://linear line
                    angle_p0 = 180;
                    animatedLinearLine()                    
                        break;
                    case 0:
                    
                        break;
                }
                function animatedArc_p0() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(17, 223, 61)";                                
                    ctx.arc(arcCenterX, arcCenterY, radius, (Math.PI / 180) * ap0, (Math.PI / 180) * (ap0 + anglePerFrame), false)
                    ctx.stroke();
                    startX_p0 = arcCenterX + Math.cos((Math.PI / 180) * (ap0 + anglePerFrame))*radius;
                    startY_p0 = arcCenterY + Math.sin((Math.PI / 180) * (ap0 + anglePerFrame))*radius ;
                    ap0+=anglePerFrame;
                }
                function animatedLinearLine() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(17, 223, 61)";            
                    ctx.moveTo(startX_p0, startY_p0);
                    startX_p0 += PixelLengthPerFrame * Math.cos((Math.PI / 180) *angle_p0);
                    startY_p0 += PixelLengthPerFrame * Math.sin((Math.PI / 180) *angle_p0);
                    ctx.lineTo(startX_p0, startY_p0);
                    ctx.stroke();
    
                }
                
            } 
            // draw p1 path
            {
                if (ap1 < ap1End)  {
                    route_p1 = 1;
                } else if(startY_p1>(personalProfilePosition.top+personalProfileHeight+2*lineWidth)){
                    route_p1 = 2;
                } else if(startX_p1<(personalProfilePosition.left-2*lineWidth)) {
                    route_p1 = 3;
                }else if(startY_p1>(personalProfilePosition.top+0.5*personalProfileIconTagHeight)) {
                    route_p1 = 4;
                 } else route_p1 = 0;
            
                switch (route_p1) {
                    case 1:// arc
                    animatedArc_p1()
                        break;
                    case 2:// linear line
                    angle_p1 = 270
                    animatedLinearLine()
                        break;
                    case 3://linear line
                    angle_p1 = 0
                    animatedLinearLine()                    
                        break;
                    case 4://linear line
                    angle_p1 = 270;
                    animatedLinearLine()                    
                        break;
                    case 0:
                    
                        break;
                }
                function animatedArc_p1() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(247, 26, 26)";                                
                    ctx.arc(arcCenterX, arcCenterY, radius, (Math.PI / 180) * ap1, (Math.PI / 180) * (ap1 + anglePerFrame), false)
                    ctx.stroke();
                    startX_p1 = arcCenterX + Math.cos((Math.PI / 180) * (ap1 + anglePerFrame))*radius;
                    startY_p1 = arcCenterY + Math.sin((Math.PI / 180) * (ap1 + anglePerFrame))*radius ;
                    ap1+=anglePerFrame;
                }
                function animatedLinearLine() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(247, 26, 26)";            
                    ctx.moveTo(startX_p1, startY_p1);
                    startX_p1 += PixelLengthPerFrame * Math.cos((Math.PI / 180) *angle_p1);
                    startY_p1 += PixelLengthPerFrame * Math.sin((Math.PI / 180) *angle_p1);
                    ctx.lineTo(startX_p1, startY_p1);
                    ctx.stroke();
    
                }
                
            }       
            // draw p2 path
            {
                if (ap2 < ap2End)  {
                    route_p2 = 1;
                } else if(startX_p2<(educationDivPosition.left-3*lineWidth)){
                    route_p2 = 2;
                } else if(startY_p2>(educationDivPosition.top+educationIconIconTagHeight+lineWidth*2)) {
                    route_p2 = 3;   
                } else if(startX_p2<(educationDivPosition.left+educationDivTagWidth)) {
                    route_p2 = 4;   
                }else route_p2 = 0;
            
                switch (route_p2) {
                    case 1:// arc
                    animatedArc_p2()
                        break;
                    case 2:// linear line
                    angle_p2 = -45
                    animatedLinearLine()
                        break;
                    case 3://linear line
                    angle_p2 = -90;
                    animatedLinearLine()                    
                        break;
                    case 4://linear line
                    angle_p2 = 0;
                    animatedLinearLine()                    
                        break;
                    case 0:
                    
                        break;
                }
                function animatedArc_p2() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(224, 213, 55)";                                
                    ctx.arc(arcCenterX, arcCenterY, radius, (Math.PI / 180) * ap2, (Math.PI / 180) * (ap2 + anglePerFrame), false)
                    ctx.stroke();
                    startX_p2 = arcCenterX + Math.cos((Math.PI / 180) * (ap2 + anglePerFrame))*radius;
                    startY_p2 = arcCenterY + Math.sin((Math.PI / 180) * (ap2 + anglePerFrame))*radius ;
                    ap2+=anglePerFrame;
                }
                function animatedLinearLine() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(224, 213, 55)";            
                    ctx.moveTo(startX_p2, startY_p2);
                    startX_p2 += PixelLengthPerFrame * Math.cos(Math.PI/180*angle_p2);
                    startY_p2 += PixelLengthPerFrame * Math.sin(Math.PI/180*angle_p2);
                    ctx.lineTo(startX_p2, startY_p2);
                    ctx.stroke();
    
                }
                
            } 
            // draw p3 path
            {
                if (startY_p3 < (arcCenterY+Math.sin((Math.PI / 180) * ap3End)*radius))  {
                    route_p3 = 1;
                } else if(startY_p3 < contactInfoDivPosition.top+contactInfoHeaderHeight*0.8){
                    route_p3 = 2;
                } else if(startX_p3< (contactInfoDivPosition.left-contactInfoDivTagWidth*0.05)) {
                    route_p3 = 3;   
                } else route_p3 = 0;
            
                switch (route_p3) {
                    case 1:// arc
                    animatedArc_p3()
                        break;
                    case 2:// linear line
                    angle_p3 =45
                    animatedLinearLine()
                        break;
                    case 3://linear line
                    angle_p3 = 0;
                    animatedLinearLine()                    
                        break;
                    case 0:
                    
                        break;
                }
                function animatedArc_p3() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(247, 26, 26)";                                
                    ctx.arc(arcCenterX, arcCenterY, radius, (Math.PI / 180) * ap3, (Math.PI / 180) * (ap3 + anglePerFrame), false)
                    ctx.stroke();
                    startX_p3 = arcCenterX + Math.cos((Math.PI / 180) * (ap3 + anglePerFrame))*radius;
                    startY_p3 = arcCenterY + Math.sin((Math.PI / 180) * (ap3 + anglePerFrame))*radius ;
                    ap3+=anglePerFrame;
                }
                function animatedLinearLine() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(247, 26, 26)";            
                    ctx.moveTo(startX_p3, startY_p3);
                    startX_p3 += PixelLengthPerFrame * Math.cos(Math.PI / 180*angle_p3);
                    startY_p3 += PixelLengthPerFrame * Math.sin(Math.PI / 180*angle_p3);
                    ctx.lineTo(startX_p3, startY_p3);
                    ctx.stroke();
    
                }
                
            }  
            // draw p4 path
            {
                if (ap4 < ap4End)  {
                    route_p4 = 1;
                } else if(startX_p4>(workExperiencePosition.left)){
                    route_p4 = 2;
                } else if(startY_p4>(workExperiencePosition.top)) {
                    route_p4 = 3;   
                }else route_p4 = 0;
            
                switch (route_p4) {
                    case 1:// arc
                    animatedArc_p4()
                        break;
                    case 2:// linear line
                    angle_p4 = 180
                    animatedLinearLine()
                        break;
                    case 3://linear line
                    angle_p4 = 270;
                    animatedLinearLine()                    
                        break;
                    case 0:
                    
                        break;
                }
                function animatedArc_p4() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(255, 165, 0)";                                
                    ctx.arc(arcCenterX, arcCenterY, radius, (Math.PI / 180) * ap4, (Math.PI / 180) * (ap4 + anglePerFrame), false)
                    ctx.stroke();
                    startX_p4 = arcCenterX + Math.cos((Math.PI / 180) * (ap4 + anglePerFrame))*radius;
                    startY_p4 = arcCenterY + Math.sin((Math.PI / 180) * (ap4 + anglePerFrame))*radius ;
                    ap4+=anglePerFrame;
                }
                function animatedLinearLine() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(255, 165, 0)";            
                    ctx.moveTo(startX_p4, startY_p4);
                    startX_p4 += PixelLengthPerFrame * Math.cos((Math.PI / 180) *angle_p4);
                    startY_p4 += PixelLengthPerFrame * Math.sin((Math.PI / 180) *angle_p4);
                    ctx.lineTo(startX_p4, startY_p4);
                    ctx.stroke();
    
                }
                
            }
            // draw p5 path
            {
                if (ap5 > ap5End)  {
                    route_p5 = 1;
                } else if(startX_p5>(workExperiencePosition.left+workExperienceWidth+lineWidth*2+(Math.PI/180*10*radius*Math.cos(Math.PI/180*45)))){
                    route_p5 = 2;
                } else if(startY_p5>0) {
                    route_p5 = 3;   
                }else route_p5 = 0;
            
                switch (route_p5) {
                    case 1:// arc
                    animatedArc_p5()
                        break;
                    case 2:// linear line
                    angle_p5 = 225
                    animatedLinearLine()
                        break;
                    case 3://linear line
                    angle_p5 = 270;
                    animatedLinearLine()                    
                        break;
                    case 0:
                    
                        break;
                }
                function animatedArc_p5() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(247, 26, 26)";                                
                    ctx.arc(arcCenterX, arcCenterY, radius, (Math.PI / 180) * ap5, (Math.PI / 180) * (ap5 - anglePerFrame), true)
                    ctx.stroke();
                    startX_p5 = arcCenterX + Math.cos((Math.PI / 180) * (ap5 - anglePerFrame))*radius;
                    startY_p5 = arcCenterY + Math.sin((Math.PI / 180) * (ap5 - anglePerFrame))*radius ;
                    ap5-=anglePerFrame;
                }
                function animatedLinearLine() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(247, 26, 26)";            
                    ctx.moveTo(startX_p5, startY_p5);
                    startX_p5 += PixelLengthPerFrame * Math.cos((Math.PI / 180) *angle_p5);
                    startY_p5 += PixelLengthPerFrame * Math.sin((Math.PI / 180) *angle_p5);
                    ctx.lineTo(startX_p5, startY_p5);
                    ctx.stroke();
    
                }
                
            }
            // draw p6 path
            {
                if (ap6 < ap6End)  {
                    route_p6 = 1;
                } else route_p6 = 0;
            
                switch (route_p6) {
                    case 1:// arc
                    animatedArc_p6()
                        break;
                    
                    case 0:
                    
                        break;
                }
                function animatedArc_p6() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(224, 213, 55)";                                
                    ctx.arc(arcCenterX, arcCenterY, radius, (Math.PI / 180) * ap6, (Math.PI / 180) * (ap6 + anglePerFrame), false)
                    ctx.stroke();
                    startX_p6 = arcCenterX + Math.cos((Math.PI / 180) * (ap6 + anglePerFrame))*radius;
                    startY_p6 = arcCenterY + Math.sin((Math.PI / 180) * (ap6 + anglePerFrame))*radius ;
                    ap6+=anglePerFrame;
                }
                function animatedLinearLine() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(224, 213, 55)";            
                    ctx.moveTo(startX_p6, startY_p6);
                    startX_p6 += PixelLengthPerFrame * Math.cos((Math.PI / 180) *angle_p6);
                    startY_p6 += PixelLengthPerFrame * Math.sin((Math.PI / 180) *angle_p6);
                    ctx.lineTo(startX_p6, startY_p6);
                    ctx.stroke();
    
                }
                
            }
            // draw p7 path
            {
                if (ap7 < ap7End)  {
                    route_p7 = 1;
                } else if(startX_p7>(workExperiencePosition.left+workExperienceWidth+2*lineWidth)){
                    route_p7 = 2;
                } else if(startY_p7<(skillsPosition.top-2*lineWidth)) {
                    route_p7 = 3;   
                } else if(startX_p7>(skillsPosition.left+2*lineWidth)) {
                    route_p7 = 4;   
                } else route_p7 = 0;
            
                switch (route_p7) {
                    case 1:// arc
                    animatedArc_p7()
                        break;
                    case 2:// linear line
                    angle_p7 = 135
                    animatedLinearLine()
                        break;
                    case 3://linear line
                    angle_p7 = 90;
                    animatedLinearLine()                    
                        break;
                    case 4://linear line
                    angle_p7 = 180;
                    animatedLinearLine()                    
                        break;
                    case 0:
                    
                        break;
                }
                function animatedArc_p7() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(147, 35, 237)";                                
                    ctx.arc(arcCenterX, arcCenterY, radius, (Math.PI / 180) * ap7, (Math.PI / 180) * (ap7 + anglePerFrame), false)
                    ctx.stroke();
                    startX_p7 = arcCenterX + Math.cos((Math.PI / 180) * (ap7 + anglePerFrame))*radius;
                    startY_p7 = arcCenterY + Math.sin((Math.PI / 180) * (ap7 + anglePerFrame))*radius ;
                    ap7+=anglePerFrame;
                }
                function animatedLinearLine() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(147, 35, 237)";            
                    ctx.moveTo(startX_p7, startY_p7);
                    startX_p7 += PixelLengthPerFrame * Math.cos((Math.PI / 180) *angle_p7);
                    startY_p7 += PixelLengthPerFrame * Math.sin((Math.PI / 180) *angle_p7);
                    ctx.lineTo(startX_p7, startY_p7);
                    ctx.stroke();
    
                }
                
            }
            // draw p8 path
            {
                if (ap8 < ap8End)  {
                    route_p8 = 1;
                } else if(startY_p8 < (hobbiesPosition.top-2*lineWidth)){
                    route_p8 = 2;
                } else if(startX_p8< (hobbiesPosition.left+hobbiesWidth+2*lineWidth)) {
                    route_p8 = 3;   
                } else if(startY_p8< (hobbiesPosition.top+hobbiesHeight-2*lineWidth)) {
                    route_p8 = 4;   
                } else route_p8 = 0;
            
                switch (route_p8) {
                    case 1:// arc
                    animatedArc_p8()
                        break;
                    case 2:// linear line
                    angle_p8 =45
                    animatedLinearLine()
                        break;
                    case 3://linear line
                    angle_p8 = 0;
                    animatedLinearLine()                    
                        break;
                    case 4://linear line
                    angle_p8 = 90;
                    animatedLinearLine()                    
                        break;
                    case 0:
                    
                        break;
                }
                function animatedArc_p8() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(17, 223, 61)";                                
                    ctx.arc(arcCenterX, arcCenterY, radius, (Math.PI / 180) * ap8, (Math.PI / 180) * (ap8 + anglePerFrame), false)
                    ctx.stroke();
                    startX_p8 = arcCenterX + Math.cos((Math.PI / 180) * (ap8 + anglePerFrame))*radius;
                    startY_p8 = arcCenterY + Math.sin((Math.PI / 180) * (ap8 + anglePerFrame))*radius ;
                    ap8+=anglePerFrame;
                }
                function animatedLinearLine() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(17, 223, 61)";            
                    ctx.moveTo(startX_p8, startY_p8);
                    startX_p8 += PixelLengthPerFrame * Math.cos(Math.PI / 180*angle_p8);
                    startY_p8 += PixelLengthPerFrame * Math.sin(Math.PI / 180*angle_p8);
                    ctx.lineTo(startX_p8, startY_p8);
                    ctx.stroke();
    
                }
                
            }
            // draw p9 path
            {
                if (ap9 < ap9End)  {
                    route_p9 = 1;
                } else if(startY_p9 < (hobbiesPosition.top+hobbiesHeight-2*lineWidth)){
                    route_p9 = 2;
                } else route_p9 = 0;
            
                switch (route_p9) {
                    case 1:// arc
                    animatedArc_p9()
                        break;
                    case 2:// linear line
                    angle_p9 =90
                    animatedLinearLine()
                        break;
                    
                    case 0:
                    
                        break;
                }
                function animatedArc_p9() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(17, 223, 61)";                                
                    ctx.arc(arcCenterX, arcCenterY, radius, (Math.PI / 180) * ap9, (Math.PI / 180) * (ap9 + anglePerFrame), false)
                    ctx.stroke();
                    startX_p9 = arcCenterX + Math.cos((Math.PI / 180) * (ap9 + anglePerFrame))*radius;
                    startY_p9 = arcCenterY + Math.sin((Math.PI / 180) * (ap9 + anglePerFrame))*radius ;
                    ap9+=anglePerFrame;
                }
                function animatedLinearLine() {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(17, 223, 61)";            
                    ctx.moveTo(startX_p9, startY_p9);
                    startX_p9 += PixelLengthPerFrame * Math.cos(Math.PI / 180*angle_p9);
                    startY_p9 += PixelLengthPerFrame * Math.sin(Math.PI / 180*angle_p9);
                    ctx.lineTo(startX_p9, startY_p9);
                    ctx.stroke();
    
                }
                
            }
            // cheacks all paths have ended otherwise, continue requesting more animation frames
            if ((route_p0 != 0) || (route_p1 != 0) || (route_p2 !=0) || (route_p3 != 0) || (route_p4 != 0) || (route_p5 != 0) || (route_p6 != 0) || (route_p7 != 0) || (route_p8 != 0) || (route_p9 != 0)) requestAnimationFrame(drawPersonalProfilePath);
        }
        drawPersonalProfilePath();    
    }

    // toggels on and off the "active" class 
    // Div's with the active class will have opacity=1 in css
    function toggelActiveClass(DivIdNameToBeToggeled) {
        $(".toggelOpacity").removeClass("active");
        $("#"+DivIdNameToBeToggeled).addClass("active");
        
    }

    
     
    
 