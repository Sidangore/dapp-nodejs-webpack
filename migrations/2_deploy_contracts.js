// const Registration = artifacts.require("Registration");
// const fs = require('fs');
// const path = "/src/Metadata.js";
// module.exports = function(deployer) {
//         deployer.deploy(Registration);
// .then(() => {
//         fs.writeFile(
//             __dirname + path,
//             'const ADDRESS = ' + "'" + Registration.address + "';", (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {}
//             },
//         );
//         fs.appendFile(__dirname + path, '\nconst ABI = ' + JSON.stringify(Registration.abi) + ';', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 fs.appendFile(__dirname + path, '\nmodule.exports = {ADDRESS, ABI};', (err) => {
//                     if (err) {
//                         console.log(err);
//                     }
//                 });
//             }
//         });
//     });
// };

const Registration = artifacts.require('Registration')
const fs = require('fs')
const path = '/Users/siddhantangore/Desktop/UdacityBlockchain/dapp-nodejs-webpack/app/src/Metadata.js';

module.exports = function(deployer) {
    // Use deployer to state migration tasks.
    deployer.deploy(Registration).then(() => {
        fs.writeFile(
            path,
            'const ADDRESS = ' + "'" + Registration.address + "';",
            (err) => {
                if (err) {
                    console.log(err)
                } else {}
            },
        )
        fs.appendFile(
            path,
            '\nconst ABI = ' + JSON.stringify(Registration.abi) + ';',
            (err) => {
                if (err) {
                    console.log(err)
                } else {
                    fs.appendFile(
                        path,
                        '\nmodule.exports = { ADDRESS, ABI };',
                        (err) => {
                            if (err) {
                                console.log(err)
                            }
                        },
                    )
                }
            },
        )
    })
}