// Make the heights of the elements the same
    function uniformHeights(theClass) {
        
        if ($(theClass).length > 0) {
            heights = [];
            $(theClass).each(function() {
                heights.push($(this).height())

            });

            heights = heights.sort(function(a,b){
                return a-b;
            });

            newHeight = heights.pop();

            $(theClass).each(function() {
                $(this).height(newHeight + 'px');
            });

        }
    }
