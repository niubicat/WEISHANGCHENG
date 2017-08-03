$(function () {
    var addressdel = $(".myaddress-checkpic").parents(".myaddress-content").find(".myaddress-del");
    addressdel.each(function () {
        $(this).click(function () {
            if ($(this).parent().find(".myaddress-checkpic").prop("checked") == true) {
                $(this).parent().parent().remove();
            } else {
                return;
            }
        })
    })
})