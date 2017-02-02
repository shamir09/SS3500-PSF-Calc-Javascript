// JavaScript source code

function YellowWarningCSS() {
    document.getElementById("PSF_Result_Div").classList.remove("PSF_Result_Div");
    document.getElementById("PSF_Result_Div").classList.add("activeWarning");      // OPTION 1 - JAMB   - ALUM REINF   after 120" Height as per Page 9 of 12.
    document.getElementById("warningIcon").style.display = "inline";
    error = true;
  }

function ResetFields() {
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
        CalculatePSF.apply(this, RetrieveInput());
    }
};


function RetrieveInput(){
  // Declaration of Variables that will be needed to Determine Pressures
  var widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue, MaxExceeded;

  //Divide Total Dimensions by number of Lites
  // TO USE FUNCTION CalculatePSF DELETE Lines 32-35 removing the Declaration of said values from Specified Get Element by Id Values
  widthInputValue = document.getElementById("widthInput").value;
  heightInputValue = document.getElementById("heightInput").value;
  verticalLitesValue = document.getElementById("vertiLitesInput").value;
  horizontalLitesValue = document.getElementById("horizLitesInput").value;

  return [widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue];
}

var SS3500 = {
  width: 36,
  height: 120,
  verticalLitesValue: 1,
  horizontalLitesValue: 1,
  TotalDimension: function() {
      return (this.width + " x " + this.height + " = " + (this.width * this.height/144).toFixed(2) + " Sqf");
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
  RetrieveInputfunction: function(){
          var widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue, MaxExceeded;

          widthInputValue = document.getElementById("widthInput").value;
          heightInputValue = document.getElementById("heightInput").value;
          verticalLitesValue = document.getElementById("vertiLitesInput").value;
          horizontalLitesValue = document.getElementById("horizLitesInput").value;

          return [Width = widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue];
        },
  Reinforcement0 : function(){
    var psf_M1;
    let width = this.width;
    let height = this.height;

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
                else if (width > 96) { psf_M1 = MaxExceeded + 96 + '\"' + " Steel Reinf needed to reach 144\"";  YellowWarningCSS();}
              }
                  else if (height <= 60)                  // At a Height of 60"
                    {
                        if (width <= 72) { psf_M1 = psf_90_90_M1; }
                        else if (width > 72) { psf_M1 = MaxExceeded + 72 + '\"' + " Steel Reinf needed to reach 120\""; YellowWarningCSS();}
                    }
                          else if (height <= 72)              // At a Height of 72"
                            {
                                if (width <= 60) { psf_M1 = psf_90_90_M1; }
                                else if (width > 60) { psf_M1 = MaxExceeded + 60 + '\"' + " Steel Reinf needed to reach 96\""; YellowWarningCSS();}
                            }
                                else if (height <= 78)              // At a Height of 78"
                                  {
                                      if (width <= 60) { psf_M1 = psf_90_90_M1; }
                                      else if (width > 60) { psf_M1 = MaxExceeded + 60 + '\"' + " Steel Reinf needed to reach 92\""; YellowWarningCSS();}
                                  }
                                      else if (height <= 84)              // At a Height of 84"
                                        {
                                            if (width <= 54) { psf_M1 = psf_90_90_M1; }
                                            else if (width > 54) { psf_M1 = MaxExceeded + 54 + '\"' + " Steel Reinf needed to reach 84\""; YellowWarningCSS();}
                                        }
                                            else if (height <= 90)              // At a Height of 90"
                                              {
                                                  if (width <= 42) { psf_M1 = psf_90_90_M1; }
                                                  else if (width <= 48) { psf_M1 = psf_89d4_89d4_M1; }
                                                  else if (width > 48) { psf_M1 = MaxExceeded + 48 + '\"' + " Steel Reinf needed to reach 72\""; YellowWarningCSS();}
                                              }
                                                  else if (height <= 97.75)              // At a Height of 97.75"
                                                    {
                                                        if (width <= 36) { psf_M1 = psf_90_90_M1; }
                                                        else if (width <= 42) { psf_M1 = psf_87d9_87d9_M1; }
                                                        else if (width <= 48) { psf_M1 = psf_80_80_M1; }
                                                        else if (width > 48) { psf_M1 = MaxExceeded + 48 + '\"' + " Steel Reinf needed to reach 72\""; YellowWarningCSS();}
                                                    }
                                                        else if (height <= 102)              // At a Height of 102"
                                                          {
                                                              if (width <= 30) { psf_M1 = psf_90_90_M1; }
                                                              else if (width <= 36) { psf_M1 = psf_88d3_88d3_M1; }
                                                              else if (width <= 42) { psf_M1 = psf_77d1_77d1_M1; }
                                                              else if (width > 42) { psf_M1 = MaxExceeded + 42 + '\"' + " Steel Reinf needed to reach 70\""; YellowWarningCSS();}
                                                          }
                                                              else if (height <= 108)              // At a Height of 108"
                                                                {
                                                                    if (width <= 24) { psf_M1 = psf_90_90_M1; }
                                                                    else if (width <= 30) { psf_M1 = psf_87d5_87d5_M1; }
                                                                    else if (width <= 36) { psf_M1 = psf_74_74_M1; }
                                                                    else if (width <= 42) { psf_M1 = psf_64d5_64d5_M1; }
                                                                    else if (width > 42) { psf_M1 = MaxExceeded + 42 + '\"' + " Steel Reinf needed to reach 60\""; YellowWarningCSS();}
                                                                }
                                                                    else if (height <= 114)              // At a Height of 114"
                                                                      {
                                                                          if (width <= 24) { psf_M1 = psf_90_90_M1; }
                                                                          else if (width <= 30) { psf_M1 = psf_74d2_74d2_M1; }
                                                                          else if (width <= 36) { psf_M1 = psf_62d6_62d6_M1; }
                                                                          else if (width > 36) { psf_M1 = MaxExceeded + 36 + '\"' + " Steel Reinf needed to reach 60\""; YellowWarningCSS();}
                                                                      }
                                                                      else if (height <= 120)              // At a Height of 120"
                                                                        {
                                                                            if (width <= 24) { psf_M1 = psf_78d5_78d5_M1; }
                                                                            else if (width <= 30) { psf_M1 = psf_63d4_63d4_M1; }
                                                                            else if (width <= 36) { psf_M1 = psf_53d5_53d5_M1; }
                                                                            else if (width > 36) { psf_M1 = MaxExceeded + 36 + '\"' + " Steel Reinf needed to reach 60\""; YellowWarningCSS();}
                                                                        }
                                                                        else if (height <= 126)              // At a Height of 126"
                                                                          {
                                                                              if (width <= 24) { psf_M1 = psf_67d7_67d7_M1; }
                                                                              else if (width <= 30) { psf_M1 = psf_54d6_54d6_M1; }
                                                                              else if (width <= 36) { psf_M1 = psf_46_46_M1; }
                                                                              else if (width > 36) { psf_M1 = MaxExceeded + 36 + '\"' + " Steel Reinf needed to reach 54\""; YellowWarningCSS();}
                                                                          }
                                                                          else if (height <= 132)              // At a Height of 132"
                                                                            {
                                                                                if (width <= 24) { psf_M1 = psf_58d8_58d8_M1; }
                                                                                else if (width <= 30) { psf_M1 = psf_47d4_47d4_M1; }
                                                                                else if (width > 30) { psf_M1 = MaxExceeded + 30 + '\"' + " Steel Reinf needed to reach 54\""; YellowWarningCSS();}
                                                                            }
                                                                            else if (height <= 138)              // At a Height of 138"
                                                                              {
                                                                                  if (width <= 24) { psf_M1 = psf_51d4_51d4_M1; }
                                                                                  else if (width <= 30) { psf_M1 = psf_41d4_41d4_M1; }
                                                                                  else if (width > 30) { psf_M1 = MaxExceeded + 30 + '\"' + " Steel Reinf needed to reach 48\""; YellowWarningCSS();}
                                                                              }
                                                                              else if (height <= 144)              // At a Height of 144"
                                                                                {
                                                                                    if (width <= 24) { psf_M1 = psf_45d2_45d2_M1; }
                                                                                    else if (width <= 30) { psf_M1 = psf_36d4_36d4_M1; }
                                                                                    else if (width > 30) { psf_M1 = MaxExceeded + 30 + '\"' + " Steel Reinf needed to reach 48\""; YellowWarningCSS();}
                                                                                }
                                                                                      else if (height > 144)
                                                                                      {
                                                                                        psf_M1 = "System has a max height of 144\""; YellowWarningCSS();
                                                                                      }
      return psf_M1;
    },  //Calculate PSF with No Reinforement
  Reinforcement2: function(){
    // FULL VIEW PANELS
    var psf_M3;
    let width = this.width;
    let height = this.height;

    var psf_61d5_68d3_M3 = "+61.5 / -68.3";
    var psf_69d5_77d2_M3 = "+69.5 / -77.2";
    var psf_72d6_80d6_M3 = "+72.6 / -80.6";
    var psf_70d1_77d9_M3 = "+70.1 / -77.9";
    var psf_79d2_88_M3   = "+79.2 / -88.0";
    var psf_80d3_89d3_M3 = "+80.3 / -89.3";
    var psf_80d5_89d4_M3 = "+80.5 / -89.4";
    var psf_84__93d4_M3  = "+84.0 / -93.4";
    var psf_90_90_M3     = "+90.0 / -90.0";
    var psf_90_100_M3    = "+90.0 / -100.0";
    var psf_90_100d9_M3  = "+90.0 / -100.9";
    var psf_90_101d6_M3  = "+90.0 / -101.6";
    var psf_90_106d3_M3  = "+90.0 / -106.3";
    var psf_90_116d4_M3  = "+90.0 / -116.4";
    var psf_90_116d5_M3  = "+90.0 / -116.5";
    var psf_90_120_M3    = "+90.0 / -120.0";


    if (height <= 96)
            {
                if (width <= 60) { psf_M3 = psf_100_145_M3; }
                else if (width <= 72) { psf_M3 = psf_100_115_M3; }
                else if (width > 72) { psf_M3 = MaxExceeded + 72 + '\"'; }
            }
                else if (height <= 102)
                {
                      if (width <= 54) { psf_M3 = psf_100_145_M3; }
                      else if (width <= 71) { psf_M3 = psf_100_115_M3; }
                      else if (width > 71) { psf_M3 = MaxExceeded + 71 + '\"'; }
                }
                      else if (height <= 108)
                      {
                              if (width <= 42) { psf_M3 = psf_100_145_M3; }
                              else if (width <= 48) { psf_M3 = psf_100_144_M3; }
                              else if (width <= 60) { psf_M3 = psf_100_115_M3; }
                              else if (width <= 66) { psf_M3 = psf_100_111d7_M3; }
                              else if (width <= 67) { psf_M3 = psf_100_110d5_M3; }
                              else if (width > 67) { psf_M3 = MaxExceeded + 67 + '\"'; }
                      }
                              else if (height <= 114)
                              {
                                      if (width <= 36) { psf_M3 = psf_100_145_M3; }
                                      else if (width <= 42) { psf_M3 = psf_100_144d6_M3; }
                                      else if (width <= 48) { psf_M3 = psf_100_128d3_M3; }
                                      else if (width <= 54) { psf_M3 = psf_100_115_M3; }
                                      else if (width <= 60) { psf_M3 = psf_100_106d4_M3; }
                                      else if (width <= 63) { psf_M3 = psf_100_102d4_M3; }
                                      else if (width > 63) { psf_M3 = MaxExceeded + 63 + '\"'; }
                              }
                                      else if (height <= 120)
                                      {
                                              if (width <= 36) { psf_M3 = psf_100_145_M3; }
                                              else if (width <= 42) { psf_M3 = psf_100_129d9_M3; }
                                              else if (width <= 48) { psf_M3 = psf_100_115d1_M3; }
                                              else if (width <= 54) { psf_M3 = psf_100_103d9_M3; }
                                              else if (width <= 60) { psf_M3 = psf_95d1_95d1_M3; }
                                              else if (width > 60) { psf_M3 = MaxExceeded + 60 + '\"'; }
                                      }
                                        else if (height <= 126)
                                        {
                                                if (width <= 42) { psf_M3 = psf_100_115_M3; }
                                                else if (width <= 48) { psf_M3 = psf_100_103d9_M3; }
                                                else if (width <= 54) { psf_M3 = psf_93d6_93d6_M3; }
                                                else if (width <= 55) { psf_M3 = psf_92d1_92d1_M3; }
                                                else if (width > 55) { psf_M3 = MaxExceeded + 55 + '\"'; }
                                        }
                                              else if (height <= 132)
                                              {
                                                      if (width <= 36) { psf_M3 = psf_100_115_M3; }
                                                      else if (width <= 42) { psf_M3 = psf_100_106d6_M3; }
                                                      else if (width <= 48) { psf_M3 = psf_94d3_94d3_M3; }
                                                      else if (width <= 53) { psf_M3 = psf_86d2_86d2_M3; }
                                                      else if (width > 53) { psf_M3 = MaxExceeded + 53 + '\"'; }
                                              }
                                                      else if (height <= 138)
                                                      {
                                                            if (width <= 30) { psf_M3 = psf_100_115_M3; }
                                                            else if (width <= 36) { psf_M3 = psf_100_112d6_M3; }
                                                            else if (width <= 42) { psf_M3 = psf_97d3_97d3_M3; }
                                                            else if (width <= 48) { psf_M3 = psf_85d9_85d9_M3; }
                                                            else if (width <= 50) { psf_M3 = psf_82d8_82d8_M3; }
                                                            else if (width > 50) { psf_M3 = MaxExceeded + 50 + '\"'; }
                                                      }
                                                          else if (height <= 144)
                                                          {
                                                                if (width <= 30) { psf_M3 = psf_100_115_M3; }
                                                                else if (width <= 36) { psf_M3 = psf_100_102d8_M3; }
                                                                else if (width <= 42) { psf_M3 = psf_85d9_85d9_M3; }
                                                                else if (width <= 48) { psf_M3 = psf_78d6_78d6_M3; }
                                                                else if (width > 48) { psf_M3 = MaxExceeded + 48 + '\"'; }
                                                          }

                                                            else if (height > 144)
                                                            {
                                                                  psf_M3 = "System has a max height of 144\"";
                                                            }
    return psf_M3;
  },   //Calculate PSF with Steel Reinforement

}; //End of Object SS3500

function CalculatePSF(widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue) {

  //if (heightInputValue == undefined || heightInputValue == "")
var TotalWidth = widthInputValue;
var width = widthInputValue / verticalLitesValue - 1.75;
var height = heightInputValue;
var psf_M1, psf_M2, psf_M3;
var MaxExceeded = "NOA Maximum Width per Panel at this height is ";


/////////////// PRINT THE RESULT TO THE WINDLOAD CALCULATION ID ELEMENT  //////////////////////
    if(psf_M1 != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M1     }
    if(psf_M2 != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M2;    }
    if(psf_M3 != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M3;    }

console.log("====================================");
console.log("> Frame Size: " + SS3500.TotalDimension());
console.log("> Glass Size: " + SS3500.GlassSize());     // Calculate Glass Size
console.log("> No Reinforcement: " + SS3500.Reinforcement0());  // Calculate PSF for No Reinforcement
console.log("> Reinforement 1: " + SS3500.Reinforcement2());    // Calculate PSF for Steel Reinforcement


}
