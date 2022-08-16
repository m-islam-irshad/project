
// for(let i=0; i<=10; i++)
// {
//     if(i===5)
//     {
//         break;
//     }
//     console.log(i);
// }

// for(let i=0; i<=10; i++)
// {
//     if(i===5)
//     {
//         continue;
//     }
//     console.log(i);
// }

row: for (var i=1; i<= 5; i++)
{
    col: for(var j = 1; j<=i; j++)
    {
        console.log(j);
        if (i=== 3 && j=== 1)
        {
            break row;
        }
    }
    console.log(" ");
}