/**
 * Created by MY PC on 5/12/2020.
 */
$('.error').hide();

var factors = [];
var results = [];

function recursion(n,c) {
    console.log(n);
    var res= 0;

    if (c>n){
        console.log(factors,c,'cp');

        return factors;

    }
    else {

        res = parseInt(n) % parseInt(c);
        console.log(res,'rrrrrrr');
        console.log(c,'cccccc');
        if (res==0){
           factors.push(c);

        }
        return recursion(n,c+1);

    }
}

function primality(n) {
    var b = Math.floor(Math.sqrt(n));
    var x = n;
    var i = 2;
    var res;
    var c =0;

    while (x>1 && i<=b){
        c=c+1;
        x = x/i;
        res = x%i;
        if (res==0){
            i = i + 1;
            x = x/i;
            // b=Math.sqrt(x);
            res = x % i;
        }
        i = i + 1;
        b=Math.floor(Math.sqrt(x));
    }

    // if (x>1){
    //     console.log(x);
    // }

    return c;

}


$('#encrypt').click(function () {
    factors =[];

    $('.error').hide();
    console.log(2);
    input = $('#input').val();

    if (input==''){
        $('.error').show();
    }

    else{
        var runner = recursion(parseInt(input),2);
        var checker = primality(parseInt(input));
        if(isNaN(parseInt(input))){

            $('.error').show();
        }
       else {

           if (runner.length==1){
               $('#res_one').text(input+" is a prime number and its factors are "+ input);
               $('#res_two').text(" The first method number of iteration is  "+ (parseInt(input) - 1));
               $('#res_three').text(" The second method number  of  iteration "+ checker);
           }else {
               $('#res_one').text(input+" is a Composite number and its factors are "+ runner.toString());
               $('#res_two').text(" The first method number of iteration is  "+ (parseInt(input) - 1));
               $('#res_three').text(" The second method number  of  iteration "+ checker);
           }
       }
    }
});
