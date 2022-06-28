$.fn.epicModule = function (options=[]) {   
    var object  =    $(this)[0];
    var rand = Math.floor(100000 + Math.random() * 900000);
    object.__construct = function (options) {
        this.layers     = options['layers'] || []; 
        var area       = options.area || 500;     
        var shape       = options.shape || '4x4';            
        var tabs        = '<div class="tabs_'+rand+'" style="width: '+(area)+'px;"><ul>' 
        var body        = '' 
        $.each(this.layers,function(a,b){ 
            var inner_content = '' 
            if(shape == '4x4') 
            {
                inner_content += '<div style="width:'+(parseInt((area-47)))+'px; position:absolute;  margin:'+(parseInt((area-47)/100*1.5))+'px 0 0 -'+(parseInt((area-47)/100*3))+'px; padding:0; ">' 
                for(i=1; i<17; i++)
                {
                    inner_content += '<div style="width:'+(parseInt((area-47)/4))+'px;  height:'+(parseInt((area-57)/4))+'px; float:left; text-align:center; ">' 
                    inner_content += '<img src="chocolates/01_Classic_Milk_Chocolate_Truffle1.png" height="100%" style="margin:auto; " />'  
                    inner_content += '</div>'     
                }   
                inner_content += '</div>'   
            }
            var bg_image = '';
            if(b['layer_details'])
            {
                bg_image = b['layer_details']['image'] || '';
            }           
            tabs += '<li><a href="#tab'+a+'_'+rand+'">'+b['title']+'</a></li>'; 
            body += '<div id="tab'+a+'_'+rand+'" style="background: url('+bg_image+'); width: '+(area-47)+'px; height: '+(area-47)+'px; background-size: 100% 100%; padding:0; margin:0;">'+inner_content+'</div>'
        });       
        tabs += '</ul>'+body;
        $(object).append(tabs); 
        $(".tabs_"+rand).tabs();   
    }  

    object.callMeDirectly = function () {
        alert(this.message);
    }
    
    object.__construct(options);
}