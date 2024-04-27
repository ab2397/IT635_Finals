db = db.getSiblingDB("CompanyX")

db.createCollection(
    "emp_addresses", 
    {validator:{$jsonSchema:{
        "description": "An address similar to http://microformats.org/wiki/h-card",
        "type": "object",
        "properties": {
           "post-office-box": {       "type": "string"     },
           "extended-address": {       "type": "string"     },
           "street-address": {       "type": "string"     },
           "locality": {       "type": "string"     },
           "region": {       "type": "string"     },
           "postal-code": {       "type": "string"     },
           "country-name": {       "type": "string"     } 
        },
        "required": [ "locality", "region", "country-name" ],
        "dependencies": {
            "post-office-box": [ "street-address" ],
            "extended-address": [ "street-address" ]
        } 
  }}})

db.createCollection("employees")
db.createCollection("offices")