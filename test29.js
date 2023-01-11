// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

var json = {
    "xml": {
        "variables": {
            "variable": [
                {
                    "_id": "Mlc2t*$D%!GdPizF{G[l",
                    "__text": "a"
                },
                {
                    "_id": "Q{_|)heZZ%WkXJe/HTg-",
                    "__text": "x"
                },
                {
                    "_id": "$(jR^(H=xEJ:F4^_C*%f",
                    "__text": "y"
                },
                {
                    "_id": "7EIjYkXTJ;HBCR,hA-;h",
                    "__text": "z"
                }
            ]
        },
        "block": [
            {
                "field": {
                    "_name": "VAR",
                    "_id": "Mlc2t*$D%!GdPizF{G[l",
                    "__text": "a"
                },
                "value": {
                    "block": {
                        "mutation": {
                            "arg": [
                                {
                                    "_name": "x"
                                },
                                {
                                    "_name": "y"
                                }
                            ],
                            "_name": "abc2"
                        },
                        "value": {
                            "block": {
                                "field": {
                                    "_name": "TEXT"
                                },
                                "_type": "text",
                                "_id": "-SfiGw1n+p7.`|n~O=g^"
                            },
                            "_name": "ARG0"
                        },
                        "_type": "custom_procedures_return",
                        "_id": "Uy_)p8Y%Bo2wHuR!X7Sj"
                    },
                    "_name": "VALUE"
                },
                "_type": "variables_set",
                "_id": "Mra(3pVuTOd9LG[oR]d~",
                "_x": "18",
                "_y": "61"
            },
            {
                "value": {
                    "shadow": {
                        "field": {
                            "_name": "TEXT",
                            "__text": "abc"
                        },
                        "_type": "text",
                        "_id": "NM@8*n4Y(v8YF~RFlf{W"
                    },
                    "block": {
                        "mutation": {
                            "_items": "2"
                        },
                        "value": {
                            "block": {
                                "mutation": {
                                    "arg": [
                                        {
                                            "_name": "x"
                                        },
                                        {
                                            "_name": "y"
                                        },
                                        {
                                            "_name": "z"
                                        }
                                    ],
                                    "_name": "abc2"
                                },
                                "value": {
                                    "block": {
                                        "mutation": {
                                            "_items": "2"
                                        },
                                        "value": {
                                            "block": {
                                                "mutation": {
                                                    "arg": [
                                                        {
                                                            "_name": "x"
                                                        },
                                                        {
                                                            "_name": "y"
                                                        },
                                                        {
                                                            "_name": "z"
                                                        },
                                                        {
                                                            "_name": "a"
                                                        }
                                                    ],
                                                    "_name": "abc2"
                                                },
                                                "value": {
                                                    "block": {
                                                        "field": {
                                                            "_name": "TEXT"
                                                        },
                                                        "_type": "text",
                                                        "_id": "/S#w^wQp/MKl1NBtgPSS"
                                                    },
                                                    "_name": "ARG0"
                                                },
                                                "_type": "custom_procedures_return",
                                                "_id": "vYEkp3x{cJx#JxA2f?xT"
                                            },
                                            "_name": "ADD0"
                                        },
                                        "_type": "text_join",
                                        "_id": "h/NE{[/YOs[bvNZ9X/.g"
                                    },
                                    "_name": "ARG0"
                                },
                                "_type": "custom_procedures_return",
                                "_id": "bJ{c]F!~k:p{?hGrhI-s"
                            },
                            "_name": "ADD1"
                        },
                        "_type": "text_join",
                        "_id": "6~.H:Kz5Vo3^h~B;Q!8P"
                    },
                    "_name": "TEXT"
                },
                "_type": "text_print",
                "_id": "A+(bJ|W4p@nMmpBMr{j*",
                "_x": "-16",
                "_y": "176"
            },
            {
                "mutation": {
                    "arg": [
                        {
                            "_name": "x"
                        },
                        {
                            "_name": "y"
                        },
                        {
                            "_name": "z"
                        },
                        {
                            "_name": "a"
                        }
                    ],
                    "_name": "abc2"
                },
                "value": {
                    "block": {
                        "field": {
                            "_name": "TEXT"
                        },
                        "_type": "text",
                        "_id": "D2$C=.Bf]R}MY4pfCPXz"
                    },
                    "_name": "ARG0"
                },
                "_type": "custom_procedures_return",
                "_id": "-L``8ANFt97JxNdww,RT",
                "_x": "11",
                "_y": "459"
            }
        ],
        "_xmlns": "https://developers.google.com/blockly/xml"
    }
}

// console.log(json['xml'].block[0])

function modifyData(m_data){
  if(m_data['_type'] == "custom_procedures_return"){
    

  }
}

var function_name = "";
var function_vars = ["x","y","z"];
var data = json['xml'].block;
for(var i=0; i< data.length; i++){
  let c_data = data[i];
  console.log(c_data)
}