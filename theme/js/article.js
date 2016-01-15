$(document).ready(function () {
    $(function () {
        var i = 0;
        var imagePath, fullName, name, ext, result;
        $(".animate").on("click",
            function () {
                imagePath = $(this).attr("src").split('/');
                fullName = imagePath.pop();
                name = fullName.split('.')[0];
                ext = fullName.split('.')[1];
                result = imagePath.join("/") + "/" + name;
                if (i % 2 === 0) {
                    $(this).attr("src", result + '.jpg');
                } else {
                    $(this).attr("src", result+ '.gif');
                }
                i++;
            }
        );
    });
});