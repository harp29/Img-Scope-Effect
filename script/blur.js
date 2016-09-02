$.fn.blur_img = function(){
  
    var imgHolder = $('<div>').css({'height':this.height(),width:this.width(), overflow:'hidden'});
    imgHolder.attr('class','imgHolder');
    imgHolder.appendTo(this.parent());
    
    this.appendTo(imgHolder);
    
    this.css({
        backgroundColor:'red',
        webkitFilter:'blur(4px)',
        margin:'-20px -20px -20px -20px',
        height:this.height() + 40,
        width:this.width() + 40
    });
    
    var scope = $('<div>');
    scope.attr('class','scope').css({
        height:'250px',
        width:'250px',
        borderRadius:'50%',
        overflow:'hidden',
        zIndex:'3',
        position:'absolute',
        top:'50%',
        left:'40%',
        border:'1px solid white'
    });
    
    console.log(this.attr('src'));
    var scopeImg = this.clone();
    
    scopeImg.attr('class','scopeImg').css({
        position:'absolute',
        webkitFilter:'blur(0px)',
        margin:'0px',
        zIndex:'5'
    });
    
    scope.appendTo(imgHolder);
    scopeImg.appendTo(scope);
    
     var cooridinatesX = $('<div>').css({
        position:'absolute',
        top:'5%',
        left:'10%',
        color:'white',
        fontSize:'20px',
        fontStyle:'bold',
        zIndex:'10'
    });
    
    var cooridinatesY = $('<div>').css({
        position:'absolute',
        top:'10%',
        left:'10%',
        color:'white',
        fontSize:'20px',
        fontStyle:'bold',
        zIndex:'10'
    });
    
     cooridinatesX.appendTo(imgHolder);
     cooridinatesY.appendTo(imgHolder);
    
    //move scope
    $(window).mousemove(function(e){
  
        var xAxis = e.pageX,
            yAxis = e.pageY;
        
        scope.css({
            left:xAxis  -scope.width() / 2,
            top:yAxis  -scope.height() /2 - imgHolder.offset().top
        });
        
        cooridinatesX.html('X Axis: ' + xAxis);
        cooridinatesY.html('Y Axis: ' + yAxis);
        console.log(xAxis / 2);
        
        //move scopeImg
        scopeImg.css({
            left:-xAxis - 20 + scope.width() /2,
            top:-yAxis - 20 + scope.height() /2 + imgHolder.offset().top
        });
  
});
    
};

//line up the img in scopeimg 
//move mouse, mouse moves the img inside the scope
