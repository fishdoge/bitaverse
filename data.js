var fs = require('fs');
const { finished } = require('stream');



// "name": "Bita club",
// "description": "The Bita club member"
// "image": "",





for(var a=1;a<=100;a++){

    var fileName = String(a);

    var names = 'Bita club #'+a;
    var description = 'The Bita club member';
    var image = 'https://fishdoge.github.io/bitaverse/BTS.gif';


    var obj = {
        name:names,
        description:description,
        image:image
        // attributes:Attributes
    };





    fs.writeFile('./metadata/'+fileName,  JSON.stringify(obj), function (err) {
        if (err)
            console.log(err);
        else
            console.log('Write operation complete.');
    });

    //console.log(JSON.stringify(obj));

}
