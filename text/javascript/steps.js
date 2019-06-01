var stp1=true;
var stp2=false;
var stp3=false;
var stp4=false;
function showSteps(ele) {
    var step1=document.getElementById("iam1");
    var step2=document.getElementById("iam2");
    var step3=document.getElementById("iam3");
    var step4=document.getElementById("iam4");

    var btntype1=document.getElementById("ShowStep1");
    var btntype2=document.getElementById("ShowStep2");
    var btntype3=document.getElementById("ShowStep3");
    var btntype4=document.getElementById("ShowStep4");


    if(ele=="ShowStep1" && stp1==false){
        stp1=true;
        step1.style.display='block';
        step2.style.display='none';
        step3.style.display='none';
        step4.style.display='none';

        btntype1.style.backgroundColor= '#003366';
        btntype2.style.backgroundColor= '#5bc0de';
        btntype3.style.backgroundColor= '#5bc0de';
        btntype4.style.backgroundColor= '#5bc0de';
    }
    if(ele=="ShowStep2" && stp2==false){
        stp2=true;
        step1.style.display='none';
        step2.style.display='block';
        step3.style.display='none';
        step4.style.display='none';

        btntype2.style.backgroundColor= '#003366';
        btntype1.style.backgroundColor= '#5bc0de';
        btntype3.style.backgroundColor= '#5bc0de';
        btntype4.style.backgroundColor= '#5bc0de';
    }
    if(ele=="ShowStep3" && stp3==false){
        stp3=true;
        step1.style.display='none';
        step2.style.display='none';
        step3.style.display='block';
        step4.style.display='none';

        btntype3.style.backgroundColor= '#003366';
        btntype2.style.backgroundColor= '#5bc0de';
        btntype1.style.backgroundColor= '#5bc0de';
        btntype4.style.backgroundColor= '#5bc0de';
    }
    if(ele=="ShowStep4" && stp4==false){
        stp4=true;
        step1.style.display='none';
        step2.style.display='none';
        step3.style.display='none';
        step4.style.display='block';

        btntype4.style.backgroundColor= '#003366';
        btntype2.style.backgroundColor= '#5bc0de';
        btntype3.style.backgroundColor= '#5bc0de';
        btntype1.style.backgroundColor= '#5bc0de';
    }
}
function next2() {
    document.getElementById("iam3").style.display='block';

}