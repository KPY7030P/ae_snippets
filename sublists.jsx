app.beginUndoGroup("LIST");

var activeItem = app.project.activeItem,
    level = 0,
    inPoint = [];
    

for (var i = 1; i <= activeItem.layers.length; i++) {
    var _this = activeItem.layer(i);
    
    if (String(_this) === "[object TextLayer]") {
        if (activeItem.layers[i].text.sourceText.value == '◄') {          
            level++;
            inPoint[level] = _this.inPoint;
        }
    
        if (activeItem.layers[i].text.sourceText.value == '►') {
            level--;
        }
    
        if (activeItem.layers[i].text.sourceText.value != '►' && activeItem.layers[i].text.sourceText.value != '◄')  {
            _this.outPoint = inPoint[level];
        }
    }
}

app.endUndoGroup();