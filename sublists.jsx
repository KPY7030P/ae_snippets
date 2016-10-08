app.beginUndoGroup("LIST");

var activeItem = app.project.activeItem,
    level = 0,
    inPoint = [];

for (var i = 1; i <= activeItem.layers.length; i++) {
    var _this = activeItem.layer(i);
    
    if (String(_this) === "[object TextLayer]") {
        // Если это маркер конца слоя
        if (activeItem.layers[i].text.sourceText.value == '◄') {          
            level++;
            inPoint[level] = _this.inPoint;
        }
    
        // Если это маркер начала слоя
        if (activeItem.layers[i].text.sourceText.value == '►') {
            level--;
        }
    
        // Если это не маркер времени
        if (activeItem.layers[i].text.sourceText.value != '►' && activeItem.layers[i].text.sourceText.value != '◄')  {
            _this.outPoint = inPoint[level];
        }
    }
}

app.endUndoGroup();