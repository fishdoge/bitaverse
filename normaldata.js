var fs = require('fs');
const { finished } = require('stream');



// "name": "Bita club",
// "description": "The Bita club member"
// "image": "",





for(var a=1;a<=100;a++){

    var fileName = String(a);

    var names = 'Special card #'+a;
    var description = 'The Bita club member';
    var image = 'https://ipfs.io/ipfs/QmUwR1dN2LH6Rj4gWALk98mhxQmScQUu5YkyNRqzxhwqo4';


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
