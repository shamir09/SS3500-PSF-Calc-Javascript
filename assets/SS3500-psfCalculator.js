// JavaScript source code
function ResetFields() {   /////// RESET FUNCTION
    var psfResult = "+ / -";
    document.getElementById("PSF_Result_Div").innerHTML = psfResult;
    document.getElementById("M1").style.display = "none";
    document.getElementById("M2").style.display = "none";
    document.getElementById("warningIcon").style.display = "none";
    document.getElementById("PSF_Result_Div").classList.add("PSF_Result_Div");
    error = false;
    }

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {             /////// IF ESC KEY IS PRESSED (TRIGGER RESET BUTTON & SEND FOCUS TO WIDTH INPUT)
        ResetFields();
        document.getElementById("reset_btn").click();
        document.getElementById("widthInput").focus();
    }
    if (evt.keyCode == 13) {             /////// IF ENTER KEY IS PRESSED (TRIGGER CALCULATE BUTTON)
        SS3500.CalculatePSF(SS3500.RetrieveInput());
    }
};


SS3500 = {
  totalwidth: undefined,
  width: undefined,
  height: undefined,
  verticalLites: undefined,
  horizontalLites: undefined,
  widthInput: function(width) {
      if (width == undefined || "") {  width = Number(document.getElementById("widthInput").value/SS3500.verticalLitesInput()); }
      return this.width = width;
   },
  heightInput: function(height) {
      if (height == undefined || "") { height = Number(document.getElementById("heightInput").value); }
      return this.height = height;
   },
  verticalLitesInput: function(verticalLites) {
      if (verticalLites == undefined || "") { verticalLites = Number(document.getElementById("verticalLitesInput").value); }
      return this.verticalLites = verticalLites;
   },
  horizontalLitesInput: function(horizontalLites) {
      if (horizontalLites == undefined || "") { horizontalLites = Number(document.getElementById("horizontalLitesInput").value); }
      return this.horizontalLites = horizontalLites;
   },
   totalwidthInput: function(totalwidth) {
       if (totalwidth == undefined || "") {  totalwidth = Number(document.getElementById("widthInput").value); }
       return this.totalwidth = totalwidth;
    },

  MaxExceeded: function(Max_Number) {
    let printout = "At this height the maximum width is " + Max_Number.toString();
    document.getElementById("PSF_Result_Div").classList.remove("PSF_Result_Div");
    document.getElementById("PSF_Result_Div").classList.add("activeWarning");
    document.getElementById("warningIcon").style.display = "inline";

    document.getElementById("PSF_Result_Div").innerHTML = printout;

   },
TotalDimension: function() {
      return (this.widthInput() + " x " + this.heightInput() + " = " + (this.widthInput() * this.heightInput()/144).toFixed(2) + " Sqf");
  },

RetrieveInput: function (){

  totalwidth = this.widthInput();
  height = this.heightInput();
  verticalLites = this.verticalLitesInput();
  horizontalLites = this.horizontalLitesInput();
  width = (totalwidth/verticalLites);
  return [width, height, verticalLites, horizontalLites, totalwidth];
 },

GlassSize: function() {
    let TotalWidth = this.width;
    let GlassWidth = TotalWidth - 4;
    let GlassHeight = this.height -4;

    if (this.verticalLitesValue > 1) {
        GlassWidth = width - 2.25;
    }
    return (GlassWidth + " x " + GlassHeight + " = " + (GlassWidth * GlassHeight/144).toFixed(2) + " Sqf")
  },

Reinforcement0 : function(width, height){
    var psf_M1;

    var psf_36d4_36d4_M1 = "+36.4 / -36.4";
    var psf_41d4_41d4_M1 = "+41.4 / -41.4";
    var psf_45d2_45d2_M1 = "+45.2 / -45.2";
    var psf_46_46_M1     = "+46.0 / -46.0";
    var psf_47d4_47d4_M1 = "+47.4 / -47.4";
    var psf_51d4_51d4_M1 = "+51.4 / -51.4";
    var psf_53d5_53d5_M1 = "+53.5 / -53.5";
    var psf_54d6_54d6_M1 = "+54.6 / -54.6";
    var psf_58d8_58d8_M1 = "+58.8 / -58.8";
    var psf_62d6_62d6_M1 = "+62.6 / -62.6";
    var psf_63d4_63d4_M1 = "+63.4 / -63.4";
    var psf_64d5_64d5_M1 = "+64.5 / -64.5";
    var psf_67d7_67d7_M1 = "+67.7 / -67.7";
    var psf_74_74_M1     = "+74.0 / -74.0";
    var psf_74d2_74d2_M1 = "+74.2 / -74.2";
    var psf_77d1_77d1_M1 = "+77.1 / -77.1";
    var psf_78d5_78d5_M1 = "+78.5 / -78.5";
    var psf_80_80_M1     = "+80.0 / -80.0";
    var psf_87d5_87d5_M1 = "+87.5 / -87.5";
    var psf_87d9_87d9_M1 = "+87.9 / -87.9";
    var psf_88d3_88d3_M1 = "+88.3 / -88.3";
    var psf_89d4_89d4_M1 = "+89.4 / -89.4";
    var psf_90_90_M1     = "+90.0 / -90.0";

          if (height <= 48)                              // At a Height of 48"
              {
                if (width <= 96) { psf_M1 = psf_90_90_M1; }
                else if (width > 96) { psf_M1 = this.MaxExceeded(96) + '\"' + " Steel Reinf needed to reach 144\"";  }
              }
                  else if (height <= 60)                  // At a Height of 60"
                    {
                        if (width <= 72) { psf_M1 = psf_90_90_M1; }
                        else if (width > 72) { psf_M1 = this.MaxExceeded(72) + '\"' + " Steel Reinf needed to reach 120\""; }
                    }
                          else if (height <= 72)              // At a Height of 72"
                            {
                                if (width <= 60) { psf_M1 = psf_90_90_M1; }
                                else if (width > 60) { psf_M1 = this.MaxExceeded(60) + '\"' + " Steel Reinf needed to reach 96\""; }
                            }
                                else if (height <= 78)              // At a Height of 78"
                                  {
                                      if (width <= 60) { psf_M1 = psf_90_90_M1; }
                                      else if (width > 60) { psf_M1 = this.MaxExceeded(60) + '\"' + " Steel Reinf needed to reach 92\""; }
                                  }
                                      else if (height <= 84)              // At a Height of 84"
                                        {
                                            if (width <= 54) { psf_M1 = psf_90_90_M1; }
                                            else if (width > 54) { psf_M1 = this.MaxExceeded(54) + '\"' + " Steel Reinf needed to reach 84\""; }
                                        }
                                            else if (height <= 90)              // At a Height of 90"
                                              {
                                                  if (width <= 42) { psf_M1 = psf_90_90_M1; }
                                                  else if (width <= 48) { psf_M1 = psf_89d4_89d4_M1; }
                                                  else if (width > 48) { psf_M1 = this.MaxExceeded(48) + '\"' + " Steel Reinf needed to reach 72\""; }
                                              }
                                                  else if (height <= 97.75)              // At a Height of 97.75"
                                                    {
                                                        if (width <= 36) { psf_M1 = psf_90_90_M1; }
                                                        else if (width <= 42) { psf_M1 = psf_87d9_87d9_M1; }
                                                        else if (width <= 48) { psf_M1 = psf_80_80_M1; }
                                                        else if (width > 48) { psf_M1 = this.MaxExceeded(48) + '\"' + " Steel Reinf needed to reach 72\""; }
                                                    }
                                                        else if (height <= 102)              // At a Height of 102"
                                                          {
                                                              if (width <= 30) { psf_M1 = psf_90_90_M1; }
                                                              else if (width <= 36) { psf_M1 = psf_88d3_88d3_M1; }
                                                              else if (width <= 42) { psf_M1 = psf_77d1_77d1_M1; }
                                                              else if (width > 42) { psf_M1 = this.MaxExceeded(42) + '\"' + " Steel Reinf needed to reach 70\"";}
                                                          }
                                                              else if (height <= 108)              // At a Height of 108"
                                                                {
                                                                    if (width <= 24) { psf_M1 = psf_90_90_M1; }
                                                                    else if (width <= 30) { psf_M1 = psf_87d5_87d5_M1; }
                                                                    else if (width <= 36) { psf_M1 = psf_74_74_M1; }
                                                                    else if (width <= 42) { psf_M1 = psf_64d5_64d5_M1; }
                                                                    else if (width > 42) { psf_M1 = this.MaxExceeded(42) + '\"' + " Steel Reinf needed to reach 60\""; }
                                                                }
                                                                    else if (height <= 114)              // At a Height of 114"
                                                                      {
                                                                          if (width <= 24) { psf_M1 = psf_90_90_M1; }
                                                                          else if (width <= 30) { psf_M1 = psf_74d2_74d2_M1; }
                                                                          else if (width <= 36) { psf_M1 = psf_62d6_62d6_M1; }
                                                                          else if (width > 36) { psf_M1 = this.MaxExceeded(36) + '\"' + " Steel Reinf needed to reach 60\""; }
                                                                      }
                                                                      else if (height <= 120)              // At a Height of 120"
                                                                        {
                                                                            if (width <= 24) { psf_M1 = psf_78d5_78d5_M1; }
                                                                            else if (width <= 30) { psf_M1 = psf_63d4_63d4_M1; }
                                                                            else if (width <= 36) { psf_M1 = psf_53d5_53d5_M1; }
                                                                            else if (width > 36) { psf_M1 = this.MaxExceeded(36) + '\"' + " Steel Reinf needed to reach 60\""; }
                                                                        }
                                                                        else if (height <= 126)              // At a Height of 126"
                                                                          {
                                                                              if (width <= 24) { psf_M1 = psf_67d7_67d7_M1; }
                                                                              else if (width <= 30) { psf_M1 = psf_54d6_54d6_M1; }
                                                                              else if (width <= 36) { psf_M1 = psf_46_46_M1; }
                                                                              else if (width > 36) { psf_M1 = this.MaxExceeded(36)+ '\"' + " Steel Reinf needed to reach 54\""; }
                                                                          }
                                                                          else if (height <= 132)              // At a Height of 132"
                                                                            {
                                                                                if (width <= 24) { psf_M1 = psf_58d8_58d8_M1; }
                                                                                else if (width <= 30) { psf_M1 = psf_47d4_47d4_M1; }
                                                                                else if (width > 30) { psf_M1 = this.MaxExceeded(30) + '\"' + " Steel Reinf needed to reach 54\""; }
                                                                            }
                                                                            else if (height <= 138)              // At a Height of 138"
                                                                              {
                                                                                  if (width <= 24) { psf_M1 = psf_51d4_51d4_M1; }
                                                                                  else if (width <= 30) { psf_M1 = psf_41d4_41d4_M1; }
                                                                                  else if (width > 30) { psf_M1 = this.MaxExceeded(30) + '\"' + " Steel Reinf needed to reach 48\""; }
                                                                              }
                                                                              else if (height <= 144)              // At a Height of 144"
                                                                                {
                                                                                    if (width <= 24) { psf_M1 = psf_45d2_45d2_M1; }
                                                                                    else if (width <= 30) { psf_M1 = psf_36d4_36d4_M1; }
                                                                                    else if (width > 30) { psf_M1 = this.MaxExceeded(30) + '\"' + " Steel Reinf needed to reach 48\""; }
                                                                                }
                                                                                      else if (height > 144)
                                                                                      {
                                                                                        psf_M1 = "System has a max height of 144\""; YellowWarningCSS();
                                                                                      }
      return psf_M1;
    },  //Calculate PSF with No Reinforement
Reinforcement2: function(width, height){     // Steel Reinforcement
    // FULL VIEW PANELS
    var psf_M3;

    var psf_61d5_68d3_M3 = "+61.5 / -68.3";
    var psf_69d5_77d2_M3 = "+69.5 / -77.2";
    var psf_72d6_80d6_M3 = "+72.6 / -80.6";
    var psf_70d1_77d9_M3 = "+70.1 / -77.9";
    var psf_79d2_88_M3   = "+79.2 / -88.0";
    var psf_80d3_89d3_M3 = "+80.3 / -89.3";
    var psf_80d5_89d4_M3 = "+80.5 / -89.4";
    var psf_84_93d4_M3  = "+84.0 / -93.4";
    var psf_90_90_M3     = "+90.0 / -90.0";
    var psf_90_100_M3    = "+90.0 / -100.0";
    var psf_90_100d9_M3  = "+90.0 / -100.9";
    var psf_90_101d6_M3  = "+90.0 / -101.6";
    var psf_90_106d3_M3  = "+90.0 / -106.3";
    var psf_90_116d4_M3  = "+90.0 / -116.4";
    var psf_90_116d5_M3  = "+90.0 / -116.5";
    var psf_90_120_M3    = "+90.0 / -120.0";


    if (height <= 48)                              // At a Height of 48"
              {
                if (width <= 120) { psf_M3 = psf_90_120_M3; }
                else if (width <=144) {psf_M3 = psf_90_100_M3}
                else if (width > 144) {this.MaxExceeded(144) ;  }
              }
                  else if (height <= 60)                  // At a Height of 60"
                    {
                        if (width <= 96) { psf_M3 = psf_90_120_M3; }
                        else if (width <= 120) {psf_M3 = psf_90_100_M3}
                        else if (width > 120) { this.this.MaxExceeded(120) + '\"' ;  }
                    }
                          else if (height <= 72)              // At a Height of 72"
                            {
                                if (width <= 72) { psf_M3 = psf_90_120_M3; }
                                else if (width <= 96) { psf_M3 = psf_90_100_M3; }
                                else if (width > 96) {  this.MaxExceeded(96); }
                            }
                                else if (height <= 78)              // At a Height of 78"
                                  {
                                      if (width <= 72) { psf_M3 = psf_90_120_M3; }
                                      else if (width <= 92) { psf_M3 = psf_90_100_M3; }
                                      else if (width > 92) {this.MaxExceeded(92) ; }
                                  }
                                      else if (height <= 84)              // At a Height of 84"
                                        {
                                            if (width <= 60) { psf_M3 = psf_90_120_M3; }
                                            else if (width <= 84) { psf_M3 = psf_90_100_M3; }
                                            else if (width > 84) {this.MaxExceeded(84); }
                                        }
                                            else if (height <= 90)              // At a Height of 90"
                                              {
                                                  if (width <= 60) { psf_M3 = psf_90_120_M3; }
                                                  else if (width <= 72) { psf_M3 = psf_90_100_M3; }
                                                  else if (width > 72) {this.MaxExceeded(72); }
                                              }
                                                  else if (height <= 97.75)              // At a Height of 97.75"
                                                    {
                                                        if (width <= 54) { psf_M3 = psf_90_120_M3; }
                                                        else if (width <= 72) { psf_M3 = psf_90_100_M3; }
                                                        else if (width > 72) {this.MaxExceeded(72); }
                                                    }
                                                        else if (height <= 102)              // At a Height of 102"
                                                          {
                                                              if (width <= 54) { psf_M3 = psf_90_120_M1; }
                                                              else if (width <= 70) { psf_M3 = psf_90_100_M3; }
                                                              else if (width > 70) {this.MaxExceeded(70); }
                                                          }
                                                              else if (height <= 108)              // At a Height of 108"
                                                                {
                                                                    if (width <= 48) { psf_M3 = psf_90_120_M3; }
                                                                    else if (width <= 60) { psf_M3 = psf_90_100_M3; }
                                                                    else if (width > 60) {this.MaxExceeded(60); }
                                                                }
                                                                    else if (height <= 114)              // At a Height of 114"
                                                                      {
                                                                          if (width <= 48) { psf_M3 = psf_90_120_M3; }
                                                                          else if (width <= 60) { psf_M3 = psf_90_100_M3; }
                                                                          else if (width > 60) {this.MaxExceeded(60); }
                                                                      }
                                                                      else if (height <= 120)              // At a Height of 120"
                                                                        {
                                                                            if (width <= 48) { psf_M3 = psf_90_120_M3; }
                                                                            else if (width <= 60) { psf_M3 = psf_90_100_M3; }
                                                                            else if (width > 60) {this.MaxExceeded(60); }
                                                                        }
                                                                        else if (height <= 126)              // At a Height of 126"
                                                                          {
                                                                              if (width <= 36) { psf_M3 = psf_90_120_M3; }
                                                                              else if (width <= 42) { psf_M3 = psf_90_116d5_M3; }
                                                                              else if (width <= 48) { psf_M3 = psf_90_100_M3; }
                                                                              else if (width <= 54) { psf_M3 = psf_84_93d4_M3; }
                                                                              else if (width > 54) {this.MaxExceeded(54); }
                                                                          }
                                                                          else if (height <= 132)              // At a Height of 132"
                                                                            {
                                                                                if (width <= 30) { psf_M3 = psf_90_120_M3; }
                                                                                else if (width <= 36) { psf_M3 = psf_90_116d4_M3; }
                                                                                else if (width <= 42) { psf_M3 = psf_90_100d9_M3; }
                                                                                else if (width <= 48) { psf_M3 = psf_80d5_89d4_M3; }
                                                                                else if (width <= 54) { psf_M3 = psf_72d6_80d6_M3; }
                                                                                else if (width > 54) {this.MaxExceeded(54); }
                                                                            }
                                                                            else if (height <= 138)              // At a Height of 138"
                                                                              {
                                                                                  if (width <= 30) { psf_M3 = psf_90_120_M3; }
                                                                                  else if (width <= 36) { psf_M3 = psf_90_101d6_M3; }
                                                                                  else if (width <= 42) { psf_M3 = psf_79d2_88_M3; }
                                                                                  else if (width <= 48) { psf_M3 = psf_70d1_77d9_M3; }
                                                                                  else if (width > 48) {this.MaxExceeded(48); }
                                                                              }
                                                                              else if (height <= 144)              // At a Height of 144"
                                                                                {
                                                                                    if (width <= 24) { psf_M3 = psf_90_120_M3; }
                                                                                    else if (width <= 30) { psf_M3 = psf_90_106d3_M3; }
                                                                                    else if (width <= 36) { psf_M3 = psf_80d3_89d3_M3; }
                                                                                    else if (width <= 42) { psf_M3 = psf_69d5_77d2_M3; }
                                                                                    else if (width <= 48) { psf_M3 = psf_61d5_68d3_M3; }
                                                                                    else if (width > 48) {this.MaxExceeded(48); }
                                                                                }
                                                                                      else if (height > 144)
                                                                                      {
                                                                                        psf_M3 = "System has a max height of 144\""; YellowWarningCSS();
                                                                                      }
      return psf_M3;
    },

CalculatePSF: function (width, height, verticalLites, horizontalLites) {

    let psf_M1, psf_M2, psf_M3;

    /////////////// PRINT THE RESULT TO THE WINDLOAD CALCULATION ID ELEMENT  //////////////////////
    if(psf_M1 != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M1     }
    if(psf_M2 != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M2;    }
    if(psf_M3 != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M3;    }

    console.log("====================================");
    console.log("> Frame Size: " + this.TotalDimension());
    console.log("> CenterLine Width " + this.width)
    console.log("> Glass Size: " + this.GlassSize());     // Calculate Glass Size
    console.log("> Reinforcement 0: (No Reinf) " + this.Reinforcement0(this.width, this.height));  // Calculate PSF for No Reinforcement
    console.log("> Reinforcement 1: (Steel R ) " + this.Reinforcement2(this.width, this.height));    // Calculate PSF for Steel Reinforcement

    console.log(SS3500);
    }


}; //End of Object SS3500
