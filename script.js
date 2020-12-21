var flag = 0;

$(document).ready(function() 
{
    $("#next").click(
    function() 
    {
        console.log("Ready" + flag);
        if(flag == 0)
        {
            document.getElementById("back").style.display = "block";

            $("#text1").toggleClass("nextTransparent", false);
            $("#text1").toggleClass("backTransparent", false);
            $("#text2").toggleClass("nextTransparent", false);
            $("#text2").toggleClass("backTransparent", false);

            $("#text1").toggleClass("backTransparent");
            $("#text2").toggleClass("nextTransparent");
            flag++;
        }
        else if(flag == 1)
        {
            $("#text2").toggleClass("nextTransparent", false);
            $("#text2").toggleClass("backTransparent");
            $("#text3").toggleClass("nextTransparent");
            flag++;
        }
        else if(flag == 2)
        {
            $("#text3").toggleClass("nextTransparent", false);
            $("#text3").toggleClass("backTransparent");
            $("#text4").toggleClass("nextTransparent");
            flag++;
        }
        else if(flag == 3)
        {
            $("#text4").toggleClass("nextTransparent", false);
            $("#text4").toggleClass("backTransparent");
            $("#text5").toggleClass("nextTransparent");
            document.getElementById("next").style.display = "none";
            flag++;
        }
    });
    
    $("#back").click(
        function() 
        {
            console.log("Ready" + flag);
            if(flag == 4)
            {
                document.getElementById("next").style.display = "block";
                $("#text5").toggleClass("nextTransparent", false);
                $("#text5").toggleClass("backTransparent");
                $("#text4").toggleClass("nextTransparent");
                flag--;
            }
            else if(flag == 3)
            {
                $("#text4").toggleClass("nextTransparent", false);
                $("#text4").toggleClass("backTransparent");
                $("#text3").toggleClass("nextTransparent");
                flag--;
            }
            else if(flag == 2)
            {
                $("#text3").toggleClass("nextTransparent", false);
                $("#text3").toggleClass("backTransparent");
                $("#text2").toggleClass("nextTransparent");
                flag--;
            }
            else if(flag == 1)
            {
                $("#text2").toggleClass("nextTransparent", false);
                $("#text2").toggleClass("backTransparent");
                $("#text1").toggleClass("nextTransparent");
                document.getElementById("back").style.display = "none";
                flag--;
            }
        });
});

$(document).on("input",function(ev){
  var ans = $(ev.target).val();
  if(ans == "ШАМИЛЬСНОВЫМГОДОМ" || ans == "Шамильсновымгодом" || ans == "шамильсновымгодом" || ans == "Шамиль, с новым годом" || ans == "Брат, с новым годом" || ans == "Братсновымгодом" || ans == "братсновымгодом" || ans == "БРАТСНОВЫМГОДОМ")
  {
        $("#text5").toggleClass("nextTransparent", false);
        $("#text5").toggleClass("backTransparent");
        document.getElementById("text6").style.zIndex = 2;
        $("#text6").toggleClass("nextTransparent");
        document.getElementById("back").style.display = "none";
  }
});