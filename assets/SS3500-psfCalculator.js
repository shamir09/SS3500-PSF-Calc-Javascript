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
  Width: 48,
  Height: 48,
  RetrieveInputfunction: function(){
          // Declaration of Variables that will be needed to Determine Pressures
          var widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue, MaxExceeded;

          widthInputValue = document.getElementById("widthInput").value;
          heightInputValue = document.getElementById("heightInput").value;
          verticalLitesValue = document.getElementById("vertiLitesInput").value;
          horizontalLitesValue = document.getElementById("horizLitesInput").value;

          return [widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue];
        }
//  Reinforcement0 : function(){
  //        return this.Width + " X " + this.Height;
    //    }
};

function CalculatePSF(widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue) {



  //if (heightInputValue == undefined || heightInputValue == "") {alert("Please enter a height"); return}
var TotalWidth = widthInputValue;
var width = widthInputValue / verticalLitesValue - 1.75;
var height = heightInputValue;
var psf_M1, psf_M2, psf_M3;
var MaxExceeded = "NOA Maximum Width per Panel at this height is ";



function Reinf0() {
    // MAXIMUM VERTICAL MULLION DESIGN PRESSURE PSF  - TABLE 9     PAGE 14 OF 19
    // NO REINFORCEMENT PSF NUMBERS
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

    if (horizontalLitesValue == 1) {
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
      }

  }
function Reinf1() {

  // FULL VIEW PANELS
  var psf_65_65_M2     ="  +65.0 / -65.0";
  var psf_63d3_63d3_M2 ="  +63.3 / -63.3";
  var psf_60d1_60d1_M2 ="  +60.1 / -60.1";
  var psf_58_58_M2     ="  +58.0 / -58.0";
  var psf_59d6_59d6_M2 ="  +59.6 / -59.6";
  var psf_52d7_52d7_M2 ="  +52.7 / -52.7";

  // HORIZONTAL DIVISION  PANELS == SECOND TABLE in Page 4 of 12 -Line breaks indicate a new row
  var psf_59d4_59d4_M2 = " +59.4 / -59.4";
  var psf_57d4_57d4_M2 = " +57.4 / -57.4";
  var psf_55d1_55d1_M2 = " +55.1 / -55.1";
  var psf_57d7_57d7_M2 = " +57.7 / -57.7";
  var psf_50d5_50d5_M2 = " +50.5 / -50.5";

  if (horizontalLitesValue == 1) {
          if (height <= 120)
           {
              if (width <= 58) { psf_M2 = psf_65_65_M2; }
              else if (width > 58) { psf_M2 = MaxExceeded + 58 + '\"'; }
            }
              else if (height <= 126)
                {
                    if (width <= 55)  { psf_M2 = psf_65_65_M2; }
                    else if (width > 55) { psf_M2 = MaxExceeded + 55 + '\"'; }
                  }
                    else if (height <= 132)                      // At Height of 102"  &   Width:  30", 36", 42", 48", 54", 57"                       M1 / J1
                      {                                        // &   Width:  30", 36", 42", 48", 54", 60" 66", 71"    J1 / M3
                        if (width <= 48) { psf_M2 = psf_65_65_M2; }
                        else if (width <= 53) { psf_M2 = psf_63d3_63d3_M2; }
                        else if (width > 53)  { psf_M2 = MaxExceeded + 53 + "\""; }
                      }
                        else if (height <= 138)                      // At Height of 108"   &   Width:  30", 36", 42", 48", 54"                          M1 / J1
                        {                                            // At Height of 108"   &   Width:  30", 36", 42", 48", 54" 60" 66" 67"              J1 / M3
                            if      (width <= 42) { psf_M2 = psf_65_65_M2; }
                            else if (width <= 48) { psf_M2 = psf_60d1_60d1_M2; }
                            else if (width <= 50) { psf_M2 = psf_58_58_M2; }
                            else if (width > 50)  { psf_M2 = MaxExceeded + 50 + "\""; }
                        }
                            else if (height <= 144)                      // At Height of 114"   &   Width:  30", 36", 42", 48", 51"                         M1 / J1
                            {                                            // &   Width:  30", 36", 42", 48", 54" 60" 63"                                     J1 / M3
                                if (width <= 48)     { psf_M2 = psf_65_65_M2; }
                                else if (width <= 42) { psf_M2 = psf_59d6_59d6_M2;}
                                else if (width <= 48) { psf_M2 = psf_52d7_52d7_M2;}
                                else if (width > 48)  { psf_M2 = MaxExceeded + 48 + "\""; }
                            }
                                else if (height > 144)
                                 {
                                      psf_M1 = "The system has a max height of 144\"";
                                 }
  }

}
function Reinf2() {
  // FULL VIEW PANELS
  var psf_100_145_M3    = "  +100.0 / -145.0";
  var psf_100_115_M3    = "  +100.0 / -115.0";
  var psf_100_144_M3    = "  +100.0 / -144.0";
  var psf_100_115_M3    = "  +100.0 / -115.0";
  var psf_100_111d7_M3  = "  +100.0 / -111.7";
  var psf_100_110d5_M3  = "  +100.0 / -110.5";
  var psf_100_144d6_M3  = "  +100.0 / -144.6";
  var psf_100_128d3_M3  = "  +100.0 / -128.3";
  var psf_100_106d4_M3  = "  +100.0 / -106.4";
  var psf_100_102d4_M3  = "  +100.0 / -144.6";
  var psf_100_129d9_M3  = "  +100.0 / -129.9";
  var psf_100_115d1_M3  = "  +100.0 / -115.1";
  var psf_100_103d9_M3  = "  +100.0 / -103.9";
  var psf_95d1_95d1_M3  = "  +95.1 / -95.1";
  var psf_93d6_93d6_M3  = "  +93.6 / -93.6";
  var psf_92d1_92d1_M3  = "  +92.1 / -92.1";
  var psf_100_106d6_M3  = "  +100.0 / -106.6";
  var psf_94d3_94d3_M3  = "  +94.3 / -94.3";
  var psf_86d2_86d2_M3  = "  +86.2 / -86.2";
  var psf_100_112d6_M3  = "  +100.0 / -112.6";
  var psf_112d6_112d6_M3= "  +112.6/ -112.6";
  var psf_97d3_97d3_M3  = "  +97.3 / -97.3";
  var psf_85d9_85d9_M3  = "  +85.9 / -85.9";
  var psf_82d8_82d8_M3  = "  +82.8 / -82.8";
  var psf_100_102d8_M3  = "  +100.0 / -102.8";
  var psf_85d9_85d9_M3  = "  +85.9 / -85.9 ";
  var psf_78d6_78d6_M3  = "  +78.6 / -78.6 ";
   // M3 HORIZONTAL PANELS
  var psf_100_136d5_M3    = "  +100.0 / -136.5";
  var psf_100_134d3_M3    = "  +100.0 / -134.3";
  var psf_100_134d8_M3    = "  +100.0 / -134.8";
  var psf_100_107d8_M3    = "  +100.0 / -107.8";
  var psf_100_138d2_M3    = "  +100.0 / -138.2";
  var psf_100_121_M3      = "  +100.0 / -121.0";
  var psf_100_107d5_M3    = "  +100.0 / -107.5";
  var psf_96d8_96d8_M3    = "  +96.8 / -96.8";
  var psf_100_124d8_M3    = "  +100.0 / -124.8";
  var psf_100_109d2_M3    = "  +100.0 / -109.2";
  var psf_97_97_M3        = "  +97.0 / -97.0";
  var psf_87d3_87d3_M3    = "  +87.3 / -87.3";
  var psf_100_113d2_M3    = "  +100.0 / -113.2";
  var psf_99_99_M3        = "  +99.0 / -99.0";
  var psf_88_88_M3        = "  +88.0 / -88.0";
  var psf_86d4_86d4_M3    = "  +86.4 / -86.4";
  var psf_100_103d1_M3    = "  +100.0 / -103.1";
  var psf_90d2_90d2_M3    = "  +90.2 / -90.2";
  var psf_81d7_81d7_M3    = "  +81d7 / -81d7";
  var psf_100_110d1_M3    = "  +100.0 / -110.1";
  var psf_82d5_82d5_M3    = "  +82.5 / -82.5";
  var psf_79d2_79d2_M3    = "  +79.2 / -79.2";
  var psf_100_100d5_M3    = "  +100.0 / -100.5";
  var psf_86d2_86d2_M3    = "  +86.2 / -86.2";
  var psf_75d4_75d4_M3    = "  +75.4 / -75.4";

  if (horizontalLitesValue == 1)
  {
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
                                                                psf_M1 = "System has a max height of 144\"";
                                                          }
  }

}
function Reinf3() {
      ///PRESSURES FOR FULL VIEW PANELS
      var psf_100_145_M3_CRS    = "  +100.0 / -145.0";
      var psf_100_115_M3_CRS    = "  +100.0 / -115.0";
      var psf_100_138d7_M3_CRS  = "  +100.0 / -138.7";
      var psf_100_107d6_M3_CRS  = "  +100.0 / -107.6";
      var psf_100_105d9_M3_CRS  = "  +100.0 / -105.9";
      var psf_100_101d4_M3_CRS  = "  +100.0 / -101.4";
      var psf_89d7_89d7_M3_CRS  = "  +89.7 / -89.7";
      var psf_86d5_86d5_M3_CRS  = "  +86.5 / -86.5";

      //PRESSURES FOR HORIZONTAL DIVISIONS
      var psf_100_130d3_M3_CRS  = "  +100.0 / -130.3";
      var psf_100_104d2_M3_CRS  = "  +100.0 / -104.2";
      var psf_100_110_M3_CRS    = "  +100.0 / -110.0";
      var psf_100_100_M3_CRS    = "  +100.0 / -100.0";
      var psf_98d2_98d2_M3_CRS  = "  +98.2 / -98.2";
      var psf_100_111d9_M3_CRS  = "  +100.0 / -111.9";
      var psf_97d9_97d9_M3_CRS  = "  +97.9 / -97.9";
      var psf_88d6_88d6_M3_CRS  = "  +88.6 / -88.6";
      var psf_100_114d2_M3_CRS  = "  +100.0 / -114d2";
      var psf_97d9_97d9_M3_CRS  = "  +97.9/ -97.9";
      var psf_85d7_85d7_M3_CRS  = "  +85.7 / -85.7";
      var psf_82d2_82d2_M3_CRS  = "  +82.2 / -82.2";

          if (horizontalLitesValue == 1)
          {
                if (height <= 114)
                {
                    if (width <= 48) { psf_M3_CRS = psf_100_145_M3_CRS; }
                    else if (width <= 63) { psf_M3_CRS = psf_100_115_M3_CRS; }
                    else if (width > 63) { psf_M3_CRS = MaxExceeded + 63 + '\"'; }
                }
                else if (height <= 120)
                {
                    if (width <= 42) { psf_M3_CRS = psf_100_145_M3_CRS; }
                    else if (width <= 48) { psf_M3_CRS = psf_100_138d7_M3_CRS; }
                    else if (width <= 60) { psf_M3_CRS = psf_100_115_M3_CRS; }
                    else if (width > 60) { psf_M3_CRS = MaxExceeded + 60 + '\"'; }
                }
                else if (height <= 126)
                {
                    if (width <= 48) { psf_M3_CRS = psf_100_110_M3_CRS; }
                    else if (width <= 54) { psf_M3_CRS = psf_100_107d6_M3_CRS; }
                    else if (width <= 55) { psf_M3_CRS = psf_100_105d9_M3_CRS; }
                    else if (width > 55) { psf_M3_CRS = MaxExceeded + 55 + '\"'; }
                }
                else if (height <= 132)
                {
                    if (width <= 53) { psf_M3_CRS = psf_100_115_M3_CRS; }
                    else if (width > 53) { psf_M3_CRS = MaxExceeded + 53 + '\"'; }
                }
                else if (height <= 138)
                {
                    if (width <= 36) { psf_M3_CRS = psf_100_115_M3_CRS; }
                    else if (width <= 42) { psf_M3_CRS = psf_100_101d4_M3_CRS; }
                    else if (width <= 48) { psf_M3_CRS = psf_89d7_89d7_M3_CRS; }
                    else if (width <= 50) { psf_M3_CRS = psf_86d5_86d5_M3_CRS; }
                    else if (width > 50) { psf_M3_CRS = MaxExceeded + 50 + '\"'; }
                }




      }
}


/////////////// PRINT THE RESULT TO THE WINDLOAD CALCULATION ID ELEMENT  //////////////////////
    if(psf_M1 != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M1     }
    if(psf_M2 != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M2;    }
    if(psf_M3 != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M3;    }

/*
  if (verticalLitesValue > 1) {
      if(psf_M1 != undefined){                                                             // SHOW OPTION 1   - MULL -NO REINF
        document.getElementById("M1").style.display = "inline";
        }
      if(psf_M2 != undefined){                                                             // SHOW OPTION 2   - MULL -ALUMINUM
        document.getElementById("M2").style.display = "inline";
        }
      if(psf_M3 != undefined){                                                              // SHOW OPTION 3  - MULL -STEEL
        document.getElementById("M3_S").style.display = "inline";
        }

      }
*/


      function GlassSize() {
        var GlassWidth = TotalWidth - 4;
        var GlassHeight = height -4;

        if (verticalLitesValue > 1) {
            GlassWidth = width - 2.25;
        }
        return (GlassWidth + " x " + GlassHeight)
      }

console.log("====================================");
<<<<<<< HEAD
console.log("> Frame Size: " + TotalWidth + " x " + height + " = " + TotalWidth * height / 144 + " SQF");  // Total Square Feet
console.log("> AVRG Width: " + width + " x " + height);
console.log("> Glass Size: " + GlassSize());
console.log("> No Reinforcement: " + Reinf0());  // Total Square Feet
=======
console.log("> Frame Size: " + TotalWidth + " x " + height + " = " + (TotalWidth * height / 144).toFixed(2) + " SQF");  // Total Square Feet
console.log("> Center Line Width: " + width + " x " + height);
console.log("> Glass Size: " + GlassSize());     // Calculate Glass Size
console.log("> No Reinforcement: " + Reinf0());  // Calculate PSF for No Reinforcement
console.log("> Reinforement 1: " + Reinf1());    // Calculate PSF for Steel Reinforcement
>>>>>>> 32d579ba8170983c0795e115971e311192d83786

}
