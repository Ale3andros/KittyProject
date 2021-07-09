
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.cat_head, .cat_body').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function mouthColor(color,code) {
    $('.mouth, .tummy, .tail').css('background', '#' + color)  //This changes the color of the cat
    $('#mouthcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function eyesColor(color,code) {
    $('.eye').css('background', '#' + color)  //This changes the color of the cat
    $('#eyecode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function decorationMidColorVar(color,code) {
    $('.cat_head-dots').css('background', '#' + color)  //This changes the color of the cat
    $('#mid_pattern_code').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationMid').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function decorationSidesColorVar((color,code) {
    $('.cat_head-dots_first, .cat_head-dots_second').css('background', '#' + color)  //This changes the color of the cat
    $('#side_pattern_code').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationSides').html(code) //This updates the body color part of the DNA that is displayed below the cat
}



//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyeName').html('Chill')
            eyesType1()
            break
        case 3:
            normalEyes()
            $('#eyeName').html('Up')
            eyesType2()
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#patternDecoration').html('Basic')
            normaldecoration()
            break
        case 2:
            normaldecoration()
            $('#patternDecoration').html('Tsahpina')
            decorationType1()
            break
        case 3:
            normaldecoration()
            $('#patternDecoration').html('Gataki')
            decorationType2()
            break
    }
        
}

function animationVariation(num){
    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            $('#animation').html('Basic')
            normalAnimation()
            break
        case 2:
            normaldecoration()
            $('#animation').html('si')
            animationType1()
            break
        case 3:
            normaldecoration()
            $('#animation').html('opa')
            animationType2()
            break
}

function normalAnimation(){
    resetAnimation();
    $("#head").addClass("movingHead");
}
function resetAnimation(){
    $("#head").removeClass("movingHead");
    $("#head").removeClass("movingTail");
}
function animationType1(){
    resetAnimation();
    $("#head").addClass("movingHead");
}
function normalEyes() {
    $('.pupils').find('span').css('border', 'none')
}

function eyesType1(){
     $('.pupils').find('span').css('border-top', '15px solid')
}

function eyesType2(){
    $('.pupils').find('span').css('border-bottom', '15px solid')
}


function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat_head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat_head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat_head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

function decorationType1() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat_head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat_head-dots_first').css({ "transform": "rotate(15deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat_head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
function decorationType2() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat_head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat_head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat_head-dots_second').css({ "transform": "rotate(-15deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
