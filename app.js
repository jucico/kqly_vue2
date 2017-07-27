const express = require("express");
const fs = require("fs");
var formidable = require('formidable');

const app = express();

app.use(express.static("www"));

app.post("/list", function (req, res) {
    fs.readFile("./database/listdata.json", function (err, data) {
        var list = JSON.parse(data.toString()).list;
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var filter = JSON.parse(fields.filter);
            var obj = {};
            if(Array.isArray(filter)){
                filter.forEach(function (item) {
                    obj[item.keys] = item['item'];
                });
            }else{
                obj = filter;
            }
            // //-------------------------过滤器-------------------------
            if (obj.hasOwnProperty("date_amount")) {
                var date_amount = obj["date_amount"];
                list = list.filter((item) => {
                    return item.date_amount == date_amount;
                });
            }
            
            if (obj.hasOwnProperty("start")) {
                var start = obj["start"];
                list = list.filter((item) => {
                    return item.start == start;
                });
            }

            if (obj.hasOwnProperty("end")) {
                var end = obj["end"];
                list = list.filter((item) => {
                    return item.end == end;
                });
            }

            if (obj.hasOwnProperty("way")) {
                var way = obj["way"];
                list = list.filter((item) => {
                    return item.way == way;
                });
            }
            
            res.json({"results" : list });
        })
    });
});

app.get("/AllData", function (req, res) {
    fs.readFile("./database/site.json", function (err, data) {
        let dataObj = JSON.parse(data.toString());
        res.json({"mapList": dataObj.mapList[0]});
    });

});

app.listen(3000, () => {
    console.log('3000');
})

