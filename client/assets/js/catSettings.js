
var colors = Object.values(allColors())

var defaultDNA = {
    "headColor" : 11,
    "mouthColor" : 13,
    "eyesColor" : 11,
    //Cattributes
    "eyesShape" : 7,
    "decorationPattern" : 4,
    "decorationMidcolor" : 18,
    "decorationSidescolor" : 18,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
  headColor(colors[dna.headColor],dna.headColor)
  $('#bodycolor').val(dna.headColor)
  mouthColor(colors[dna.mouthColor],dna.mouthColor)
  $('#mouthcolor').val(dna.mouthColor)
  eyesColor(colors[dna.eyesColor],dna.eyesColor)
  $('#eyescolor').val(dna.eyesColor)
  eyeVariation(dna.eyesShape)
  $('#eyeshape').val(dna.eyesShape)
  decorationVariation(dna.decorationPattern)
  $('#decorationstyle').val(dna.decorationPattern)
  decorationMidColorVar([dna.decorationMidcolor],dna.decorationMidcolor)
  $('#decMidColor').val(dna.decorationMidcolor)
  decorationSidesColorVar([dna.decorationSidescolor],dna.decorationSidescolor)
  $('#decSideColor').val(dna.decorationSidescolor)
  animationVariation(dna.animation)
  $('#animation').val(dna.animation) 
}



// Changing cat colors
$('#bodycolor').change(()=>{
  var colorVal = $('#bodycolor').val()
  headColor(colors[colorVal],colorVal)
})

$('#mouthcolor').change(()=>{
var colorVal = $('#mouthcolor').val()
mouthColor(colors[colorVal],colorVal)
})

$('#eyescolor').change(()=>{
var colorVal = $('#eyescolor').val()
eyesColor(colors[colorVal],colorVal)
})


$('#eyeshape').change(()=>{
var shape = parseInt($('#eyeshape').val())
eyeVariation(shape)
})

$('#decorationstyle').change(()=>{
var decostyle = parseInt($('#decorationstyle').val())
decorationVariation(decostyle)
})

$('#decMidColor').change(()=>{
var colorVal = $('#decMidColor').val()
decorationMidColorVar(colors[colorVal],colorVal)
})

$('#decSideColor').change(()=>{
var colorVal = $('#decSideColor').val()
decorationSidesColorVar(colors[colorVal],colorVal)
})

$('#animation').change(()=>{
var anim = parseInt($('#animation').val())
animationVariation(anim)
})


// Create Random kitty
$( document ).ready(function() {
  $('#randomKitty').on('click', function() {
   var randomBodyColor = Math.floor(Math.random()*89)+10;
   headColor(colors[randomBodyColor],randomBodyColor)
   $('#bodycolor').val(randomBodyColor)
   var randomEyesColor = Math.floor(Math.random()*89)+10;
   eyesColor(colors[randomEyesColor],randomEyesColor)
   $('#eyesColor').val(randomEyesColor)
   var randomMouthColor = Math.floor(Math.random()*89)+10;
   mouthColor(colors[randomMouthColor],randomMouthColor)
   $('#mouthcolor').val(randomMouthColor)
   var randomMidPatternColor = Math.floor(Math.random()*89)+10;
   decorationMidColorVar(colors[randomMidPatternColor ],randomMidPatternColor )
   $('#decMidColor').val(randomMidPatternColor)
   var randomSidesPatternColor = Math.floor(Math.random()*89)+10;
   decorationSidesColorVar(colors[randomSidesPatternColor],randomSidesPatternColor)
   $('#decSideColor').val(randomSidesPatternColor)
   var randomEyeShape = Math.floor(Math.random()*6)+1;
   eyeVariation(randomEyeShape)
   $('#eyeshape').val(randomEyeShape)
   var randomPatternShape = Math.floor(Math.random()*6)+1;
   decorationVariation(randomPatternShape)
   $('#decorationstyle').val(randomPatternShape)
   var randomAnimation = Math.floor(Math.random()*5)+1;
   animationVariation(randomAnimation)
   $('#animation').val(randomAnimation)
  })
 })

// Toggle between Cat colours and Cattribute tabs
$( document ).ready(function() {
  $('#colours').on('click', function(){
    $('#catColors').toggle();
    var currentSituation = $('#catColors').toggle();
    if (currentSituation == 'hide'){
      $('#cattributes').show();
    }
    else {
      $('#cattributes').hide();
      $('#catColors').show();
    }
  })
  $('#Cattributes').on('click', function(){
    $('#cattributes').toggle();
    var currentSituation1 = $('#cattributes').toggle();
    if (currentSituation1 == 'hide'){
      $('#catColors').show();
    }
    else {
      $('#cattributes').show();
      $('#catColors').hide();
    }
  })
})

// Default Kitty button
$( document ).ready(function() {
  $('#DefaultKitty').on('click', function() {
    $('#dnabody').html(defaultDNA.headColor);
    $('#dnamouth').html(defaultDNA.mouthColor);
    $('#dnaeyes').html(defaultDNA.eyesColor);     
    $('#dnashape').html(defaultDNA.eyesShape)
    $('#dnadecoration').html(defaultDNA.decorationPattern)
    $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
    $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
    $('#dnaanimation').html(defaultDNA.animation)
    $('#dnaspecial').html(defaultDNA.lastNum)
  
    renderCat(defaultDNA)
  })
});
