function delData() {
    let imgIndex = ["1", "2", "3"];
    $(".board .productView .icon").click(function() {
        let index = $(this).parents(".productView").index();
        $(this).parents(".productView").remove();
         var indexId = $(this).parents(".productView").attr("id");
         console.log(indexId)

        var indexNum = imgIndex.indexOf(indexId);
        imgIndex.splice(indexNum, 1); //splice(第index位開始, 取幾個)
        console.log(imgIndex)
    });
}
aaaa()

fetch('fetch.json')
    .then(function(response) {
        return response.json();
    })
    .then(attraction => {
        $("<div/>", {


            "class": "productView mt-4 ",
            "id": `${attraction.attr_Id}`,
        
        
        }).appendTo(".board");
        
        // $("<a/>", {
        //     "href": "https://www.google.com.tw/?hl=zh_TW"
        // }).appendTo(`#${attractions.attr_Id}`);
        
        $("<div/>", {
            "class": "productImg",
        }).appendTo(`#${attraction.attr_Id}`);
        
        $("<div/>", {
        
            "class": "icon",
        
        }).appendTo(`#${attraction.attr_Id} > .productImg`);
        
        // $("<img/>", {
        //     "src": "https://pic.pimg.tw/anrine910070/1603330842-626939543-g.jpg"
        // }).appendTo(`#${attractions.attr_Id}`);
        
        $("<i/>", {
            "class": "fa-solid fa-trash-can"
        }).appendTo(`#${attraction.attr_Id} > .productImg > .icon`);
        
        
        
        $("<div/>", {
        
        
            "class": "product-detail ",
        
        }).appendTo(`#${attraction.attr_Id}`);
        
        $("<h3/>", {
        
        
        }).appendTo(`#${attraction.attr_Id} >.product-detail`);
        
        $("<span/>", {
        
        
            "class": "product-listview__name ",
            "text": `${attraction.attrName}`
        
        }).appendTo(`#${attraction.attr_Id} >.product-detail > h3`);
        
        $("<p/>", {
        
        
            "class": "description ",
            "text": `${attraction.attractionInfo}`
        
        }).appendTo(`#${attraction.attr_Id} >.product-detail `);
        
         $("<div/>", {
             "class": "product-listview__inco_info--flex_item product-place",
         }).appendTo(`#${attraction.attr_Id} >.product-detail `);
        
         $("<i/>", {
             "class": "fa-solid fa-location-dot",
             "text": ` 台灣 ${attraction.attractionCity}`
         }).appendTo(`#${attraction.attr_Id} >.product-detail > .product-place`);

         delData();
      
    });








