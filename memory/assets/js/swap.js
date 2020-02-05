var nb_input = 0;
var score = 0;
var input1 = [];
var input2 = [];
function changeImage(idimg)
{
    if (nb_input == 2)
    {
         if ((input1[1] == input2[1]) && (input1[2] != input2[2]))
        {
            document.getElementById(input1[2]).remove();
            document.getElementById(input2[2]).remove();
            nb_input = 0;
            score++;
            document.getElementById('score').innerHTML = score + " : Points";
        }
        else
        {
            document.getElementById(input1[2]).src = "/assets/img/img-revert.jpg";
            nb_input = 0;
        }
    }
    else if (nb_input == 0)
    {
        input1 = (document.getElementById(idimg).className).split(/[ ,]+/);
        input1.push(idimg);
        document.getElementById(idimg).src = "/assets/img/" + input1[1] + ".jpg";
        document.getElementById(idimg).className = "active " + input1[1];
        nb_input++;
    }
    else
    {
        input2 = (document.getElementById(idimg).className).split(/[ ,]+/);
        input2.push(idimg);
        document.getElementById(idimg).src = "/assets/img/" + input2[1] + ".jpg";
        document.getElementById(idimg).className = "active " + input2[1];
        nb_input++;
        if (nb_input == 2)
            changeImage(idimg);
    }
}
