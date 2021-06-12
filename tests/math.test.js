const vehiclesController = require('../controllers/vehicles.controller') 

describe('Vehicle created sucessfully',()=>{
   
    test("get successfully",()=>{
        const mockRes = {
            "data": [
              {
                "categories": [],
                "_id": "60c211ef7bc5b423b88f8085",
                "name": "Chevy",
                "code": "12377",
                "model": "ushan",
                "type": "sl67777",
                "__v": 0
              },
              {
                "categories": [],
                "_id": "60c212107bc5b423b88f8086",
                "name": "Audi",
                "code": "01935",
                "model": "A8",
                "type": "coupe",
                "__v": 0
              },
              {
                "categories": [],
                "_id": "60c212637bc5b423b88f8088",
                "name": "Allion”",
                "code": "ABC - 4567",
                "model": "Toyota",
                "type": "sedan",
                "__v": 0
              },
              {
                "categories": [],
                "_id": "60c247ab3d01ef22340e29c3",
                "name": "Jaguar",
                "code": "01938",
                "model": "K889",
                "type": "S class",
                "__v": 0
              },
              {
                "categories": [],
                "_id": "60c247ef3d01ef22340e29c4",
                "name": "Benz",
                "code": "01938",
                "model": "gowing special",
                "type": "sls",
                "__v": 0
              }
            ]
          }
        expect(vehiclesController.getVehicals()).toEqual(mockRes)

    })
})